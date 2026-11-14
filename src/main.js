// ============================================================
//  main.js — 引导 / 主循环 / 输入
// ============================================================
import * as THREE from 'three';
import {
  PHYS, RULES, WEAPONS, GEAR, SETTINGS_DEFAULT, BOT_NAMES, TILE, GRID, WORLD_HALF,
} from './config.js';
import { GameMap } from './map.js';
import { getMap, DEFAULT_MAP } from './maps/index.js';
import { setAnisotropy } from './textures.js';
import { Player } from './player.js';
import { BotController } from './bots.js';
import { Round } from './round.js';
import { HUD } from './hud.js';
import { ViewModel } from './viewmodel.js';
import { fx } from './fx.js';
import { tracePlayers } from './weapons.js';
import * as Sfx from './audio.js';

const D2R = Math.PI / 180;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// 键名带 v2：sensitivity 的语义从"倍率"改成了 1.6 的 m_yaw × sensitivity，
// 旧存档里的 1.0 如果直接沿用会慢一半以上，所以干脆不复用旧键。
const SETTINGS_KEY = 'cs16web.settings.v2';

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) return { ...SETTINGS_DEFAULT, ...JSON.parse(raw) };
  } catch (e) { /* ignore */ }
  return { ...SETTINGS_DEFAULT };
}

class Game {
  constructor() {
    this.settings = loadSettings();
    this.players = [];
    this.grenades = [];
    this.time = 0;
    this.fps = 60;
    this.stats = { jumps: 0 };
    this.fx = fx;
    this.paused = false;
    this.started = false;
    this.spectating = null;
    this.enemyCount = 3;
    this.difficulty = 'normal';
    this.keys = {};
    this.suppressPause = false;
    this.lastShotDir = null;
    this.dragLook = false;
    this.dragging = false;
  }

  // ---------- 初始化 ----------
  init() {
    const canvas = document.getElementById('gl');
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    // 渲染分辨率：上限跟随设备 DPR，但允许在掉帧时降到 1.0
    this.maxPixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    this.pixelRatio = Math.min(this.maxPixelRatio, 1.5);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.adaptTimer = 0;
    // 各向异性取 GPU 上限（通常 16），地面斜视时远处清晰度差别很明显
    setAnisotropy(this.renderer.capabilities.getMaxAnisotropy());
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.autoClear = false;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(this.settings.fov, window.innerWidth / window.innerHeight, 1, 9000);
    this.camera.rotation.order = 'YXZ';
    this.scene.add(this.camera);

    this.map = new GameMap(this.scene, getMap(this.settings.map || DEFAULT_MAP));
    const rl = document.querySelector('.radar-label');
    if (rl) rl.textContent = this.map.label;
    fx.init(this.scene, this.camera, this);
    this.hud = new HUD(this);
    this.round = new Round(this);
    this.viewModel = new ViewModel(this);

    this.createLocalPlayer();
    this.bindEvents();
    this.resize();
    window.addEventListener('resize', () => this.resize());

    document.getElementById('loading').classList.add('hidden');
    this.lastT = performance.now();
    requestAnimationFrame((t) => this.loop(t));
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    // 拖到不同 DPR 的显示器时重新取上限，避免渲染分辨率和屏幕不匹配
    this.maxPixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    if (this.pixelRatio > this.maxPixelRatio) {
      this.pixelRatio = this.maxPixelRatio;
      this.renderer.setPixelRatio(this.pixelRatio);
    }
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    if (this.viewModel) this.viewModel.resize(w / h);
  }

  createLocalPlayer() {
    const p = new Player(this, { name: '你', team: 'T', isBot: false, id: 0 });
    p.isLocal = true;
    p.buildMesh(this.scene);
    p.mesh.visible = false;
    p.lastMouseDX = 0;
    p.lastMouseDY = 0;
    this.players = [p];
    this.localPlayer = p;
  }

  // ---------- 队伍 ----------
  createTeams() {
    // 清理旧 BOT
    for (const p of this.players) {
      if (p !== this.localPlayer) {
        if (p.mesh) this.scene.remove(p.mesh);
        if (p._shadow) {
          this.scene.remove(p._shadow);
          p._shadow.geometry.dispose();
          p._shadow.material.dispose();
          p._shadow = null;
        }
      }
    }
    this.players = [this.localPlayer];
    this.grenades = [];
    const lp = this.localPlayer;
    lp.team = 'T';
    lp.resetInventory();
    lp.kills = 0; lp.deaths = 0; lp.damageDealt = 0; lp.money = RULES.startMoney;
    if (lp.mesh) this.scene.remove(lp.mesh);
    if (lp._shadow) {
      this.scene.remove(lp._shadow);
      lp._shadow.geometry.dispose();
      lp._shadow.material.dispose();
      lp._shadow = null;
    }
    lp.buildMesh(this.scene);
    lp.mesh.visible = false;

    const skillMap = { easy: 0.24, normal: 0.46, hard: 0.68, expert: 0.88 };
    const baseSkill = skillMap[this.difficulty] ?? 0.46;
    const used = new Set();
    const pickName = () => {
      for (let i = 0; i < 40; i++) {
        const n = BOT_NAMES[Math.floor(Math.random() * BOT_NAMES.length)];
        if (!used.has(n)) { used.add(n); return n; }
      }
      return `Bot${Math.floor(Math.random() * 900 + 100)}`;
    };

    // 队友（T）：enemyCount - 1
    for (let i = 0; i < this.enemyCount - 1; i++) {
      const b = new Player(this, { name: pickName(), team: 'T', isBot: true, id: i + 1 });
      b.buildMesh(this.scene);
      b.lastMouseDX = 0; b.lastMouseDY = 0;
      b.bot = new BotController(this, b, clamp(baseSkill + (Math.random() - 0.5) * 0.14, 0.15, 0.95));
      this.players.push(b);
    }
    // 敌人（CT）
    for (let i = 0; i < this.enemyCount; i++) {
      const b = new Player(this, { name: pickName(), team: 'CT', isBot: true, id: 100 + i });
      b.buildMesh(this.scene);
      b.lastMouseDX = 0; b.lastMouseDY = 0;
      b.bot = new BotController(this, b, clamp(baseSkill + (Math.random() - 0.5) * 0.14, 0.15, 0.95));
      this.players.push(b);
    }
  }

  startGame() {
    this.createTeams();
    this.round.startMatch();
    this.started = true;
    this.paused = false;
    document.getElementById('mainmenu').classList.add('hidden');
    document.getElementById('hud').classList.remove('hidden');
    document.getElementById('pause').classList.add('hidden');
    this.hud.hideDeath();
    this.hud.hideBanner();
    this.hud.toggleScoreboard(false);
    this.spectating = null;
    Sfx.initAudio();
    Sfx.resumeAudio();
    this.lockPointer();
  }

  restartMatch() {
    document.getElementById('pause').classList.add('hidden');
    this.started = false;
    this.startGame();
  }

  // ---------- 输入 ----------
  bindEvents() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Tab') e.preventDefault();
      if (e.repeat) return;
      this.onKeyDown(e);
    });
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (e.code === 'Tab') {
        this.hud.toggleScoreboard(false);
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.started || this.paused) return;
      const locked = document.pointerLockElement === this.canvas;
      const dragMode = this.dragLook && this.dragging;
      if (!locked && !dragMode) return;
      if (this.hud.buyOpen) return;
      const p = this.localPlayer;
      if (!p) return;
      // 1.6 的鼠标换算：每计数转过的角度 = m_yaw(0.022°) × sensitivity。
      // 这样 sens=3 就和 1.6 默认完全一致，老玩家不用重新适应。
      const sens = this.settings.sensitivity * 0.022 * D2R;
      p.yaw -= e.movementX * sens;
      p.pitch -= e.movementY * sens * (this.settings.invertY ? -1 : 1);
      p.pitch = clamp(p.pitch, -89 * D2R, 89 * D2R);
      p.lastMouseDX += e.movementX;
      p.lastMouseDY += e.movementY;
    });

    this.canvas.addEventListener('mousedown', (e) => {
      if (!this.started) return;
      if (document.pointerLockElement !== this.canvas && !this.dragLook) { this.lockPointer(); return; }
      if (e.button === 0) {
        this.dragging = true;
        this.onFireDown();
      }
      if (e.button === 2) {
        const p = this.localPlayer;
        if (p && p.alive) {
          if (p.curSlot === 'grenade') return;
          p.toggleZoom();
        }
      }
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.dragging = false;
        const p = this.localPlayer;
        if (p) p.fireHeld = false;
      }
    });
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    this.canvas.addEventListener('wheel', (e) => {
      const p = this.localPlayer;
      if (!p || !p.alive) return;
      const order = ['primary', 'secondary', 'melee'];
      const idx = order.indexOf(p.curSlot);
      const next = order[(idx + (e.deltaY > 0 ? 1 : order.length - 1)) % order.length];
      p.switchSlot(next);
    }, { passive: true });

    document.addEventListener('pointerlockerror', () => this.enableDragLook());

    document.addEventListener('pointerlockchange', () => {
      const locked = document.pointerLockElement === this.canvas;
      if (!locked && this.started && !this.hud.buyOpen && !this.suppressPause &&
          this.round.phase !== 'matchend' && !this.paused) {
        this.paused = true;
        document.getElementById('pause').classList.remove('hidden');
        const p = this.localPlayer;
        if (p) p.fireHeld = false;
      }
    });

    document.getElementById('btn-start').addEventListener('click', () => {
      Sfx.initAudio();
      this.startGame();
    });
    document.getElementById('btn-resume').addEventListener('click', () => {
      document.getElementById('pause').classList.add('hidden');
      this.paused = false;
      this.lockPointer();
    });
    document.getElementById('btn-restart').addEventListener('click', () => this.restartMatch());

    // 主菜单选项
    const segBind = (id, cb) => {
      const seg = document.getElementById(id);
      seg.addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        seg.querySelectorAll('button').forEach((x) => x.classList.remove('on'));
        b.classList.add('on');
        cb(b.dataset.v);
        Sfx.playUIClick();
      });
    };
    segBind('seg-diff', (v) => { this.difficulty = v; });
    segBind('seg-size', (v) => { this.enemyCount = parseInt(v, 10); });

    const sens = document.getElementById('set-sens');
    const vol = document.getElementById('set-vol');
    sens.value = this.settings.sensitivity;
    vol.value = this.settings.volume;
    document.getElementById('sens-val').textContent = Number(this.settings.sensitivity).toFixed(2);
    document.getElementById('vol-val').textContent = Number(this.settings.volume).toFixed(2);
    sens.addEventListener('input', () => {
      this.settings.sensitivity = parseFloat(sens.value);
      document.getElementById('sens-val').textContent = this.settings.sensitivity.toFixed(2);
      this.saveSettings();
    });
    vol.addEventListener('input', () => {
      this.settings.volume = parseFloat(vol.value);
      document.getElementById('vol-val').textContent = this.settings.volume.toFixed(2);
      Sfx.setVolume(this.settings.volume);
      this.saveSettings();
    });

    // 准星自定义
    const chInput = document.getElementById('set-chcolor');
    if (chInput) {
      chInput.value = this.settings.crosshair;
      chInput.addEventListener('input', () => {
        this.settings.crosshair = chInput.value;
        this.saveSettings();
      });
    }
  }

  saveSettings() {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings));
    } catch (e) { /* ignore */ }
  }

  onKeyDown(e) {
    const p = this.localPlayer;
    this.keys[e.code] = true;
    if (!this.started) return;

    if (e.code === 'Tab') {
      this.hud.toggleScoreboard(true);
      return;
    }
    if (e.code === 'Escape') {
      if (this.hud.buyOpen) { this.hud.toggleBuy(false); return; }
      return;
    }
    if (this.hud.buyOpen) {
      if (e.code === 'KeyB') { this.hud.toggleBuy(false); return; }
      this.hud.handleBuyKey(e.code);
      return;
    }
    if (!p) return;

    // 比赛结束后按 R 重开
    if (e.code === 'KeyR' && this.round.phase === 'matchend') { this.restartMatch(); return; }

    switch (e.code) {
      case 'KeyB':
        if (p.alive) this.hud.toggleBuy();
        break;
      case 'KeyR':
        if (p.alive) p.reload();
        break;
      case 'Digit1': p.switchSlot('primary'); break;
      case 'Digit2': p.switchSlot('secondary'); break;
      case 'Digit3': p.switchSlot('melee'); break;
      case 'Digit4': p.switchSlot('grenade'); break;
      case 'KeyQ': {
        // 上一把武器：主武器 ↔ 手枪
        if (p.curSlot === 'primary' && p.slots.secondary) p.switchSlot('secondary');
        else if (p.curSlot === 'secondary' && p.slots.primary) p.switchSlot('primary');
        break;
      }
      default: break;
    }

  }

  onFireDown() {
    const p = this.localPlayer;
    if (!p || !p.alive) {
      // 死亡状态下切换观察目标
      this.cycleSpectate();
      return;
    }
    p.fireHeld = true;
    p.tryFire();
  }

  lockPointer() {
    if (document.pointerLockElement === this.canvas) return;
    if (this.dragLook) return;
    if (!this.canvas.requestPointerLock) { this.enableDragLook(); return; }
    try {
      const p = this.canvas.requestPointerLock();
      if (p && p.catch) p.catch(() => this.enableDragLook());
    } catch (err) {
      this.enableDragLook();
    }
  }

  enableDragLook() {
    if (this.dragLook) return;
    this.dragLook = true;
    this.hud.toast('鼠标锁定不可用：按住左键拖动可转动视角');
  }

  releasePointer() {
    this.suppressPause = true;
    document.exitPointerLock();
    setTimeout(() => { this.suppressPause = false; }, 100);
  }

  // ---------- 服务接口 ----------
  listenerPos() {
    // 用摄像机而非玩家坐标：死亡观战时听觉中心要跟着视角走，
    // 否则爆炸声会从"自己尸体"的方向传来。
    const c = this.camera;
    if (!c) return { x: 0, y: 0, z: 0, yaw: 0 };
    return { x: c.position.x, y: c.position.y, z: c.position.z, yaw: c.rotation.y };
  }

  tracePlayers(origin, dir, maxDist, shooter) {
    return tracePlayers(this, origin, dir, maxDist, shooter);
  }

  inBuyZone() {
    const p = this.localPlayer;
    if (!p || !p.alive) return false;
    if (this.buyTimeLeft() <= 0) return false;
    const spawns = this.map.spawns[p.team];
    const cx = spawns.reduce((s, v) => s + v.x, 0) / spawns.length;
    const cz = spawns.reduce((s, v) => s + v.z, 0) / spawns.length;
    return Math.hypot(p.pos.x - cx, p.pos.z - cz) < 900;
  }

  buyTimeLeft() {
    const r = this.round;
    if (r.phase === 'freeze') return r.time;
    if (r.phase === 'live') return Math.max(0, r.time - (RULES.roundTime - RULES.buyTime));
    return 0;
  }

  botsBuy() {
    for (const p of this.players) {
      if (!p.isBot) continue;
      const rifle = p.team === 'T' ? 'ak47' : 'm4a1';
      const money = () => p.money;
      if (!p.slots.primary) {
        if (money() >= 4750 && Math.random() < 0.12) this.botBuy(p, 'awp');
        else if (money() >= WEAPONS[rifle].price) this.botBuy(p, rifle);
        else if (money() >= 1500) this.botBuy(p, 'mp5navy');
        else if (money() >= 650 && Math.random() < 0.5) this.botBuy(p, 'deagle');
      }
      if (p.armor < 100 || !p.helmet) {
        if (money() >= 1000) this.botBuy(p, 'kevlarhelm');
        else if (money() >= 650 && p.armor < 100) this.botBuy(p, 'kevlar');
      }
      if (p.team === 'CT' && !p.hasKit && money() >= 200 && Math.random() < 0.45) this.botBuy(p, 'defusekit');
      if (money() >= 300 && Math.random() < 0.7) this.botBuy(p, 'hegrenade');
      if (money() >= 200 && Math.random() < 0.45) this.botBuy(p, 'flashbang');
      if (money() >= 300 && Math.random() < 0.2) this.botBuy(p, 'smokegrenade');
    }
  }

  botBuy(p, id) {
    const def = WEAPONS[id];
    if (def) {
      if (p.money < def.price) return;
      p.money -= def.price;
      if (def.slot === 1) p.slots.primary = { id, def, ammo: def.mag, reserve: def.res };
      else p.slots.secondary = { id, def, ammo: def.mag, reserve: def.res };
      p.curSlot = def.slot === 1 ? 'primary' : 'secondary';
      return;
    }
    const gear = GEAR[id];
    if (!gear) return;
    if (gear.team && gear.team !== p.team) return;
    if (p.money < gear.price) return;
    p.money -= gear.price;
    if (id === 'kevlar') p.armor = 100;
    else if (id === 'kevlarhelm') { p.armor = 100; p.helmet = true; }
    else if (id === 'defusekit') p.hasKit = true;
    else if (gear.grenade) p.grenades[gear.grenade] = Math.min(2, p.grenades[gear.grenade] + 1);
  }

  botCallout(bot, enemy) {
    enemy.spottedUntil = this.time + 4.5;
    for (const p of this.players) {
      if (p.team !== bot.team) continue;
      if (p.bot && p.bot !== bot && p.bot.lastSeenTime < this.time - 1.5 && Math.random() < 0.5) {
        p.bot.lastSeen = enemy.pos.clone();
        p.bot.lastSeenTime = this.time - 2.0;
      }
    }
  }

  isSpotted(p) {
    return (p.spottedUntil || 0) > this.time;
  }

  onPlayerKilled(victim, attacker, weaponId, headshot) {
    this.round.onKill(victim, attacker, weaponId, headshot);
    if (victim.mesh) victim.mesh.visible = false;
    if (victim === this.localPlayer) {
      this.camera.fov = this.settings.fov;
      this.camera.updateProjectionMatrix();
      this.spectating = this.pickSpectateTarget();
    }
  }

  onLocalDeath(attacker) {
    const wname = attacker && attacker.weaponDef ? attacker.weaponDef.name : '炸弹';
    const who = attacker ? `${attacker.name}（${wname}）` : '环境';
    this.hud.deathNotice(`被 ${who} 击杀`);
    this.spectating = this.pickSpectateTarget();
  }

  onPlayerFell(p) {
    p.takeDamage(1000, null, 'leg', 'fall');
  }

  pickSpectateTarget() {
    const mates = this.players.filter((x) => x !== this.localPlayer && x.alive && x.team === this.localPlayer.team);
    return mates[0] || null;
  }

  cycleSpectate() {
    const mates = this.players.filter((x) => x !== this.localPlayer && x.alive);
    if (!mates.length) return;
    const idx = mates.indexOf(this.spectating);
    this.spectating = mates[(idx + 1) % mates.length];
  }

  // ---------- 主循环 ----------
  loop(now) {
    requestAnimationFrame((t) => this.loop(t));
    const raw = (now - this.lastT) / 1000;
    this.lastT = now;
    const dt = Math.min(0.05, Math.max(0.0001, raw));
    if (raw > 0) this.fps += (1 / raw - this.fps) * 0.08;

    // 每 2 秒评估一次渲染分辨率：低于 48fps 降档，高于 58fps 再升回来
    this.adaptTimer += Math.min(0.25, raw);
    if (this.adaptTimer > 2) {
      this.adaptTimer = 0;
      if (this.fps < 48 && this.pixelRatio > 1.0) {
        this.pixelRatio = Math.max(1.0, this.pixelRatio - 0.25);
        this.renderer.setPixelRatio(this.pixelRatio);
      } else if (this.fps > 58 && this.pixelRatio < this.maxPixelRatio) {
        this.pixelRatio = Math.min(this.maxPixelRatio, this.pixelRatio + 0.25);
        this.renderer.setPixelRatio(this.pixelRatio);
      }
    }

    if (this.started && !this.paused) {
      this.update(dt);
    }
    this.renderer.clear(true, true, true);
    this.renderer.render(this.scene, this.camera);
    // 第一人称武器单独一层渲染（不参与深度，避免插进墙里）
    this.renderer.clearDepth();
    this.renderer.render(this.viewModel.scene, this.viewModel.camera);
  }

  update(dt) {
    this.time += dt;
    const p = this.localPlayer;

    // 回合
    this.round.update(dt);

    // 本地玩家输入
    if (p) {
      const cmd = {
        forward: (this.keys['KeyW'] ? 1 : 0) - (this.keys['KeyS'] ? 1 : 0),
        side: (this.keys['KeyD'] ? 1 : 0) - (this.keys['KeyA'] ? 1 : 0),
        jump: !!this.keys['Space'],
        duck: !!(this.keys['ControlLeft'] || this.keys['ControlRight'] || this.keys['KeyC']),
        walk: !!(this.keys['ShiftLeft'] || this.keys['ShiftRight']),
      };
      p.wantUse = !!this.keys['KeyE'];
      p.update(dt, cmd);

      // 购买提示
      if (this.inBuyZone() && !this.hud.buyOpen) this.hud.hint('按 B 打开购买菜单');
      else if (p.hasBomb && this.map.siteAt(p.pos.x, p.pos.z) && this.round.bomb.state === 'carried') this.hud.hint('按住 E 安放 C4');
      else if (p.team === 'CT' && this.round.bomb.state === 'planted' &&
        Math.hypot(p.pos.x - this.round.bomb.pos.x, p.pos.z - this.round.bomb.pos.z) < 90) this.hud.hint('按住 E 拆除炸弹');
      else this.hud.hint(null);
    }

    // BOT
    for (const b of this.players) {
      if (b.bot) b.bot.update(dt);
    }

    // 投掷物
    for (let i = this.grenades.length - 1; i >= 0; i--) {
      const g = this.grenades[i];
      g.update(dt);
      if (g.dead) this.grenades.splice(i, 1);
    }

    // 特效
    fx.update(dt);

    this.updateCamera(dt);
    this.viewModel.update(dt, p);
    this.hud.update(dt);

    // 同步音频监听者：HRTF 方位与混响都依赖它每帧跟随视角
    Sfx.setListener(this.listenerPos());
  }

  updateCamera(dt) {
    const p = this.localPlayer;
    let view = null;

    if (p && p.alive) {
      view = p;
      this.spectating = null;
    } else if (this.spectating && this.spectating.alive) {
      view = this.spectating;
    }

    if (view) {
      const shake = fx.shake * 1.6;
      const sx = (Math.random() - 0.5) * shake;
      const sy = (Math.random() - 0.5) * shake;
      this.camera.position.set(view.pos.x, view.eyeY(), view.pos.z);
      this.camera.rotation.set(
        view.pitch + view.punchPitch * D2R + sy * 0.01,
        view.yaw + view.punchYaw * D2R + sx * 0.01,
        view.punchYaw * 0.012,
      );
    }

    // FOV / 开镜
    let targetFov = this.settings.fov;
    if (p && p.alive && p.zoom > 0) {
      const def = p.weaponDef;
      if (def && def.scope) targetFov = this.settings.fov * def.scope[p.zoom - 1];
    }
    if (Math.abs(this.camera.fov - targetFov) > 0.1) {
      this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, dt * 16);
      this.camera.updateProjectionMatrix();
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // 页面元素已就绪
  const g = new Game();
  window.game = g;
  try {
    g.init();
  } catch (err) {
    console.error(err);
    const el = document.getElementById('loading');
    if (el) el.textContent = '初始化失败：' + err.message;
  }
});
