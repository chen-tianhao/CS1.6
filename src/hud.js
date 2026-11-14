// ============================================================
//  hud.js — HUD / 雷达 / 购买菜单 / 计分板
// ============================================================
import { WEAPONS, GEAR, BUY_MENU, TEAM_WEAPONS, TILE, GRID, WORLD_HALF, RULES } from './config.js';
import { buyItem } from './round.js';
import * as Sfx from './audio.js';

const $ = (id) => document.getElementById(id);

export class HUD {
  constructor(game) {
    this.game = game;
    this.buyOpen = false;
    this.buyCat = 'rifles';
    this.announceTimer = 0;
    this.toasts = [];
    this.kf = [];
    this.radarStatic = null;

    this.el = {
      hud: $('hud'),
      health: $('health'), armor: $('armor'), money: $('money'),
      ammo: $('ammo'), reserve: $('reserve'), weaponName: $('weapon-name'),
      weaponSwitch: $('weapon-switch'), gearRow: $('gear-row'),
      timer: $('round-timer'), phase: $('round-phase'),
      scoreT: $('score-t'), scoreCT: $('score-ct'),
      aliveT: $('alive-t'), aliveCT: $('alive-ct'),
      killfeed: $('killfeed'), toasts: $('toasts'), announce: $('announce'),
      progressWrap: $('progress-wrap'), progressLabel: $('progress-label'),
      progressBar: $('progress-bar').firstElementChild,
      banner: $('round-banner'), result: $('round-result'), reason: $('round-reason'),
      rbCT: $('rb-ct'), rbT: $('rb-t'),
      death: $('deathnotify'), deathSub: $('death-sub'),
      crosshair: $('crosshair'), hitmarker: $('hitmarker'),
      damage: $('damage-vignette'), flash: $('flash-overlay'),
      scope: $('scope-overlay'), radar: $('radar'),
      fps: $('fps'), hint: $('hint-bar'),
      buy: $('buymenu'), buyCats: $('buy-cats'), buyItems: $('buy-items'),
      buyTimer: $('buy-timer'), buyMoney: $('buy-money'),
      scoreboard: $('scoreboard'), sbCT: $('sb-ct'), sbT: $('sb-t'),
      sbCTList: $('sb-ct-list'), sbTList: $('sb-t-list'),
    };
    this.buildRadarStatic();
    this.bindBuyEvents();
  }

  // ---------------- 雷达底图 ----------------
  buildRadarStatic() {
    const map = this.game.map;
    const S = 200;
    // 只画可行走区域的包围盒，雷达才够清楚
    let minC = GRID, maxC = -1, minR = GRID, maxR = -1;
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        if (!map.isFloorTile(c, r)) continue;
        if (c < minC) minC = c;
        if (c > maxC) maxC = c;
        if (r < minR) minR = r;
        if (r > maxR) maxR = r;
      }
    }
    if (maxC < 0) { minC = 0; maxC = GRID - 1; minR = 0; maxR = GRID - 1; }
    const wT = maxC - minC + 1, hT = maxR - minR + 1;
    const pad = 6;
    const cell = (S - pad * 2) / Math.max(wT, hT);
    const offX = (S - wT * cell) / 2 - minC * cell;
    const offY = (S - hT * cell) / 2 - minR * cell;
    this.rv = { S, cell, offX, offY };

    const c = document.createElement('canvas');
    c.width = c.height = S;
    const x = c.getContext('2d');
    x.clearRect(0, 0, S, S);

    for (let r = minR; r <= maxR; r++) {
      for (let cc = minC; cc <= maxC; cc++) {
        if (!map.isFloorTile(cc, r)) continue;
        const blocked = map.blocked[r * GRID + cc] === 1;
        const px = offX + cc * cell, py = offY + r * cell;
        x.fillStyle = blocked ? 'rgba(120,110,86,.45)' : 'rgba(198,192,160,.55)';
        x.fillRect(px, py, cell + 0.6, cell + 0.6);
      }
    }
    // 边缘描线，突出墙体轮廓
    x.strokeStyle = 'rgba(40,44,34,.85)';
    x.lineWidth = 1;
    for (let r = minR; r <= maxR; r++) {
      for (let cc = minC; cc <= maxC; cc++) {
        if (!map.isFloorTile(cc, r)) continue;
        const px = offX + cc * cell, py = offY + r * cell;
        if (!map.isFloorTile(cc, r - 1)) { x.beginPath(); x.moveTo(px, py); x.lineTo(px + cell, py); x.stroke(); }
        if (!map.isFloorTile(cc, r + 1)) { x.beginPath(); x.moveTo(px, py + cell); x.lineTo(px + cell, py + cell); x.stroke(); }
        if (!map.isFloorTile(cc - 1, r)) { x.beginPath(); x.moveTo(px, py); x.lineTo(px, py + cell); x.stroke(); }
        if (!map.isFloorTile(cc + 1, r)) { x.beginPath(); x.moveTo(px + cell, py); x.lineTo(px + cell, py + cell); x.stroke(); }
      }
    }

    x.font = 'bold 15px Arial';
    x.textAlign = 'center';
    x.textBaseline = 'middle';
    // 包点从地图数据读，不写死 A/B
    Object.keys(map.sites).forEach((key, idx) => {
      const s2 = map.sites[key];
      if (!s2) return;
      const px = offX + ((s2.x0 + s2.x1) / 2 + WORLD_HALF) / TILE * cell;
      const py = offY + ((s2.z0 + s2.z1) / 2 + WORLD_HALF) / TILE * cell;
      x.fillStyle = 'rgba(20,24,16,.55)';
      x.beginPath(); x.arc(px, py, 9, 0, 7); x.fill();
      x.fillStyle = idx === 0 ? 'rgba(240,200,120,.95)' : 'rgba(150,195,235,.95)';
      x.fillText(key, px, py + 1);
    });
    this.radarStatic = c;
  }

  worldToRadar(x, z) {
    const { cell, offX, offY } = this.rv;
    return {
      x: offX + ((x + WORLD_HALF) / TILE) * cell,
      y: offY + ((z + WORLD_HALF) / TILE) * cell,
    };
  }

  // ---------------- 每帧 ----------------
  update(dt) {
    const g = this.game;
    const p = g.localPlayer;
    const r = g.round;

    // 计时
    const t = r.phase === 'freeze' ? RULES.roundTime : Math.max(0, r.time);
    const mm = Math.floor(t / 60);
    const ss = Math.floor(t % 60);
    this.el.timer.textContent = `${mm}:${ss.toString().padStart(2, '0')}`;
    this.el.timer.classList.toggle('low', t < 20 && r.phase === 'live');
    this.el.phase.textContent = r.phase === 'freeze' ? '准备' : r.phase === 'live' ? '交战中' : r.phase === 'over' ? '回合结束' : '比赛结束';
    this.el.scoreT.textContent = r.scoreT;
    this.el.scoreCT.textContent = r.scoreCT;

    // 存活人数
    this.renderAlive();

    if (p) {
      this.el.health.textContent = Math.max(0, Math.ceil(p.health));
      this.el.health.classList.toggle('low', p.health <= 25);
      this.el.armor.textContent = Math.ceil(p.armor);
      this.el.money.textContent = `$${p.money}`;

      const def = p.weaponDef;
      if (p.curSlot === 'grenade') {
        this.el.ammo.textContent = '--';
        this.el.reserve.textContent = '';
        this.el.weaponName.textContent = p.grenadeSel === 'he' ? 'HE Grenade' : p.grenadeSel === 'flash' ? 'Flashbang' : 'Smoke';
      } else {
        this.el.ammo.textContent = def && def.cls !== 'melee' ? p.currentAmmo() : '--';
        this.el.reserve.textContent = def && def.cls !== 'melee' ? p.reserveAmmo() : '';
        this.el.weaponName.textContent = def ? def.name : '—';
      }

      // 装备栏
      const gear = [];
      if (p.armor > 0) gear.push(p.helmet ? 'KEV+HELM' : 'KEVLAR');
      if (p.hasKit) gear.push('KIT');
      if (p.hasBomb) gear.push('C4');
      const gr = [];
      for (const k of ['he', 'flash', 'smoke']) {
        if (p.grenades[k] > 0) gr.push(`${k.toUpperCase()}×${p.grenades[k]}`);
      }
      this.el.gearRow.innerHTML = [...gear, ...gr].map((s) => `<span>${s}</span>`).join('');

      // 准星
      this.updateCrosshair(p, def);

      // 闪光
      this.el.flash.style.opacity = Math.min(1, p.flashAmount).toFixed(2);

      // 开镜
      const scoped = p.zoom > 0;
      this.el.scope.classList.toggle('hidden', !scoped);
      this.el.crosshair.classList.toggle('hide', scoped || !p.alive);

      // 死亡
      this.el.death.classList.toggle('hidden', p.alive || r.phase === 'over');
    }

    // 回合横幅
    if (this.announceTimer > 0) {
      this.announceTimer -= dt;
      if (this.announceTimer <= 0) this.el.announce.classList.remove('show');
    }

    this.updateToasts(dt);
    this.drawRadar();
    this.el.fps.textContent = g.settings.showFps ? `${Math.round(g.fps)} FPS` : '';

    // 购买倒计时
    if (this.buyOpen) {
      this.el.buyTimer.textContent = Math.max(0, Math.ceil(g.buyTimeLeft()));
      this.el.buyMoney.textContent = `$${p ? p.money : 0}`;
    }
  }

  updateCrosshair(p, def) {
    const s = this.game.settings;
    const speed = Math.hypot(p.vel.x, p.vel.z);
    const spreadDeg = def ? (p.computeSpread(def) * 180) / Math.PI : 0;
    const gap = s.crosshairGap + speed * 0.035 + Math.min(spreadDeg, 12) * 2.2;
    const ch = this.el.crosshair.style;
    ch.setProperty('--ch-color', s.crosshair);
    ch.setProperty('--ch-size', `${s.crosshairSize}px`);
    ch.setProperty('--ch-gap', `${gap.toFixed(1)}px`);
  }

  renderAlive() {
    const g = this.game;
    const tAlive = g.players.filter((x) => x.team === 'T');
    const ctAlive = g.players.filter((x) => x.team === 'CT');
    const mk = (arr) => arr.map((x) => `<i class="${x.alive ? 'on' : 'dead'}"></i>`).join('');
    this.el.aliveT.innerHTML = mk(tAlive);
    this.el.aliveCT.innerHTML = mk(ctAlive);
  }

  drawRadar() {
    const g = this.game;
    const cv = this.el.radar;
    const ctx = cv.getContext('2d');
    const S = cv.width;
    ctx.clearRect(0, 0, S, S);
    ctx.drawImage(this.radarStatic, 0, 0);

    // 炸弹
    const b = g.round.bomb;
    if (b.state === 'planted' || b.state === 'dropped') {
      const pt = this.worldToRadar(b.pos.x, b.pos.z, S);
      ctx.fillStyle = b.state === 'planted' ? (Math.floor(g.time * 4) % 2 ? '#ff4433' : '#ffaa33') : '#ffcc66';
      ctx.fillRect(pt.x - 3, pt.y - 3, 6, 6);
    }

    const p = g.localPlayer;
    // 队友
    for (const pl of g.players) {
      if (!pl.alive) continue;
      const pt = this.worldToRadar(pl.pos.x, pl.pos.z, S);
      if (pl === p) continue;
      if (pl.team === p.team) {
        ctx.fillStyle = pl === g.spectating ? 'rgba(120,255,140,.95)' : 'rgba(150,200,240,.85)';
        ctx.beginPath(); ctx.arc(pt.x, pt.y, 3, 0, 7); ctx.fill();
      } else if (g.isSpotted(pl)) {
        ctx.fillStyle = 'rgba(240,90,60,.95)';
        ctx.beginPath(); ctx.arc(pt.x, pt.y, 3.2, 0, 7); ctx.fill();
      }
    }
    // 自己（箭头）
    if (p) {
      const pt = this.worldToRadar(p.pos.x, p.pos.z, S);
      ctx.save();
      ctx.translate(pt.x, pt.y);
      ctx.rotate(-p.yaw);
      ctx.fillStyle = 'rgba(255,245,200,.95)';
      ctx.beginPath();
      ctx.moveTo(0, -6); ctx.lineTo(4.6, 5); ctx.lineTo(0, 2.6); ctx.lineTo(-4.6, 5);
      ctx.closePath(); ctx.fill();
      ctx.restore();
      // 视野方向光
      ctx.save();
      ctx.translate(pt.x, pt.y);
      ctx.rotate(-p.yaw);
      const grad = ctx.createLinearGradient(0, 0, 0, -40);
      grad.addColorStop(0, 'rgba(255,240,180,.16)');
      grad.addColorStop(1, 'rgba(255,240,180,0)');
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-22, -42); ctx.lineTo(22, -42); ctx.closePath(); ctx.fill();
      ctx.restore();
    }
  }

  // ---------------- 事件 ----------------
  hitMarker(headshot) {
    const h = this.el.hitmarker;
    h.classList.remove('show');
    void h.offsetWidth;
    h.classList.add('show');
    h.style.filter = headshot ? 'drop-shadow(0 0 4px #ff5533)' : 'none';
  }

  damageFlash(amount) {
    const el = this.el.damage;
    el.style.opacity = Math.min(0.9, 0.25 + amount / 90).toFixed(2);
    clearTimeout(this._dmgT);
    this._dmgT = setTimeout(() => { el.style.opacity = 0; }, 140);
  }

  killfeed(killer, victim, weaponId, headshot, kTeam, vTeam) {
    const wname = weaponId === 'c4' ? 'C4' : weaponId === 'hegrenade' ? 'HE' : (WEAPONS[weaponId]?.name || weaponId);
    const div = document.createElement('div');
    div.className = 'kf';
    div.innerHTML = `<span class="n ${kTeam || ''}">${killer}</span>
      <span class="w">[${wname}${headshot ? ' · HS' : ''}]</span>
      <span class="n ${vTeam}">${victim}</span>`;
    this.el.killfeed.appendChild(div);
    this.kf.push({ el: div, t: 6 });
    if (this.kf.length > 6) {
      const old = this.kf.shift();
      old.el.remove();
    }
  }

  toast(msg) {
    const div = document.createElement('div');
    div.className = 'toast';
    div.textContent = msg;
    this.el.toasts.appendChild(div);
    this.toasts.push({ el: div, t: 2.6 });
    if (this.toasts.length > 4) {
      const old = this.toasts.shift();
      old.el.remove();
    }
  }

  announce(msg, dur = 2.2) {
    this.el.announce.textContent = msg;
    this.el.announce.classList.add('show');
    this.announceTimer = dur;
  }

  updateToasts(dt) {
    for (let i = this.kf.length - 1; i >= 0; i--) {
      this.kf[i].t -= dt;
      if (this.kf[i].t <= 0.5) this.kf[i].el.classList.add('out');
      if (this.kf[i].t <= 0) { this.kf[i].el.remove(); this.kf.splice(i, 1); }
    }
    for (let i = this.toasts.length - 1; i >= 0; i--) {
      this.toasts[i].t -= dt;
      if (this.toasts[i].t <= 0) { this.toasts[i].el.remove(); this.toasts.splice(i, 1); }
    }
  }

  money(delta) {
    const el = this.el.money;
    el.classList.remove('pop');
    void el.offsetWidth;
    el.classList.add('pop');
  }

  setProgress(label, ratio) {
    if (!label) {
      this.el.progressWrap.classList.add('hidden');
      return;
    }
    this.el.progressWrap.classList.remove('hidden');
    this.el.progressLabel.textContent = label;
    this.el.progressBar.style.width = `${Math.min(100, ratio * 100).toFixed(1)}%`;
  }

  roundEnd(winner, text, ct, t) {
    this.el.banner.classList.remove('hidden');
    this.el.result.textContent = text;
    this.el.result.className = winner === 'CT' ? 'ct' : 't';
    this.el.reason.textContent = winner === 'CT' ? '反恐精英' : '恐怖分子';
    this.el.rbCT.textContent = ct;
    this.el.rbT.textContent = t;
    this.el.announce.classList.remove('show');
    setTimeout(() => this.el.banner.classList.add('hidden'), RULES.roundEndDelay * 1000 - 600);
    this.setProgress(null, 0);
  }

  matchEnd(winner, ct, t) {
    this.el.banner.classList.remove('hidden');
    this.el.result.textContent = winner === 'CT' ? '反恐精英 获得比赛胜利' : '恐怖分子 获得比赛胜利';
    this.el.result.className = winner === 'CT' ? 'ct' : 't';
    this.el.reason.textContent = `最终比分 ${ct} : ${t}`;
    this.el.rbCT.textContent = ct;
    this.el.rbT.textContent = t;
    this.toast('按 R 重新开始比赛');
  }

  hint(text) {
    if (!text) {
      this.el.hint.classList.remove('show');
      return;
    }
    this.el.hint.textContent = text;
    this.el.hint.classList.add('show');
  }

  deathNotice(text) {
    this.el.deathSub.textContent = text;
    this.el.death.classList.remove('hidden');
  }

  hideDeath() {
    this.el.death.classList.add('hidden');
  }

  // ---------------- 购买菜单 ----------------
  bindBuyEvents() {
    this.el.buyCats.addEventListener('click', (e) => {
      const t = e.target.closest('.buy-cat');
      if (!t) return;
      this.buyCat = t.dataset.k;
      this.renderBuy();
    });
    this.el.buyItems.addEventListener('click', (e) => {
      const t = e.target.closest('.buy-item');
      if (!t || t.classList.contains('dis')) return;
      this.doBuy(t.dataset.k);
    });
  }

  toggleBuy(force) {
    const open = force != null ? force : !this.buyOpen;
    if (open && !this.game.inBuyZone() && !this.buyOpen) {
      this.toast('必须在出生区购买');
      return;
    }
    this.buyOpen = open;
    this.el.buy.classList.toggle('hidden', !open);
    if (open) {
      Sfx.playUIClick();
      this.renderBuy();
      this.game.releasePointer();
    } else {
      this.game.lockPointer();
    }
  }

  renderBuy() {
    const p = this.game.localPlayer;
    if (!p) return;
    const cats = Object.entries(BUY_MENU);
    this.el.buyCats.innerHTML = cats.map(([k, v], i) => (
      `<div class="buy-cat ${k === this.buyCat ? 'on' : ''}" data-k="${k}">
        <b>${i + 1}</b>${v.title}
      </div>`
    )).join('');

    const list = BUY_MENU[this.buyCat];
    const items = list.items.filter((id) => {
      const def = WEAPONS[id];
      if (def) return TEAM_WEAPONS[p.team].includes(id) && def.price > 0;
      const gear = GEAR[id];
      if (gear && gear.team) return gear.team === p.team;
      return true;
    });
    this.el.buyItems.innerHTML = items.map((id, i) => {
      const def = WEAPONS[id];
      const gear = GEAR[id];
      const price = def ? def.price : gear.price;
      const name = def ? def.name : gear.cn;
      const owned = this.ownsAlready(id, p);
      const poor = p.money < price;
      const cls = owned ? 'dis' : poor ? 'poor' : '';
      return `<div class="buy-item ${cls}" data-k="${id}">
        <span class="bi-name">${i + 1}. ${name}<small>${def ? def.cls.toUpperCase() : 'GEAR'}</small></span>
        <span class="bi-price">${owned ? '已拥有' : '$' + price}</span>
      </div>`;
    }).join('');
    this.el.buyItems.dataset.items = items.join(',');
  }

  ownsAlready(id, p) {
    const def = WEAPONS[id];
    if (def) {
      if (def.slot === 1) return !!p.slots.primary && p.slots.primary.id === id;
      if (def.slot === 2) return !!p.slots.secondary && p.slots.secondary.id === id;
      return false;
    }
    if (id === 'kevlar') return p.armor >= 100;
    if (id === 'kevlarhelm') return p.armor >= 100 && p.helmet;
    if (id === 'defusekit') return p.hasKit;
    const gear = GEAR[id];
    if (gear && gear.grenade) return p.grenades[gear.grenade] >= 2;
    return false;
  }

  doBuy(id) {
    const p = this.game.localPlayer;
    if (!p) return;
    const ok = buyItem(this.game, p, id);
    if (ok) {
      this.toast(`已购买 ${WEAPONS[id]?.name || GEAR[id]?.cn || id}`);
      this.renderBuy();
    }
  }

  // 键盘：1-6 切分类，1-8 买物品（数字直接买当前分类第 N 项）
  handleBuyKey(code) {
    const n = parseInt(code.replace('Digit', ''), 10);
    if (!Number.isNaN(n) && n >= 1 && n <= 9) {
      const items = (this.el.buyItems.dataset.items || '').split(',').filter(Boolean);
      const id = items[n - 1];
      if (id) this.doBuy(id);
    }
  }

  // ---------------- 计分板 ----------------
  toggleScoreboard(show) {
    this.el.scoreboard.classList.toggle('hidden', !show);
    if (show) this.renderScoreboard();
  }

  renderScoreboard() {
    const g = this.game;
    this.el.sbCT.textContent = g.round.scoreCT;
    this.el.sbT.textContent = g.round.scoreT;
    const row = (p) => `<div class="row ${p === g.localPlayer ? 'me' : ''} ${p.alive ? '' : 'dead'}">
      <span class="nm"><i>${p.isBot ? 'BOT' : 'YOU'}</i>${p.name}</span>
      <span class="v">${p.kills}</span>
      <span class="v">${p.deaths}</span>
      <span class="v">${Math.round(p.damageDealt)}</span>
      <span class="v">$${p.money}</span>
    </div>`;
    const ct = g.players.filter((p) => p.team === 'CT').sort((a, b) => b.kills - a.kills);
    const t = g.players.filter((p) => p.team === 'T').sort((a, b) => b.kills - a.kills);
    this.el.sbCTList.innerHTML = `<div class="hdr">COUNTER-TERRORISTS</div>` + ct.map(row).join('');
    this.el.sbTList.innerHTML = `<div class="hdr">TERRORISTS</div>` + t.map(row).join('');
  }
}
