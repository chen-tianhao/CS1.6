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
// pen      : 有甲时的伤害保留系数
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
    kick: 1.7, pen: 0.77, kill: 300, speed: 225, sound: 'm4a1', auto: true,
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
    kick: 4.5, pen: 0.9, kill: 100, speed: 210, sound: 'awp', auto: false, scope: [0.55, 0.18],
  },
};

// ---------- 装备 ----------
export const GEAR = {
  kevlar: { id: 'kevlar', name: 'Kevlar Vest', cn: '防弹衣', price: 650 },
  kevlarhelm: { id: 'kevlarhelm', name: 'Kevlar + Helmet', cn: '防弹衣 + 头盔', price: 1000 },
  defusekit: { id: 'defusekit', name: 'Defuse Kit', cn: '拆弹工具', price: 200, team: 'CT' },
  hegrenade: { id: 'hegrenade', name: 'HE Grenade', cn: '高爆手雷', price: 300, grenade: 'he' },
  flashbang: { id: 'flashbang', name: 'Flashbang', cn: '闪光弹', price: 200, grenade: 'flash' },
  smokegrenade: { id: 'smokegrenade', name: 'Smoke Grenade', cn: '烟雾弹', price: 300, grenade: 'smoke' },
};

export const BUY_MENU = {
  handguns: { title: '手枪', items: ['glock18', 'usp45', 'deagle'] },
  smgs: { title: '冲锋枪', items: ['mp5navy', 'p90'] },
  rifles: { title: '步枪', items: ['ak47', 'm4a1', 'sg552', 'aug'] },
  sniper: { title: '狙击枪', items: ['scout', 'awp'] },
  gear: { title: '装备', items: ['kevlar', 'kevlarhelm', 'defusekit'] },
  grenades: { title: '投掷物', items: ['hegrenade', 'flashbang', 'smokegrenade'] },
};

// 阵营可用武器（AK 只给 T，M4 只给 CT；1.6 里其实可以捡，购买受限制）
export const TEAM_WEAPONS = {
  T: ['glock18', 'deagle', 'ak47', 'sg552', 'awp', 'scout', 'mp5navy', 'p90'],
  CT: ['usp45', 'deagle', 'm4a1', 'aug', 'awp', 'scout', 'mp5navy', 'p90'],
};

export const TEAM_COLOR = {
  T: 0xc2a06b,
  CT: 0x7f93b5,
};

export const SETTINGS_DEFAULT = {
  sensitivity: 1.0,
  fov: 90,
  volume: 0.7,
  crosshair: '#4dff66',
  crosshairSize: 8,
  crosshairGap: 3,
  showFps: true,
  invertY: false,
  autoReload: true,
};

export const BOT_NAMES = [
  'Vitaliy', 'Ivan', 'Dmitri', 'Sergei', 'Yuri', 'Boris', 'Nikita', 'Anton',
  'Kyle', 'Ryan', 'Marcus', 'Dylan', 'Cole', 'Trevor', 'Wesley', 'Blake',
];

export const MAP_NAME = 'de_outpost';
export const MAP_DISPLAY = 'de_outpost  ·  沙漠前哨';
