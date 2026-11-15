// ============================================================
//  config.js — Counter-Strike 1.6 规则/数值层
//  数值参考 CS 1.6 / GoldSrc 公开参数，1 单位 ≈ 1.905cm
// ============================================================

export const TILE = 100;      // 一个地图格 = 100 单位（约 1.9m）
export const GRID = 40;       // 40 x 40 格 = 4000 x 4000 单位
export const WORLD_HALF = (GRID * TILE) / 2;

// ---------- GoldSrc 移动物理 ----------
export const PHYS = {
  gravity: 800,
  maxSpeed: 250,
  accel: 10,
  airAccel: 10,
  friction: 4,
  stopSpeed: 75,
  jumpVel: 268,
  stepHeight: 18,
  duckMul: 0.34,
  walkMul: 0.52,
  standHeight: 72,
  duckHeight: 36,
  eyeStand: 64,
  eyeDuck: 28,
  radius: 16,
  airWishSpeed: 30,   // 空中加速把 wishspeed 夹到 30，这是连跳/急停手感的来源
  maxLadderSpeed: 200,
  // 跳蹲：空中蹲下时碰撞体从 72 收到 36，脚能被"抬高"一截够到沿儿。
  // 45 的跳跃高度 + 20 ≈ 65，正好能上 64 的架点箱，这就是 1.6 的跳蹲手感。
  duckJumpBonus: 22,
};

// ---------- 回合 / 经济 ----------
export const RULES = {
  freezeTime: 3,          // 冻结时间
  buyTime: 18,            // 允许购买的时间
  roundTime: 115,         // 1:55 回合时长
  bombTime: 35,           // C4 计时
  plantTime: 3.2,         // 安放耗时
  defuseTime: 10,         // 拆包耗时
  defuseKitTime: 5,       // 带拆包器
  startMoney: 800,
  maxMoney: 16000,
  winReward: 3250,
  winBombReward: 3500,
  lossBase: 1400,
  lossStep: 500,
  lossMax: 3400,
  plantBonus: 800,
  defuseBonus: 300,
  maxRounds: 30,
  winRounds: 16,
  halftimeRound: 15,
  roundEndDelay: 4.5,
  maxTeamSize: 5,
  // 加时：常规回合打平就进加时，每半场 3 回合、先到 4 分获胜，钱重置到 10000
  overtimeMoney: 10000,
  overtimeHalf: 3,
  overtimeWin: 4,
};

// ---------- 命中盒倍率 ----------
export const HITGROUP = {
  head: 4.0,
  chest: 1.0,
  stomach: 1.25,
  leg: 0.75,
};

// ---------- 武器 ----------
// dmg      : 基础伤害
// rpm      : 射速（发/分）
// mag/res  : 弹匣 / 备弹
// reload   : 换弹秒
// price    : 购买价
// spread   : 站立静止基础散布（度）
// moveSpread: 满速移动时额外散布（度）
// kick     : 单发视角后坐（度）
// pen      : 护甲穿透率，即 1.6 武器脚本里的 ArmorRatio
//            （护甲吸收伤害后，身体实际承受 dmg × pen）
// kill     : 击杀奖励
// speed    : 持枪最大移动速度
export const WEAPONS = {
  knife: {
    id: 'knife', name: 'Knife', cn: '匕首', cls: 'melee', slot: 3, price: 0,
    dmg: 55, rpm: 90, mag: 0, res: 0, reload: 0, spread: 0, moveSpread: 0,
    kick: 0, pen: 1, kill: 1500, speed: 250, range: 55, sound: 'knife',
  },
  glock18: {
    id: 'glock18', name: 'Glock-18', cn: '格洛克 18', cls: 'pistol', slot: 2, price: 400,
    dmg: 25, rpm: 400, mag: 20, res: 120, reload: 2.2, spread: 0.55, moveSpread: 2.6,
    kick: 0.85, pen: 0.52, kill: 300, speed: 240, sound: 'pistol', auto: false,
  },
  usp45: {
    id: 'usp45', name: 'USP-45', cn: 'USP 战术手枪', cls: 'pistol', slot: 2, price: 500,
    dmg: 34, rpm: 400, mag: 12, res: 100, reload: 2.2, spread: 0.45, moveSpread: 2.4,
    kick: 0.9, pen: 0.5, kill: 300, speed: 240, sound: 'pistol', auto: false,
  },
  deagle: {
    id: 'deagle', name: 'Desert Eagle', cn: '沙漠之鹰', cls: 'pistol', slot: 2, price: 650,
    dmg: 54, rpm: 240, mag: 7, res: 35, reload: 2.4, spread: 0.9, moveSpread: 3.4,
    kick: 2.0, pen: 0.6, kill: 300, speed: 240, sound: 'deagle', auto: false,
  },
  mp5navy: {
    id: 'mp5navy', name: 'MP5 Navy', cn: 'MP5 冲锋枪', cls: 'smg', slot: 1, price: 1500,
    dmg: 26, rpm: 750, mag: 30, res: 120, reload: 2.6, spread: 0.55, moveSpread: 1.1,
    kick: 0.9, pen: 0.62, kill: 600, speed: 245, sound: 'smg', auto: true,
  },
  ak47: {
    id: 'ak47', name: 'AK-47', cn: 'AK-47', cls: 'rifle', slot: 1, price: 2500,
    dmg: 36, rpm: 600, mag: 30, res: 90, reload: 2.5, spread: 0.35, moveSpread: 1.2,
    kick: 2.2, pen: 0.775, kill: 300, speed: 221, sound: 'ak47', auto: true,
  },
  m4a1: {
    id: 'm4a1', name: 'M4A1', cn: 'M4A1 卡宾枪', cls: 'rifle', slot: 1, price: 3100,
    dmg: 33, rpm: 666, mag: 30, res: 90, reload: 3.1, spread: 0.3, moveSpread: 1.1,
    kick: 1.7, pen: 0.70, kill: 300, speed: 225, sound: 'm4a1', auto: true,
  },
  p90: {
    id: 'p90', name: 'P90', cn: 'P90', cls: 'smg', slot: 1, price: 2350,
    dmg: 26, rpm: 857, mag: 50, res: 100, reload: 3.3, spread: 0.6, moveSpread: 1.0,
    kick: 0.8, pen: 0.69, kill: 300, speed: 245, sound: 'smg', auto: true,
  },
  scout: {
    id: 'scout', name: 'Steyr Scout', cn: '鸟狙', cls: 'sniper', slot: 1, price: 2750,
    dmg: 75, rpm: 90, mag: 10, res: 90, reload: 2.5, spread: 0.1, moveSpread: 5.5,
    kick: 2.6, pen: 0.85, kill: 300, speed: 260, sound: 'awp', auto: false, scope: [0.62, 0.24],
  },
  sg552: {
    id: 'sg552', name: 'SG552', cn: 'Sig 552', cls: 'rifle', slot: 1, price: 3500,
    dmg: 33, rpm: 727, mag: 30, res: 90, reload: 3.0, spread: 0.32, moveSpread: 1.15,
    kick: 1.9, pen: 0.77, kill: 300, speed: 225, sound: 'm4a1', auto: true, scope: [0.55],
  },
  aug: {
    id: 'aug', name: 'AUG', cn: 'AUG', cls: 'rifle', slot: 1, price: 3500,
    dmg: 32, rpm: 666, mag: 30, res: 90, reload: 3.2, spread: 0.3, moveSpread: 1.1,
    kick: 1.8, pen: 0.77, kill: 300, speed: 225, sound: 'm4a1', auto: true, scope: [0.55],
  },
  awp: {
    id: 'awp', name: 'AWP', cn: 'AWP 狙击枪', cls: 'sniper', slot: 1, price: 4750,
    dmg: 115, rpm: 41, mag: 10, res: 30, reload: 2.9, spread: 0.12, moveSpread: 6.0,
    kick: 4.5, pen: 0.975, kill: 100, speed: 210, sound: 'awp', auto: false, scope: [0.55, 0.18],
  },
  famas: {
    id: 'famas', name: 'FAMAS', cn: 'FAMAS', cls: 'rifle', slot: 1, price: 2250,
    dmg: 30, rpm: 666, mag: 25, res: 90, reload: 3.0, spread: 0.30, moveSpread: 1.15,
    kick: 1.7, pen: 0.70, kill: 300, speed: 225, sound: 'm4a1', auto: true,
  },
  galil: {
    id: 'galil', name: 'Galil', cn: '加利尔', cls: 'rifle', slot: 1, price: 2000,
    dmg: 30, rpm: 666, mag: 35, res: 90, reload: 3.0, spread: 0.33, moveSpread: 1.15,
    kick: 1.8, pen: 0.77, kill: 300, speed: 225, sound: 'ak47', auto: true,
  },
  mac10: {
    id: 'mac10', name: 'MAC-10', cn: 'MAC-10', cls: 'smg', slot: 1, price: 1400,
    dmg: 29, rpm: 857, mag: 30, res: 100, reload: 3.15, spread: 0.60, moveSpread: 1.10,
    kick: 0.85, pen: 0.575, kill: 300, speed: 245, sound: 'smg', auto: true,
  },
  xm1014: {
    id: 'xm1014', name: 'XM1014', cn: 'XM1014 霰弹枪', cls: 'shotgun', slot: 1, price: 3000,
    dmg: 24, rpm: 240, mag: 7, res: 32, reload: 3.5, spread: 1.5, moveSpread: 2.2,
    kick: 2.6, pen: 0.55, kill: 300, speed: 220, sound: 'deagle', auto: false,
    pellets: 6,  // 一发六颗弹丸，每颗独立结算
  },
  m249: {
    id: 'm249', name: 'M249', cn: 'M249 机枪', cls: 'machinegun', slot: 1, price: 5750,
    dmg: 32, rpm: 750, mag: 100, res: 200, reload: 5.7, spread: 0.50, moveSpread: 1.40,
    kick: 2.0, pen: 0.72, kill: 300, speed: 210, sound: 'ak47', auto: true,
  },
  elite: {
    id: 'elite', name: 'Dual Berettas', cn: '双枪', cls: 'pistol', slot: 2, price: 800,
    dmg: 26, rpm: 500, mag: 30, res: 120, reload: 4.6, spread: 0.70, moveSpread: 3.0,
    kick: 0.8, pen: 0.50, kill: 300, speed: 240, sound: 'pistol', auto: false,
  },
};

// ---------- 固定弹道 ----------
// 每发一组 [上抬, 右偏]，单位是度，按连发序号取值，超出表长就停在最后一组。
//
// 为什么必须固定：1.6 的 AK / M4 弹道是「可以背下来」的 —— 前四发几乎直上，
// 随后向右拉开，中段回扫向左，尾段再甩回右。玩家练的就是把这套形状反向压掉。
// 一旦掺随机数，这套技巧体系就整个消失了。
//
// 第一发的上抬刻意等于该枪的 def.kick，这样"单点"的手感和改动前完全一致，
// 只有连续扫射的形状变了。
export const RECOIL = {
  ak47: [
    [2.20, 0.00], [2.05, 0.04], [1.95, -0.04], [1.80, 0.08], [1.60, 0.24],
    [1.45, 0.40], [1.32, 0.56], [1.22, 0.72], [1.14, 0.86], [1.06, 0.96],
    [1.00, 1.04], [0.96, 1.02], [0.92, 0.86], [0.88, 0.58], [0.84, 0.20],
    [0.80, -0.22], [0.76, -0.62], [0.73, -0.94], [0.70, -1.16], [0.68, -1.26],
    [0.66, -1.20], [0.64, -1.00], [0.62, -0.70], [0.60, -0.32], [0.58, 0.10],
    [0.57, 0.50], [0.56, 0.84], [0.55, 1.04], [0.54, 1.02], [0.53, 0.82],
  ],
  m4a1: [
    [1.70, 0.00], [1.64, 0.04], [1.56, -0.04], [1.46, 0.06], [1.34, 0.16],
    [1.22, 0.28], [1.12, 0.40], [1.04, 0.52], [0.97, 0.62], [0.91, 0.70],
    [0.86, 0.74], [0.82, 0.70], [0.79, 0.56], [0.76, 0.34], [0.74, 0.06],
    [0.72, -0.22], [0.70, -0.46], [0.68, -0.64], [0.66, -0.74], [0.64, -0.74],
    [0.62, -0.62], [0.60, -0.42], [0.58, -0.16], [0.57, 0.10], [0.56, 0.34],
    [0.55, 0.52], [0.54, 0.62], [0.53, 0.60], [0.52, 0.48], [0.51, 0.30],
  ],
  mp5navy: [
    [0.90, 0.00], [0.86, 0.03], [0.82, -0.03], [0.78, 0.05], [0.74, 0.10],
    [0.70, 0.16], [0.67, 0.22], [0.64, 0.27], [0.62, 0.31], [0.60, 0.34],
    [0.58, 0.35], [0.56, 0.34], [0.55, 0.30], [0.54, 0.24], [0.53, 0.16],
    [0.52, 0.08], [0.51, 0.00], [0.50, -0.08], [0.49, -0.15], [0.48, -0.20],
    [0.47, -0.22], [0.46, -0.22], [0.45, -0.19], [0.45, -0.14], [0.44, -0.08],
    [0.44, -0.02], [0.43, 0.05], [0.43, 0.11], [0.42, 0.15], [0.42, 0.17],
  ],
  p90: [
    [0.80, 0.00], [0.77, 0.03], [0.74, -0.03], [0.71, 0.05], [0.68, 0.09],
    [0.65, 0.14], [0.62, 0.19], [0.60, 0.23], [0.58, 0.27], [0.56, 0.29],
    [0.54, 0.30], [0.53, 0.29], [0.52, 0.26], [0.51, 0.21], [0.50, 0.14],
    [0.49, 0.07], [0.48, 0.00], [0.47, -0.07], [0.46, -0.13], [0.45, -0.17],
    [0.44, -0.19], [0.43, -0.19], [0.43, -0.16], [0.42, -0.12], [0.42, -0.07],
    [0.41, -0.02], [0.41, 0.04], [0.40, 0.09], [0.40, 0.13], [0.40, 0.15],
  ],
};

// 没有专属弹道表的枪（手枪 / 狙 / 刀）是单发武器：shotCount 会在 0.45s 后归零，
// 所以永远只用到第一发 —— 上抬就等于该枪的 kick。
// 返回 [上抬, 右偏]，单位度
export function recoilPattern(def, shot) {
  let table = RECOIL[def.id];
  let scale = 1;
  if (!table) {
    // SG552 / AUG 在 1.6 里是"枪族内改型"，弹道形状跟 M4 同源，只是幅度略大
    if (def.id === 'sg552') { table = RECOIL.m4a1; scale = 1.08; }
    else if (def.id === 'aug') { table = RECOIL.m4a1; scale = 1.02; }
    else return [def.kick, 0];
  }
  const e = table[Math.min(Math.max(shot, 1) - 1, table.length - 1)];
  return [e[0] * scale, e[1] * scale];
}

// ---------- 装备 ----------
// 手雷引信（秒）。fx.js 的 Grenade 和"拔销计时"共用这一份，别写两份。
export const GRENADE_FUSE = { he: 3.0, flash: 2.0, smoke: 1.8 };

export const GEAR = {
  kevlar: { id: 'kevlar', name: 'Kevlar Vest', cn: '防弹衣', price: 650 },
  kevlarhelm: { id: 'kevlarhelm', name: 'Kevlar + Helmet', cn: '防弹衣 + 头盔', price: 1000 },
  defusekit: { id: 'defusekit', name: 'Defuse Kit', cn: '拆弹工具', price: 200, team: 'CT' },
  hegrenade: { id: 'hegrenade', name: 'HE Grenade', cn: '高爆手雷', price: 300, grenade: 'he' },
  flashbang: { id: 'flashbang', name: 'Flashbang', cn: '闪光弹', price: 200, grenade: 'flash' },
  smokegrenade: { id: 'smokegrenade', name: 'Smoke Grenade', cn: '烟雾弹', price: 300, grenade: 'smoke' },
};

export const BUY_MENU = {
  handguns: { title: '手枪', items: ['glock18', 'usp45', 'deagle', 'elite'] },
  smgs: { title: '冲锋枪', items: ['mp5navy', 'p90', 'mac10'] },
  shotguns: { title: '霰弹枪', items: ['xm1014'] },
  rifles: { title: '步枪', items: ['ak47', 'm4a1', 'galil', 'famas', 'sg552', 'aug'] },
  sniper: { title: '狙击枪', items: ['scout', 'awp'] },
  machineguns: { title: '机枪', items: ['m249'] },
  gear: { title: '装备', items: ['kevlar', 'kevlarhelm', 'defusekit'] },
  grenades: { title: '投掷物', items: ['hegrenade', 'flashbang', 'smokegrenade'] },
};

// 阵营可用武器（AK/Galil/MAC-10/双枪 只给 T，M4/FAMAS 只给 CT）
export const TEAM_WEAPONS = {
  T: ['glock18', 'elite', 'deagle', 'ak47', 'galil', 'sg552', 'famas', 'awp', 'scout',
    'mp5navy', 'p90', 'mac10', 'xm1014', 'm249'],
  CT: ['usp45', 'deagle', 'm4a1', 'famas', 'aug', 'awp', 'scout',
    'mp5navy', 'p90', 'xm1014', 'm249'],
};

export const TEAM_COLOR = {
  T: 0xc2a06b,
  CT: 0x7f93b5,
};

// ---------- 可配键位 ----------
// 统一用 KeyboardEvent.code（物理键位），不受输入法和键盘布局影响。
export const KEYMAP_DEFAULT = {
  forward: 'KeyW', back: 'KeyS', left: 'KeyA', right: 'KeyD',
  jump: 'Space', duck: 'ControlLeft', walk: 'ShiftLeft',
  use: 'KeyE', reload: 'KeyR', buy: 'KeyB', lastWeapon: 'KeyQ',
  slot1: 'Digit1', slot2: 'Digit2', slot3: 'Digit3', slot4: 'Digit4',
  flashlight: 'KeyF', drop: 'KeyG', scoreboard: 'Tab',
};

// 改键界面要展示的动作列表（顺序即显示顺序）
export const KEY_ACTIONS = [
  ['forward', '前进'], ['back', '后退'], ['left', '左移'], ['right', '右移'],
  ['jump', '跳跃'], ['duck', '下蹲'], ['walk', '静步'],
  ['use', '使用 / 安放'], ['reload', '换弹'], ['lastWeapon', '上一把武器'],
  ['slot1', '主武器'], ['slot2', '手枪'], ['slot3', '匕首'], ['slot4', '手雷'],
  ['flashlight', '手电筒'], ['drop', '丢弃武器'],
  ['buy', '购买菜单'], ['scoreboard', '计分板'],
];

// 键名的中文显示
export const KEY_LABEL = {
  Space: '空格', ControlLeft: '左 Ctrl', ShiftLeft: '左 Shift', Tab: 'Tab',
  AltLeft: '左 Alt', Escape: 'Esc', Backspace: '退格', Enter: '回车',
  ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→',
  CapsLock: 'CapsLock', Insert: 'Insert', Delete: 'Delete', Home: 'Home', End: 'End',
  PageUp: 'PageUp', PageDown: 'PageDown', Semicolon: '；', Quote: '’',
  Comma: '，', Period: '。', Slash: '/', Backslash: '\\', Backquote: '`',
  BracketLeft: '[', BracketRight: ']', Minus: '-', Equal: '=',
  MouseLeft: '鼠标左键', MouseRight: '鼠标右键', MouseMiddle: '滚轮',
};

// 把 KeyboardEvent.code 转成人看的标签。
// KEY_LABEL 只列了特殊键；字母/数字要剥前缀，否则界面上会直接写 "KeyB"。
export function keyLabel(code) {
  if (!code) return '未绑定';
  if (KEY_LABEL[code]) return KEY_LABEL[code];
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Numpad')) return `小键盘 ${code.slice(6)}`;
  return code;
}

export const SETTINGS_DEFAULT = {
  // 1.6 的默认 sensitivity 就是 3（m_yaw 0.022 × 3 ≈ 0.066°/计数）
  sensitivity: 3.0,
  fov: 90,
  volume: 0.7,
  crosshair: '#4dff66',
  crosshairSize: 8,
  crosshairGap: 3,
  showFps: true,
  invertY: false,
  autoReload: true,
  // 武器模型风格：项目已定 B 路线（现代 PBR），这里只是可选项
  weaponStyle: 'modern',
  keymap: { ...KEYMAP_DEFAULT },
};

export const BOT_NAMES = [
  'Vitaliy', 'Ivan', 'Dmitri', 'Sergei', 'Yuri', 'Boris', 'Nikita', 'Anton',
  'Kyle', 'Ryan', 'Marcus', 'Dylan', 'Cole', 'Trevor', 'Wesley', 'Blake',
];

export const MAP_NAME = 'de_outpost';
export const MAP_DISPLAY = 'de_outpost  ·  沙漠前哨';
