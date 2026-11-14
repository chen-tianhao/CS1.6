// ============================================================
//  round.js — 回合状态机 / 经济 / C4
// ============================================================
import * as THREE from 'three';
import { RULES, WEAPONS, GEAR } from './config.js';
import { fx } from './fx.js';
import { applyDamage } from './weapons.js';
import * as Sfx from './audio.js';

export class Round {
  constructor(game) {
    this.game = game;
    this.phase = 'idle';      // idle | freeze | live | over | matchend
    this.time = 0;
    this.roundNum = 0;
    this.scoreCT = 0;
    this.scoreT = 0;
    this.lossStreak = { CT: 0, T: 0 };
    this.bomb = {
      state: 'carried',       // carried | dropped | planted | defused | exploded
      pos: new THREE.Vector3(),
      carrier: null,
      timer: 0,
      beep: 0,
      planter: null,
      defuser: null,
      site: null,
    };
    this.lastResult = null;
    this.tBombsite = null;
    this.bombMesh = null;
    this.winTarget = RULES.winRounds;   // 加时会把目标分抬高
    this.overtime = 0;
    this.otRoundsPlayed = 0;
  }

  // ---------- 回合控制 ----------
  startMatch() {
    this.roundNum = 0;
    this.scoreCT = 0;
    this.scoreT = 0;
    this.lossStreak = { CT: 0, T: 0 };
    this.winTarget = RULES.winRounds;
    this.overtime = 0;
    this.otRoundsPlayed = 0;
    for (const p of this.game.players) {
      p.money = RULES.startMoney;
      p.kills = 0; p.deaths = 0; p.damageDealt = 0;
      p.resetInventory();
      p.giveWeapon(p.team === 'T' ? 'glock18' : 'usp45');
    }
    this.startRound(true);
  }

  startRound(firstRound = false) {
    this.roundNum++;
    this.roundTimeLeft = RULES.roundTime;
    this.phase = 'freeze';
    this.time = RULES.freezeTime;
    this.tBombsite = null;
    this.lastResult = null;

    // 重置 C4
    this.bomb.state = 'carried';
    this.bomb.timer = 0;
    this.bomb.carrier = null;
    this.bomb.planter = null;
    this.bomb.defuser = null;
    this.bomb.beep = 0;
    if (this.bombMesh) { this.game.scene.remove(this.bombMesh); this.bombMesh = null; }

    // 出生
    const spawnIdx = { T: 0, CT: 0 };
    const order = this.game.players.slice().sort(() => Math.random() - 0.5);
    for (const p of order) {
      const list = this.game.map.spawns[p.team];
      const pt = list[spawnIdx[p.team]++ % list.length];
      // 1.6：死了装备带不走，活下来的保留
      if (!p.alive) {
        p.resetInventory();
        p.giveWeapon(p.team === 'T' ? 'glock18' : 'usp45');
      }
      p.spawnAt(pt);
      p.plantProgress = 0;
      p.defuseProgress = 0;
      p.wantUse = false;
      p.fireHeld = false;
      p.flashAmount = 0;
      p.curSlot = p.slots.primary ? 'primary' : p.slots.secondary ? 'secondary' : 'melee';
      p.deployTime = 0.6;
    }

    // 分配 C4
    const ts = this.game.players.filter((p) => p.team === 'T');
    if (ts.length) {
      const carrier = ts[Math.floor(Math.random() * ts.length)];
      carrier.hasBomb = true;
      this.bomb.carrier = carrier;
    }

    this.game.botsBuy();
    if (this.game.localPlayer && this.game.localPlayer.team === 'T' && this.game.localPlayer.hasBomb) {
      this.game.hud.toast('你携带了 C4 —— 到 A / B 点按 E 安放');
    }
    Sfx.playRoundStart();
    this.game.hud.announce(`第 ${this.roundNum} 回合 · 准备`);
  }

  endRound(winner, reason) {
    if (this.phase === 'over' || this.phase === 'matchend') return;
    this.phase = 'over';
    this.time = RULES.roundEndDelay;
    this.lastResult = { winner, reason };

    if (winner === 'CT') this.scoreCT++;
    else if (winner === 'T') this.scoreT++;

    // 经济结算
    const winTeam = winner;
    const loseTeam = winner === 'CT' ? 'T' : 'CT';
    const bombPlanted = this.bomb.state === 'planted' || this.bomb.state === 'defused' || this.bomb.state === 'exploded';

    for (const p of this.game.players) {
      let reward = 0;
      if (p.team === winTeam) {
        reward += reason === 'bomb' ? RULES.winBombReward : RULES.winReward;
        this.lossStreak[p.team] = 0;
      } else {
        // 连败奖励五档：1400 / 1900 / 2400 / 2900 / 3400（RULES.lossMax）
        const streak = this.lossStreak[p.team] = Math.min(5, this.lossStreak[p.team] + 1);
        reward += Math.min(RULES.lossMax, RULES.lossBase + (streak - 1) * RULES.lossStep);
        if (p.team === 'T' && bombPlanted) reward += RULES.plantBonus;
      }
      p.money = Math.min(RULES.maxMoney, p.money + reward);
    }

    const text = {
      'elim': winner === 'CT' ? '反恐精英获胜 · 全歼敌人' : '恐怖分子获胜 · 全歼敌人',
      'bomb': '恐怖分子获胜 · 目标已摧毁',
      'defuse': '反恐精英获胜 · 炸弹已拆除',
      'time': '反恐精英获胜 · 时间耗尽',
    }[reason] || `${winner} 获胜`;

    this.game.hud.roundEnd(winner, text, this.scoreCT, this.scoreT);
    this.game.hud.setProgress(null, 0);
  }

  nextRound() {
    if (this.scoreCT >= this.winTarget || this.scoreT >= this.winTarget) {
      this.finishMatch();
      return;
    }
    // 常规回合打完
    if (!this.overtime && this.roundNum >= RULES.maxRounds) {
      if (this.scoreCT === this.scoreT) { this.startOvertime(); return; }
      this.finishMatch();
      return;
    }
    // 加时：每半场 overtimeHalf 回合，换边；一轮打完还平就再来一轮
    if (this.overtime) {
      this.otRoundsPlayed += 1;
      if (this.otRoundsPlayed >= RULES.overtimeHalf * 2) { this.startOvertime(); return; }
      if (this.otRoundsPlayed === RULES.overtimeHalf) this.swapSides();
      this.startRound();
      return;
    }
    // 半场换边
    if (this.roundNum === RULES.halftimeRound) {
      this.halftime();
      return;
    }
    this.startRound();
  }

  finishMatch() {
    this.phase = 'matchend';
    const winner = this.scoreCT > this.scoreT ? 'CT' : this.scoreT > this.scoreCT ? 'T' : 'T';
    this.game.hud.matchEnd(winner, this.scoreCT, this.scoreT);
    this.game.localPlayer.fireHeld = false;
  }

  // 交换阵营：比分跟随「阵营」不变，玩家换边
  swapSides() {
    for (const p of this.game.players) {
      p.team = p.team === 'T' ? 'CT' : 'T';
      p.money = Math.min(RULES.maxMoney, p.money);
      p.resetInventory();
      p.giveWeapon(p.team === 'T' ? 'glock18' : 'usp45');
      // 阵营换了，外观要重建成对面的材质；重建前必须先回收旧网格和贴地阴影，
      // 否则阴影会一份份堆在场景里。
      if (p.mesh) {
        this.game.scene.remove(p.mesh);
        if (p._shadow) {
          this.game.scene.remove(p._shadow);
          p._shadow.geometry.dispose();
          p._shadow.material.dispose();
          p._shadow = null;
        }
        p.buildMesh(this.game.scene);
      }
    }
    this.lossStreak = { CT: 0, T: 0 };
  }

  halftime() {
    this.swapSides();
    for (const p of this.game.players) p.money = RULES.startMoney;
    this.game.hud.announce('半场结束 · 交换阵营');
    this.startRound();
  }

  // 加时：钱重置、换边、目标分 = 当前平分 + 4
  startOvertime() {
    this.overtime += 1;
    this.otRoundsPlayed = 0;
    this.winTarget = Math.max(this.scoreCT, this.scoreT) + RULES.overtimeWin;
    this.swapSides();
    for (const p of this.game.players) p.money = RULES.overtimeMoney;
    this.game.hud.announce(`加时赛 ${this.overtime} · 先到 ${RULES.overtimeWin} 分`);
    this.startRound();
  }

  // ---------- 每帧 ----------
  update(dt) {
    const g = this.game;
    if (this.phase === 'idle') return;

    if (this.phase === 'freeze') {
      this.time -= dt;
      if (this.time <= 0) {
        this.phase = 'live';
        this.time = RULES.roundTime;
        g.hud.announce('开始！');
      }
      this.updateBomb(dt);
      return;
    }

    if (this.phase === 'live') {
      this.time -= dt;
      this.updateBomb(dt);
      this.updateObjectives(dt);
      if (this.phase === 'live') this.checkWin();
      return;
    }

    if (this.phase === 'over') {
      this.time -= dt;
      this.updateBomb(dt);
      if (this.time <= 0) this.nextRound();
    }
  }

  // 安放 / 拆除的进度条只属于本地玩家。
  // BOT 也在同一个循环里推进各自进度，但绝不能写进 HUD ——
  // 否则玩家在出生点站着不动也会看到屏幕中央弹出"正在安放 C4"。
  updateObjectives(dt) {
    const g = this.game;
    const lp = g.localPlayer;
    let bar = null;   // { label, ratio }

    // 安放
    for (const p of g.players) {
      if (!p.alive) { p.plantProgress = 0; continue; }
      if (p.team === 'T' && p.hasBomb && p.wantUse && p.onGround) {
        const site = g.map.siteAt(p.pos.x, p.pos.z);
        if (site && this.bomb.state === 'carried') {
          p.plantProgress += dt;
          if (p.plantProgress >= RULES.plantTime) {
            this.plantBomb(p, site);
            continue;
          }
          if (p === lp) bar = { label: '正在安放 C4', ratio: p.plantProgress / RULES.plantTime };
          continue;
        }
      }
      if (!p.wantUse) p.plantProgress = 0;
    }

    // 拆除
    if (this.bomb.state === 'planted') {
      for (const p of g.players) {
        if (!p.alive || p.team !== 'CT') { p.defuseProgress = 0; continue; }
        const d = Math.hypot(this.bomb.pos.x - p.pos.x, this.bomb.pos.z - p.pos.z);
        if (p.wantUse && d < 70) {
          const dur = p.hasKit ? RULES.defuseKitTime : RULES.defuseTime;
          p.defuseProgress += dt;
          if (p.defuseProgress >= dur) {
            this.defuseBomb(p);
            return;
          }
          if (p === lp) {
            bar = {
              label: p.hasKit ? '正在拆除（拆弹器）' : '正在拆除 C4',
              ratio: p.defuseProgress / dur,
            };
          }
        } else if (!p.wantUse) {
          p.defuseProgress = 0;
        }
      }
    } else {
      for (const p of g.players) p.defuseProgress = 0;
    }

    // 每帧都显式设置，避免松手后进度条残留
    g.hud.setProgress(bar ? bar.label : null, bar ? bar.ratio : 0);
  }

  plantBomb(p, site) {
    this.bomb.state = 'planted';
    this.bomb.pos.copy(p.pos);
    this.bomb.pos.y = 4;
    this.bomb.timer = RULES.bombTime;
    this.bomb.site = site;
    this.bomb.planter = p;
    p.hasBomb = false;
    p.plantProgress = 0;
    this.game.hud.setProgress(null, 0);
    this.game.hud.announce(`C4 已在 ${site} 点安放`);
    this.game.hud.toast(`${site} 点炸弹已安放`);

    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(16, 10, 24),
      new THREE.MeshLambertMaterial({ color: 0x2b2b2b }),
    );
    mesh.position.copy(this.bomb.pos);
    this.game.scene.add(mesh);
    this.bombMesh = mesh;
    Sfx.playPlantTick();
  }

  defuseBomb(p) {
    this.bomb.state = 'defused';
    this.game.hud.setProgress(null, 0);
    if (this.bombMesh) { this.game.scene.remove(this.bombMesh); this.bombMesh = null; }
    p.money = Math.min(RULES.maxMoney, p.money + RULES.defuseBonus);
    this.game.hud.announce('炸弹已拆除！');
    this.endRound('CT', 'defuse');
  }

  updateBomb(dt) {
    const b = this.bomb;
    if (b.state === 'planted') {
      b.timer -= dt;
      // 爆闪灯 + 蜂鸣
      b.beep -= dt;
      const interval = Math.max(0.08, b.timer / RULES.bombTime * 1.0);
      if (b.beep <= 0) {
        b.beep = interval;
        Sfx.playBeep(b.timer < 10);
        if (this.bombMesh) this.bombMesh.material.color.setHex(b.timer < 10 ? 0x551111 : 0x2b2b2b);
      }
      if (this.bombMesh) {
        this.bombMesh.rotation.y += dt * 0.5;
      }
      if (b.timer <= 0) {
        b.state = 'exploded';
        if (this.bombMesh) { this.game.scene.remove(this.bombMesh); this.bombMesh = null; }
        fx.explosion(b.pos.clone(), 500);
        for (const p of this.game.players) {
          if (!p.alive) continue;
          const d = Math.hypot(p.pos.x - b.pos.x, p.pos.z - b.pos.z);
          if (d < 620) {
            const dmg = Math.max(20, 500 * (1 - d / 620));
            p.takeDamage(dmg, b.planter, 'chest', 'c4');
          }
        }
        this.endRound('T', 'bomb');
      }
    }
    // 携带者死亡 → 掉落
    if (b.state === 'carried' && b.carrier && !b.carrier.alive) {
      b.state = 'dropped';
      b.pos.copy(b.carrier.pos);
      b.pos.y = 6;
      this.game.hud.toast('C4 掉落了');
    }
    if (b.state === 'dropped') {
      for (const p of this.game.players) {
        if (!p.alive || p.team !== 'T') continue;
        if (Math.hypot(p.pos.x - b.pos.x, p.pos.z - b.pos.z) < 55) {
          p.hasBomb = true;
          b.state = 'carried';
          b.carrier = p;
          this.game.hud.toast(`${p.name} 拾起了 C4`);
          break;
        }
      }
    }
  }

  checkWin() {
    const aliveT = this.game.players.filter((p) => p.team === 'T' && p.alive).length;
    const aliveCT = this.game.players.filter((p) => p.team === 'CT' && p.alive).length;
    const planted = this.bomb.state === 'planted';

    if (aliveT === 0 && this.bomb.state !== 'planted') {
      this.endRound('CT', 'elim');
      return;
    }
    if (aliveCT === 0) {
      this.endRound('T', 'elim');
      return;
    }
    if (this.time <= 0) {
      if (!planted) this.endRound('CT', 'time');
    }
  }

  // ---------- 击杀结算 ----------
  onKill(victim, attacker, weaponId, headshot) {
    const g = this.game;
    victim.deaths++;
    // 掉枪：主武器和手枪都落在尸体处，走过去就能捡
    g.dropWeapon(victim, 'primary');
    g.dropWeapon(victim, 'secondary');
    if (attacker && attacker !== victim) {
      attacker.kills++;
      const def = WEAPONS[weaponId];
      let reward = def ? def.kill : 300;
      if (def && def.cls === 'melee') reward = 1500;
      attacker.money = Math.min(RULES.maxMoney, attacker.money + reward);
      if (attacker === g.localPlayer) {
        g.hud.money(reward);
      }
    }
    g.hud.killfeed(attacker ? attacker.name : '世界', victim.name, weaponId, headshot, attacker ? attacker.team : null, victim.team);

    // 掉落武器 / C4
    if (victim.hasBomb) {
      this.bomb.state = 'dropped';
      this.bomb.pos.copy(victim.pos);
      this.bomb.pos.y = 6;
      victim.hasBomb = false;
    }
    if (victim === g.localPlayer) {
      g.onLocalDeath(attacker);
      g.hud.spectateTarget = attacker || null;
    }
  }
}

// ---------- 购买 ----------
export function buyItem(game, player, id) {
  const wpn = WEAPONS[id];
  const gear = GEAR[id];
  let price = 0;
  if (wpn) price = wpn.price;
  else if (gear) price = gear.price;
  else return false;

  if (player.money < price) {
    game.hud.toast('资金不足');
    return false;
  }
  if (gear && gear.team && gear.team !== player.team) return false;

  if (wpn) {
    if (wpn.slot === 1) player.slots.primary = { id, def: wpn, ammo: wpn.mag, reserve: wpn.res };
    else player.slots.secondary = { id, def: wpn, ammo: wpn.mag, reserve: wpn.res };
    player.curSlot = wpn.slot === 1 ? 'primary' : 'secondary';
    player.deployTime = 0.45;
    player.reloadEnd = 0;
  } else if (id === 'kevlar') {
    if (player.armor >= 100) return false;
    player.armor = 100;
  } else if (id === 'kevlarhelm') {
    player.armor = 100;
    player.helmet = true;
  } else if (id === 'defusekit') {
    if (player.team !== 'CT' || player.hasKit) return false;
    player.hasKit = true;
  } else if (gear.grenade) {
    const k = gear.grenade;
    if (player.grenades[k] >= 2) return false;
    player.grenades[k]++;
    player.grenadeSel = k;
  }
  player.money -= price;
  Sfx.playPickup();
  return true;
}
