// ============================================================
//  weapons.js — 弹道、伤害结算、武器实例
// ============================================================
import { HITGROUP, WEAPONS } from './config.js';
import { fx } from './fx.js';
import * as Sfx from './audio.js';

export function makeWeaponInstance(id) {
  const def = WEAPONS[id];
  if (!def) return null;
  return { id, def, ammo: def.mag, reserve: def.res };
}

// 射线检测玩家命中盒
export function tracePlayers(game, origin, dir, maxDist, shooter) {
  let best = null;
  for (const p of game.players) {
    if (!p.alive || p === shooter) continue;
    if (p.team === shooter.team) continue;
    for (const hb of p.hitboxes()) {
      const b = {
        x0: p.pos.x - hb.r, x1: p.pos.x + hb.r,
        y0: hb.y0, y1: hb.y1,
        z0: p.pos.z - hb.r, z1: p.pos.z + hb.r,
      };
      const t = rayAABB(origin, dir, b);
      if (t !== null && t > 0 && t < maxDist && (!best || t < best.dist)) {
        best = { player: p, dist: t, group: hb.group };
      }
    }
  }
  if (best) {
    best.point = origin.clone().addScaledVector(dir, best.dist);
  }
  return best;
}

export function rayAABB(o, d, b) {
  let tmin = 0, tmax = Infinity;
  for (let a = 0; a < 3; a++) {
    const oo = a === 0 ? o.x : a === 1 ? o.y : o.z;
    const dd = a === 0 ? d.x : a === 1 ? d.y : d.z;
    const mn = a === 0 ? b.x0 : a === 1 ? b.y0 : b.z0;
    const mx = a === 0 ? b.x1 : a === 1 ? b.y1 : b.z1;
    if (Math.abs(dd) < 1e-8) {
      if (oo < mn || oo > mx) return null;
    } else {
      let t1 = (mn - oo) / dd, t2 = (mx - oo) / dd;
      if (t1 > t2) { const tmp = t1; t1 = t2; t2 = tmp; }
      if (t1 > tmin) tmin = t1;
      if (t2 < tmax) tmax = t2;
      if (tmin > tmax) return null;
    }
  }
  return tmin;
}

export function traceBullet(game, shooter, origin, dir, def) {
  const wallHit = game.map.raycast(origin, dir, 8000);
  const wallDist = wallHit ? wallHit.dist : 8000;
  const ph = tracePlayers(game, origin, dir, wallDist, shooter);
  const endDist = ph ? ph.dist : wallDist;
  const end = origin.clone().addScaledVector(dir, endDist);

  // 曳光弹
  const muzzle = origin.clone().addScaledVector(dir, 24);
  if (Math.random() < 0.75) fx.tracer(muzzle, end);

  if (ph) {
    applyDamage(game, ph.player, shooter, def.dmg, ph.group, def, ph.dist);
    fx.blood(ph.point, ph.group === 'head' ? 8 : 4);
    if (shooter === game.localPlayer) {
      Sfx.playHit(ph.group === 'head');
      game.hud.hitMarker(ph.group === 'head');
    }
  } else if (wallHit) {
    const p = origin.clone().addScaledVector(dir, wallHit.dist - 0.6);
    fx.impact(p, { x: wallHit.nx, y: wallHit.ny, z: wallHit.nz });
  }
  return { end, hitPlayer: !!ph };
}

export function applyDamage(game, victim, attacker, baseDmg, group, def, distOverride) {
  if (!victim.alive) return 0;
  let dist = distOverride;
  if (dist == null) {
    const ap = attacker && attacker.pos ? attacker.pos : victim.pos;
    dist = Math.hypot(ap.x - victim.pos.x, ap.y - victim.pos.y, ap.z - victim.pos.z);
  }
  const mult = HITGROUP[group] ?? 1;
  const falloff = Math.pow(0.985, dist / 100);
  const raw = baseDmg * mult * falloff;

  // 友军伤害：CS 默认关闭，这里直接忽略
  if (attacker && attacker !== victim && attacker.team === victim.team) return 0;

  const dealt = victim.takeDamage(raw, attacker, group, def.id);

  if (attacker === game.localPlayer && victim !== game.localPlayer) {
    game.hud.hitMarker(group === 'head');
  }
  if (victim === game.localPlayer && dealt > 0) {
    game.hud.damageFlash(dealt, attacker);
  }
  return dealt;
}
