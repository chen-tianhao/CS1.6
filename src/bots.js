// ============================================================
//  bots.js — BOT 控制器：感知 / 寻路 / 交战 / 目标行为
// ============================================================
import * as THREE from 'three';
import { WEAPONS } from './config.js';

const D2R = Math.PI / 180;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export class BotController {
  constructor(game, player, skill = 0.55) {
    this.game = game;
    this.p = player;
    this.skill = skill;
    this.path = null;
    this.pathIdx = 0;
    this.goal = null;
    this.goalKind = null;
    this.target = null;
    this.targetVisible = false;
    this.lastSeen = null;
    this.lastSeenTime = -99;
    this.reactionAt = 0;
    this.aimError = 0;
    this.burstUntil = 0;
    this.burstPauseUntil = 0;
    this.strafeDir = 0;
    this.strafeUntil = 0;
    this.repathAt = 0;
    this.stuckTimer = 0;
    this.lastPos = new THREE.Vector3();
    this.crouchUntil = 0;
    this.decisionAt = 0;
    this.wanderTarget = null;
    player.botOnFlashed = (s) => {
      this.aimError = Math.max(this.aimError, s * 18);
      this.targetVisible = false;
      this.target = null;
      this.lastSeenTime = -99;
    };
  }

  // ---------- 感知 ----------
  canSee(enemy) {
    if (!enemy.alive) return false;
    const eye = new THREE.Vector3(this.p.pos.x, this.p.eyeY(), this.p.pos.z);
    const tgt = new THREE.Vector3(enemy.pos.x, enemy.pos.y + 52, enemy.pos.z);
    const dist = eye.distanceTo(tgt);
    if (dist > 2600) return false;
    // 视野角度（约 100°）
    const to = tgt.clone().sub(eye).normalize();
    const fwd = new THREE.Vector3(-Math.sin(this.p.yaw), 0, -Math.cos(this.p.yaw));
    const flat = new THREE.Vector3(to.x, 0, to.z).normalize();
    if (fwd.dot(flat) < 0.25 && dist > 350) return false;
    if (!this.game.map.lineOfSight(eye, tgt)) return false;
    if (this.game.fx.blocksLineOfSight(eye, tgt)) return false;
    return true;
  }

  // ---------- 主循环 ----------
  update(dt) {
    const p = this.p;
    if (!p.alive) { p.fireHeld = false; p.syncMesh(); return; }   // 死了也要更新倒地动画
    const cmd = { forward: 0, side: 0, jump: false, duck: false, walk: false };
    p.wantUse = false;

    const phase = this.game.round.phase;
    if (phase === 'freeze' || phase === 'over') {
      p.fireHeld = false;
      p.update(dt, cmd);
      return;
    }

    // 被闪：乱走
    if (p.flashAmount > 0.7) {
      this.strafeMove(dt, cmd, (Math.random() - 0.5) * 0.6);
      p.update(dt, cmd);
      return;
    }

    this.perceive(dt);
    this.think(dt, cmd);
    p.update(dt, cmd);
  }

  perceive(dt) {
    const p = this.p;
    let best = null, bestScore = Infinity;
    for (const e of this.game.players) {
      if (!e.alive || e.team === p.team) continue;
      if (!this.canSee(e)) continue;
      const d = p.pos.distanceTo(e.pos);
      // 越近、血越少越优先
      const score = d + (e.health > 0 ? 0 : 500) - (e === this.target ? 120 : 0);
      if (score < bestScore) { bestScore = score; best = e; }
    }

    if (best) {
      if (best !== this.target) {
        this.target = best;
        // 反应时间
        this.reactionAt = this.game.time + (0.46 - this.skill * 0.24) * (0.75 + Math.random() * 0.7);
        this.aimError = (3.6 - this.skill * 2.3) * (0.65 + Math.random() * 0.85);
      }
      this.targetVisible = true;
      this.lastSeen = new THREE.Vector3(best.pos.x, best.pos.y + 52, best.pos.z);
      this.lastSeenTime = this.game.time;
      // 呼叫队友
      if (!this._calledOut || this.game.time - this._calledOut > 3) {
        this._calledOut = this.game.time;
        this.game.botCallout(this, best);
      }
    } else {
      this.targetVisible = false;
      if (this.target && this.game.time - this.lastSeenTime > 1.2) this.target = null;
    }
  }

  think(dt, cmd) {
    const p = this.p;
    const round = this.game.round;
    const bomb = round.bomb;

    // 目标点分配
    if (!this.goalKind || this.game.time > this.decisionAt) {
      this.decisionAt = this.game.time + 2.5;
      this.chooseGoal();
    }

    // ---------- 交战 ----------
    if (this.target && this.target.alive) {
      const t = this.target;
      const dist = p.pos.distanceTo(t.pos);
      p.fireHeld = false;

      if (p.weapon && p.weapon.ammo === 0 && p.weapon.reserve > 0 && p.reloadEnd <= 0) p.reload();

      // 转向目标（带宽误差的平滑跟随）
      const eye = new THREE.Vector3(p.pos.x, p.eyeY(), p.pos.z);
      const aimPoint = new THREE.Vector3(
        t.pos.x,
        t.pos.y + (this.skill > 0.6 ? 58 : 46),
        t.pos.z,
      );
      const to = aimPoint.clone().sub(eye);
      const desiredYaw = Math.atan2(-to.x, -to.z);
      const desiredPitch = Math.asin(clamp(to.clone().normalize().y, -1, 1));

      // 瞄准速度与误差
      const turnRate = (3.6 + this.skill * 7.5) * (this.targetVisible ? 1 : 0.45);
      const errYaw = ((Math.random() - 0.5) * 2 * this.aimError) * D2R;
      const errPitch = ((Math.random() - 0.5) * 2 * this.aimError * 0.7) * D2R;

      p.yaw = approachAngle(p.yaw, desiredYaw + errYaw, turnRate * dt);
      p.pitch = approachValue(p.pitch, desiredPitch + errPitch, turnRate * 0.75 * dt);

      // 移动：远距离推进 → 中距离短暂站定对枪（超过 1.6s 必须换位）→ 近距离压上
      if (dist > 1700) {
        this.moveToward(this.lastSeen || t.pos, cmd, 1);
        this.holdTime = 0;
      } else if (dist > 850) {
        this.holdTime = (this.holdTime || 0) + dt;
        if (this.holdTime < 1.5) {
          cmd.forward = 0; cmd.side = 0;
        } else {
          this.strafeMove(dt, cmd, 0.7);
          if (this.holdTime > 2.8) this.holdTime = 0;
        }
      } else if (dist > 400) {
        this.strafeMove(dt, cmd, 0.6);
        this.holdTime = 0;
      } else {
        this.strafeMove(dt, cmd, 0.85);
        this.holdTime = 0;
      }
      // 偶尔蹲下压枪
      if (dist > 900 && this.game.time > this.crouchUntil && Math.random() < 0.015) {
        this.crouchUntil = this.game.time + 0.9;
      }
      cmd.duck = this.game.time < this.crouchUntil;

      // 开火
      const def = p.weaponDef;
      if (this.targetVisible && this.game.time > this.reactionAt) {
        const aimOk = Math.abs(angleDiff(p.yaw, desiredYaw)) < (5 + this.skill * 4) * D2R;
        const facing = Math.abs(angleDiff(p.yaw, desiredYaw)) < 20 * D2R;
        const speedNow = Math.hypot(p.vel.x, p.vel.z);
        const steadyEnough = dist < 500 || speedNow < 130;
        const hasAmmo = p.weapon && (p.weapon.ammo > 0 || p.weapon.reserve > 0);
        if (aimOk && facing && steadyEnough && hasAmmo && dist < 2100 && p.curSlot !== 'grenade') {
          if (this.game.time > this.burstPauseUntil) {
            if (this.game.time > this.burstUntil) {
              const burstLen = 0.12 + Math.random() * (0.18 + this.skill * 0.4);
              this.burstUntil = this.game.time + burstLen;
              this.burstPauseUntil = this.burstUntil + 0.08 + Math.random() * (0.5 - this.skill * 0.25);
            }
            p.fireHeld = true;
            if (!def || !def.auto) p.tryFire();
          }
        }
      }
      return;
    }

    // ---------- 无目标：执行目标行为 ----------
    p.fireHeld = false;
    this.holdTime = 0;
    cmd.duck = this.game.time < this.crouchUntil;

    // 安放 / 拆除
    if (p.team === 'T' && p.hasBomb) {
      const site = this.game.map.siteAt(p.pos.x, p.pos.z);
      if (site) {
        p.wantUse = true;
        cmd.forward = 0; cmd.side = 0;
        // 轻微调整面向
        this.moveToward(null, cmd, 0);
        return;
      } else if (this.goalKind !== 'site') {
        this.goalKind = 'site';
        this.goal = this.pickSite();
        this.repath();
      }
    }
    if (p.team === 'CT' && bomb.state === 'planted') {
      const d = Math.hypot(bomb.pos.x - p.pos.x, bomb.pos.z - p.pos.z);
      if (d < 60) {
        p.wantUse = true;
        cmd.forward = 0; cmd.side = 0;
        return;
      }
      // 优先去拆包
      this.goalKind = 'defuse';
      this.goal = bomb.pos;
      this.followPathTo(bomb.pos, cmd, dt);
      return;
    }

    // 优先回收掉落的 C4
    if (p.team === 'T' && !p.hasBomb && bomb.state === 'dropped') {
      this.goalKind = 'pickup';
      this.goal = bomb.pos.clone();
      this.followPathTo(this.goal, cmd, dt);
      return;
    }

    // 队友刚死/听到枪声时警戒
    if (this.lastSeen && this.game.time - this.lastSeenTime < 4) {
      this.moveToward(this.lastSeen, cmd, 0.8);
      return;
    }

    // 走向目标
    if (this.goal) {
      const dGoal = Math.hypot(this.goal.x - p.pos.x, this.goal.z - p.pos.z);
      if (dGoal < 160 && (this.goalKind === 'defend' || this.goalKind === 'site')) {
        // 已到点：原地守点并左右扫视
        cmd.forward = 0; cmd.side = 0;
        p.yaw += Math.sin(this.game.time * 0.55 + this.skill * 9) * dt * 0.5;
      } else {
        this.followPathTo(this.goal, cmd, dt);
      }
    } else {
      cmd.forward = 0;
    }
  }

  chooseGoal() {
    const p = this.p;
    const round = this.game.round;
    if (p.team === 'T') {
      this.goalKind = 'site';
      this.goal = this.pickSite();
    } else {
      // CT：防守点位（A/B 各分人）
      this.goalKind = 'defend';
      const teammates = this.game.players.filter((x) => x.team === 'CT' && x.alive);
      const idx = teammates.indexOf(p);
      this.goal = idx % 2 === 0
        ? this.siteCenter('A')
        : this.siteCenter('B');
      if (round.bomb.state === 'planted') this.goal = round.bomb.pos;
    }
    this.repath();
  }

  pickSite() {
    // 团队统一集火：优先没有敌人刚出现的点
    if (this.game.round.tBombsite) return this.siteCenter(this.game.round.tBombsite);
    const pick = Math.random() < 0.5 ? 'A' : 'B';
    this.game.round.tBombsite = pick;
    return this.siteCenter(pick);
  }

  siteCenter(k) {
    const s = this.game.map.sites[k];
    return new THREE.Vector3((s.x0 + s.x1) / 2, 0, (s.z0 + s.z1) / 2);
  }

  repath() {
    if (!this.goal) return;
    this.path = this.game.map.findPath(this.p.pos, this.goal);
    this.pathIdx = 0;
    this.repathAt = this.game.time + 2.0;
  }

  followPathTo(goal, cmd, dt) {
    const p = this.p;
    if (!this.path || this.game.time > this.repathAt) this.repath();
    if (!this.path || this.path.length === 0) {
      this.moveToward(goal, cmd, 1);
      return;
    }
    // 跳过已到达的节点
    while (this.pathIdx < this.path.length) {
      const n = this.path[this.pathIdx];
      if (Math.hypot(n.x - p.pos.x, n.z - p.pos.z) < 55) this.pathIdx++;
      else break;
    }
    const node = this.path[this.pathIdx] || goal;
    this.moveToward(node, cmd, 1);
    this.checkStuck(dt);
  }

  checkStuck(dt) {
    const p = this.p;
    const moved = Math.hypot(p.pos.x - this.lastPos.x, p.pos.z - this.lastPos.z);
    this.lastPos.set(p.pos.x, 0, p.pos.z);
    if (moved < 0.6) {
      this.stuckTimer += dt;
      if (this.stuckTimer > 0.5) {
        this.path = null;
        this.repathAt = 0;
        this.stuckTimer = 0;
      }
    } else {
      this.stuckTimer = 0;
    }
  }

  // 朝世界坐标移动（与当前朝向解耦）
  moveToward(worldPos, cmd, scale = 1) {
    if (!worldPos) { cmd.forward = 0; cmd.side = 0; return; }
    const p = this.p;
    const dx = worldPos.x - p.pos.x;
    const dz = worldPos.z - p.pos.z;
    const l = Math.hypot(dx, dz) || 1;
    const wx = (dx / l) * scale, wz = (dz / l) * scale;
    const sinY = Math.sin(p.yaw), cosY = Math.cos(p.yaw);
    cmd.forward = wx * -sinY + wz * -cosY;
    cmd.side = wx * cosY + wz * -sinY;
    // 走位时身体朝移动方向（未交战时）
    if (!this.target) {
      const desired = Math.atan2(-dx, -dz);
      p.yaw = approachAngle(p.yaw, desired, 6.5 * 0.016);
    }
  }

  strafeMove(dt, cmd, intensity) {
    const p = this.p;
    if (this.game.time > this.strafeUntil) {
      this.strafeUntil = this.game.time + 0.35 + Math.random() * 0.6;
      this.strafeDir = Math.random() < 0.5 ? -1 : 1;
    }
    cmd.side = this.strafeDir * intensity;
    cmd.forward = (Math.random() < 0.25 ? 0.6 : 0) - (Math.random() < 0.1 ? 0.5 : 0);
  }
}

function angleDiff(a, b) {
  let d = a - b;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}

function approachAngle(cur, target, maxStep) {
  const d = angleDiff(target, cur);
  if (Math.abs(d) <= maxStep) return target;
  return cur + Math.sign(d) * maxStep;
}

function approachValue(cur, target, maxStep) {
  if (Math.abs(target - cur) <= maxStep) return target;
  return cur + Math.sign(target - cur) * maxStep;
}
