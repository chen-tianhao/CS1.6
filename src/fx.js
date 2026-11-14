// ============================================================
//  fx.js — 特效 / 投掷物
// ============================================================
import * as THREE from 'three';
import { applyDamage } from './weapons.js';
import * as Sfx from './audio.js';

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
  items: [],
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
  },

  muzzle(player, def) {
    const dir = player.aimDir();
    const origin = new THREE.Vector3(player.pos.x, player.eyeY(), player.pos.z);
    // 枪口位置：右下方偏移
    const right = new THREE.Vector3(Math.cos(player.yaw), 0, -Math.sin(player.yaw));
    const p = origin.clone().addScaledVector(dir, 34).addScaledVector(right, 9);
    p.y -= 8;

    const mat = new THREE.SpriteMaterial({
      map: this._softTex, color: 0xffe4a0, blending: THREE.AdditiveBlending,
      transparent: true, depthWrite: false, opacity: 0.95,
    });
    const s = new THREE.Sprite(mat);
    const size = 22 + Math.random() * 12;
    s.scale.set(size, size, 1);
    s.position.copy(p);
    this.scene.add(s);
    const light = new THREE.PointLight(0xffcc77, 3.2, 420);
    light.position.copy(p);
    this.scene.add(light);
    this.items.push({ obj: s, life: 0.055, maxLife: 0.055, kind: 'sprite', light });
    // 抛壳
    this.shell(player, right);
  },

  shell(player, right) {
    const geo = new THREE.BoxGeometry(2, 2, 5);
    const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: 0xc9a227 }));
    m.position.set(player.pos.x, player.eyeY() - 8, player.pos.z);
    this.scene.add(m);
    const v = new THREE.Vector3(right.x * 90 + (Math.random() - 0.5) * 40, 120, right.z * 90 + (Math.random() - 0.5) * 40);
    this.items.push({ obj: m, life: 1.2, maxLife: 1.2, kind: 'shell', v, rot: new THREE.Vector3(Math.random() * 12, Math.random() * 12, 0) });
  },

  tracer(from, to) {
    const geo = new THREE.BufferGeometry().setFromPoints([from, to]);
    const mat = new THREE.LineBasicMaterial({
      color: 0xfff0b0, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const line = new THREE.Line(geo, mat);
    this.scene.add(line);
    this.items.push({ obj: line, life: 0.05, maxLife: 0.05, kind: 'fade' });
  },

  impact(point, normal) {
    // 贴花
    const decal = new THREE.Mesh(
      new THREE.PlaneGeometry(9, 9),
      new THREE.MeshBasicMaterial({
        map: this._decalTex, transparent: true, depthWrite: false, opacity: 0.9,
        polygonOffset: true, polygonOffsetFactor: -4,
      }),
    );
    decal.position.copy(point);
    const n = new THREE.Vector3(normal.x, normal.y, normal.z).normalize();
    decal.lookAt(point.clone().add(n));
    this.scene.add(decal);
    this.items.push({ obj: decal, life: 12, maxLife: 12, kind: 'decal' });

    // 火花
    for (let i = 0; i < 3; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this._softTex, color: 0xffc060, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
      }));
      const sc = 6 + Math.random() * 8;
      s.scale.set(sc, sc, 1);
      s.position.copy(point);
      this.scene.add(s);
      const v = new THREE.Vector3(normal.x * 60 + (Math.random() - 0.5) * 90, normal.y * 60 + Math.random() * 90, normal.z * 60 + (Math.random() - 0.5) * 90);
      this.items.push({ obj: s, life: 0.28, maxLife: 0.28, kind: 'spark', v });
    }
    // 灰尘
    const dust = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this._softTex, color: 0xbfa884, transparent: true, opacity: 0.6, depthWrite: false,
    }));
    dust.scale.set(14, 14, 1);
    dust.position.copy(point).addScaledVector(new THREE.Vector3(normal.x, normal.y, normal.z), 4);
    this.scene.add(dust);
    this.items.push({ obj: dust, life: 0.5, maxLife: 0.5, kind: 'grow', grow: 30 });
  },

  blood(point, n = 5) {
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this._softTex, color: 0x9c1414, transparent: true, opacity: 0.9, depthWrite: false,
      }));
      const sc = 4 + Math.random() * 6;
      s.scale.set(sc, sc, 1);
      s.position.copy(point);
      this.scene.add(s);
      const v = new THREE.Vector3((Math.random() - 0.5) * 130, Math.random() * 110, (Math.random() - 0.5) * 130);
      this.items.push({ obj: s, life: 0.45, maxLife: 0.45, kind: 'spark', v });
    }
  },

  knifeSwing(player) {
    const p = new THREE.Vector3(player.pos.x, player.eyeY() - 10, player.pos.z);
    const d = player.aimDir();
    p.addScaledVector(d, 26);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this._softTex, color: 0xffffff, transparent: true, opacity: 0.5, depthWrite: false,
    }));
    s.scale.set(14, 14, 1);
    s.position.copy(p);
    this.scene.add(s);
    this.items.push({ obj: s, life: 0.12, maxLife: 0.12, kind: 'fade' });
  },

  explosion(pos, radius = 320) {
    const light = new THREE.PointLight(0xffaa44, 12, radius * 6);
    light.position.copy(pos);
    light.position.y += 30;
    this.scene.add(light);

    const ball = new THREE.Mesh(
      new THREE.SphereGeometry(30, 12, 10),
      new THREE.MeshBasicMaterial({ color: 0xffbb55, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    ball.position.copy(pos);
    this.scene.add(ball);
    this.items.push({ obj: ball, life: 0.42, maxLife: 0.42, kind: 'boom', light, radius });

    for (let i = 0; i < 18; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this._softTex, color: i % 3 === 0 ? 0x333333 : 0xff9944, transparent: true, opacity: 0.85,
        blending: i % 3 === 0 ? THREE.NormalBlending : THREE.AdditiveBlending, depthWrite: false,
      }));
      const sc = 30 + Math.random() * 60;
      s.scale.set(sc, sc, 1);
      s.position.copy(pos);
      this.scene.add(s);
      const v = new THREE.Vector3((Math.random() - 0.5) * 400, Math.random() * 260, (Math.random() - 0.5) * 400);
      this.items.push({ obj: s, life: 0.7 + Math.random() * 0.5, maxLife: 1.2, kind: 'spark', v });
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
        if (it.light) this.scene.remove(it.light);
        if (it.kind === 'smoke' && it.vol) {
          this.smokeVolumes = this.smokeVolumes.filter((v) => v !== it.vol);
        }
        this.items.splice(i, 1);
        continue;
      }
      const t = 1 - it.life / it.maxLife;
      switch (it.kind) {
        case 'fade':
          o.material.opacity = 1 - t;
          break;
        case 'sprite':
          o.material.opacity = (1 - t) * 0.95;
          if (it.light) it.light.intensity = 3.2 * (1 - t);
          break;
        case 'spark':
          it.v.y -= 700 * dt;
          o.position.addScaledVector(it.v, dt);
          o.material.opacity = 1 - t;
          break;
        case 'shell':
          it.v.y -= 800 * dt;
          o.position.addScaledVector(it.v, dt);
          o.rotation.x += it.rot.x * dt;
          o.rotation.y += it.rot.y * dt;
          if (o.position.y < 2) { o.position.y = 2; it.v.y *= -0.3; it.v.x *= 0.6; it.v.z *= 0.6; }
          o.material.opacity = 1;
          break;
        case 'grow': {
          const s = 14 + it.grow * t;
          o.scale.set(s, s, 1);
          o.material.opacity = (1 - t) * 0.6;
          break;
        }
        case 'boom': {
          const s = 30 + t * 330;
          o.scale.set(s / 30, s / 30, s / 30);
          o.material.opacity = 0.95 * (1 - t) ** 1.5;
          if (it.light) it.light.intensity = 12 * (1 - t);
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
        case 'decal':
          o.material.opacity = Math.min(0.9, it.life * 2);
          break;
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
        // 面向角度影响
        const toG = this.pos.clone().sub(eye).normalize();
        const fwd = p === this.game.localPlayer
          ? new THREE.Vector3(-Math.sin(p.yaw), 0, -Math.cos(p.yaw))
          : new THREE.Vector3(-Math.sin(p.yaw), 0, -Math.cos(p.yaw));
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
