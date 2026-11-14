// ============================================================
//  fx.js — 特效 / 投掷物
//
//  池化策略（改动的核心动机）：
//  three 在 scene 里 PointLight 数量变化时，会重新编译所有受影响的
//  shader。原来每发子弹 new 一盏枪口光，密集扫射时就是持续的编译抖动。
//  这里改为「固定 2 盏枪口光 + 1 盏爆炸光，只改 intensity」，
//  灯光数量永远不变。同理，火花/弹孔/曳光/弹壳全部预分配复用。
// ============================================================
import * as THREE from 'three';
import { applyDamage } from './weapons.js';
import * as Sfx from './audio.js';

const SPRITE_POOL = 56;   // 火花/灰尘/血迹/枪口焰共用
const DECAL_POOL = 64;    // 弹孔环形缓冲，超出后覆盖最旧的
const TRACER_POOL = 10;
const SHELL_POOL = 24;
const MUZZLE_LIGHTS = 2;

function softCircle(color = '#ffffff', inner = 0.15) {
  const S = 64;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(S / 2, S / 2, S * inner, S / 2, S / 2, S / 2);
  g.addColorStop(0, color);
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, S, S);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function decalTexture() {
  const S = 64;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(S / 2, S / 2, 1, S / 2, S / 2, S / 2);
  g.addColorStop(0, 'rgba(20,16,12,0.95)');
  g.addColorStop(0.5, 'rgba(30,24,18,0.55)');
  g.addColorStop(1, 'rgba(30,24,18,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, S, S);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export const fx = {
  scene: null,
  camera: null,
  game: null,
  items: [],          // 非池化对象（火球、烟雾组）
  smokeVolumes: [],
  shake: 0,
  _softTex: null,
  _decalTex: null,

  init(scene, camera, game) {
    this.scene = scene;
    this.camera = camera;
    this.game = game;
    this._softTex = softCircle('rgba(255,240,180,0.95)');
    this._decalTex = decalTexture();
    this._buildPools();
  },

  _buildPools() {
    // ---- 精灵池 ----
    this._sprites = [];
    for (let i = 0; i < SPRITE_POOL; i++) {
      const mat = new THREE.SpriteMaterial({
        map: this._softTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      });
      const o = new THREE.Sprite(mat);
      o.visible = false;
      this.scene.add(o);
      this._sprites.push({
        o, m: mat, on: false, life: 0, maxLife: 1,
        v: new THREE.Vector3(), kind: 'spark', grow: 0,
      });
    }
    this._spriteCursor = 0;

    // ---- 弹孔环形缓冲（共享几何与材质，不淡出） ----
    const dGeo = new THREE.PlaneGeometry(9, 9);
    const dMat = new THREE.MeshBasicMaterial({
      map: this._decalTex, transparent: true, depthWrite: false, opacity: 0.9,
      polygonOffset: true, polygonOffsetFactor: -4,
    });
    this._decals = [];
    for (let i = 0; i < DECAL_POOL; i++) {
      const m = new THREE.Mesh(dGeo, dMat);
      m.visible = false;
      this.scene.add(m);
      this._decals.push(m);
    }
    this._decalCursor = 0;

    // ---- 曳光 ----
    this._tracers = [];
    for (let i = 0; i < TRACER_POOL; i++) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
      const mat = new THREE.LineBasicMaterial({
        color: 0xfff0b0, transparent: true, opacity: 0.55,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const o = new THREE.Line(g, mat);
      o.visible = false;
      o.frustumCulled = false;
      this.scene.add(o);
      this._tracers.push({ o, m: mat, on: false, life: 0, maxLife: 0.05 });
    }
    this._tracerCursor = 0;

    // ---- 弹壳 ----
    const sGeo = new THREE.BoxGeometry(2, 2, 5);
    const sMat = new THREE.MeshLambertMaterial({ color: 0xc9a227 });
    this._shells = [];
    for (let i = 0; i < SHELL_POOL; i++) {
      const o = new THREE.Mesh(sGeo, sMat);
      o.visible = false;
      this.scene.add(o);
      this._shells.push({
        o, on: false, life: 0, v: new THREE.Vector3(), rot: new THREE.Vector3(),
      });
    }
    this._shellCursor = 0;

    // ---- 灯光：数量恒定，只改 intensity ----
    this._muzzleLights = [];
    for (let i = 0; i < MUZZLE_LIGHTS; i++) {
      const l = new THREE.PointLight(0xffcc77, 0, 420);
      this.scene.add(l);
      this._muzzleLights.push({ l, life: 0, maxLife: 0.06, peak: 0 });
    }
    this._muzzleCursor = 0;

    this._boomLight = new THREE.PointLight(0xffaa44, 0, 1920);
    this.scene.add(this._boomLight);
    this._boomLife = 0;
    this._boomMax = 0.42;
    this._boomPeak = 0;
  },

  // 取一个精灵，设置颜色/位置/生命周期
  _sprite(color, pos, { size = 10, life = 0.3, kind = 'spark', v = null, grow = 0, blending = THREE.AdditiveBlending } = {}) {
    const s = this._sprites[this._spriteCursor];
    this._spriteCursor = (this._spriteCursor + 1) % this._sprites.length;
    s.m.color.setHex(color);
    s.m.blending = blending;
    s.m.opacity = 1;
    s.o.position.copy(pos);
    s.o.scale.set(size, size, 1);
    s.o.visible = true;
    s.on = true;
    s.life = life;
    s.maxLife = life;
    s.kind = kind;
    s.grow = grow;
    if (v) s.v.copy(v); else s.v.set(0, 0, 0);
    return s;
  },

  muzzle(player, def) {
    const dir = player.aimDir();
    const origin = new THREE.Vector3(player.pos.x, player.eyeY(), player.pos.z);
    const right = new THREE.Vector3(Math.cos(player.yaw), 0, -Math.sin(player.yaw));
    const p = origin.clone().addScaledVector(dir, 34).addScaledVector(right, 9);
    p.y -= 8;

    const size = 22 + Math.random() * 12;
    this._sprite(0xffe4a0, p, { size, life: 0.055, kind: 'flash' });

    // 复用枪口光，不 new、不 add/remove
    const L = this._muzzleLights[this._muzzleCursor];
    this._muzzleCursor = (this._muzzleCursor + 1) % this._muzzleLights.length;
    L.l.position.copy(p);
    L.life = L.maxLife;
    L.peak = 3.2;

    this.shell(player, right);
  },

  shell(player, right) {
    const s = this._shells[this._shellCursor];
    this._shellCursor = (this._shellCursor + 1) % this._shells.length;
    s.o.position.set(player.pos.x, player.eyeY() - 8, player.pos.z);
    s.o.visible = true;
    s.on = true;
    s.life = 1.2;
    s.v.set(
      right.x * 90 + (Math.random() - 0.5) * 40,
      120,
      right.z * 90 + (Math.random() - 0.5) * 40,
    );
    s.rot.set(Math.random() * 12, Math.random() * 12, 0);
  },

  tracer(from, to) {
    const t = this._tracers[this._tracerCursor];
    this._tracerCursor = (this._tracerCursor + 1) % this._tracers.length;
    const pos = t.o.geometry.attributes.position;
    pos.setXYZ(0, from.x, from.y, from.z);
    pos.setXYZ(1, to.x, to.y, to.z);
    pos.needsUpdate = true;
    t.o.visible = true;
    t.on = true;
    t.life = t.maxLife;
    t.m.opacity = 0.55;
  },

  impact(point, normal, surface = 'stone') {
    // 弹孔：环形覆盖，数量恒为 64
    const d = this._decals[this._decalCursor];
    this._decalCursor = (this._decalCursor + 1) % this._decals.length;
    d.position.copy(point);
    const n = new THREE.Vector3(normal.x, normal.y, normal.z).normalize();
    d.lookAt(point.clone().add(n));
    d.visible = true;

    // 火花
    for (let i = 0; i < 3; i++) {
      const v = new THREE.Vector3(
        normal.x * 60 + (Math.random() - 0.5) * 90,
        normal.y * 60 + Math.random() * 90,
        normal.z * 60 + (Math.random() - 0.5) * 90,
      );
      this._sprite(0xffc060, point, { size: 6 + Math.random() * 8, life: 0.28, kind: 'spark', v });
    }
    // 灰尘：沙地/石面偏土黄，木头偏棕，金属不扬尘
    const dustPos = point.clone().addScaledVector(n, 4);
    if (surface !== 'metal') {
      const dustColor = surface === 'wood' ? 0x9a7a52 : 0xbfa884;
      this._sprite(dustColor, dustPos, {
        size: 14, life: 0.5, kind: 'grow', grow: 30, blending: THREE.NormalBlending,
      });
    }
    Sfx.playImpact(surface, point, this.game.listenerPos());
  },

  blood(point, n = 5) {
    for (let i = 0; i < n; i++) {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 130,
        Math.random() * 110,
        (Math.random() - 0.5) * 130,
      );
      this._sprite(0x9c1414, point, {
        size: 4 + Math.random() * 6, life: 0.45, kind: 'spark', v, blending: THREE.NormalBlending,
      });
    }
  },

  knifeSwing(player) {
    const p = new THREE.Vector3(player.pos.x, player.eyeY() - 10, player.pos.z);
    p.addScaledVector(player.aimDir(), 26);
    this._sprite(0xffffff, p, { size: 14, life: 0.12, kind: 'flash' });
  },

  explosion(pos, radius = 320) {
    this._boomLight.position.copy(pos);
    this._boomLight.position.y += 30;
    this._boomLife = this._boomMax;
    this._boomPeak = 12;

    // 火球本体（手雷不频繁，保持独立对象）
    const ball = new THREE.Mesh(
      new THREE.SphereGeometry(30, 12, 10),
      new THREE.MeshBasicMaterial({
        color: 0xffbb55, transparent: true, opacity: 0.95,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }),
    );
    ball.position.copy(pos);
    this.scene.add(ball);
    this.items.push({ obj: ball, life: 0.42, maxLife: 0.42, kind: 'boom' });

    for (let i = 0; i < 18; i++) {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 400,
        Math.random() * 260,
        (Math.random() - 0.5) * 400,
      );
      const smoke = i % 3 === 0;
      this._sprite(smoke ? 0x333333 : 0xff9944, pos, {
        size: 30 + Math.random() * 60,
        life: 0.7 + Math.random() * 0.5,
        kind: 'spark',
        v,
        blending: smoke ? THREE.NormalBlending : THREE.AdditiveBlending,
      });
    }
    Sfx.playExplosion(pos, this.game.listenerPos());
    this.shake = Math.max(this.shake, 1.0);
  },

  smokeCloud(pos) {
    const grp = new THREE.Group();
    for (let i = 0; i < 16; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this._softTex, color: 0xd8d8d8, transparent: true, opacity: 0.0, depthWrite: false,
      }));
      const ang = (i / 16) * Math.PI * 2;
      const rad = Math.random() * 90;
      s.position.set(Math.cos(ang) * rad, 20 + Math.random() * 120, Math.sin(ang) * rad);
      const sc = 180 + Math.random() * 120;
      s.scale.set(sc, sc, 1);
      grp.add(s);
    }
    grp.position.copy(pos);
    this.scene.add(grp);
    const vol = { pos: pos.clone(), radius: 190, until: this.game.time + 16, grp };
    this.smokeVolumes.push(vol);
    this.items.push({ obj: grp, life: 16, maxLife: 16, kind: 'smoke', vol });
  },

  blocksLineOfSight(a, b) {
    for (const v of this.smokeVolumes) {
      if (this.game.time > v.until) continue;
      const ab = new THREE.Vector3().subVectors(b, a);
      const len2 = ab.lengthSq();
      if (len2 < 1) continue;
      const t = Math.max(0, Math.min(1, new THREE.Vector3().subVectors(v.pos, a).dot(ab) / len2));
      const closest = a.clone().addScaledVector(ab, t);
      if (closest.distanceTo(v.pos) < v.radius * 0.85) return true;
    }
    return false;
  },

  update(dt) {
    this.shake = Math.max(0, this.shake - dt * 2.6);

    // ---- 精灵 ----
    for (let i = 0; i < this._sprites.length; i++) {
      const s = this._sprites[i];
      if (!s.on) continue;
      s.life -= dt;
      if (s.life <= 0) {
        s.on = false;
        s.o.visible = false;
        continue;
      }
      const t = 1 - s.life / s.maxLife;
      switch (s.kind) {
        case 'spark':
          s.v.y -= 700 * dt;
          s.o.position.addScaledVector(s.v, dt);
          s.m.opacity = 1 - t;
          break;
        case 'grow': {
          const sc = s.o.scale.x + s.grow * dt;
          s.o.scale.set(sc, sc, 1);
          s.m.opacity = (1 - t) * 0.6;
          break;
        }
        default:
          s.m.opacity = 1 - t;
          break;
      }
    }

    // ---- 曳光 ----
    for (let i = 0; i < this._tracers.length; i++) {
      const t = this._tracers[i];
      if (!t.on) continue;
      t.life -= dt;
      if (t.life <= 0) {
        t.on = false;
        t.o.visible = false;
        continue;
      }
      t.m.opacity = (t.life / t.maxLife) * 0.55;
    }

    // ---- 弹壳 ----
    for (let i = 0; i < this._shells.length; i++) {
      const s = this._shells[i];
      if (!s.on) continue;
      s.life -= dt;
      if (s.life <= 0) {
        s.on = false;
        s.o.visible = false;
        continue;
      }
      s.v.y -= 800 * dt;
      s.o.position.addScaledVector(s.v, dt);
      s.o.rotation.x += s.rot.x * dt;
      s.o.rotation.y += s.rot.y * dt;
      if (s.o.position.y < 2) {
        s.o.position.y = 2;
        s.v.y *= -0.3;
        s.v.x *= 0.6;
        s.v.z *= 0.6;
      }
    }

    // ---- 枪口光 ----
    for (let i = 0; i < this._muzzleLights.length; i++) {
      const L = this._muzzleLights[i];
      if (L.life <= 0) continue;
      L.life -= dt;
      L.l.intensity = L.life > 0 ? (L.life / L.maxLife) * L.peak : 0;
      if (L.life <= 0) L.l.intensity = 0;
    }

    // ---- 爆炸光 ----
    if (this._boomLife > 0) {
      this._boomLife -= dt;
      this._boomLight.intensity = this._boomLife > 0
        ? (this._boomLife / this._boomMax) * this._boomPeak
        : 0;
      if (this._boomLife <= 0) this._boomLight.intensity = 0;
    }

    // ---- 非池化对象：火球、烟雾 ----
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      it.life -= dt;
      const o = it.obj;
      if (it.life <= 0) {
        this.scene.remove(o);
        if (o.geometry) o.geometry.dispose?.();
        if (o.material) {
          if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose?.());
          else o.material.dispose?.();
        }
        if (it.kind === 'smoke' && it.vol) {
          this.smokeVolumes = this.smokeVolumes.filter((v) => v !== it.vol);
        }
        this.items.splice(i, 1);
        continue;
      }
      const t = 1 - it.life / it.maxLife;
      switch (it.kind) {
        case 'boom': {
          const s = 30 + t * 330;
          o.scale.set(s / 30, s / 30, s / 30);
          o.material.opacity = 0.95 * (1 - t) ** 1.5;
          break;
        }
        case 'smoke': {
          const fadeIn = Math.min(1, t * 5);
          const fadeOut = Math.min(1, (1 - t) * 3);
          const k = Math.min(fadeIn, fadeOut);
          o.children.forEach((c) => { c.material.opacity = 0.72 * k; });
          const sc = 0.6 + t * 0.7;
          o.scale.set(sc, 1, sc);
          break;
        }
        default:
          break;
      }
    }
  },
};

// ---------- 投掷物 ----------
const GRAV = 800;

export class Grenade {
  constructor(game, owner, kind, origin, dir) {
    this.game = game;
    this.owner = owner;
    this.kind = kind;
    this.pos = origin.clone();
    this.vel = dir.clone().multiplyScalar(kind === 'he' ? 1000 : 950);
    this.vel.y += 110;
    this.fuse = kind === 'he' ? 3.0 : kind === 'flash' ? 2.0 : 1.8;
    this.dead = false;
    this.bounces = 0;

    const color = kind === 'he' ? 0x4a5a3a : kind === 'flash' ? 0x999999 : 0x8a8a70;
    this.mesh = new THREE.Mesh(
      new THREE.SphereGeometry(5, 8, 6),
      new THREE.MeshLambertMaterial({ color }),
    );
    this.mesh.position.copy(this.pos);
    game.scene.add(this.mesh);
  }

  update(dt) {
    if (this.dead) return;
    this.fuse -= dt;
    this.vel.y -= GRAV * dt;

    const map = this.game.map;
    const next = this.pos.clone().addScaledVector(this.vel, dt);

    // 地面
    if (next.y < 5) {
      next.y = 5;
      this.vel.y *= -0.42;
      this.vel.x *= 0.72;
      this.vel.z *= 0.72;
      this.bounces++;
    }

    // 墙体
    const delta = next.clone().sub(this.pos);
    const len = delta.length();
    if (len > 0.001) {
      const dir = delta.clone().divideScalar(len);
      const hit = map.raycast(this.pos, dir, len + 4);
      if (hit) {
        const p = this.pos.clone().addScaledVector(dir, Math.max(0, hit.dist - 3));
        const n = new THREE.Vector3(hit.nx, hit.ny, hit.nz);
        this.vel.reflect(n).multiplyScalar(0.45);
        next.copy(p);
        this.bounces++;
      }
    }

    this.pos.copy(next);
    this.mesh.position.copy(this.pos);
    this.mesh.rotation.x += dt * 6;
    this.mesh.rotation.z += dt * 4;

    if (this.fuse <= 0) this.explode();
  }

  explode() {
    this.dead = true;
    this.game.scene.remove(this.mesh);
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
    const k = this.kind;

    if (k === 'he') {
      fx.explosion(this.pos.clone());
      for (const p of this.game.players) {
        if (!p.alive) continue;
        const c = new THREE.Vector3(p.pos.x, p.pos.y + 36, p.pos.z);
        const dist = c.distanceTo(this.pos);
        if (dist > 340) continue;
        const eye = new THREE.Vector3(p.pos.x, p.eyeY(), p.pos.z);
        if (!this.game.map.lineOfSight(this.pos, eye)) continue;
        const falloff = Math.max(0, 1 - dist / 340) ** 1.4;
        const dmg = 105 * falloff;
        if (dmg > 1) applyDamage(this.game, p, this.owner, dmg, 'chest', { id: 'hegrenade', dmg });
      }
    } else if (k === 'flash') {
      Sfx.playFlashbang(this.pos.clone(), this.game.listenerPos());
      for (const p of this.game.players) {
        if (!p.alive) continue;
        const eye = new THREE.Vector3(p.pos.x, p.eyeY(), p.pos.z);
        const dist = eye.distanceTo(this.pos);
        if (dist > 1500) continue;
        if (!this.game.map.lineOfSight(this.pos, eye)) continue;
        const toG = this.pos.clone().sub(eye).normalize();
        const fwd = new THREE.Vector3(-Math.sin(p.yaw), 0, -Math.cos(p.yaw));
        const facing = Math.max(0, fwd.dot(new THREE.Vector3(toG.x, 0, toG.z).normalize()));
        const strength = Math.max(0, 1 - dist / 1500) * (0.35 + facing * 0.9);
        p.flashAmount = Math.min(1.4, p.flashAmount + strength * 1.5);
        if (p.isBot) p.botOnFlashed?.(strength);
      }
    } else {
      fx.smokeCloud(this.pos.clone());
    }
  }
}
