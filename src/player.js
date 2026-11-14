// ============================================================
//  player.js — 玩家实体：GoldSrc 移动物理 / 视角 / 命中盒 / 武器持有
// ============================================================
import * as THREE from 'three';
import { PHYS, HITGROUP, WEAPONS, RULES, TEAM_COLOR } from './config.js';
import { traceBullet, applyDamage, makeWeaponInstance } from './weapons.js';
import { fx, Grenade } from './fx.js';
import * as Sfx from './audio.js';

const D2R = Math.PI / 180;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export class Player {
  constructor(game, { name, team, isBot = false, id = 0 }) {
    this.game = game;
    this.id = id;
    this.name = name;
    this.team = team;
    this.isBot = isBot;

    this.pos = new THREE.Vector3(0, 0, 0);
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = 0;
    this.punchPitch = 0;
    this.punchYaw = 0;
    this.eyeHeight = PHYS.eyeStand;
    this.onGround = true;
    this.ducking = false;
    this.duckAmount = 0;

    this.health = 100;
    this.armor = 0;
    this.helmet = false;
    this.money = RULES.startMoney;
    this.alive = false;
    this.kills = 0;
    this.deaths = 0;
    this.damageDealt = 0;
    this.assists = 0;

    // 库存
    this.slots = { primary: null, secondary: null, melee: makeWeaponInstance('knife') };
    this.grenades = { he: 0, flash: 0, smoke: 0 };
    this.grenadeSel = null;
    this.hasBomb = false;
    this.hasKit = false;

    this.curSlot = 'secondary';
    this.curGrenade = 'he';
    this.zoom = 0;
    this.deployTime = 0;
    this.reloadEnd = 0;
    this.nextFire = 0;
    this.shotCount = 0;
    this.lastShotTime = -10;
    this.fireHeld = false;
    this.triggerQueued = false;

    this.footTimer = 0;
    this.bobTime = 0;
    this.lastDamageTime = -10;
    this.attacker = null;
    this.plantProgress = 0;
    this.defuseProgress = 0;
    this.spawnProtect = 0;
    this.flashAmount = 0;

    this.mesh = null;
    this.viewModel = null;
    this.muzzleLight = null;
  }

  // ---------- 生成 / 重生 ----------
  spawnAt(pt) {
    this.pos.set(pt.x, 0, pt.z);
    this.vel.set(0, 0, 0);
    this.yaw = pt.yaw;
    this.pitch = 0;
    this.punchPitch = 0;
    this.punchYaw = 0;
    this.alive = true;
    this.health = 100;
    this.onGround = true;
    this.ducking = false;
    this.duckAmount = 0;
    this.zoom = 0;
    this.shotCount = 0;
    this.plantProgress = 0;
    this.defuseProgress = 0;
    this.flashAmount = 0;
    this.hasBomb = false;
    this.curSlot = this.slots.primary ? 'primary' : this.slots.secondary ? 'secondary' : 'melee';
    if (this.mesh) this.mesh.visible = true;
    if (this.viewModel) this.viewModel.visible = !this.isBot;
    this.syncMesh();
  }

  resetInventory() {
    this.slots.primary = null;
    this.slots.secondary = null;
    this.grenades = { he: 0, flash: 0, smoke: 0 };
    this.hasKit = false;
    this.hasBomb = false;
    this.armor = 0;
    this.helmet = false;
    this.grenadeSel = null;
  }

  giveWeapon(id) {
    const def = WEAPONS[id];
    if (!def) return;
    const inst = makeWeaponInstance(id);
    if (def.slot === 1) { this.slots.primary = inst; this.curSlot = 'primary'; }
    else if (def.slot === 2) { this.slots.secondary = inst; this.curSlot = 'secondary'; }
    this.deployTime = 0.4;
    this.reloadEnd = 0;
    this.zoom = 0;
  }

  get weapon() {
    if (this.curSlot === 'primary') return this.slots.primary;
    if (this.curSlot === 'secondary') return this.slots.secondary;
    if (this.curSlot === 'melee') return this.slots.melee;
    return null;
  }

  get weaponDef() {
    const w = this.weapon;
    return w ? WEAPONS[w.id] : null;
  }

  maxSpeedNow() {
    const def = this.weaponDef;
    let s = def ? def.speed : 250;
    if (this.curSlot === 'grenade') s = 250;
    if (this.hasBomb && this.curSlot !== 'melee') s *= 0.98;
    return s;
  }

  eyeY() {
    return this.pos.y + this.eyeHeight;
  }

  // ---------- 每帧 ----------
  update(dt, cmd) {
    // 视角平滑（蹲伏时眼高插值）
    const targetEye = this.ducking ? PHYS.eyeDuck : PHYS.eyeStand;
    this.eyeHeight += (targetEye - this.eyeHeight) * Math.min(1, dt * 12);
    this.duckAmount += ((this.ducking ? 1 : 0) - this.duckAmount) * Math.min(1, dt * 14);

    // 闪光恢复
    if (this.flashAmount > 0) this.flashAmount = Math.max(0, this.flashAmount - dt * 0.42);

    if (!this.alive) {
      this.syncMesh();
      return;
    }

    this.move(dt, cmd);
    this.updateWeapon(dt);

    // 后坐力回正（CS 手感：松开后准心慢慢回位）
    const rec = Math.exp(-dt * (this.game.time - this.lastShotTime > 0.25 ? 7.5 : 2.4));
    this.punchPitch *= rec;
    this.punchYaw *= rec;
    if (Math.abs(this.punchPitch) < 0.01) this.punchPitch = 0;
    if (Math.abs(this.punchYaw) < 0.01) this.punchYaw = 0;

    // 脚步声
    const hspeed = Math.hypot(this.vel.x, this.vel.z);
    if (this.onGround && hspeed > 90) {
      this.footTimer -= dt * (hspeed / 250);
      if (this.footTimer <= 0) {
        this.footTimer = 0.42;
        Sfx.playFootstep(this.pos, this.game.listenerPos(), true);
      }
    } else {
      this.footTimer = Math.min(this.footTimer, 0.2);
    }

    if (this.pos.y < -400) {
      this.game.onPlayerFell(this);
    }

    this.syncMesh();
  }

  // ---------- GoldSrc 运动 ----------
  move(dt, cmd) {
    const fwd = cmd.forward || 0;
    const side = cmd.side || 0;
    this.ducking = !!cmd.duck;

    // 期望方向（水平）
    const sinY = Math.sin(this.yaw), cosY = Math.cos(this.yaw);
    let wishX = -sinY * fwd + cosY * side;
    let wishZ = -cosY * fwd - sinY * side;
    const wl = Math.hypot(wishX, wishZ);
    if (wl > 0.001) { wishX /= wl; wishZ /= wl; }

    let maxSpeed = this.maxSpeedNow();
    if (this.ducking) maxSpeed *= PHYS.duckMul;
    if (cmd.walk) maxSpeed *= PHYS.walkMul;
    if (!this.onGround && this.zoom > 0) maxSpeed = Math.min(maxSpeed, 100);
    const wishSpeed = wl > 0.001 ? maxSpeed : 0;

    // 地面摩擦
    if (this.onGround) {
      const speed = Math.hypot(this.vel.x, this.vel.z);
      if (speed > 0.1) {
        const control = Math.max(speed, PHYS.stopSpeed);
        let drop = control * PHYS.friction * dt;
        const newSpeed = Math.max(0, speed - drop);
        const scale = newSpeed / speed;
        this.vel.x *= scale;
        this.vel.z *= scale;
      }
    }

    // 加速：地面 / 空中
    if (wishSpeed > 0) {
      if (this.onGround) {
        accelerate(this, wishX, wishZ, wishSpeed, PHYS.accel, dt);
      } else {
        // 空中加速把 wishspeed 夹到 30 —— 连跳与空中转向的根源
        accelerate(this, wishX, wishZ, Math.min(wishSpeed, PHYS.airWishSpeed), PHYS.airAccel, dt);
      }
    }

    // 跳跃（必须重新按下：CS1.6 不自动连跳）
    if (cmd.jump && this.onGround && !this.jumpHeld) {
      this.vel.y = PHYS.jumpVel;
      this.onGround = false;
      this.game.stats.jumps++;
    }
    this.jumpHeld = !!cmd.jump;

    // 重力
    if (!this.onGround) {
      this.vel.y -= PHYS.gravity * dt;
      if (this.vel.y < -2000) this.vel.y = -2000;
    }

    this.integrate(dt);

    // 落地
    if (this.pos.y <= 0 && this.onGround === false) {
      if (this.vel.y < -260) {
        // 高处落地：CS1.6 无落地伤害（除非摔落），这里仅做音效
        Sfx.playFootstep(this.pos, this.game.listenerPos(), true);
      }
      this.pos.y = 0;
      this.vel.y = 0;
      this.onGround = true;
    }
    if (this.onGround && this.pos.y > 0) this.pos.y = Math.max(0, this.pos.y);
  }

  integrate(dt) {
    const map = this.game.map;
    const r = PHYS.radius;
    const height = PHYS.standHeight;

    // X 轴
    this.pos.x += this.vel.x * dt;
    this.resolveAxis('x', r, height);

    // Z 轴
    this.pos.z += this.vel.z * dt;
    this.resolveAxis('z', r, height);

    // 地面吸附
    if (this.onGround) {
      if (map.isFloorAt(this.pos.x, this.pos.z)) this.pos.y = 0;
      else this.onGround = false;
    }

    // 竖直
    this.pos.y += this.vel.y * dt;
    if (this.pos.y < 0) {
      if (map.isFloorAt(this.pos.x, this.pos.z)) {
        this.pos.y = 0;
        this.vel.y = 0;
        this.onGround = true;
      }
    }

    // 防止走出地面（地图边界兜底）
    if (!map.isFloorAt(this.pos.x, this.pos.z)) {
      // 尝试退回
      const back = this.findNearestFloor(this.pos.x, this.pos.z);
      if (back) {
        this.pos.x = back.x; this.pos.z = back.z;
        this.vel.x = 0; this.vel.z = 0;
      }
    }
  }

  findNearestFloor(x, z) {
    const map = this.game.map;
    const { cx, cz } = map.worldToTile(x, z);
    for (let radius = 1; radius <= 4; radius++) {
      for (let r = -radius; r <= radius; r++) {
        for (let c = -radius; c <= radius; c++) {
          if (!map.isFloorTile(cx + c, cz + r)) continue;
          return map.tileToWorld(cx + c, cz + r);
        }
      }
    }
    return null;
  }

  resolveAxis(axis, r, height) {
    const cols = this.game.map.colliders;
    const px = this.pos.x, pz = this.pos.z;
    const py = this.pos.y;
    const h = this.ducking ? PHYS.duckHeight : height;
    for (let i = 0; i < cols.length; i++) {
      const b = cols[i];
      if (b.y0 > py + h || b.y1 < py + 2) continue;
      if (px + r <= b.x0 || px - r >= b.x1) continue;
      if (pz + r <= b.z0 || pz - r >= b.z1) continue;
      // 重叠 → 沿轴推出
      if (axis === 'x') {
        if (this.vel.x > 0) this.pos.x = b.x0 - r - 0.01;
        else if (this.vel.x < 0) this.pos.x = b.x1 + r + 0.01;
        this.vel.x = 0;
      } else {
        if (this.vel.z > 0) this.pos.z = b.z0 - r - 0.01;
        else if (this.vel.z < 0) this.pos.z = b.z1 + r + 0.01;
        this.vel.z = 0;
      }
      return;
    }
  }

  // ---------- 武器 ----------
  currentAmmo() {
    const w = this.weapon;
    return w ? w.ammo : 0;
  }

  reserveAmmo() {
    const w = this.weapon;
    return w ? w.reserve : 0;
  }

  updateWeapon(dt) {
    if (this.deployTime > 0) this.deployTime = Math.max(0, this.deployTime - dt);
    if (this.reloadEnd > 0 && this.game.time >= this.reloadEnd) {
      this.finishReload();
    }
    if (this.game.time - this.lastShotTime > 0.45) this.shotCount = 0;

    const w = this.weapon;
    if (!w) return;
    const def = WEAPONS[w.id];

    // 自动武器持续开火
    if (this.fireHeld && def && def.auto && this.curSlot !== 'grenade') {
      if (this.game.time >= this.nextFire) this.tryFire();
    }
  }

  canFire() {
    if (!this.alive || this.game.round.phase === 'freeze' || this.game.round.phase === 'over') return false;
    if (this.deployTime > 0) return false;
    if (this.reloadEnd > 0) return false;
    if (this.game.time < this.nextFire) return false;
    return true;
  }

  tryFire() {
    if (!this.canFire()) return;
    if (this.curSlot === 'grenade') { this.throwGrenade(); return; }
    const w = this.weapon;
    if (!w) return;
    const def = WEAPONS[w.id];

    if (def.cls === 'melee') { this.knifeAttack(); return; }

    if (w.ammo <= 0) {
      if (this.game.settings.autoReload && w.reserve > 0) this.reload();
      else Sfx.playUIClick();
      return;
    }

    w.ammo--;
    this.nextFire = this.game.time + 60 / def.rpm;
    this.lastShotTime = this.game.time;
    this.shotCount++;

    // 后坐：视角上抬 + 水平摆动（近似 CS 弹道）
    const pattern = recoilPattern(def, this.shotCount);
    this.punchPitch += def.kick * (0.85 + Math.random() * 0.3);
    this.punchYaw += pattern;

    // 弹道
    const origin = new THREE.Vector3(this.pos.x, this.eyeY(), this.pos.z);
    const dir = this.aimDir();
    const spread = this.computeSpread(def);
    const d = applySpread(dir, spread);
    this.game.lastShotDir = d;

    traceBullet(this.game, this, origin, d, def);

    // 枪口火焰 / 音效 / 抛壳
    fx.muzzle(this, def);
    Sfx.playShot(def.sound, this.pos, this.game.listenerPos());

    // 狙击开镜后自动退镜
    if (def.scope && this.zoom > 0) this.zoom = 0;

    if (w.ammo === 0 && w.reserve > 0 && this.game.settings.autoReload) {
      this.reload();
    }
  }

  computeSpread(def) {
    const speed = Math.hypot(this.vel.x, this.vel.z);
    let s = def.spread;
    s += (speed / 250) * def.moveSpread;
    if (!this.onGround) s += def.moveSpread * 0.9;
    if (this.ducking) s *= 0.62;
    if (this.zoom > 0) s *= 0.05;
    s += Math.min(this.shotCount, 12) * def.kick * 0.13;
    return s * D2R;
  }

  aimDir() {
    const yaw = this.yaw + this.punchYaw * D2R;
    const pitch = clamp(this.pitch + this.punchPitch * D2R, -89 * D2R, 89 * D2R);
    const cp = Math.cos(pitch);
    return new THREE.Vector3(-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp);
  }

  knifeAttack() {
    const def = WEAPONS.knife;
    this.nextFire = this.game.time + 60 / def.rpm;
    this.lastShotTime = this.game.time;
    Sfx.playShot('knife', this.pos, this.game.listenerPos());
    const origin = new THREE.Vector3(this.pos.x, this.eyeY(), this.pos.z);
    const dir = this.aimDir();
    const hit = this.game.tracePlayers(origin, dir, def.range, this);
    if (hit) {
      const dmg = def.dmg;
      applyDamage(this.game, hit.player, this, dmg, 'chest', def);
      fx.blood(hit.point, 6);
    }
    fx.knifeSwing(this);
  }

  reload() {
    const w = this.weapon;
    if (!w) return;
    const def = WEAPONS[w.id];
    if (!def || def.cls === 'melee' || this.reloadEnd > 0) return;
    if (w.ammo >= def.mag || w.reserve <= 0) return;
    this.reloadEnd = this.game.time + def.reload;
    this.zoom = 0;
    Sfx.playReload();
  }

  finishReload() {
    this.reloadEnd = 0;
    const w = this.weapon;
    if (!w) return;
    const def = WEAPONS[w.id];
    const need = def.mag - w.ammo;
    const take = Math.min(need, w.reserve);
    w.ammo += take;
    w.reserve -= take;
  }

  switchSlot(slot) {
    if (!this.alive) return;
    if (slot === 'primary' && !this.slots.primary) return;
    if (slot === 'secondary' && !this.slots.secondary) return;
    if (slot === 'grenade') {
      const avail = ['he', 'flash', 'smoke'].filter((k) => this.grenades[k] > 0);
      if (!avail.length) return;
      const idx = avail.indexOf(this.grenadeSel);
      this.grenadeSel = avail[(idx + 1) % avail.length];
      this.curSlot = 'grenade';
      this.deployTime = 0.35;
      this.zoom = 0;
      return;
    }
    if (this.curSlot === slot) return;
    this.curSlot = slot;
    this.deployTime = 0.4;
    this.reloadEnd = 0;
    this.zoom = 0;
  }

  toggleZoom() {
    const def = this.weaponDef;
    if (!def || !def.scope) return;
    this.zoom = (this.zoom + 1) % 3;
  }

  throwGrenade() {
    const kind = this.grenadeSel;
    if (!kind || this.grenades[kind] <= 0) return;
    this.grenades[kind]--;
    this.nextFire = this.game.time + 0.9;
    this.deployTime = 0.5;
    const origin = new THREE.Vector3(this.pos.x, this.eyeY() - 4, this.pos.z);
    const dir = this.aimDir();
    this.game.grenades.push(new Grenade(this.game, this, kind, origin, dir));
    Sfx.playUIClick();
    if (this.grenades[kind] === 0) {
      this.grenadeSel = null;
      this.curSlot = this.slots.primary ? 'primary' : this.slots.secondary ? 'secondary' : 'melee';
    }
  }

  pickUp(weaponId) {
    const def = WEAPONS[weaponId];
    if (!def) return;
    if (def.slot === 1) this.slots.primary = makeWeaponInstance(weaponId);
    else this.slots.secondary = makeWeaponInstance(weaponId);
    this.curSlot = def.slot === 1 ? 'primary' : 'secondary';
    this.deployTime = 0.4;
    Sfx.playPickup();
  }

  // ---------- 伤害 ----------
  takeDamage(dmg, attacker, group, weaponId) {
    if (!this.alive) return 0;
    let d = dmg;
    if (this.armor > 0 && group !== 'leg') {
      const pen = 0.72;
      d *= pen;
      this.armor = Math.max(0, this.armor - d * 0.55);
    }
    if (group === 'head' && this.helmet) d *= 0.72;
    d = Math.round(d);
    this.health -= d;
    this.lastDamageTime = this.game.time;
    this.attacker = attacker;
    if (attacker && attacker !== this) {
      attacker.damageDealt += Math.min(d, this.health + d);
    }
    if (this.health <= 0) {
      this.health = 0;
      this.alive = false;
      this.game.onPlayerKilled(this, attacker, weaponId, group === 'head');
    }
    return d;
  }

  // ---------- 模型 ----------
  buildMesh(scene) {
    const g = new THREE.Group();
    const teamColor = TEAM_COLOR[this.team];
    const skin = new THREE.MeshLambertMaterial({ color: this.team === 'T' ? 0xa8835a : 0xc79e78 });
    const cloth = new THREE.MeshLambertMaterial({ color: teamColor });
    const dark = new THREE.MeshLambertMaterial({ color: 0x2a2a2a });
    const vest = new THREE.MeshLambertMaterial({ color: this.team === 'T' ? 0x5c4a30 : 0x35414f });

    const torso = new THREE.Mesh(new THREE.BoxGeometry(26, 34, 15), vest);
    torso.position.y = 44;
    g.add(torso);

    const pack = new THREE.Mesh(new THREE.BoxGeometry(18, 18, 8), new THREE.MeshLambertMaterial({ color: 0x4a4234 }));
    pack.position.set(0, 46, 10);
    g.add(pack);

    const collar = new THREE.Mesh(new THREE.BoxGeometry(20, 5, 13), cloth);
    collar.position.y = 60;
    g.add(collar);

    const hips = new THREE.Mesh(new THREE.BoxGeometry(24, 12, 14), cloth);
    hips.position.y = 24;
    g.add(hips);

    const head = new THREE.Mesh(new THREE.BoxGeometry(12, 13, 12), skin);
    head.position.y = 66;
    g.add(head);

    const helmet = new THREE.Mesh(new THREE.SphereGeometry(8, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshLambertMaterial({ color: this.team === 'T' ? 0x3b3327 : 0x2c3742 }));
    helmet.position.y = 71;
    helmet.visible = this.team === 'CT';
    g.add(helmet);
    this._helmetMesh = helmet;

    const armL = new THREE.Mesh(new THREE.BoxGeometry(8, 24, 8), cloth);
    armL.position.set(-16, 42, -2);
    armL.rotation.x = -0.35;
    g.add(armL);

    const armR = new THREE.Mesh(new THREE.BoxGeometry(8, 24, 8), cloth);
    armR.position.set(16, 42, -2);
    armR.rotation.x = -0.5;
    g.add(armR);

    const legL = new THREE.Mesh(new THREE.BoxGeometry(10, 24, 10), dark);
    legL.position.set(-7, 12, 0);
    g.add(legL);

    const legR = new THREE.Mesh(new THREE.BoxGeometry(10, 24, 10), dark);
    legR.position.set(7, 12, 0);
    g.add(legR);

    // 手中枪
    const gun = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 26), new THREE.MeshLambertMaterial({ color: 0x1b1b1b }));
    gun.position.set(10, 44, -14);
    g.add(gun);
    this._gunMesh = gun;

    this.mesh = g;
    this._legL = legL;
    this._legR = legR;
    this._armL = armL;
    this._armR = armR;
    scene.add(g);
    this.syncMesh();
  }

  syncMesh() {
    if (!this.mesh) return;
    this.mesh.visible = this.alive && !this.isLocal;
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
    this.mesh.rotation.y = this.yaw;
    const crouch = this.duckAmount;
    this.mesh.scale.y = 1 - crouch * 0.34;
    if (this._helmetMesh) this._helmetMesh.visible = this.helmet;
    if (this._gunMesh) this._gunMesh.visible = this.curSlot !== 'melee';
    // 走路摆腿
    const spd = Math.hypot(this.vel.x, this.vel.z);
    if (this.alive && spd > 30 && this.onGround) {
      const t = this.game.time * (6 + spd * 0.02);
      const sw = Math.sin(t) * Math.min(0.5, spd / 500);
      if (this._legL) this._legL.rotation.x = sw;
      if (this._legR) this._legR.rotation.x = -sw;
    } else if (this._legL) {
      this._legL.rotation.x = 0;
      this._legR.rotation.x = 0;
    }
  }

  hitboxes() {
    const h = PHYS.standHeight * (1 - this.duckAmount * 0.5);
    const y = this.pos.y;
    return [
      { group: 'head', y0: y + h - 13, y1: y + h, r: 7 },
      { group: 'chest', y0: y + h * 0.52, y1: y + h - 13, r: 13 },
      { group: 'stomach', y0: y + h * 0.34, y1: y + h * 0.52, r: 12 },
      { group: 'leg', y0: y, y1: y + h * 0.34, r: 10 },
    ];
  }
}

function accelerate(p, wx, wz, wishSpeed, accel, dt) {
  const cur = p.vel.x * wx + p.vel.z * wz;
  const add = wishSpeed - cur;
  if (add <= 0) return;
  let accelspeed = accel * dt * wishSpeed;
  if (accelspeed > add) accelspeed = add;
  p.vel.x += wx * accelspeed;
  p.vel.z += wz * accelspeed;
}

// 近似 CS1.6 各枪的散布/后坐摆动规律
function recoilPattern(def, shot) {
  const t = shot;
  switch (def.id) {
    case 'ak47':
      if (t < 4) return (Math.random() - 0.5) * 0.35;
      if (t < 10) return 0.55 + (Math.random() - 0.5) * 0.5;
      if (t < 18) return -0.85 + (Math.random() - 0.5) * 0.6;
      return 0.75 + (Math.random() - 0.5) * 0.9;
    case 'm4a1':
      if (t < 5) return (Math.random() - 0.5) * 0.25;
      if (t < 12) return 0.35 + (Math.random() - 0.5) * 0.35;
      return -0.45 + (Math.random() - 0.5) * 0.5;
    case 'mp5navy':
      return (Math.random() - 0.5) * 0.55;
    case 'awp':
      return (Math.random() - 0.5) * 0.2;
    default:
      return (Math.random() - 0.5) * 0.7;
  }
}

function applySpread(dir, spreadRad) {
  if (spreadRad <= 0) return dir.clone();
  // 生成锥内随机方向
  const up = Math.abs(dir.y) > 0.99 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  const right = new THREE.Vector3().crossVectors(dir, up).normalize();
  const realUp = new THREE.Vector3().crossVectors(right, dir).normalize();
  const ang = Math.random() * Math.PI * 2;
  const rad = Math.sqrt(Math.random()) * spreadRad;
  const out = dir.clone()
    .addScaledVector(right, Math.cos(ang) * rad)
    .addScaledVector(realUp, Math.sin(ang) * rad)
    .normalize();
  return out;
}
