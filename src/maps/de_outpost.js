// ============================================================
//  maps/de_outpost.js — de_outpost 地图数据（纯数据，不含任何渲染逻辑）
//
//  想加新地图：复制本文件改坐标，在 maps/index.js 注册即可。
//  渲染、碰撞、导航、AO 全部由 src/map.js 从这份数据推导。
//
//  坐标约定：X 向东，Z 向南，Y 向上；1 格 = 100 单位（约 1.9 米）。
// ============================================================

export default {
  id: 'de_outpost',
  label: 'DE_OUTPOST',

  // ---- 可通行区域：矩形并集就是地面，边界会自动生成墙体 ----
  areas: [
    { name: 'T Spawn', x0: -500, x1: 500, z0: 1200, z1: 1900, kind: 'tspawn' },
    { name: 'T Long', x0: 400, x1: 1000, z0: 1380, z1: 1720, kind: 'road' },
    { name: 'Long A', x0: 900, x1: 1280, z0: -520, z1: 1700, kind: 'road' },
    { name: 'A Site', x0: 900, x1: 1700, z0: -920, z1: -380, kind: 'site' },
    { name: 'CT Ramp', x0: 320, x1: 1000, z0: -1120, z1: -700, kind: 'road' },
    { name: 'CT Spawn', x0: -620, x1: 420, z0: -1520, z1: -880, kind: 'ctspawn' },
    { name: 'CT Mid', x0: -320, x1: 320, z0: -1080, z1: -680, kind: 'road' },
    { name: 'Top Mid', x0: -320, x1: 320, z0: -700, z1: -180, kind: 'road' },
    { name: 'Mid', x0: -160, x1: 160, z0: -250, z1: 1350, kind: 'road' },
    { name: 'Lower Tunnel', x0: -980, x1: -120, z0: 700, z1: 960, kind: 'tunnel' },
    { name: 'B Tunnel', x0: -1280, x1: -880, z0: -470, z1: 1700, kind: 'tunnel' },
    { name: 'B Site', x0: -1720, x1: -880, z0: -920, z1: -300, kind: 'site' },
    { name: 'B Doors', x0: -1480, x1: -380, z0: -1280, z1: -860, kind: 'road' },
    { name: 'T Tunnel', x0: -980, x1: -420, z0: 1380, z1: 1720, kind: 'tunnel' },
  ],

  // ---- 有顶盖的区域（隧道）：会生成天花板并压暗地面 AO ----
  ceilings: [
    { x0: -980, x1: -120, z0: 700, z1: 960 },
    { x0: -1280, x1: -880, z0: 300, z1: 1700 },
    { x0: -980, x1: -420, z0: 1380, z1: 1720 },
  ],

  // ---- 包点 ----
  sites: {
    A: { name: 'A', x0: 950, x1: 1650, z0: -880, z1: -420 },
    B: { name: 'B', x0: -1680, x1: -920, z0: -880, z1: -340 },
  },

  // ---- 出生点：以中点为圆心环形展开 ----
  spawns: {
    T: { x: 0, z: 1550, yaw: 0, count: 5, rx: 190, rz: 110 },
    CT: { x: -100, z: -1300, yaw: Math.PI, count: 5, rx: 200, rz: 110, phase: 0.6 },
  },

  // ---- 道具 ----
  // t: crate(木箱) / barrel(油桶) / box(任意盒体) / blocker(整格石墩)
  // mat: crate | concrete | metalRed | metalBlue | metalGreen
  //
  // 木箱高度只分三档，它们直接对应 GoldSrc 的移动能力，别随手改：
  //   h: 32  台阶箱 —— 跳跃高度 45（268²/2·800）> 32，从地面能直接跳上去；
  //          但 32 > stepHeight 18，所以不能"走"上去，必须真的跳。
  //   h: 64  架点箱 —— 45 < 64，地面跳不上去，得先踩 32 的箱子再跳（32+45=77）。
  //   h: 110+ 纯掩体 / 远景，不用想着上去。
  // 想让人能上高点，就把一个 32 和一个 64 挨着摆（缝隙别超过 10 单位）。
  props: [
    // A 点箱堆：两组 32 → 64 台阶，外加两个高箱当远景掩体
    { t: 'crate', x: 1150, z: -700, s: 120, h: 64 },
    { t: 'crate', x: 1270, z: -700, s: 120, h: 120 },
    { t: 'crate', x: 1150, z: -580, s: 100, h: 32 },
    { t: 'crate', x: 1450, z: -820, s: 110, h: 64 },
    { t: 'crate', x: 1560, z: -800, s: 110, h: 32 },
    { t: 'crate', x: 1500, z: -620, s: 120, h: 120 },

    // B 点箱堆与集装箱：门口一组 32 → 64
    { t: 'crate', x: -1450, z: -700, s: 120, h: 64 },
    { t: 'crate', x: -1330, z: -700, s: 120, h: 32 },
    { t: 'crate', x: -1450, z: -560, s: 110, h: 110 },
    { t: 'crate', x: -1120, z: -800, s: 120, h: 64 },
    { t: 'crate', x: -1000, z: -640, s: 110, h: 32 },
    { t: 'box', x: -1250, y: 125, z: -430, w: 340, h: 250, d: 120, mat: 'metalBlue' },
    { t: 'box', x: -960, y: 125, z: -600, w: 120, h: 250, d: 300, mat: 'metalGreen' },

    // T 出生点：32 → 64 的箱子台阶
    { t: 'crate', x: 300, z: 1500, s: 110, h: 32 },
    { t: 'crate', x: 300, z: 1610, s: 110, h: 64 },
    { t: 'box', x: -300, y: 60, z: 1700, w: 200, h: 120, d: 90, mat: 'concrete' },
    { t: 'barrel', x: -420, z: 1350 },
    { t: 'barrel', x: -380, z: 1420 },

    // Long A 掩体（长通道上的车）
    { t: 'box', x: 1120, y: 45, z: 980, w: 200, h: 90, d: 110, mat: 'metalBlue' },
    { t: 'box', x: 1120, y: 125, z: 980, w: 130, h: 70, d: 108, mat: 'metalBlue' },
    { t: 'crate', x: 1010, z: 460, s: 100, h: 32 },
    { t: 'crate', x: 1180, z: -100, s: 100, h: 64 },
    // Long A 观察平台：只能从西墙的梯子上去（顶面 158）
    { t: 'box', x: 1090, y: 150, z: 750, w: 300, h: 16, d: 90, mat: 'concrete' },

    // Long 大门（双门框 + 横梁）
    { t: 'box', x: 900, y: 220, z: 620, w: 24, h: 440, d: 90, mat: 'concrete' },
    { t: 'box', x: 1280, y: 220, z: 620, w: 24, h: 440, d: 90, mat: 'concrete' },
    { t: 'box', x: 1090, y: 410, z: 620, w: 400, h: 60, d: 30, mat: 'concrete' },

    // Mid 折线：打断 T 出生点到 CT 的直线视野
    { t: 'blocker', cx: 19, cz: 23, mat: 'concrete' },
    { t: 'blocker', cx: 18, cz: 17, mat: 'concrete' },
    { t: 'blocker', cx: 20, cz: 29, mat: 'concrete' },

    // Mid 大门
    { t: 'box', x: -160, y: 220, z: 300, w: 30, h: 440, d: 100, mat: 'concrete' },
    { t: 'box', x: 160, y: 220, z: 300, w: 30, h: 440, d: 100, mat: 'concrete' },
    { t: 'box', x: 0, y: 410, z: 300, w: 360, h: 60, d: 30, mat: 'concrete' },
    { t: 'crate', x: 120, z: 180, s: 100, h: 64 },

    // Top mid / CT mid
    { t: 'crate', x: -240, z: -400, s: 110, h: 64 },
    { t: 'crate', x: 240, z: -420, s: 110, h: 32 },
    { t: 'barrel', x: 180, z: -820 },

    // CT 出生点
    { t: 'box', x: -450, y: 65, z: -1000, w: 240, h: 130, d: 110, mat: 'concrete' },
    { t: 'box', x: 250, y: 45, z: -1050, w: 180, h: 90, d: 100, mat: 'concrete' },
    { t: 'barrel', x: -560, z: -1400 },
    { t: 'crate', x: 120, z: -1300, s: 100, h: 64 },

    // B 通道
    { t: 'crate', x: -1180, z: 900, s: 100, h: 32 },
    { t: 'crate', x: -1000, z: 300, s: 100, h: 64 },
    { t: 'barrel', x: -1220, z: 1400 },
    { t: 'barrel', x: -1180, z: 1450 },

    // Lower tunnel
    { t: 'crate', x: -500, z: 830, s: 100, h: 32 },

    // CT 上 A 坡道
    { t: 'crate', x: 520, z: -940, s: 100, h: 32 },
    { t: 'crate', x: 760, z: -1050, s: 110, h: 64 },

    // B 门
    { t: 'box', x: -1150, y: 220, z: -1000, w: 30, h: 440, d: 110, mat: 'concrete' },
    { t: 'box', x: -700, y: 220, z: -1000, w: 30, h: 440, d: 110, mat: 'concrete' },
    { t: 'crate', x: -1000, z: -1120, s: 100, h: 32 },
    { t: 'crate', x: -620, z: -1140, s: 100, h: 64 },
  ],

  // ---- 梯子 ----
  // 攀爬区是个 AABB：站在里面按前=上升、按后=下降、松开就挂着。
  // face 只影响横杆朝向（'x+' 表示梯面贴在垂直于 X 轴的墙上）。
  ladders: [
    // Long A 西墙：爬上去是 A 点侧翼的观察平台
    { x0: 900, x1: 950, z0: 700, z1: 800, y0: 0, y1: 170, face: 'x+' },
  ],

  // ---- 无碰撞装饰 ----
  decor: [
    { kind: 'cylinder', x: 1780, y: 190, z: -700, r0: 10, r1: 14, h: 380, mat: 'concrete' },
  ],
};
