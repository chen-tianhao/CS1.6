// ============================================================
//  main.js — 引导 / 主循环 / 输入
// ============================================================
import * as THREE from 'three';
import {
  PHYS, RULES, WEAPONS, GEAR, SETTINGS_DEFAULT, BOT_NAMES, TILE, GRID, WORLD_HALF,
  KEYMAP_DEFAULT, keyLabel,
} from './config.js';
import { GameMap } from './map.js';
import { getMap, DEFAULT_MAP } from './maps/index.js';
import { setAnisotropy } from './textures.js';
import { Player } from './player.js';
import { BotController } from './bots.js';
import { Round } from './round.js';
import { HUD } from './hud.js';
import { ViewModel } from './viewmodel.js';
import { buildWeaponProp, setWeaponStyle as setWeaponModelStyle } from './models.js';
import { fx } from './fx.js';
import { tracePlayers } from './weapons.js';
import * as Sfx from './audio.js';

const D2R = Math.PI / 180;
const FIXED_DT = 1 / 64;   // GoldSrc 的物理 tick
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// 键名带 v2：sensitivity 的语义从"倍率"改成了 1.6 的 m_yaw × sensitivity，
// 旧存档里的 1.0 如果直接沿用会慢一半以上，所以干脆不复用旧键。
const SETTINGS_KEY = 'cs16web.settings.v2';

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      return {
        ...SETTINGS_DEFAULT,
        ...saved,
        // keymap 逐键合并：以后新增动作时旧存档不会缺键
        keymap: { ...KEYMAP_DEFAULT, ...(saved.keymap || {}) },
      };
    }
  } catch (e) { /* ignore */ }
  return { ...SETTINGS_DEFAULT, keymap: { ...KEYMAP_DEFAULT } };
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
    // 世界冻结有两个来源：暂停菜单、购买菜单。两个都关掉才真的继续跑。
    this.pauseMenuOpen = false;
    this.menuPaused = false;
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
    this.pointerLockFailures = 0;
    // 'idle' | 'requesting' | 'locked' | 'releasing'
    // 用来区分"我们自己放开的锁"和"被动失去锁" —— 只看事件本身区分不了，
    // 而购买菜单会在同一个 tick 里先 exit 再 request，事件又是异步到达的。
    this.lockState = 'idle';
    this.lastLockedAt = 0;
    this.dropped = [];        // 地上掉落的武器
    this.acc = 0;             // 固定步长累加器
    this.flashlightOn = false;
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
    // 现代渲染：ACES 让高光和暗部过渡更自然（PBR 需要这个），
    // 曝光抬到 1.15 补偿 ACES 整体压暗。
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.02;
    this.renderer.autoClear = false;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(this.settings.fov, window.innerWidth / window.innerHeight, 1, 9000);
    this.camera.rotation.order = 'YXZ';
    this.scene.add(this.camera);

    // 手电筒：灯常驻、只切强度。运行时增删灯会让 three 重编译所有材质。
    this.flashlight = new THREE.SpotLight(0xfff0d0, 0, 2400, Math.PI / 7, 0.5, 1.1);
    this.flashlight.position.set(0, -6, 0);
    this.flashlight.target.position.set(0, -4, -1);
    this.camera.add(this.flashlight);
    this.camera.add(this.flashlight.target);

    this.map = new GameMap(this.scene, getMap(this.settings.map || DEFAULT_MAP));
    this.setupEnvironment();
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

  // 用天空图生成 PMREM 环境贴图，挂到主场景上。
  // PBR 材质必须有东西可反射，否则金属件会变成死黑，
  // 而"世界没有环境、武器有环境"会立刻暴露成贴纸感。
  setupEnvironment() {
    const bg = this.scene.background;
    if (!bg || !bg.isTexture) return;
    try {
      const pmrem = new THREE.PMREMGenerator(this.renderer);
      const rt = pmrem.fromEquirectangular(bg);
      this.scene.environment = rt.texture;
      pmrem.dispose();
    } catch (e) {
      console.warn('环境贴图生成失败：', e);
    }
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
    this.pauseMenuOpen = false;
    this.menuPaused = false;
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
      const km = this.km();
      // Tab 会切焦点、空格会滚页面，都要拦掉
      if (e.code === km.scoreboard || e.code === km.jump) e.preventDefault();
      if (e.repeat) return;
      this.onKeyDown(e);
    });
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (e.code === this.km().scoreboard) this.hud.toggleScoreboard(false);
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
      const locked = document.pointerLockElement === this.canvas;
      if (!locked) {
        // 每次点击都是一次合法的用户手势：借它重新申请指针锁定。
        // 买完东西用键盘关菜单时浏览器会拒绝那次请求，只能靠这一下锁回来。
        this.lockPointer();
        // 不在拖拽兜底模式下时，这一下只用来锁定鼠标，不开枪（和 1.6 点回窗口的手感一致）
        if (!this.dragLook) return;
      }
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
        if (p) {
          p.fireHeld = false;
          if (p.priming) p.releaseGrenade();
        }
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

    document.addEventListener('pointerlockerror', () => this.onPointerLockFailed());

    document.addEventListener('pointerlockchange', () => {
      const locked = document.pointerLockElement === this.canvas;
      if (locked) {
        // 锁回来了：退出拖拽兜底，恢复"只要移动鼠标就转视角"
        this.lockState = 'locked';
        this.lastLockedAt = (typeof performance !== 'undefined' ? performance.now() : 0);
        this.dragLook = false;
        this.dragging = false;
        this.pointerLockFailures = 0;
        return;
      }
      const wasReleasing = this.lockState === 'releasing';
      const wasLocked = this.lockState === 'locked';
      this.lockState = 'idle';
      // 自己放开的锁（购买菜单 / 暂停菜单）不是"玩家切走了"
      if (wasReleasing) return;
      if (!wasLocked) return;
      // 刚拿回锁就被"解锁"，多半是同一批 exit/request 的迟到回执
      const now = (typeof performance !== 'undefined' ? performance.now() : 0);
      if (now - this.lastLockedAt < 500) return;
      if (this.started && !this.hud.buyOpen && !this.suppressPause &&
          this.round.phase !== 'matchend' && !this.pauseMenuOpen) {
        this.pauseGame();
      }
    });

    document.getElementById('btn-start').addEventListener('click', () => {
      Sfx.initAudio();
      this.startGame();
    });
    document.getElementById('btn-resume').addEventListener('click', () => this.resumeGame());
    document.getElementById('btn-keys').addEventListener('click', () => this.hud.openKeybinds());
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
    const km = this.km();

    // 改键界面正在等一个键：全部拦下来交给它
    if (this.hud.captureKey) { this.hud.assignKey(e.code); return; }
    if (this.hud.keybindOpen && e.code === 'Escape') { this.hud.closeKeybinds(); return; }

    if (e.code === km.scoreboard) {
      this.hud.toggleScoreboard(true);
      return;
    }
    if (e.code === 'Escape') {
      // 购买菜单开着时优先关菜单
      if (this.hud.buyOpen) { this.hud.toggleBuy(false); return; }
      // 再按一次 Esc = 继续游戏（原来只能去点按钮）
      if (this.pauseMenuOpen) { this.resumeGame(); return; }
      this.pauseGame();
      return;
    }
    if (this.hud.buyOpen) {
      if (e.code === km.buy) { this.hud.toggleBuy(false); return; }
      this.hud.handleBuyKey(e.code);
      return;
    }
    if (!p) return;

    // 比赛结束后按换弹键重开
    if (e.code === km.reload && this.round.phase === 'matchend') { this.restartMatch(); return; }

    if (e.code === km.buy) { if (p.alive) this.hud.toggleBuy(); return; }
    if (e.code === km.reload) { if (p.alive) p.reload(); return; }
    if (e.code === km.slot1) { p.switchSlot('primary'); return; }
    if (e.code === km.slot2) { p.switchSlot('secondary'); return; }
    if (e.code === km.slot3) { p.switchSlot('melee'); return; }
    if (e.code === km.slot4) { p.switchSlot('grenade'); return; }
    if (e.code === km.lastWeapon) {
      if (p.curSlot === 'primary' && p.slots.secondary) p.switchSlot('secondary');
      else if (p.curSlot === 'secondary' && p.slots.primary) p.switchSlot('primary');
      return;
    }
    if (e.code === km.flashlight) { this.toggleFlashlight(); return; }
    if (e.code === km.drop) { this.dropWeapon(p, p.curSlot); return; }
  }

  km() { return this.settings.keymap || KEYMAP_DEFAULT; }
  act(action) {
    const km = this.settings.keymap || KEYMAP_DEFAULT;
    return !!this.keys[km[action]];
  }

  onFireDown() {
    const p = this.localPlayer;
    if (!p || !p.alive) {
      // 死亡状态下切换观察目标
      this.cycleSpectate();
      return;
    }
    // 手雷：按下只是拔销，松开才扔（1.6 的空爆靠这个）
    if (p.curSlot === 'grenade') { p.beginPrime(); return; }
    p.fireHeld = true;
    p.tryFire();
  }

  toggleFlashlight() {
    this.flashlightOn = !this.flashlightOn;
    this.flashlight.intensity = this.flashlightOn ? 2.4 : 0;
    Sfx.playUIClick();
  }

  // 对照实验用：切换第一人称武器的"材质工艺"
  //   'classic' —— 1.6 低模味（Lambert + 调色板 + 最近邻采样 + 平面着色）
  //   'modern'  —— 现代 PBR（标准材质 + 法线/粗糙度 + 环境反射）
  // 控制台直接调：game.setWeaponStyle('modern')
  setWeaponStyle(style) {
    const s = setWeaponModelStyle(style);
    if (this.viewModel) this.viewModel.invalidate();
    if (this.hud) this.hud.toast(s === 'modern' ? '武器模型：现代 PBR' : '武器模型：1.6 经典');
    return s;
  }

  // ---------- 暂停 ----------
  // 暂停有两个独立来源：暂停菜单（Esc）和购买菜单（B）。
  // 任意一个开着世界就冻结，两个都关掉才继续跑 ——
  // 否则"开着购买菜单按 Esc"会把世界意外解冻。
  syncPaused() {
    this.paused = this.pauseMenuOpen || this.menuPaused;
  }

  pauseGame() {
    if (!this.started || this.pauseMenuOpen) return;
    this.pauseMenuOpen = true;
    this.syncPaused();
    document.getElementById('pause').classList.remove('hidden');
    const p = this.localPlayer;
    if (p) p.fireHeld = false;
    // 放开鼠标才能点暂停菜单里的按钮
    if (document.pointerLockElement === this.canvas) this.releasePointer();
  }

  resumeGame() {
    this.hud.closeKeybinds();
    this.pauseMenuOpen = false;
    this.syncPaused();
    document.getElementById('pause').classList.add('hidden');
    this.lockPointer();
  }

  // 购买菜单：不弹暂停遮罩（菜单本身就是那层 UI），但世界要冻住
  enterMenuPause() {
    if (!this.started) return;
    this.menuPaused = true;
    this.syncPaused();
    const p = this.localPlayer;
    if (p) p.fireHeld = false;
    if (document.pointerLockElement === this.canvas) this.releasePointer();
  }

  exitMenuPause() {
    this.menuPaused = false;
    this.syncPaused();
    this.lockPointer();
  }

  lockPointer() {
    if (document.pointerLockElement === this.canvas) { this.lockState = 'locked'; return; }
    if (!this.canvas.requestPointerLock) { this.enableDragLook(); return; }
    this.lockState = 'requesting';
    try {
      const r = this.canvas.requestPointerLock();
      if (r && r.catch) {
        r.catch(() => {
          if (this.lockState === 'requesting') this.lockState = 'idle';
          this.onPointerLockFailed();
        });
      }
    } catch (err) {
      if (this.lockState === 'requesting') this.lockState = 'idle';
      this.onPointerLockFailed();
    }
  }

  // 指针锁定失败。
  // 浏览器只在"用户手势"里才给锁（点按钮、点画面）；用键盘关购买菜单时
  // 那次请求一定会被拒。这里**绝对不能**永久降级成拖拽视角 —— 否则玩家会
  // 以为"鼠标坏了，必须按住左键才能转视角"。留给下一次点击重试。
  onPointerLockFailed() {
    if (document.pointerLockElement === this.canvas) return;
    this.pointerLockFailures += 1;
    // 连续失败两次（无指针锁环境：iframe、无头浏览器…）才真正启用拖拽兜底
    if (this.pointerLockFailures >= 2) this.enableDragLook();
    else if (this.started && this.hud) this.hud.toast('点击画面以锁定鼠标');
  }

  enableDragLook() {
    if (this.dragLook) return;
    this.dragLook = true;
    this.dragging = false;
    this.hud.toast('鼠标锁定不可用：按住左键拖动可转动视角');
  }

  releasePointer() {
    this.suppressPause = true;
    this.lockState = 'releasing';
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
      // 物理固定 1/64 步长：GoldSrc 就是定步长。可变 dt 会让连跳时机、
      // 加速手感和落地判定随帧率漂移，低帧率时单帧位移还会大到穿墙。
      this.acc += Math.min(0.25, raw);
      let steps = 0;
      while (this.acc >= FIXED_DT && steps < 6) {
        this.stepPhysics(FIXED_DT);
        this.acc -= FIXED_DT;
        steps += 1;
      }
      if (steps >= 6) this.acc = 0;      // 追不上就丢弃，别让累加器雪崩
      this.updateVisuals(raw);
    }
    this.renderer.clear(true, true, true);
    this.renderer.render(this.scene, this.camera);
    // 第一人称武器单独一层渲染（不参与深度，避免插进墙里）
    this.renderer.clearDepth();
    this.renderer.render(this.viewModel.scene, this.viewModel.camera);
  }

  // 定步长：回合 / 玩家 / BOT / 投掷物 / 掉落物
  stepPhysics(dt) {
    this.time += dt;
    const p = this.localPlayer;

    this.round.update(dt);

    if (p) {
      // 键位全部来自 settings.keymap；右 Ctrl / 右 Shift / C 作为固定备用键
      const cmd = {
        forward: (this.act('forward') ? 1 : 0) - (this.act('back') ? 1 : 0),
        side: (this.act('right') ? 1 : 0) - (this.act('left') ? 1 : 0),
        jump: this.act('jump'),
        duck: this.act('duck') || !!this.keys['ControlRight'] || !!this.keys['KeyC'],
        walk: this.act('walk') || !!this.keys['ShiftRight'],
      };
      p.wantUse = this.act('use');
      p.update(dt, cmd);
    }

    for (const b of this.players) {
      if (b.bot) b.bot.update(dt);
    }

    for (let i = this.grenades.length - 1; i >= 0; i--) {
      const g = this.grenades[i];
      g.update(dt);
      if (g.dead) this.grenades.splice(i, 1);
    }

    this.updateDropped();
  }

  // 每帧一次：特效 / 相机 / 第一人称 / HUD / 音频监听。
  // 这些和物理步长无关，用真实帧间隔更平滑，也避免 HUD 被重复写 6 次。
  updateVisuals(dt) {
    const p = this.localPlayer;
    fx.update(dt);
    this.updateCamera(dt);
    this.viewModel.update(dt, p);
    this.hud.update(dt);
    Sfx.setListener(this.listenerPos());

    if (p) {
      const buyKey = keyLabel(this.km().buy);
      if (this.inBuyZone() && !this.hud.buyOpen) this.hud.hint(`按 ${buyKey} 打开购买菜单`);
      else if (p.hasBomb && this.map.siteAt(p.pos.x, p.pos.z) && this.round.bomb.state === 'carried') this.hud.hint('按住 E 安放 C4');
      else if (p.team === 'CT' && this.round.bomb.state === 'planted' &&
        Math.hypot(p.pos.x - this.round.bomb.pos.x, p.pos.z - this.round.bomb.pos.z) < 90) this.hud.hint('按住 E 拆除炸弹');
      else this.hud.hint(null);
    }
  }

  // ---------- 掉落武器 ----------
  dropWeapon(player, slot) {
    if (slot !== 'primary' && slot !== 'secondary') return;
    const w = player.slots[slot];
    if (!w) return;
    const def = WEAPONS[w.id];
    if (!def || def.cls === 'melee') return;
    player.slots[slot] = null;
    if ((slot === 'primary' && player.curSlot === 'primary') ||
        (slot === 'secondary' && player.curSlot === 'secondary')) {
      player.curSlot = player.slots.primary ? 'primary' : player.slots.secondary ? 'secondary' : 'melee';
    }
    const mesh = buildWeaponProp(w.id);
    mesh.position.set(player.pos.x, 10, player.pos.z);
    mesh.rotation.y = Math.random() * Math.PI * 2;
    this.scene.add(mesh);
    this.dropped.push({ id: w.id, ammo: w.ammo, reserve: w.reserve, mesh, x: player.pos.x, z: player.pos.z });
    if (this.dropped.length > 24) {
      const old = this.dropped.shift();
      this.scene.remove(old.mesh);
    }
  }

  clearDropped() {
    for (const d of this.dropped) this.scene.remove(d.mesh);
    this.dropped = [];
  }

  // 走过去自动拾取（1.6 就是这样，不用按键）
  updateDropped() {
    for (let i = this.dropped.length - 1; i >= 0; i--) {
      const d = this.dropped[i];
      d.mesh.rotation.y += 0.02;
      let taken = false;
      for (const p of this.players) {
        if (!p.alive) continue;
        if (Math.hypot(p.pos.x - d.x, p.pos.z - d.z) > 46) continue;
        const def = WEAPONS[d.id];
        const slot = def.slot === 1 ? 'primary' : 'secondary';
        if (p.slots[slot]) continue;     // 同类槽位已经有枪就不捡
        p.slots[slot] = { id: d.id, def, ammo: d.ammo, reserve: d.reserve };
        p.curSlot = slot;
        p.deployTime = 0.4;
        if (p === this.localPlayer) Sfx.playPickup();
        taken = true;
        break;
      }
      if (taken) {
        this.scene.remove(d.mesh);
        this.dropped.splice(i, 1);
      }
    }
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
