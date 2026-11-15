// ============================================================
//  models.js — 角色与武器几何体（全部程序化，无外部资产）
//
//  为什么不引入 glTF 模型：
//  本项目承诺「双击 index.html 即可运行」，而 loader 走 fetch，
//  在 file:// 下会被 CORS 拦死。外部资产只能 base64 内联，
//  代价是包体膨胀且风格不可控。这里用几何体拼装，保持零依赖。
//
//  人物按 72 单位总高（与 PHYS.standHeight 一致）搭建，分髋/膝/肩/肘
//  四级关节，行走时做二级摆动而不是整条腿刚性旋转。
// ============================================================
import * as THREE from 'three';
import { getWeaponTextures, getWeaponTexturesClassic, getWeaponTexturesModern } from './textures.js';

const WT = getWeaponTextures();

// ---------- 共享材质 ----------
// map 与 color 相乘：贴图负责纹理细节，color 负责明暗档位。
const W = {
  steel: new THREE.MeshLambertMaterial({ map: WT.metal, color: 0xa6acb6 }),
  steelDark: new THREE.MeshLambertMaterial({ map: WT.metal, color: 0x646972 }),
  poly: new THREE.MeshLambertMaterial({ map: WT.poly, color: 0x9297a0 }),
  black: new THREE.MeshLambertMaterial({ color: 0x141518 }),
  wood: new THREE.MeshLambertMaterial({ map: WT.wood, color: 0xd2ac82 }),
  woodDark: new THREE.MeshLambertMaterial({ map: WT.wood, color: 0x8a6a48 }),
  accent: new THREE.MeshLambertMaterial({ color: 0x8d8b80 }),
  glass: new THREE.MeshLambertMaterial({ color: 0x1d4f63 }),
  // 手套比袖口亮一档：两者同色时整条小臂会糊成一块，看不出在握枪
  glove: new THREE.MeshLambertMaterial({ color: 0xa0967c }),
  sleeve: new THREE.MeshLambertMaterial({ color: 0x33372a }),
  skin: new THREE.MeshLambertMaterial({ color: 0xb8825a }),
  skinDark: new THREE.MeshLambertMaterial({ color: 0x8f6242 }),
};

// ============================================================
//  两套武器材质：经典 / 现代
//  这是这次对照实验的核心 —— 同一把枪、同一个姿态，只换"材质工艺"，
//  看观感差距到底来自几何还是来自材质。
// ============================================================
// 项目方向已定 B 路线（现代 PBR）。'classic' 只作为对照实验保留，
// 可以在主菜单的「武器风格」里切回去看差别。
let STYLE = 'modern';
export function getWeaponStyle() { return STYLE; }
export function setWeaponStyle(s) {
  if (s !== 'classic' && s !== 'modern') return STYLE;
  if (s === STYLE) return STYLE;
  STYLE = s;
  // 缓存里的模型是按旧风格建的，换风格必须整体丢弃
  for (const k of Object.keys(WEAPON_CACHE)) delete WEAPON_CACHE[k];
  return STYLE;
}

let CLASSIC = null;
function classicMats() {
  if (CLASSIC) return CLASSIC;
  const T = getWeaponTexturesClassic();
  const L = (map, color) => new THREE.MeshLambertMaterial({ map, color, flatShading: true });
  CLASSIC = {
    steel: L(T.metal, 0xa6acb6),
    steelDark: L(T.metal, 0x646972),
    accent: new THREE.MeshLambertMaterial({ color: 0x8d8b80, flatShading: true }),
    wood: L(T.wood, 0xd2ac82),
    woodDark: L(T.wood, 0x8a6a48),
    poly: L(T.poly, 0x9297a0),
    black: new THREE.MeshLambertMaterial({ color: 0x141518, flatShading: true }),
  };
  return CLASSIC;
}

let MODERN = null;
function modernMats() {
  if (MODERN) return MODERN;
  const T = getWeaponTexturesModern();
  const S = (set, opts) => new THREE.MeshStandardMaterial({
    map: set.map, normalMap: set.normalMap, roughnessMap: set.roughnessMap,
    envMapIntensity: 0.55,   // 环境反射别给满，否则木头会被照成塑料
    ...opts,
  });
  MODERN = {
    steel: S(T.metal, { color: 0xb9bec7, metalness: 0.86, roughness: 0.44 }),
    steelDark: S(T.metal, { color: 0x7e848d, metalness: 0.90, roughness: 0.52 }),
    accent: new THREE.MeshStandardMaterial({ color: 0x9aa0a8, metalness: 0.90, roughness: 0.38, envMapIntensity: 0.55 }),
    wood: S(T.wood, { color: 0xa07a52, metalness: 0.0, roughness: 0.66 }),
    woodDark: S(T.wood, { color: 0x77572f, metalness: 0.0, roughness: 0.72 }),
    poly: S(T.poly, { color: 0x8d939b, metalness: 0.0, roughness: 0.74 }),
    black: new THREE.MeshStandardMaterial({ color: 0x1a1d22, metalness: 0.55, roughness: 0.48, envMapIntensity: 0.55 }),
    // 镜片：低粗糙 + 高环境强度，才有"玻璃反光"的感觉
    glass: new THREE.MeshStandardMaterial({ color: 0x14313d, metalness: 0.15, roughness: 0.06, envMapIntensity: 2.2 }),
  };
  return MODERN;
}

// ---------- 几何体缓存 ----------
function boxGeo(w, h, d) { return new THREE.BoxGeometry(w, h, d); }
function capGeo(r, len, seg = 8) { return new THREE.CapsuleGeometry(r, len, 3, seg); }
function cylGeo(r1, r2, h, seg = 10) { return new THREE.CylinderGeometry(r1, r2, h, seg); }

function b(w, h, d, m, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const mesh = new THREE.Mesh(boxGeo(w, h, d), m);
  mesh.position.set(x, y, z);
  mesh.rotation.set(rx, ry, rz);
  return mesh;
}

// 沿 Z 轴的圆柱（枪管用）
function tube(r1, r2, len, m, x = 0, y = 0, z = 0, seg = 10) {
  const mesh = new THREE.Mesh(cylGeo(r1, r2, len, seg), m);
  mesh.rotation.x = Math.PI / 2;
  mesh.position.set(x, y, z);
  return mesh;
}

// ============================================================
//  角色
// ============================================================

// 面部贴图：区分 T（面罩）与 CT（护目镜）
const faceCache = {};
function faceTexture(team) {
  if (faceCache[team]) return faceCache[team];
  const S = 64;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d');
  x.fillStyle = team === 'T' ? '#a8784e' : '#c19474';
  x.fillRect(0, 0, S, S);
  // 额头阴影
  const g = x.createLinearGradient(0, 0, 0, S);
  g.addColorStop(0, 'rgba(60,40,26,0.45)');
  g.addColorStop(0.35, 'rgba(60,40,26,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, S, S);

  if (team === 'T') {
    // 黑面罩遮住下半脸
    x.fillStyle = '#1d1b19';
    x.fillRect(0, 36, S, S - 36);
    x.fillStyle = '#2a2724';
    x.fillRect(0, 36, S, 3);
    // 眼睛
    x.fillStyle = '#f0e6d8';
    x.fillRect(14, 24, 12, 6);
    x.fillRect(38, 24, 12, 6);
    x.fillStyle = '#241a12';
    x.fillRect(19, 25, 5, 5);
    x.fillRect(43, 25, 5, 5);
  } else {
    // 护目镜
    x.fillStyle = '#1b2831';
    x.fillRect(4, 18, S - 8, 16);
    x.fillStyle = 'rgba(120,170,200,0.5)';
    x.fillRect(8, 21, 18, 6);
    x.fillStyle = '#0e1a22';
    x.fillRect(0, 33, S, 2);
    // 下巴阴影
    x.fillStyle = 'rgba(50,34,22,0.22)';
    x.fillRect(0, 46, S, S - 46);
  }

  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  faceCache[team] = t;
  return t;
}

// 角色材质统一到 PBR：高粗糙度、零金属度（布料/皮肤/皮革都是这种响应）。
// 这样角色和场景、武器处在同一套光照模型里，不会显得"平涂"。
const CHAR_PBR = (opts) => new THREE.MeshStandardMaterial({
  roughness: 0.92, metalness: 0.0, envMapIntensity: 0.16, ...opts,
});

const charMatCache = {};
function charMats(team) {
  if (charMatCache[team]) return charMatCache[team];
  const skinC = team === 'T' ? 0xa87b52 : 0xc49773;
  const clothC = team === 'T' ? 0x8a7148 : 0x5d6b7a;
  const vestC = team === 'T' ? 0x54452c : 0x39434f;
  const M = {
    skin: CHAR_PBR({ color: skinC, roughness: 0.78 }),
    cloth: CHAR_PBR({ color: clothC }),
    vest: CHAR_PBR({ color: vestC, roughness: 0.86 }),
    belt: CHAR_PBR({ color: 0x2b2823, roughness: 0.72 }),
    pouch: CHAR_PBR({ color: team === 'T' ? 0x3f3626 : 0x2c343d }),
    boot: CHAR_PBR({ color: 0x241f1a, roughness: 0.70 }),
    pack: CHAR_PBR({ color: team === 'T' ? 0x4a4030 : 0x323b45 }),
    hat: CHAR_PBR({ color: team === 'T' ? 0x1f1d1a : 0x2b3540, roughness: 0.88 }),
    glove: CHAR_PBR({ color: 0x2e2c25, roughness: 0.80 }),
    face: CHAR_PBR({ map: faceTexture(team), roughness: 0.76 }),
  };
  charMatCache[team] = M;
  return M;
}

// 共享几何体（尺寸固定，所有角色复用）
const CG = {
  thigh: capGeo(3.9, 7),
  shin: capGeo(3.3, 6),
  upperArm: capGeo(3.4, 7),
  forearm: capGeo(3.0, 6),
  boot: boxGeo(6.5, 5, 11),
  hand: boxGeo(4.6, 5.4, 5),
  head: boxGeo(9.4, 10.6, 9.6),
  neck: cylGeo(3.0, 3.0, 4, 8),
  helm: new THREE.SphereGeometry(5.9, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.56),
  // 第三人称简化枪：机匣 + 枪管 + 弹匣
  gunBody: boxGeo(4.5, 4.5, 24),
  gunBarrel: boxGeo(2, 2, 14),
  gunMag: boxGeo(3.4, 7, 4.4),
};

export function buildCharacterMesh(team) {
  const M = charMats(team);
  const g = new THREE.Group();

  // 躯干挂在髋部枢轴上（y = 28）。这样前倾、下蹲、俯仰都绕髋关节转，
  // 而不是像以前那样整体 scale.y 压扁 —— 后者会把头盔和脑袋一起压扁。
  const HIP_Y = 28;
  const torso = new THREE.Group();
  torso.position.y = HIP_Y;
  g.add(torso);
  const T = (y) => y - HIP_Y;

  // ---- 躯干 ----
  torso.add(b(19, 9, 12, M.cloth, 0, T(29.5), 0));          // 髋
  torso.add(b(20, 2.8, 13, M.belt, 0, T(33.8), 0));         // 腰带
  torso.add(b(17.5, 9, 11, M.cloth, 0, T(38.6), 0));        // 腹
  torso.add(b(21, 14, 12.5, M.vest, 0, T(47), 0));          // 胸（战术背心）
  torso.add(b(6, 3.2, 8.5, M.vest, -10, T(53.5), 0));       // 左肩垫
  torso.add(b(6, 3.2, 8.5, M.vest, 10, T(53.5), 0));        // 右肩垫
  // 胸前弹匣袋
  torso.add(b(5.4, 5, 2.6, M.pouch, -6.2, T(45.6), -6.6));
  torso.add(b(5.4, 5, 2.6, M.pouch, 0, T(45.6), -6.6));
  torso.add(b(5.4, 5, 2.6, M.pouch, 6.2, T(45.6), -6.6));
  torso.add(b(15, 15.5, 6, M.pack, 0, T(45.5), 9.2));       // 背包
  // 侧腰水壶 / 刀鞘，让轮廓不那么"方"
  torso.add(b(4.2, 6.5, 5, M.pouch, -10.4, T(34.2), 1.2));
  torso.add(b(3.2, 9, 3, M.belt, 10.2, T(35.5), 2.4, 0.1));

  // ---- 颈与头 ----
  torso.add(b(9.8, 4.2, 9.8, M.cloth, 0, T(57), 0));        // 衣领
  const neck = new THREE.Mesh(CG.neck, M.skin);
  neck.position.set(0, T(57.4), 0);
  torso.add(neck);

  // 头部枢轴在颈根，抬头低头绕这里转
  const head = new THREE.Group();
  head.position.set(0, T(57.4), 0);
  torso.add(head);

  // BoxGeometry 材质顺序 +X,-X,+Y,-Y,+Z,-Z；模型朝 -Z，脸贴在 -Z
  const headMats = [M.skin, M.skin, M.hat, M.skin, M.skin, M.face];
  const headMesh = new THREE.Mesh(CG.head, headMats);
  headMesh.position.set(0, 6.0, 0);
  head.add(headMesh);

  // 头盔只给 CT；T 用头巾
  let helmet = null;
  if (team === 'CT') {
    helmet = new THREE.Mesh(CG.helm, M.hat);
    helmet.position.set(0, 8.2, 0);
    head.add(helmet);
  } else {
    head.add(b(10.1, 4.4, 10.3, M.hat, 0, 10.0, 0));
    head.add(b(4.2, 6.5, 3, M.hat, 0, 5.6, 5.4, 0.3));
  }

  // ---- 腿：髋 → 膝 → 靴（挂在根节点上，不随躯干转） ----
  const makeLeg = (side) => {
    const hip = new THREE.Group();
    hip.position.set(side * 5.6, HIP_Y, 0);
    const thigh = new THREE.Mesh(CG.thigh, M.cloth);
    thigh.position.y = -6.5;
    hip.add(thigh);
    // 护膝
    hip.add(b(6.4, 3.2, 6.6, M.vest, 0, -12.2, -0.6));

    const knee = new THREE.Group();
    knee.position.y = -13;
    const shin = new THREE.Mesh(CG.shin, M.cloth);
    shin.position.y = -6;
    knee.add(shin);
    const boot = new THREE.Mesh(CG.boot, M.boot);
    boot.position.set(0, -12.4, -1.4);
    knee.add(boot);
    knee.add(b(6.6, 1.6, 11.4, M.belt, 0, -14.6, -1.4));   // 鞋底
    hip.add(knee);
    g.add(hip);
    return { hip, knee };
  };
  const legL = makeLeg(-1);
  const legR = makeLeg(1);

  // ---- 臂：肩 → 肘 → 手，持枪姿态（挂在躯干上，跟着身体转） ----
  const makeArm = (side) => {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 10.4, T(52.6), 0);
    const upper = new THREE.Mesh(CG.upperArm, M.cloth);
    upper.position.y = -6;
    shoulder.add(upper);
    shoulder.add(b(6.2, 3, 6.4, M.vest, 0, -11, 0));       // 护肘

    const elbow = new THREE.Group();
    elbow.position.y = -11.8;
    const fore = new THREE.Mesh(CG.forearm, M.cloth);
    fore.position.y = -5.4;
    elbow.add(fore);
    const hand = new THREE.Mesh(CG.hand, M.glove);
    hand.position.set(0, -11.4, 0);
    elbow.add(hand);
    shoulder.add(elbow);
    torso.add(shoulder);
    return { shoulder, elbow };
  };
  const armL = makeArm(-1);
  const armR = makeArm(1);

  // 持枪姿态：右臂屈肘握把、左臂横过胸前托护木。
  // 之前 z 轴给了 0.6，手臂几乎平举成 T 字，看起来像在滑翔而不是持枪。
  armR.shoulder.rotation.set(0.55, 0, -0.10);
  armR.elbow.rotation.set(1.35, 0, 0);
  armL.shoulder.rotation.set(0.75, 0, 0.34);
  armL.elbow.rotation.set(1.15, 0, 0);
  const idleL = armL.shoulder.rotation.x;
  const idleR = armR.shoulder.rotation.x;

  // ---- 第三人称简化武器（挂在躯干上，跟着身体俯仰） ----
  const gun = new THREE.Group();
  gun.add(new THREE.Mesh(CG.gunBody, W.black));
  const barrel = new THREE.Mesh(CG.gunBarrel, W.steelDark);
  barrel.position.set(0, 0.6, -19);
  gun.add(barrel);
  const mag = new THREE.Mesh(CG.gunMag, W.black);
  mag.position.set(0, -4.8, 1.2);
  mag.rotation.x = 0.25;
  gun.add(mag);
  gun.position.set(6.2, T(40.6), -7);
  gun.rotation.set(-0.04, 0.06, 0);
  torso.add(gun);

  return {
    group: g,
    torso,
    head,
    hipY: HIP_Y,
    helmet,
    gun,
    legL: legL.hip,
    kneeL: legL.knee,
    legR: legR.hip,
    kneeR: legR.knee,
    armL: armL.shoulder,
    elbowL: armL.elbow,
    armR: armR.shoulder,
    elbowR: armR.elbow,
    idleArmL: idleL,
    idleArmR: idleR,
  };
}

// ============================================================
//  武器（第一人称）
//  每种枪的辨识度靠轮廓特征：AK 的弯弹匣与木护木、M4 的提把与圆护木、
//  AWP 的大镜与长管、沙鹰的方套筒。零件数量比之前多 3 倍，但都是方块。
// ============================================================

// 弯曲弹匣：用若干段盒子旋转拼出弧度
function curvedMag(m, { segs = 4, w = 3.4, h = 3.0, d = 4.4, y = -2.6, z = -4, curve = 0.19, rx = 0 }) {
  const g = new THREE.Group();
  for (let i = 0; i < segs; i++) {
    const seg = b(w, h + 0.4, d, m, 0, -i * (h - 0.5), -i * curve * 3.6, -i * curve);
    g.add(seg);
  }
  g.position.set(0, y, z);
  g.rotation.x = rx;
  return g;
}

// 手与手套：第一人称只看得到手套和袖口，不要露出肉色前臂。
//
// 之前是一整块 4.2×4.8×5.0 的方块，比 AK 的机匣（3.5 宽）还大，
// 摆在握把上就是一坨糊住的箱子 —— 玩家根本看不出自己在握枪。
// 现在拆成「掌 + 三根指节 + 拇指 + 腕 + 前臂袖」：
// 指节是唯一能让人读出"这是手"的信息，所以必须做出来。
//
// side = 1 表示手从右侧包过来（右手握枪），-1 为左手。
function glovedHand(side = 1, scale = 1) {
  const g = new THREE.Group();

  // 1.6 的第一人称手在画面上是**明显偏大**的（比真实比例大一圈），
  // 不然在 1080p 下只有几十像素，根本读不出形状。这里按那个比例来。
  //
  // 手背：贴在握把外侧
  g.add(b(4.0, 6.2, 6.0, W.glove, side * 1.5, 0, 0.4));
  // 四根指节：做在朝镜头那一面（+Z）
  for (let i = 0; i < 4; i++) {
    g.add(b(2.6, 1.15, 1.9, W.glove, side * 0.3, -2.2 + i * 1.45, 3.5));
  }
  // 拇指：从外侧翻上来
  g.add(b(1.8, 1.5, 3.0, W.glove, side * 2.7, 2.1, 1.0));
  // 腕口
  g.add(b(3.6, 4.2, 2.4, W.glove, side * 1.2, -0.7, 4.0));
  // 前臂袖：又长又粗，朝画面右下角甩出去
  const sleeve = b(4.4, 4.6, 14.0, W.sleeve, side * 2.3, -3.0, 11.0);
  sleeve.rotation.x = -0.28;
  sleeve.rotation.z = side * 0.30;
  g.add(sleeve);

  g.scale.setScalar(scale);
  return g;
}

function buildAK47(M = W) {
  const g = new THREE.Group();
  // 机匣
  g.add(b(3.5, 3.6, 20, M.steel, 0, 0, -2));
  g.add(b(3.2, 1.3, 13, M.steelDark, 0, 2.6, -3.2));       // 上盖
  g.add(b(3.7, 1.0, 4.2, M.accent, 0, -1.9, -8.5));        // 下护木座
  // 木质护木 + 导气管
  g.add(b(3.3, 3.1, 11.5, M.wood, 0, -0.9, -14.6));
  g.add(b(2.3, 2.0, 11.5, M.steelDark, 0, 2.1, -14.6));
  g.add(b(2.0, 0.9, 11.5, M.accent, 0, 3.2, -14.6));       // 导气管上棱
  // 枪管与消焰器
  g.add(tube(0.85, 0.85, 12, M.steelDark, 0, 1.2, -23));
  g.add(tube(1.15, 1.15, 3.4, M.steel, 0, 1.2, -29.4));
  // 准星座（斜切柱 + 护环）
  g.add(b(1.1, 3.0, 1.4, M.steel, 0, 2.9, -26.2));
  g.add(b(0.7, 1.4, 0.7, M.accent, 0, 4.3, -26.2));
  // 照门
  g.add(b(1.7, 1.3, 1.2, M.steel, 0, 3.3, -8.6));
  g.add(b(0.6, 1.0, 0.5, M.black, 0, 3.6, -8.9));
  // 弯弹匣
  g.add(curvedMag(M.black, { segs: 4, y: -2.2, z: -4.4, curve: 0.22 }));
  // 握把
  g.add(b(2.9, 7.2, 4.4, M.poly, 0, -5.4, 3.4, 0.3));
  // 枪托（木质，下折）
  g.add(b(2.7, 3.2, 13.0, M.wood, 0, -1.2, 13.8, 0.1));
  g.add(b(3.0, 4.4, 2.0, M.woodDark, 0, -2.0, 20.2, 0.1)); // 托底板
  // 拉机柄
  g.add(b(0.9, 0.9, 3.4, M.steel, 2.0, 1.5, -3.2));
  // 手
  const rh = glovedHand(1);
  rh.position.set(0.2, -4.6, 3.6);
  g.add(rh);
  const lh = glovedHand(-1);
  lh.position.set(-0.4, -2.0, -11.4);
  g.add(lh);
  return g;
}

// ============================================================
//  同一把 AK 的"现代"版本：用来和经典版做观感对照
//
//  造型语言上的差别（这才是两条路线的真正分界）：
//    · 圆截面优先：枪管、导气管、护木、防尘盖都用圆柱，而不是方盒
//    · 增加分段与倒角：机匣分上下两段、弹匣带弧度、托腮板独立
//    · 材质换 PBR：金属有各向异性高光，木头有微表面粗糙度
//  比例刻意和经典版对齐，这样对比的是"风格"而不是"造型"。
// ============================================================
function buildAK47Modern() {
  const M = modernMats();
  const g = new THREE.Group();

  // 下机匣：铣削台阶（两段不同宽度）
  g.add(b(3.5, 2.4, 19.5, M.steel, 0, -1.0, -2));
  g.add(b(3.8, 1.6, 19.5, M.steel, 0, 0.6, -2));
  // 防尘盖：AK 最好认的那个圆弧
  const cover = new THREE.Mesh(new THREE.CylinderGeometry(1.72, 1.72, 13.0, 20), M.steelDark);
  cover.rotation.x = Math.PI / 2;
  cover.position.set(0, 2.05, -3.2);
  g.add(cover);
  // 机匣铆钉
  for (let i = 0; i < 3; i++) {
    const rivet = new THREE.Mesh(new THREE.SphereGeometry(0.32, 8, 6), M.steelDark);
    rivet.position.set(1.78, -0.4, -7 + i * 3.2);
    g.add(rivet);
  }
  // 导气管 + 木质护木（都是圆截面）
  g.add(tube(0.95, 0.95, 12.5, M.steel, 0, 2.35, -14.2, 12));
  g.add(tube(1.95, 1.95, 11.5, M.wood, 0, -0.55, -14.5, 16));
  // 护木上的散热指槽
  for (let i = 0; i < 4; i++) {
    g.add(b(3.4, 0.45, 0.9, M.woodDark, 0, -1.6, -10.6 - i * 2.1));
  }
  // 枪管 + 消焰器
  g.add(tube(0.72, 0.78, 13.0, M.steelDark, 0, 1.15, -23.5, 14));
  g.add(tube(1.18, 1.05, 3.6, M.steel, 0, 1.15, -29.6, 14));
  // 准星座
  g.add(b(1.0, 2.6, 1.3, M.steel, 0, 2.75, -26.3));
  g.add(tube(0.42, 0.30, 2.0, M.steelDark, 0, 4.2, -26.3, 10));
  // 照门
  g.add(b(1.9, 1.1, 1.4, M.steel, 0, 3.15, -8.6));
  g.add(b(0.55, 0.9, 0.5, M.black, 0, 3.45, -8.9));
  // 弯弹匣（段数更多，弧度更顺）
  g.add(curvedMag(M.black, { segs: 6, w: 3.3, h: 2.6, d: 4.6, y: -2.0, z: -4.2, curve: 0.17 }));
  // 握把：带指槽
  g.add(b(2.8, 7.0, 4.2, M.poly, 0, -5.4, 3.4, 0.3));
  for (let i = 0; i < 3; i++) {
    g.add(b(3.0, 0.4, 4.0, M.poly, 0, -7.2 + i * 1.5, 3.4, 0.3));
  }
  // 木质枪托：托身 + 托腮板 + 托底板
  g.add(b(2.8, 3.0, 13.5, M.wood, 0, -1.2, 13.6, 0.1));
  g.add(b(3.2, 1.0, 8.0, M.wood, 0, 0.4, 14.6, 0.1));
  g.add(b(3.1, 4.6, 2.2, M.woodDark, 0, -2.0, 20.3, 0.1));
  // 拉机柄
  g.add(b(0.85, 0.85, 3.2, M.steel, 2.1, 1.35, -3.2));
  g.add(tube(0.55, 0.55, 1.6, M.steelDark, 2.1, 1.35, -1.8, 8));
  // 手（两版共用同一双手，对比只针对枪）
  const rh = glovedHand(1);
  rh.position.set(0.2, -4.6, 3.6);
  g.add(rh);
  const lh = glovedHand(-1);
  lh.position.set(-0.4, -2.0, -11.4);
  g.add(lh);
  return g;
}

function buildM4() {
  const g = new THREE.Group();
  // 上下机匣
  g.add(b(3.3, 2.6, 18, W.steel, 0, 0.9, -2));              // 上机匣（比护木亮一档）
  g.add(b(3.0, 2.2, 14, W.steel, 0, -1.6, -1));             // 下机匣
  // 提把（U 形，三段围合）
  g.add(b(1.5, 0.8, 11, W.black, 0, 3.0, -3));
  g.add(b(1.5, 1.5, 0.9, W.black, 0, 2.4, -8.2));
  g.add(b(1.5, 1.5, 0.9, W.black, 0, 2.4, 2.0));
  // 圆护木
  g.add(tube(2.2, 2.2, 13, W.poly, 0, 0.6, -13.5, 12));
  for (let i = 0; i < 5; i++) {
    g.add(b(4.4, 0.5, 1.1, W.black, 0, 0.6, -9.5 - i * 2.2));
  }
  // 枪管 + 消焰器
  g.add(tube(0.8, 0.8, 11, W.steelDark, 0, 0.9, -24));
  g.add(tube(1.05, 1.05, 3.0, W.steel, 0, 0.9, -30));
  // 三角准星（前后两柱构成 A 形）
  g.add(b(0.8, 3.2, 0.8, W.steel, 0, 2.6, -25.4));
  g.add(b(2.2, 0.7, 0.8, W.steel, 0, 1.3, -25.4));
  // 直弹匣（轻微前倾）
  g.add(b(3.2, 7.8, 4.6, W.black, 0, -5.4, -4.2, 0.12));
  // 握把
  g.add(b(2.8, 6.8, 4.2, W.poly, 0, -4.6, 3.6, 0.28));
  // 伸缩枪托（多段管 + 托底）
  g.add(tube(1.2, 1.2, 9, W.steelDark, 0, -0.4, 12.4, 8));
  g.add(b(3.2, 4.2, 3.6, W.poly, 0, -1.0, 17.4));
  // 手
  const rh = glovedHand(1);
  rh.position.set(0.2, -4.0, 3.8);
  g.add(rh);
  const lh = glovedHand(-1);
  lh.position.set(-0.4, -1.6, -12.6);
  g.add(lh);
  return g;
}

function buildAWP() {
  const g = new THREE.Group();
  // 机匣与枪身
  g.add(b(3.4, 4.0, 24, W.steelDark, 0, 0, -6));
  // 长枪管
  g.add(tube(0.95, 0.95, 26, W.steel, 0, 0.6, -30));
  g.add(tube(1.3, 1.3, 3.6, W.black, 0, 0.6, -43.6));   // 制退器
  // 大瞄镜：主镜筒 + 前后喇叭口。镜筒用深灰金属而不是纯黑，
  // 否则整把枪在画面里会糊成一根黑棒，辨识度全丢。
  g.add(tube(2.6, 2.6, 15, W.steelDark, 0, 4.0, -10, 12));
  g.add(tube(3.2, 2.6, 3.0, W.steel, 0, 4.0, -19.5, 12));
  g.add(tube(2.7, 3.1, 2.6, W.steel, 0, 4.0, -1.2, 12));
  g.add(tube(2.2, 2.2, 0.6, W.glass, 0, 4.0, -21.2, 12)); // 前镜片
  // 镜桥
  g.add(b(2.0, 2.4, 2.2, W.steel, 0, 2.2, -5.4));
  g.add(b(2.0, 2.4, 2.2, W.steel, 0, 2.2, -15.2));
  // 枪托（拇指孔用四段围合）
  g.add(b(3.2, 2.0, 14, W.poly, 0, -1.4, 13.2, 0.06));
  g.add(b(3.0, 2.4, 12, W.poly, 0, -3.4, 14.4, 0.22));
  g.add(b(3.4, 5.0, 2.2, W.black, 0, -2.6, 20.2, 0.22));
  // 弹匣
  g.add(b(2.8, 4.2, 5.4, W.black, 0, -3.4, -6.4));
  // 握把
  g.add(b(2.8, 6.4, 4.2, W.poly, 0, -5.2, 2.6, 0.3));
  // 两脚架（收起）
  g.add(b(0.7, 0.7, 9, W.steelDark, 0, -1.4, -22.4, 0.18));
  // 手
  const rh = glovedHand(1);
  rh.position.set(0.2, -4.4, 2.8);
  g.add(rh);
  const lh = glovedHand(-1);
  lh.position.set(-0.4, -1.4, -18.4);
  g.add(lh);
  return g;
}

function buildSMG(variant) {
  const g = new THREE.Group();
  const bodyLen = variant === 'p90' ? 26 : 18;
  const bodyZ = variant === 'p90' ? -2 : -3;
  g.add(b(3.4, 4.6, bodyLen, W.poly, 0, 0, bodyZ));
  g.add(tube(0.8, 0.8, 8, W.steelDark, 0, 0.9, bodyZ - bodyLen / 2 - 3.2));
  if (variant === 'p90') {
    // P90：顶部一体式弹匣与握把圈
    g.add(b(3.0, 2.2, 20, W.steelDark, 0, 2.8, -2));
    g.add(b(2.2, 1.2, 16, W.black, 0, 2.0, -4));
    g.add(b(4.4, 3.0, 5, W.black, 0, -2.4, 4));
  } else {
    // MP5：细长弹匣 + 环形护木
    g.add(b(2.6, 9.5, 3.4, W.black, 0, -6.2, -5.4, 0.14));
    g.add(tube(2.0, 2.0, 7, W.poly, 0, 0.4, -11.4, 12));
    g.add(b(1.8, 4.6, 3.6, W.poly, 0, -4.2, 3.2, 0.26));
    g.add(b(2.2, 0.8, 12, W.steelDark, 0, 2.6, -4));
  }
  const rh = glovedHand(1);
  rh.position.set(0.2, -3.6, 3.2);
  g.add(rh);
  const lh = glovedHand(-1);
  lh.position.set(-0.4, -1.6, -10.6);
  g.add(lh);
  return g;
}

function buildPistol(kind) {
  const g = new THREE.Group();
  const big = kind === 'deagle';
  const slW = big ? 3.9 : 3.1;
  const slH = big ? 4.2 : 3.3;
  const slL = big ? 16 : 14;
  // 套筒
  g.add(b(slW, slH, slL, W.steel, 0, 1.0, -3));
  // 套筒座
  g.add(b(slW - 0.4, 2.0, slL - 2.5, W.steelDark, 0, -1.4, -3));
  // 枪口
  g.add(b(slW - 1.2, slH - 1.4, 1.8, W.black, 0, 1.0, -3 - slL / 2));
  // 握把
  g.add(b(slW - 0.6, big ? 8.6 : 7.8, big ? 5.2 : 4.6, W.poly, 0, -5.4, 2.2, 0.22));
  // 扳机护圈
  g.add(b(slW - 1.4, 0.9, 4.4, W.black, 0, -2.6, -1.2));
  // 击锤
  g.add(b(1.1, 1.4, 1.6, W.black, 0, 2.9, 3.4, -0.2));
  // 准星
  g.add(b(0.9, 1.2, 1.4, W.accent, 0, slH / 2 + 1.2, -3 - slL / 2 + 2));
  g.add(b(1.3, 1.0, 1.0, W.accent, 0, slH / 2 + 1.1, 2.8));
  if (big) {
    // 沙鹰的顶部散热槽与粗枪管
    for (let i = 0; i < 3; i++) {
      g.add(b(slW - 1.0, 0.5, 2.2, W.black, 0, slH / 2 + 0.9, -6 + i * 3));
    }
    g.add(tube(1.0, 1.0, 2.6, W.steelDark, 0, 0.7, -11.2));
  }
  const rh = glovedHand(1, 0.86);
  rh.position.set(0.1, -3.9, 2.8);
  g.add(rh);
  return g;
}

function buildKnife() {
  const g = new THREE.Group();
  // 刀身：两段叠出刃口斜面
  g.add(b(0.9, 2.6, 15, W.steel, 0, 0, -8));
  g.add(b(0.5, 1.4, 14, W.accent, -0.5, -0.6, -8.4));
  g.add(b(0.6, 0.9, 8, W.steelDark, 0, 1.4, -6));      // 刀背
  g.add(b(1.6, 0.5, 1.0, W.accent, 0, 0, -15.2));      // 刀尖
  // 护手
  g.add(b(3.2, 1.2, 2.2, W.steelDark, 0, -0.4, 0.4));
  // 刀柄
  g.add(b(2.5, 2.7, 7.4, W.black, 0, -0.6, 5.2));
  g.add(b(2.7, 0.7, 1.2, W.accent, 0, -0.6, 9.0));
  const rh = glovedHand(1);
  rh.position.set(0.4, -1.2, 5.2);
  g.add(rh);
  // 刀身朝向不在这里写死：倾角统一由 viewmodel 的 VM_POSE 控制。
  // 模型自带的角度会和姿态叠加，把刀压成"横着朝下"。
  return g;
}

// ============================================================
//  现代版武器（B 路线）
//  和经典版的区别只有三点：截面形状（方→圆）、零件分段密度、材质响应。
//  比例和手部挂点刻意与经典版对齐，换风格时手感不变。
// ============================================================

// 右/左手通用挂载
function attachHands(g, rhPos = [0.2, -4.6, 3.6], lhPos = null, scale = 1) {
  const rh = glovedHand(1, scale);
  rh.position.set(rhPos[0], rhPos[1], rhPos[2]);
  g.add(rh);
  if (lhPos) {
    const lh = glovedHand(-1, scale);
    lh.position.set(lhPos[0], lhPos[1], lhPos[2]);
    g.add(lh);
  }
  return g;
}

function buildPistolModern(kind, withHand = true) {
  const M = modernMats();
  const g = new THREE.Group();
  const big = kind === 'deagle';
  const slW = big ? 3.8 : 3.1;
  const slH = big ? 4.0 : 3.2;
  const slL = big ? 16 : 14;
  const z0 = -3;

  // 套筒：前后两段，中间留抛壳口
  g.add(b(slW, slH, slL * 0.46, M.steel, 0, 1.0, z0 - slL * 0.27));
  g.add(b(slW, slH, slL * 0.40, M.steel, 0, 1.0, z0 + slL * 0.30));
  g.add(b(slW - 0.45, slH - 0.6, slL * 0.16, M.black, 0.12, 1.15, z0 - slL * 0.02));
  // 后段防滑纹
  for (let i = 0; i < 5; i++) {
    g.add(b(slW + 0.06, 0.24, 0.55, M.steelDark, 0, 1.0 + slH / 2 - 0.4, z0 + slL * 0.10 + i * 0.9));
  }
  // 套筒座
  g.add(b(slW - 0.4, 1.9, slL - 2.4, M.steelDark, 0, -1.35, z0));
  // 枪口
  g.add(tube(big ? 1.0 : 0.82, big ? 1.0 : 0.82, 1.6, M.black, 0, 1.0, z0 - slL / 2 + 0.5, 12));
  // 握把 + 指槽
  const gW = big ? 5.0 : 4.4;
  const gH = big ? 8.2 : 7.4;
  g.add(b(slW - 0.5, gH, gW, M.poly, 0, -5.2, 2.2, 0.22));
  for (let i = 0; i < 3; i++) g.add(b(slW - 0.18, 0.3, gW * 0.62, M.poly, 0, -6.8 + i * 1.5, 2.35, 0.22));
  // 扳机护圈 + 扳机
  g.add(b(slW - 1.7, 0.8, 4.0, M.steelDark, 0, -2.5, -1.2));
  g.add(b(0.6, 1.5, 0.6, M.steelDark, 0, -1.7, -3.0));
  // 击锤
  g.add(b(1.1, 1.5, 1.4, M.black, 0, 2.9, 3.2, -0.25));
  // 准星 / 照门
  g.add(b(0.85, 1.0, 1.1, M.steelDark, 0, slH / 2 + 1.05, z0 - slL / 2 + 2.0));
  g.add(b(1.5, 0.85, 1.0, M.steelDark, 0, slH / 2 + 0.95, 2.5));
  if (big) {
    for (let i = 0; i < 3; i++) g.add(b(slW - 1.3, 0.4, 1.9, M.black, 0, slH / 2 + 0.72, -6 + i * 3.0));
  }
  if (withHand) attachHands(g, [0.1, -3.9, 2.8], null, 0.86);
  return g;
}

function buildEliteModern() {
  const g = new THREE.Group();
  const a = buildPistolModern('usp', false);
  a.position.set(-1.9, 0.2, 0.4); a.rotation.z = 0.13;
  const c = buildPistolModern('usp', false);
  c.position.set(1.9, -0.2, -0.6); c.rotation.z = -0.13;
  g.add(a, c);
  attachHands(g, [1.7, -4.0, 2.9], [-1.7, -3.6, 2.6], 0.84);
  return g;
}

function buildM4Modern() {
  const M = modernMats();
  const g = new THREE.Group();
  // 上下机匣
  g.add(b(3.2, 2.2, 17, M.steel, 0, 0.9, -2));
  g.add(b(3.0, 1.8, 14, M.steelDark, 0, -1.3, -1));
  // 顶部皮卡汀尼导轨
  for (let i = 0; i < 12; i++) g.add(b(1.0, 0.34, 0.5, M.steelDark, 0, 2.25, 3.6 - i * 1.05));
  // 圆形护木 + 散热槽
  g.add(tube(1.95, 1.95, 13.0, M.poly, 0, 0.9, -13.5, 16));
  for (let i = 0; i < 5; i++) g.add(b(3.9, 0.45, 0.8, M.black, 0, 0.9, -9.2 - i * 2.2));
  // 枪管 + 消焰器
  g.add(tube(0.62, 0.62, 12, M.steelDark, 0, 0.9, -24, 12));
  g.add(tube(0.95, 0.85, 3.2, M.steel, 0, 0.9, -30.4, 12));
  // A 形准星
  g.add(b(0.7, 2.4, 0.7, M.steel, 0, 2.3, -25.6));
  g.add(b(2.0, 0.55, 0.7, M.steel, 0, 1.2, -25.6));
  // 直弹匣
  g.add(b(3.0, 7.6, 4.4, M.black, 0, -5.2, -4.0, 0.12));
  // 握把
  g.add(b(2.6, 6.6, 4.0, M.poly, 0, -4.4, 3.4, 0.28));
  // 缓冲管 + 伸缩托
  g.add(tube(1.15, 1.15, 9.5, M.steelDark, 0, -0.3, 12.5, 12));
  g.add(b(3.0, 4.0, 3.4, M.poly, 0, -0.9, 17.4));
  g.add(b(3.2, 0.9, 2.2, M.black, 0, -2.4, 18.4));
  // 拉机柄 / 抛壳窗助退器
  g.add(b(1.6, 0.7, 1.4, M.steel, 0, 1.6, 6.0));
  g.add(tube(1.1, 1.1, 1.2, M.steel, 1.7, 0.6, -1.5, 10));
  attachHands(g, [0.2, -4.0, 3.8], [-0.4, -1.6, -12.6]);
  return g;
}

function buildAUGModern() {
  const M = modernMats();
  const g = new THREE.Group();
  // 一体式外壳（AUG 的辨识点：整枪像一个盒子）
  g.add(b(3.4, 4.2, 26, M.poly, 0, 0.4, -4));
  g.add(b(3.0, 2.0, 10, M.poly, 0, 2.6, -10));
  // 整体式光学瞄具
  g.add(tube(1.5, 1.5, 10, M.black, 0, 3.6, -7, 14));
  g.add(tube(1.9, 1.5, 1.6, M.black, 0, 3.6, -12.2, 14));
  g.add(tube(1.5, 1.9, 1.4, M.black, 0, 3.6, -1.8, 14));
  g.add(tube(1.35, 1.35, 0.4, M.glass, 0, 3.6, -12.9, 14));
  // 枪管 + 消焰器
  g.add(tube(0.72, 0.72, 12, M.steelDark, 0, 0.4, -22, 12));
  g.add(tube(1.05, 0.9, 3.0, M.steel, 0, 0.4, -29, 12));
  // 前握把
  g.add(b(2.2, 6.4, 3.0, M.poly, 0, -4.0, -12, 0.1));
  // 弹匣（扳机后方）
  g.add(b(2.8, 7.0, 4.2, M.black, 0, -4.6, 2.4, -0.12));
  // 握把
  g.add(b(2.6, 6.0, 4.0, M.poly, 0, -4.4, 6.6, 0.24));
  // 拉机柄
  g.add(b(0.8, 0.8, 3.0, M.steel, 1.9, 1.8, -4));
  attachHands(g, [0.2, -4.2, 6.4], [-0.4, -3.4, -11.5]);
  return g;
}

function buildSG552Modern() {
  const M = modernMats();
  const g = new THREE.Group();
  g.add(b(3.2, 3.0, 16, M.steel, 0, 0.6, -2));
  g.add(b(2.9, 1.6, 12, M.steelDark, 0, -1.5, -1));
  // 顶部导轨 + 瞄具
  for (let i = 0; i < 9; i++) g.add(b(1.0, 0.32, 0.45, M.steelDark, 0, 2.3, 3.0 - i * 1.0));
  g.add(tube(1.25, 1.25, 7, M.black, 0, 3.1, -6, 12));
  g.add(tube(1.55, 1.25, 1.2, M.black, 0, 3.1, -9.4, 12));
  // 短枪管
  g.add(tube(0.62, 0.62, 9, M.steelDark, 0, 0.6, -18.5, 12));
  g.add(tube(0.95, 0.85, 2.6, M.steel, 0, 0.6, -24, 12));
  // 侧折叠托
  g.add(tube(0.55, 0.55, 12, M.steelDark, 1.6, 0.2, 12, 10));
  g.add(b(2.2, 3.4, 1.2, M.poly, 1.6, 0.2, 18.2));
  // 弹匣 + 握把
  g.add(curvedMag(M.black, { segs: 3, w: 3.0, h: 2.7, d: 4.2, y: -2.0, z: -4.0, curve: 0.12 }));
  g.add(b(2.6, 6.4, 4.0, M.poly, 0, -4.4, 3.4, 0.26));
  attachHands(g, [0.2, -4.2, 3.7], [-0.4, -3.0, -9.0]);
  return g;
}

function buildFAMASModern() {
  const M = modernMats();
  const g = new THREE.Group();
  // FAMAS 的"号角"造型：长机匣 + 高提把
  g.add(b(3.2, 3.6, 24, M.poly, 0, 0.3, -4));
  g.add(b(2.6, 1.4, 20, M.steelDark, 0, 2.4, -5));
  g.add(b(1.2, 2.2, 1.6, M.black, 0, 3.6, -12));
  g.add(b(1.2, 2.2, 1.6, M.black, 0, 3.6, 0));
  g.add(b(1.4, 1.0, 14, M.black, 0, 4.8, -6));
  g.add(tube(0.9, 0.9, 0.5, M.glass, 0, 4.8, -13.2, 12));
  // 枪管
  g.add(tube(0.7, 0.7, 13, M.steelDark, 0, 0.3, -21, 12));
  g.add(tube(1.0, 0.9, 2.6, M.steel, 0, 0.3, -27.5, 12));
  // 弹匣 + 握把 + 枪托
  g.add(b(2.8, 7.2, 4.0, M.black, 0, -5.0, -5.0, 0.1));
  g.add(b(2.6, 6.2, 4.0, M.poly, 0, -4.6, 3.6, 0.26));
  g.add(b(2.8, 3.4, 8, M.poly, 0, 0.2, 13.5, 0.06));
  attachHands(g, [0.2, -4.4, 3.9], [-0.4, -2.6, -13.0]);
  return g;
}

function buildGalilModern() {
  const M = modernMats();
  const g = new THREE.Group();
  g.add(b(3.4, 3.2, 19, M.steel, 0, 0.2, -2));
  g.add(b(3.0, 1.2, 12, M.steelDark, 0, 2.2, -3));
  // 护木（带散热孔）
  g.add(tube(1.85, 1.85, 10, M.poly, 0, -0.4, -14, 14));
  for (let i = 0; i < 4; i++) g.add(b(3.6, 0.5, 0.8, M.black, 0, -0.4, -10.6 - i * 2.0));
  // 枪管
  g.add(tube(0.66, 0.66, 12, M.steelDark, 0, 0.4, -21, 12));
  g.add(tube(0.95, 0.85, 3.0, M.steel, 0, 0.4, -28, 12));
  // 照门 / 准星
  g.add(b(1.6, 1.2, 1.4, M.steel, 0, 2.6, -8));
  g.add(b(0.8, 2.2, 0.9, M.steel, 0, 2.4, -24));
  // 弹匣 + 握把
  g.add(curvedMag(M.black, { segs: 4, w: 3.1, h: 2.7, d: 4.4, y: -2.0, z: -4.2, curve: 0.16 }));
  g.add(b(2.6, 6.4, 4.0, M.poly, 0, -4.6, 3.4, 0.28));
  // 折叠托
  g.add(tube(0.75, 0.75, 11, M.steelDark, 0, 0.0, 12.5, 10));
  g.add(b(2.4, 3.2, 1.6, M.poly, 0, -0.4, 18.4));
  attachHands(g, [0.2, -4.4, 3.7], [-0.4, -2.8, -11.5]);
  return g;
}

function buildMP5Modern() {
  const M = modernMats();
  const g = new THREE.Group();
  // 圆筒机匣（MP5 最好认的特征）
  g.add(tube(1.75, 1.75, 16, M.steel, 0, 0.2, -2, 16));
  g.add(tube(1.55, 1.55, 7, M.poly, 0, 0.2, -12.5, 16));
  // 枪管 + 准星环
  g.add(tube(0.62, 0.62, 10, M.steelDark, 0, 0.2, -18.5, 12));
  g.add(tube(1.25, 1.25, 1.6, M.steel, 0, 0.2, -21.5, 14));
  // 左侧拉机柄管
  g.add(tube(0.55, 0.55, 8, M.steelDark, 1.55, 1.6, -6, 10));
  // 弹匣
  g.add(curvedMag(M.black, { segs: 3, w: 2.4, h: 2.8, d: 3.6, y: -2.2, z: -5.4, curve: 0.10 }));
  // 握把
  g.add(b(2.6, 6.4, 4.0, M.poly, 0, -5.0, 3.2, 0.26));
  // 伸缩托
  g.add(tube(0.42, 0.42, 11, M.steelDark, 1.4, 0.4, 12, 8));
  g.add(tube(0.42, 0.42, 11, M.steelDark, -1.4, 0.4, 12, 8));
  g.add(b(3.4, 3.6, 1.4, M.poly, 0, 0.0, 18));
  g.add(b(1.4, 1.0, 1.2, M.steelDark, 0, 2.2, -3));
  attachHands(g, [0.2, -3.6, 3.4], [-0.4, -1.8, -11.0]);
  return g;
}

function buildP90Modern() {
  const M = modernMats();
  const g = new THREE.Group();
  // 一体化外壳
  g.add(b(3.4, 4.2, 24, M.poly, 0, 0, -3));
  // 顶部横向弹匣（P90 的标志）
  g.add(b(3.0, 1.6, 16, M.steelDark, 0, 2.5, -3));
  for (let i = 0; i < 8; i++) g.add(b(3.1, 0.3, 0.5, M.black, 0, 2.6, -10 + i * 2.0));
  // 大扳机护圈
  g.add(b(3.8, 0.9, 10, M.poly, 0, -2.0, 1.0));
  g.add(b(0.9, 2.6, 0.9, M.poly, 0, -3.2, -3.6));
  g.add(b(0.9, 2.6, 0.9, M.poly, 0, -3.2, 5.4));
  // 枪管 + 握把 + 瞄具
  g.add(tube(0.6, 0.6, 8, M.steelDark, 0, 0.2, -18, 12));
  g.add(b(2.8, 4.6, 4.4, M.poly, 0, -3.4, 3.2, 0.18));
  g.add(b(1.2, 1.0, 1.2, M.steelDark, 0, 3.5, -10));
  attachHands(g, [0.2, -3.6, 3.4], [-0.4, -1.8, -9.0]);
  return g;
}

function buildMAC10Modern() {
  const M = modernMats();
  const g = new THREE.Group();
  // 方盒机匣：MAC-10 就是一块砖
  g.add(b(3.6, 4.4, 13, M.steel, 0, 0.2, -2));
  g.add(b(3.2, 1.2, 11, M.steelDark, 0, 2.6, -2));
  g.add(tube(0.7, 0.7, 6, M.steelDark, 0, 0.2, -11, 12));
  g.add(b(0.9, 0.9, 2.6, M.steel, 0, 3.4, -5));
  // 弹匣插在握把里
  g.add(b(2.8, 9.0, 4.0, M.black, 0, -5.6, 1.2, 0.06));
  g.add(b(2.4, 0.7, 3.8, M.steelDark, 0, -1.8, -2.0));
  // 钢丝托
  g.add(tube(0.35, 0.35, 12, M.steelDark, 1.3, -0.6, 10, 8));
  g.add(tube(0.35, 0.35, 12, M.steelDark, -1.3, -0.6, 10, 8));
  g.add(b(3.0, 2.6, 0.9, M.poly, 0, -0.8, 16.4));
  g.add(b(1.0, 1.2, 1.4, M.steelDark, 0, 2.9, -8.6));
  attachHands(g, [0.2, -4.6, 1.6], [-0.4, -1.6, -8.6]);
  return g;
}

function buildXM1014Modern() {
  const M = modernMats();
  const g = new THREE.Group();
  g.add(b(3.4, 3.2, 14, M.steel, 0, 0.2, -1));
  g.add(b(3.1, 1.4, 11, M.steelDark, 0, 2.0, -1.5));
  // 粗枪管 + 管状弹仓
  g.add(tube(0.95, 0.95, 18, M.steelDark, 0, 0.5, -17, 14));
  g.add(tube(0.75, 0.75, 15, M.steel, 0, -1.4, -15.5, 12));
  // 泵动护木
  g.add(tube(1.6, 1.6, 8, M.poly, 0, -1.2, -12.5, 14));
  for (let i = 0; i < 5; i++) g.add(b(3.4, 0.5, 0.6, M.black, 0, -1.2, -9.4 - i * 1.5));
  g.add(b(0.8, 1.4, 1.0, M.steel, 0, 2.0, -24));
  // 握把 + 枪托
  g.add(b(2.6, 6.2, 4.0, M.poly, 0, -4.2, 3.4, 0.26));
  g.add(b(2.8, 3.4, 10, M.poly, 0, -0.6, 12.5, 0.08));
  g.add(b(3.0, 4.0, 1.6, M.black, 0, -1.4, 18.0));
  attachHands(g, [0.2, -4.2, 3.6], [-0.4, -3.2, -12.0]);
  return g;
}

function buildM249Modern() {
  const M = modernMats();
  const g = new THREE.Group();
  // 大方机匣
  g.add(b(3.8, 4.6, 22, M.steel, 0, 0.4, -3));
  g.add(b(3.4, 1.4, 16, M.steelDark, 0, 3.0, -4));
  // 散热护罩
  g.add(tube(1.5, 1.5, 14, M.steelDark, 0, 1.0, -19, 14));
  for (let i = 0; i < 5; i++) g.add(b(3.2, 0.5, 1.0, M.black, 0, 1.0, -14 - i * 2.2));
  // 枪管
  g.add(tube(0.8, 0.8, 14, M.steelDark, 0, 1.0, -26, 12));
  g.add(tube(1.15, 1.0, 3.0, M.steel, 0, 1.0, -33, 12));
  g.add(b(1.4, 0.9, 9, M.steelDark, 0, 4.2, -6));   // 提把
  // 弹链盒 + 供弹口
  g.add(b(4.2, 5.2, 6.0, M.black, 0, -3.0, -2.0));
  g.add(b(3.0, 2.0, 2.0, M.steelDark, 0, 0.6, -1.0));
  // 两脚架
  g.add(b(0.5, 0.5, 10, M.steelDark, -1.7, -3.6, -22, 0.55, 0, 0.30));
  g.add(b(0.5, 0.5, 10, M.steelDark, 1.7, -3.6, -22, 0.55, 0, -0.30));
  // 握把 + 枪托
  g.add(b(2.8, 6.4, 4.2, M.poly, 0, -4.4, 4.0, 0.26));
  g.add(b(3.0, 4.2, 12, M.poly, 0, -1.2, 12.5, 0.06));
  g.add(b(3.2, 4.6, 1.8, M.black, 0, -2.0, 18.4));
  attachHands(g, [0.2, -4.4, 4.2], [-0.4, -1.0, -16.0]);
  return g;
}

// 狙击枪：AWP / Scout 共用，slim 控制镜筒与枪管粗细
function buildSniperModern(slim) {
  const M = modernMats();
  const g = new THREE.Group();
  const bodyLen = slim ? 22 : 24;
  const barLen = slim ? 22 : 26;
  const scopeR = slim ? 1.55 : 2.05;
  const scopeLen = slim ? 11 : 15;
  const scopeY = slim ? 3.3 : 4.0;

  g.add(b(3.2, 3.4, bodyLen, slim ? M.poly : M.steelDark, 0, 0, -5));
  // 长枪管 + 制退器
  g.add(tube(0.8, 0.8, barLen, M.steel, 0, 0.55, -5 - bodyLen / 2 - barLen / 2 + 2, 14));
  g.add(tube(1.15, 1.15, 3.2, M.black, 0, 0.55, -5 - bodyLen / 2 - barLen + 3.2, 14));
  // 大瞄镜
  g.add(tube(scopeR, scopeR, scopeLen, M.steelDark, 0, scopeY, -4, 18));
  g.add(tube(scopeR * 1.28, scopeR, 2.6, M.steel, 0, scopeY, -4 + scopeLen / 2 + 1.0, 18));
  g.add(tube(scopeR, scopeR * 1.22, 2.4, M.steel, 0, scopeY, -4 - scopeLen / 2 - 0.9, 18));
  g.add(tube(scopeR * 1.18, scopeR * 1.18, 0.35, M.glass, 0, scopeY, -4 - scopeLen / 2 - 2.1, 18));
  // 镜桥
  g.add(b(1.8, 2.0, 1.6, M.steelDark, 0, scopeY - scopeR - 0.6, -8));
  g.add(b(1.8, 2.0, 1.6, M.steelDark, 0, scopeY - scopeR - 0.6, 0.4));
  // 弹匣 + 握把
  g.add(b(2.7, 4.0, 5.0, M.black, 0, -3.2, -5.6));
  g.add(b(2.7, 6.2, 4.0, M.poly, 0, -5.0, 2.6, 0.3));
  // 枪托（拇指孔用上下两段围合）
  g.add(b(3.0, 2.2, 13.5, M.poly, 0, -1.2, 13.0, 0.05));
  g.add(b(2.8, 2.4, 11.0, M.poly, 0, -3.2, 14.2, 0.22));
  g.add(b(3.2, 4.8, 2.0, M.black, 0, -2.4, 19.8, 0.22));
  // AWP 的拉机柄
  if (!slim) {
    const bolt = tube(0.35, 0.35, 2.6, M.steel, 1.8, 0.9, 1.0, 8);
    bolt.rotation.z += 0.9;
    g.add(bolt);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.55, 10, 8), M.steel);
    knob.position.set(2.7, 0.3, 1.4);
    g.add(knob);
  }
  // 收起的两脚架
  g.add(b(0.6, 0.6, 9, M.steelDark, 0, -1.4, -18, 0.14));
  attachHands(g, [0.2, -4.4, 2.8], [-0.4, -1.6, -14.0]);
  return g;
}
const buildAWPModern = () => buildSniperModern(false);
const buildScoutModern = () => buildSniperModern(true);

function buildKnifeModern() {
  const M = modernMats();
  const g = new THREE.Group();
  // 刀身：三段收窄 + 刃口斜面
  g.add(b(0.85, 2.4, 9.0, M.steel, 0, 0, -5.5));
  g.add(b(0.85, 1.6, 6.0, M.steel, 0, 0.2, -12.5));
  g.add(b(0.55, 0.9, 3.0, M.steel, 0, 0.1, -16.5));
  g.add(b(0.35, 1.2, 15.0, M.accent, -0.35, -0.8, -6.5));
  g.add(b(0.5, 0.5, 15.0, M.steelDark, 0, 1.25, -7));
  // 护手 + 握柄
  g.add(b(3.0, 1.0, 1.8, M.steelDark, 0, -0.3, 0.6));
  g.add(b(2.4, 2.6, 7.2, M.black, 0, -0.5, 5.2));
  for (let i = 0; i < 4; i++) g.add(b(2.5, 0.5, 0.8, M.poly, 0, -0.5, 2.6 + i * 1.7));
  g.add(b(2.6, 0.7, 1.2, M.steelDark, 0, -0.5, 9.0));
  const rh = glovedHand(1, 0.9);
  rh.position.set(0.4, -1.2, 5.2);
  g.add(rh);
  // 同样不写死倾角，交给 VM_POSE
  return g;
}

const WEAPON_CACHE = {};

export function buildWeaponModel(id) {
  if (WEAPON_CACHE[id]) return WEAPON_CACHE[id];
  const modern = STYLE === 'modern';
  let g;
  switch (id) {
    case 'ak47': g = modern ? buildAK47Modern() : buildAK47(classicMats()); break;
    case 'm4a1': g = modern ? buildM4Modern() : buildM4(); break;
    case 'aug': {
      if (modern) { g = buildAUGModern(); break; }
      g = buildM4();
      // AUG 的辨识特征是整体式光学瞄具
      g.add(b(2.4, 2.0, 9, W.black, 0, 3.6, -6));
      g.add(b(1.8, 1.2, 1.0, W.glass, 0, 3.6, -10.2));
      break;
    }
    case 'sg552': {
      if (modern) { g = buildSG552Modern(); break; }
      g = buildM4();
      // SIG 的短枪管与折叠托
      g.add(b(1.4, 1.6, 6, W.black, 0, 3.2, -2));
      break;
    }
    case 'famas': g = modern ? buildFAMASModern() : buildM4(); break;
    case 'galil': g = modern ? buildGalilModern() : buildAK47(W); break;
    case 'awp': g = modern ? buildAWPModern() : buildAWP(); break;
    case 'scout': g = modern ? buildScoutModern() : buildAWP(); break;
    case 'mp5navy': g = modern ? buildMP5Modern() : buildSMG('mp5'); break;
    case 'p90': g = modern ? buildP90Modern() : buildSMG('p90'); break;
    case 'mac10': g = modern ? buildMAC10Modern() : buildSMG('mp5'); break;
    case 'xm1014': g = modern ? buildXM1014Modern() : buildSMG('p90'); break;
    case 'm249': g = modern ? buildM249Modern() : buildM4(); break;
    case 'deagle': g = modern ? buildPistolModern('deagle') : buildPistol('deagle'); break;
    case 'usp45': g = modern ? buildPistolModern('usp') : buildPistol('usp'); break;
    case 'glock18': g = modern ? buildPistolModern('glock') : buildPistol('glock'); break;
    case 'elite': g = modern ? buildEliteModern() : buildPistol('usp'); break;
    case 'knife': g = modern ? buildKnifeModern() : buildKnife(); break;
    default: g = modern ? buildM4Modern() : buildM4();
  }
  WEAPON_CACHE[id] = g;
  return g;
}

// 第三人称：只保留轮廓，按枪型调整长度
export function buildWeaponProp(id) {
  const g = new THREE.Group();
  const long = id === 'awp' || id === 'scout';
  const pistol = id === 'deagle' || id === 'usp45' || id === 'glock18';
  if (id === 'knife') {
    g.add(b(0.8, 2.2, 13, W.steel, 0, 0, -6));
    g.add(b(2.4, 2.6, 6, W.black, 0, 0, 4));
    return g;
  }
  if (pistol) {
    g.add(b(3.2, 3.6, 13, W.steelDark, 0, 0, -3));
    g.add(b(2.6, 7, 4.4, W.black, 0, -4.4, 2));
    return g;
  }
  g.add(b(4, 4, long ? 26 : 20, W.black, 0, 0, -4));
  g.add(b(1.8, 1.8, long ? 18 : 11, W.steelDark, 0, 0.7, long ? -24 : -18));
  if (!long) {
    g.add(b(3, 6.5, 4, W.black, 0, -4.4, 0));
  } else {
    g.add(b(2.6, 2.6, 13, W.black, 0, 3.4, -8));
  }
  return g;
}
