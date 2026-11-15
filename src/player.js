// ============================================================
//  player.js — 玩家实体：GoldSrc 移动物理 / 视角 / 命中盒 / 武器持有
// ============================================================
import * as THREE from 'three';
import { PHYS, HITGROUP, WEAPONS, RULES, GRENADE_FUSE, recoilPattern } from './config.js';
import { traceBullet, applyDamage, makeWeaponInstance } from './weapons.js';
import { fx, Grenade } from './fx.js';
import * as Sfx from './audio.js';
import { buildCharacterMesh, buildWeaponProp } from './models.js';

const D2R = Math.PI / 180;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// 贴地阴影贴图（所有角色共享纹理，材质各自持有以便单独调透明度）
let _blobTex = null;
function blobTexture() {
  if (_blobTex) return _blobTex;
  const S = 128;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(S / 2, S / 2, 2, S / 2, S / 2, S / 2);
  g.addColorStop(0, 'rgba(0,0,0,0.60)');
  g.addColorStop(0.42, 'rgba(0,0,0,0.34)');
  g.addColorStop(0.78, 'rgba(0,0,0,0.10)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, S, S);
  _blobTex = new THREE.CanvasTexture(c);
  return _blobTex;
}

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
    this.groundY = 0;          // 脚下支撑面高度（贴地阴影要用）
    this.groundMat = 'sand';   // 脚下材质（脚步声 / 弹着点用）
    this.walking = false;      // 静步中：不发出脚步声
    this.onLadder = false;     // 挂在梯子上（关掉重力）
    this.priming = false;      // 手雷已拔销
    this.primeT = 0;           // 拔销已经过去多久
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
    // 挥刀进度：1 → 0 衰减，viewmodel 据此播放劈砍弧线
    this.swingT = 0;
    this.attacker = null;
    this.plantProgress = 0;
    this.defuseProgress = 0;
    this.spawnProtect = 0;
    this.flashAmount = 0;

    this.mesh = null;
    this.viewModel = null;
    this.muzzleLight = null;
    this.deathAt = null;      // 死亡时刻（驱动倒地动画 + 尸体留存）
    this._prevMeshT = null;
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
    this.groundY = 0;
    this.priming = false;
    this.primeT = 0;
    this.onLadder = false;
    // 重生时清掉倒地状态：上一回合的尸体就此消失
    this.deathAt = null;
    this._prevMeshT = null;
    this._strideT = 0;
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
    Sfx.playDeploy(id);
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
    // 挥刀进度衰减（0.32 秒走完一个完整弧线）
    if (this.swingT > 0) this.swingT = Math.max(0, this.swingT - dt * 3.1);

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

    // 手雷拔销：引信被扣光就在手里炸（1.6 里按住不放真的会炸死自己）
    if (this.priming) {
      this.primeT += dt;
      const fuse = GRENADE_FUSE[this.grenadeSel] || 3;
      if (this.primeT >= fuse) {
        this.priming = false;
        this.primeT = 0;
        this.throwGrenade(fuse);   // fuse - fuse = 0，落地即爆
      }
    }

    // 后坐力回正（CS 手感：松开后准心慢慢回位）
    const rec = Math.exp(-dt * (this.game.time - this.lastShotTime > 0.25 ? 7.5 : 2.4));
    this.punchPitch *= rec;
    this.punchYaw *= rec;
    if (Math.abs(this.punchPitch) < 0.01) this.punchPitch = 0;
    if (Math.abs(this.punchYaw) < 0.01) this.punchYaw = 0;

    // 脚步声。静步（Shift）必须完全无声 —— 这是 1.6 潜行体系的地基；
    // 蹲行速度 250×0.34 = 85 本来就落在阈值以下，不用额外判断。
    const hspeed = Math.hypot(this.vel.x, this.vel.z);
    if (this.onGround && hspeed > 90 && !this.walking) {
      this.footTimer -= dt * (hspeed / 250);
      if (this.footTimer <= 0) {
        this.footTimer = 0.42;
        Sfx.playFootstep(this.pos, this.game.listenerPos(), this.groundMat || 'sand');
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
    this.walking = !!cmd.walk;

    // 期望方向（水平）
    const sinY = Math.sin(this.yaw), cosY = Math.cos(this.yaw);
    let wishX = -sinY * fwd + cosY * side;
    let wishZ = -cosY * fwd - sinY * side;
    const wl = Math.hypot(wishX, wishZ);
    if (wl > 0.001) { wishX /= wl; wishZ /= wl; }

    // ---- 梯子 ----
    // 按前=上升、按后=下降、松开就挂在梯子上；完全关掉重力。
    const ladder = this.game.map.ladderAt(this.pos.x, this.pos.z, this.pos.y);
    this.onLadder = !!ladder;
    if (ladder) {
      const jumpPressed = cmd.jump && !this.jumpHeld;
      this.jumpHeld = !!cmd.jump;
      const climb = fwd > 0.1 ? 1 : fwd < -0.1 ? -1 : 0;
      this.vel.y = jumpPressed ? PHYS.jumpVel * 0.75 : climb * PHYS.maxLadderSpeed * 0.55;
      // 到顶就停住。不夹一下的话玩家会越过攀爬区、掉回来、再爬上去，在顶端来回弹。
      // 留 6 单位余量，保证人还能横向迈上旁边的平台。
      if (climb > 0 && this.pos.y >= (ladder.y1 || 400) - 6) this.vel.y = 0;
      if (jumpPressed || climb > 0) this.onGround = false;
      // 梯子上横向速度被钳住，只留一点左右微调
      this.vel.x *= 0.12;
      this.vel.z *= 0.12;
      if (side) {
        this.vel.x += Math.cos(this.yaw) * side * 45;
        this.vel.z += -Math.sin(this.yaw) * side * 45;
      }
      this.integrate(dt);
      return;
    }

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
    // 落地判定（含落地音效）现在由 integrate 统一处理
  }

  integrate(dt) {
    const map = this.game.map;
    const r = PHYS.radius;
    const hull = this.ducking ? PHYS.duckHeight : PHYS.standHeight;

    // ---- 水平：先移动，再沿轴推出 ----
    this.pos.x += this.vel.x * dt;
    this.resolveAxis('x', r, hull);
    this.pos.z += this.vel.z * dt;
    this.resolveAxis('z', r, hull);

    // ---- 脚下的支撑面 ----
    // 站在地面上时容忍 stepHeight 的台阶（能迈上去）；
    // 空中只有蹲着才有一点"够到沿儿"的余量（跳蹲），否则不会被"吸"到箱子上。
    const stepUp = this.onGround
      ? PHYS.stepHeight
      : (this.ducking ? PHYS.duckJumpBonus : 0);
    const sup = map.supportHeightAt(this.pos.x, this.pos.z, r, this.pos.y + stepUp);
    const support = sup.y;
    this.groundMat = sup.mat;
    // 记录脚下的地面高度：贴地阴影要靠它，跳跃时也不能跟着人一起飞
    this.groundY = support;

    // ---- 竖直 ----
    this.pos.y += this.vel.y * dt;

    if (this.vel.y <= 0 && this.pos.y <= support) {
      // 落到支撑面上：地面 / 箱顶 / 台阶
      if (!this.onGround && this.vel.y < -260) {
        // 高处落地：CS1.6 没有落地伤害，这里只给一声
        Sfx.playFootstep(this.pos, this.game.listenerPos(), this.groundMat || 'sand');
      }
      this.pos.y = support;
      this.vel.y = 0;
      this.onGround = true;
    } else if (this.onGround) {
      // 站着，但脚下的支撑面掉了：小落差贴地跟随，大落差转为自由下落
      if (this.pos.y - support <= PHYS.stepHeight) {
        this.pos.y = support;
        this.vel.y = 0;
      } else {
        this.onGround = false;
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

  // hull 由调用方按蹲/站算好传进来
  resolveAxis(axis, r, hull) {
    const cols = this.game.map.colliders;
    const px = this.pos.x, pz = this.pos.z;
    const py = this.pos.y;
    // 顶面不高于台阶的碰撞体可以迈上去，不该挡住水平移动；
    // 同理，已经站在它上面（脚面不高于它的顶面）时也不该被推开。
    // 空中蹲下时同样给跳蹲留一点余量。
    const stepUp = this.onGround
      ? PHYS.stepHeight
      : (this.ducking ? PHYS.duckJumpBonus : 0);
    for (let i = 0; i < cols.length; i++) {
      const b = cols[i];
      if (b.y1 <= py + stepUp) continue;
      if (b.y0 > py + hull || b.y1 < py + 2) continue;
      if (px + r <= b.x0 || px - r >= b.x1) continue;
      if (pz + r <= b.z0 || pz - r >= b.z1) continue;
      // 重叠 → 沿轴推到最近的一侧。
      // 不能用"速度方向"决定推哪边：一旦角色已经和碰撞体重叠
      // （出生点压在道具上、单帧位移过大），按速度方向会把人推到
      // 另一侧，等于瞬间穿过箱子。
      if (axis === 'x') {
        this.pos.x = (px - (b.x0 - r)) <= ((b.x1 + r) - px) ? b.x0 - r - 0.01 : b.x1 + r + 0.01;
        this.vel.x = 0;
      } else {
        this.pos.z = (pz - (b.z0 - r)) <= ((b.z1 + r) - pz) ? b.z0 - r - 0.01 : b.z1 + r + 0.01;
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

    // 后坐：固定弹道（config.js 的 RECOIL 表），没有随机数，可以背下来压枪。
    // yaw 增大是向左转，所以"右偏"要取负。
    const [up, right] = recoilPattern(def, this.shotCount);
    this.punchPitch += up;
    this.punchYaw -= right;

    // 弹道：霰弹枪一发打多颗弹丸，每颗独立走射线和结算
    const origin = new THREE.Vector3(this.pos.x, this.eyeY(), this.pos.z);
    const dir = this.aimDir();
    const spread = this.computeSpread(def);
    const d = applySpread(dir, spread);
    this.game.lastShotDir = d;

    const pellets = def.pellets || 1;
    if (pellets === 1) {
      traceBullet(this.game, this, origin, d, def);
    } else {
      for (let i = 0; i < pellets; i++) {
        traceBullet(this.game, this, origin, applySpread(dir, spread), def);
      }
    }

    // 枪口火焰 / 音效 / 抛壳
    fx.muzzle(this, def);
    Sfx.playShot(def.sound, this.pos, this.game.listenerPos());

    // 狙击开镜后自动退镜
    if (def.scope && this.zoom > 0) { this.zoom = 0; Sfx.playZoom(false); }

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
    this.swingT = 1;
    Sfx.playShot('knife', this.pos, this.game.listenerPos());
    const origin = new THREE.Vector3(this.pos.x, this.eyeY(), this.pos.z);
    const dir = this.aimDir();
    const hit = this.game.tracePlayers(origin, dir, def.range, this);
    if (hit && !hit.friendly) {
      const dmg = def.dmg;
      applyDamage(this.game, hit.player, this, dmg, 'chest', def);
      fx.blood(hit.point, 6);
      Sfx.playKnifeHit(hit.point, this.game.listenerPos());
    }
    // 挥砍的视觉反馈全部交给 viewmodel 的弧线动画，不再打任何屏幕特效
  }

  reload() {
    const w = this.weapon;
    if (!w) return;
    const def = WEAPONS[w.id];
    if (!def || def.cls === 'melee' || this.reloadEnd > 0) return;
    if (w.ammo >= def.mag || w.reserve <= 0) return;
    this.reloadEnd = this.game.time + def.reload;
    this.zoom = 0;
    Sfx.playReload(w.id);
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
    // 切枪一律取消已经拔掉销的手雷
    this.priming = false;
    this.primeT = 0;
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
      Sfx.playDeploy(null);
      return;
    }
    if (this.curSlot === slot) return;
    this.curSlot = slot;
    this.deployTime = 0.4;
    this.reloadEnd = 0;
    this.zoom = 0;
    Sfx.playDeploy(this.weaponDef ? this.weaponDef.id : null);
  }

  toggleZoom() {
    const def = this.weaponDef;
    if (!def || !def.scope) return;
    this.zoom = (this.zoom + 1) % 3;
    Sfx.playZoom(this.zoom > 0);
  }

  throwGrenade(fusePenalty = 0) {
    const kind = this.grenadeSel;
    if (!kind || this.grenades[kind] <= 0) return;
    this.grenades[kind]--;
    this.nextFire = this.game.time + 0.9;
    this.deployTime = 0.5;
    const origin = new THREE.Vector3(this.pos.x, this.eyeY() - 4, this.pos.z);
    const dir = this.aimDir();
    const g = new Grenade(this.game, this, kind, origin, dir);
    // 拔销期间扣掉的引信时间要算进这一颗里
    g.fuse = Math.max(0, g.fuse - fusePenalty);
    this.game.grenades.push(g);
    Sfx.playThrow();
    if (this.grenades[kind] === 0) {
      this.grenadeSel = null;
      this.curSlot = this.slots.primary ? 'primary' : this.slots.secondary ? 'secondary' : 'melee';
      Sfx.playDeploy(this.weaponDef ? this.weaponDef.id : null);
    }
  }

  // 拔销：按住左键开始计时，松开才扔出去（1.6 的空爆、提前爆都靠这个）
  beginPrime() {
    const kind = this.grenadeSel;
    if (!kind || this.grenades[kind] <= 0) return;
    this.priming = true;
    this.primeT = 0;
  }

  releaseGrenade() {
    if (!this.priming) return;
    this.priming = false;
    const held = this.primeT;
    this.primeT = 0;
    this.throwGrenade(held);
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
  // 护甲结算按 CS 1.6 的模型：护甲按「该武器的装甲穿透率」吸收伤害，
  // 自身承受 (1 - ratio) 的一半作为护甲损耗；护甲见底时剩余伤害回到身体。
  // 没戴头盔的头部命中完全无视护甲。
  takeDamage(dmg, attacker, group, weaponId) {
    if (!this.alive) return 0;
    let d = dmg;
    const def = WEAPONS[weaponId];
    // 摔落 / C4 这类没有武器定义的伤害退化到一个中庸值
    const ratio = def && def.pen != null ? def.pen : 0.72;
    const armorApplies = this.armor > 0 && group !== 'leg' && !(group === 'head' && !this.helmet);
    if (armorApplies) {
      const reduced = d * ratio;
      let armorLoss = (d - reduced) * 0.5;
      if (armorLoss > this.armor) {
        // 护甲被打空：按穿透率反推还能吃掉多少伤害，其余落到身体上
        armorLoss = this.armor / ratio;
        d = Math.max(0, d - armorLoss);
        this.armor = 0;
      } else {
        this.armor -= armorLoss;
        d = reduced;
      }
    }
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
      // 记下死亡时刻，用来驱动倒地动画（尸体留在原地，不再凭空消失）
      this.deathAt = this.game.time;
      this.game.onPlayerKilled(this, attacker, weaponId, group === 'head');
    }
    return d;
  }

  // ---------- 模型 ----------
  buildMesh(scene) {
    const built = buildCharacterMesh(this.team);
    this.mesh = built.group;
    this._helmetMesh = built.helmet;
    this._gunMesh = built.gun;
    this._torso = built.torso;
    this._head = built.head;
    this._hipY = built.hipY;
    this._strideT = 0;
    // 四级关节：髋/膝/肩/肘
    this._legL = built.legL;
    this._kneeL = built.kneeL;
    this._legR = built.legR;
    this._kneeR = built.kneeR;
    this._armL = built.armL;
    this._elbowL = built.elbowL;
    this._armR = built.armR;
    this._elbowR = built.elbowR;
    this._idleArmL = built.idleArmL;
    this._idleArmR = built.idleArmR;
    scene.add(this.mesh);

    // 贴地阴影：用一张跟随位置的圆形贴花，而不是 shadowMap ——
    // 开阴影会让所有 Lambert 材质重新编译，实战中反而掉帧。
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({
        map: blobTexture(), transparent: true, depthWrite: false, opacity: 0.5,
        polygonOffset: true, polygonOffsetFactor: -2,
      }),
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 1.2;
    shadow.renderOrder = 2;
    scene.add(shadow);
    this._shadow = shadow;

    this.syncMesh();
  }

  // ---------- 第三人称姿态 ----------
  // 全部基于关节旋转。之前是"一条 sin(时间)"+ 整体 scale.y 压扁，
  // 结果是脚在地面上滑、蹲下时连头盔都被压扁、死了直接消失。
  syncMesh() {
    if (!this.mesh) return;

    const now = this.game.time;
    const dt = this._prevMeshT == null ? 0 : Math.max(0, Math.min(0.12, now - this._prevMeshT));
    this._prevMeshT = now;

    const dying = !this.alive;
    const deathT = dying && this.deathAt != null ? Math.max(0, now - this.deathAt) : 0;
    // 尸体留在原地，直到下一回合重生
    const bodyVisible = this.alive || this.deathAt != null;

    this.mesh.visible = !this.isLocal && bodyVisible;
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
    this.mesh.rotation.set(0, this.yaw, 0);
    this.mesh.scale.setScalar(1);

    // 阴影跟随：贴在脚下的支撑面上，离地越高越小越淡
    if (this._shadow) {
      const vis = !this.isLocal && bodyVisible;
      this._shadow.visible = vis;
      if (vis) {
        const groundY = this.groundY || 0;
        const h = Math.max(0, this.pos.y - groundY);
        const k = Math.max(0.3, 1 - h / 240);
        this._shadow.position.set(this.pos.x, groundY + 1.2, this.pos.z);
        this._shadow.scale.setScalar(48 * k);
        this._shadow.material.opacity = 0.5 * k;
        this._shadow.visible = this.alive;   // 尸体下面不再留一个圆
      }
    }
    // 头盔/头巾属于阵营外观，与是否购买护甲无关，始终显示
    if (this._gunMesh) this._gunMesh.visible = this.alive && this.curSlot !== 'melee';

    if (!this.alive) {
      // ---- 倒地：向前扑，ease-out，然后躺地上 ----
      const k = Math.min(1, deathT / 0.55);
      const ease = 1 - Math.pow(1 - k, 3);
      this.mesh.rotation.x = -ease * 1.5;
      this.mesh.position.y -= ease * 5;
      if (this._torso) this._torso.rotation.x = 0.12;
      if (this._legL) {
        this._legL.rotation.x = 0.3 * ease;
        this._legR.rotation.x = -0.2 * ease;
        this._kneeL.rotation.x = -0.8 * ease;
        this._kneeR.rotation.x = -0.45 * ease;
      }
      return;
    }

    const spd = Math.hypot(this.vel.x, this.vel.z);
    const moving = spd > 20 && this.onGround;
    const crouch = this.duckAmount;
    const amp = Math.min(1, spd / 250);

    // 步频跟"实际位移"绑定，而不是跟时间绑定 —— 否则速度一变，脚就滑
    this._strideT = (this._strideT || 0) + (moving ? spd * dt * 0.072 : 0);
    const stride = this._strideT;
    const swing = Math.sin(stride);

    if (this._legL) {
      // 髋摆 + 膝只能向后弯；蹲下时两腿一起屈
      const hipL = swing * 0.62 * amp;
      const hipR = -swing * 0.62 * amp;
      const crouchHip = crouch * 0.85;
      const crouchKnee = crouch * 1.55;
      this._legL.rotation.x = hipL + crouchHip;
      this._legR.rotation.x = hipR + crouchHip;
      this._kneeL.rotation.x = -Math.max(0, -swing) * 1.15 * amp - crouchKnee;
      this._kneeR.rotation.x = -Math.max(0, swing) * 1.15 * amp - crouchKnee;

      // 手臂在持枪姿态上反向叠加（左臂跟着右腿）
      this._armL.rotation.x = this._idleArmL - swing * 0.26 * amp;
      this._armR.rotation.x = this._idleArmR + swing * 0.16 * amp;
    }

    // 躯干：跑动前倾 + 下蹲降低 + 跟着俯仰瞄准
    const pitch = Math.max(-1.2, Math.min(1.2, this.pitch || 0));
    if (this._torso) {
      this._torso.position.y = (this._hipY || 28) - crouch * 22;
      this._torso.rotation.x = -amp * 0.16 + pitch * 0.20 + crouch * 0.22;
      // 跑动时躯干轻微反向扭转，步伐才有重量
      this._torso.rotation.y = -swing * 0.10 * amp;
    }
    if (this._head) {
      this._head.rotation.x = pitch * 0.35 - crouch * 0.10;
    }

    // 跑动起伏：一个步幅两次落地下沉
    this.mesh.position.y -= Math.abs(Math.cos(stride)) * 1.6 * amp;
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

// 近似 CS1.6 各枪的散布/后坐摆动规律 → 已移到 config.js 的 RECOIL 表（固定弹道）

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
