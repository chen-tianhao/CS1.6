// ============================================================
//  textures.js — 程序化贴图（不依赖任何外部素材，全部 Canvas 生成）
//
//  原版 dust 系列贴图的关键不是分辨率，而是"中频结构"：
//  砖缝的暗线、竖向水渍、木纤维方向、边缘磨损。
//  单一白噪声只能给出高频颗粒，看起来像塑料，所以这里改用
//  可平铺的 fBm（多层值噪声）叠加低频斑驳。
// ============================================================
import * as THREE from 'three';

// 由 main.js 在拿到 WebGLRenderer 后注入，取 GPU 支持的上限（通常 16）
let MAX_ANISO = 4;
export function setAnisotropy(v) {
  MAX_ANISO = Math.max(1, Math.min(16, v | 0 || 1));
}

function cv(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  // 预先用 willReadFrequently 建好上下文：这些贴图要反复 getImageData，
  // 后续的 getContext('2d') 会返回同一个上下文并沿用该标志。
  c.getContext('2d', { willReadFrequently: true });
  return c;
}

// ---------- 可平铺的值噪声 ----------
function hash2(x, y, s) {
  let h = (x | 0) * 374761393 + (y | 0) * 668265263 + (s | 0) * 1442695041;
  h = (h ^ (h >> 13)) * 1274126177;
  return ((h ^ (h >> 16)) >>> 0) / 4294967295;
}

// per 为整数周期，保证贴图四边无缝
function vnoiseP(x, y, s, per) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const fx = x - xi, fy = y - yi;
  const u = fx * fx * (3 - 2 * fx);
  const v = fy * fy * (3 - 2 * fy);
  const wrap = (n) => ((n % per) + per) % per;
  const x0 = wrap(xi), x1 = wrap(xi + 1);
  const y0 = wrap(yi), y1 = wrap(yi + 1);
  const a = hash2(x0, y0, s), b = hash2(x1, y0, s);
  const c = hash2(x0, y1, s), d = hash2(x1, y1, s);
  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
}

function fbmP(x, y, oct, s, basePer) {
  let sum = 0, amp = 0.55, norm = 0, per = basePer, f = 1;
  for (let i = 0; i < oct; i++) {
    sum += vnoiseP(x * f, y * f, s + i * 131, per) * amp;
    norm += amp;
    amp *= 0.55;
    f *= 2;
    per *= 2;
  }
  return sum / norm;
}

// 把 fBm 作为明暗调制叠加到已有像素上（strength 为对比强度）
function overlayFbm(ctx, S, { basePer = 4, oct = 4, strength = 0.22, seed = 7 } = {}) {
  const img = ctx.getImageData(0, 0, S, S);
  const d = img.data;
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const n = fbmP((x / S) * basePer, (y / S) * basePer, oct, seed, basePer);
      const k = 1 + (n - 0.5) * strength;
      const i = (y * S + x) * 4;
      d[i] = Math.min(255, Math.max(0, d[i] * k));
      d[i + 1] = Math.min(255, Math.max(0, d[i + 1] * k));
      d[i + 2] = Math.min(255, Math.max(0, d[i + 2] * k));
    }
  }
  ctx.putImageData(img, 0, 0);
}

// 高频细颗粒，只负责"表面不光滑"
function grain(ctx, w, h, amount) {
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * amount;
    d[i] = Math.max(0, Math.min(255, d[i] + n));
    d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n));
    d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n));
  }
  ctx.putImageData(img, 0, 0);
}

function toTex(canvas, repeat = 1) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = MAX_ANISO;
  t.repeat.set(repeat, repeat);
  return t;
}

// ---------- 沙漠砂岩砖墙 ----------
function sandWall() {
  const S = 256, c = cv(S, S), x = c.getContext('2d');
  x.fillStyle = '#8f7350';
  x.fillRect(0, 0, S, S);

  const rowH = 32;
  for (let r = 0; r < S / rowH; r++) {
    const off = (r % 2) * 42;
    for (let bx = -1; bx < 4; bx++) {
      const w = 78, h = rowH - 3;
      const px = bx * 84 + off + 2;
      const py = r * rowH + 2;
      const v = 20 * Math.random();
      x.fillStyle = `rgb(${188 - v | 0},${160 - v | 0},${112 - v | 0})`;
      x.fillRect(px, py, w, h);

      // 砖块上下边缘的 AO 渐变 —— 原版墙面最明显的层次来自这里
      const gv = x.createLinearGradient(0, py, 0, py + h);
      gv.addColorStop(0, 'rgba(64,48,30,0.42)');
      gv.addColorStop(0.14, 'rgba(64,48,30,0)');
      gv.addColorStop(0.84, 'rgba(52,38,24,0)');
      gv.addColorStop(1, 'rgba(46,34,22,0.5)');
      x.fillStyle = gv;
      x.fillRect(px, py, w, h);

      // 砖块左右边缘
      const gh = x.createLinearGradient(px, 0, px + w, 0);
      gh.addColorStop(0, 'rgba(64,48,30,0.34)');
      gh.addColorStop(0.1, 'rgba(64,48,30,0)');
      gh.addColorStop(0.9, 'rgba(52,38,24,0)');
      gh.addColorStop(1, 'rgba(46,34,22,0.38)');
      x.fillStyle = gh;
      x.fillRect(px, py, w, h);
    }
  }

  // 竖向水渍流痕：从砖缝往下淌，给墙面方向性
  for (let i = 0; i < 14; i++) {
    const sx = Math.random() * S;
    const wdt = 2 + Math.random() * 6;
    const g = x.createLinearGradient(0, 0, 0, S);
    g.addColorStop(0, 'rgba(72,56,34,0)');
    g.addColorStop(0.35, `rgba(72,56,34,${0.05 + Math.random() * 0.07})`);
    g.addColorStop(0.75, `rgba(64,50,30,${0.04 + Math.random() * 0.06})`);
    g.addColorStop(1, 'rgba(72,56,34,0)');
    x.fillStyle = g;
    x.fillRect(sx, 0, wdt, S);
  }

  // 大尺度斑驳
  overlayFbm(x, S, { basePer: 3, oct: 4, strength: 0.26, seed: 11 });
  grain(x, S, S, 22);
  return toTex(c);
}

// ---------- 沙地 ----------
function sandFloor() {
  const S = 256, c = cv(S, S), x = c.getContext('2d');
  x.fillStyle = '#b29469';
  x.fillRect(0, 0, S, S);

  // 风纹：方向一致的浅色波纹
  for (let i = 0; i < 22; i++) {
    const y0 = Math.random() * S;
    const amp = 3 + Math.random() * 7;
    x.strokeStyle = `rgba(${205 + Math.random() * 18 | 0},${182 + Math.random() * 16 | 0},${142 + Math.random() * 14 | 0},0.22)`;
    x.lineWidth = 1 + Math.random() * 2.4;
    x.beginPath();
    for (let px = 0; px <= S; px += 6) {
      const py = y0 + Math.sin((px / S) * Math.PI * 2 * (1 + (i % 3))) * amp;
      if (px === 0) x.moveTo(px, py); else x.lineTo(px, py);
    }
    x.stroke();
  }

  // 碎石粒
  for (let i = 0; i < 1400; i++) {
    const v = Math.random() * 46 - 23;
    x.fillStyle = `rgba(${178 + v | 0},${154 + v | 0},${110 + v | 0},${0.35 + Math.random() * 0.4})`;
    x.fillRect(Math.random() * S, Math.random() * S, 1 + Math.random() * 2.4, 1 + Math.random() * 1.8);
  }

  // 深色凹陷斑
  for (let i = 0; i < 12; i++) {
    const g = x.createRadialGradient(
      Math.random() * S, Math.random() * S, 2,
      Math.random() * S, Math.random() * S, 26 + Math.random() * 30,
    );
    g.addColorStop(0, 'rgba(120,98,68,0.16)');
    g.addColorStop(1, 'rgba(120,98,68,0)');
    x.fillStyle = g;
    x.fillRect(0, 0, S, S);
  }

  overlayFbm(x, S, { basePer: 5, oct: 4, strength: 0.20, seed: 23 });
  grain(x, S, S, 14);
  return toTex(c);
}

// ---------- 木箱 ----------
function crate() {
  const S = 128, c = cv(S, S), x = c.getContext('2d');
  x.fillStyle = '#8d6840';
  x.fillRect(0, 0, S, S);

  const plank = S / 7;
  for (let i = 0; i < 7; i++) {
    const y = i * plank;
    x.fillStyle = i % 2 ? '#98724a' : '#825f36';
    x.fillRect(0, y + 1, S, plank - 2);

    // 木板两端的 AO
    const g = x.createLinearGradient(0, y, 0, y + plank);
    g.addColorStop(0, 'rgba(48,32,18,0.34)');
    g.addColorStop(0.25, 'rgba(48,32,18,0)');
    g.addColorStop(0.8, 'rgba(40,26,14,0)');
    g.addColorStop(1, 'rgba(40,26,14,0.38)');
    x.fillStyle = g;
    x.fillRect(0, y, S, plank);

    // 木纤维：沿板长方向的细纹
    for (let k = 0; k < 9; k++) {
      const fy = y + 2 + Math.random() * (plank - 5);
      x.strokeStyle = `rgba(${90 + Math.random() * 40 | 0},${64 + Math.random() * 30 | 0},${36 + Math.random() * 22 | 0},${0.10 + Math.random() * 0.16})`;
      x.lineWidth = 0.7;
      x.beginPath();
      x.moveTo(Math.random() * 20, fy);
      x.bezierCurveTo(S * 0.3, fy + Math.random() * 2 - 1, S * 0.7, fy + Math.random() * 2 - 1, S, fy);
      x.stroke();
    }
  }

  // 边框与斜撑
  x.strokeStyle = '#6d4c26';
  x.lineWidth = 7;
  x.strokeRect(3.5, 3.5, S - 7, S - 7);
  x.beginPath(); x.moveTo(6, 6); x.lineTo(S - 6, S - 6); x.stroke();
  // 边框内侧落影
  x.strokeStyle = 'rgba(40,26,14,0.42)';
  x.lineWidth = 2;
  x.strokeRect(8, 8, S - 16, S - 16);

  x.fillStyle = '#4a3520';
  [[14, 14], [S - 14, 14], [14, S - 14], [S - 14, S - 14]].forEach(([px, py]) => {
    x.beginPath(); x.arc(px, py, 2.6, 0, 7); x.fill();
  });

  overlayFbm(x, S, { basePer: 3, oct: 3, strength: 0.20, seed: 41 });
  grain(x, S, S, 16);
  return toTex(c);
}

// ---------- 混凝土 ----------
function concrete() {
  const S = 128, c = cv(S, S), x = c.getContext('2d');
  x.fillStyle = '#8d8a82';
  x.fillRect(0, 0, S, S);

  // 浇筑斑驳
  for (let i = 0; i < 30; i++) {
    x.fillStyle = `rgba(${110 + Math.random() * 50 | 0},${108 + Math.random() * 46 | 0},${100 + Math.random() * 40 | 0},0.45)`;
    x.fillRect(Math.random() * S, Math.random() * S, 8 + Math.random() * 30, 6 + Math.random() * 20);
  }

  // 细裂缝
  for (let i = 0; i < 5; i++) {
    x.strokeStyle = `rgba(58,56,50,${0.18 + Math.random() * 0.2})`;
    x.lineWidth = 0.8 + Math.random() * 0.6;
    x.beginPath();
    let px = Math.random() * S, py = Math.random() * S;
    x.moveTo(px, py);
    for (let k = 0; k < 5; k++) {
      px += (Math.random() - 0.5) * 26;
      py += (Math.random() - 0.5) * 26;
      x.lineTo(px, py);
    }
    x.stroke();
  }

  overlayFbm(x, S, { basePer: 4, oct: 4, strength: 0.28, seed: 53 });
  grain(x, S, S, 20);
  return toTex(c);
}

// ---------- 金属 / 集装箱 ----------
function metal(color) {
  const S = 128, c = cv(S, S), x = c.getContext('2d');
  x.fillStyle = color;
  x.fillRect(0, 0, S, S);

  // 瓦楞：明暗成对，才有体积
  for (let i = 0; i < S; i += 8) {
    const g = x.createLinearGradient(i, 0, i + 8, 0);
    g.addColorStop(0, 'rgba(255,255,255,0.10)');
    g.addColorStop(0.45, 'rgba(255,255,255,0)');
    g.addColorStop(0.55, 'rgba(0,0,0,0)');
    g.addColorStop(1, 'rgba(0,0,0,0.20)');
    x.fillStyle = g;
    x.fillRect(i, 0, 8, S);
  }

  // 锈斑：低频成片，边缘带铁锈色
  for (let i = 0; i < 9; i++) {
    const cx = Math.random() * S, cy = Math.random() * S;
    const r = 6 + Math.random() * 22;
    const g = x.createRadialGradient(cx, cy, 1, cx, cy, r);
    g.addColorStop(0, `rgba(108,58,30,${0.22 + Math.random() * 0.2})`);
    g.addColorStop(0.6, `rgba(126,72,38,${0.10 + Math.random() * 0.1})`);
    g.addColorStop(1, 'rgba(126,72,38,0)');
    x.fillStyle = g;
    x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill();
  }

  overlayFbm(x, S, { basePer: 3, oct: 4, strength: 0.24, seed: 67 });
  grain(x, S, S, 12);
  return toTex(c);
}

let cache = null;
export function getTextures() {
  if (cache) return cache;
  cache = {
    sand: sandWall(),
    floor: sandFloor(),
    crate: crate(),
    concrete: concrete(),
    metalRed: metal('#8c4a3a'),
    metalBlue: metal('#3f5c74'),
    metalGreen: metal('#4c6148'),
  };
  return cache;
}

// ---------- 武器贴图 ----------
// 枪身的辨识度一半靠轮廓、一半靠表面细节：
// 拉丝方向、棱角磨损、铭文、木纹年轮，这些是纯色材质给不出来的。

function weaponMetal() {
  const S = 128, c = cv(S, S), x = c.getContext('2d');
  x.fillStyle = '#7e828a';
  x.fillRect(0, 0, S, S);

  // 拉丝：横向细线，明暗交替
  for (let i = 0; i < 260; i++) {
    const y = Math.random() * S;
    const bright = Math.random() > 0.5;
    x.strokeStyle = bright
      ? `rgba(255,255,255,${0.02 + Math.random() * 0.06})`
      : `rgba(34,36,42,${0.02 + Math.random() * 0.08})`;
    x.lineWidth = 0.6 + Math.random() * 1.1;
    x.beginPath();
    x.moveTo(Math.random() * 24, y);
    x.lineTo(S - Math.random() * 24, y + (Math.random() - 0.5) * 2);
    x.stroke();
  }

  // 磨损：棱角处磨亮、凹陷处积灰
  for (let i = 0; i < 28; i++) {
    const cx = Math.random() * S, cy = Math.random() * S;
    const r = 3 + Math.random() * 13;
    const g = x.createRadialGradient(cx, cy, 0.5, cx, cy, r);
    const bright = Math.random() > 0.45;
    g.addColorStop(0, bright ? 'rgba(205,208,216,0.30)' : 'rgba(42,44,50,0.30)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g;
    x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill();
  }

  // 铭文：三行短横块，远看是文字密度，不追求可读
  x.fillStyle = 'rgba(26,28,32,0.5)';
  for (let row = 0; row < 3; row++) {
    const y = 36 + row * 9;
    let px = 24;
    while (px < 102) {
      const w = 2 + Math.random() * 6;
      x.fillRect(px, y, w, 3);
      px += w + 2 + Math.random() * 3;
    }
  }

  overlayFbm(x, S, { basePer: 4, oct: 3, strength: 0.18, seed: 91 });
  grain(x, S, S, 10);
  return toTex(c);
}

function weaponWood() {
  const S = 128, c = cv(S, S), x = c.getContext('2d');
  x.fillStyle = '#6b4522';
  x.fillRect(0, 0, S, S);

  // 年轮：扁椭圆弧线
  for (let i = 0; i < 34; i++) {
    const cx = S * (0.15 + Math.random() * 0.7);
    const cy = -30 + Math.random() * 190;
    const r = 8 + Math.random() * 70;
    x.strokeStyle = `rgba(${38 + Math.random() * 40 | 0},${20 + Math.random() * 30 | 0},${10 + Math.random() * 18 | 0},${0.10 + Math.random() * 0.18})`;
    x.lineWidth = 0.7 + Math.random() * 2;
    x.beginPath();
    x.ellipse(cx, cy, r, r * (0.22 + Math.random() * 0.4), Math.random() * 0.4, 0, 7);
    x.stroke();
  }

  // 清漆反光
  for (let i = 0; i < 7; i++) {
    x.strokeStyle = `rgba(196,158,108,${0.04 + Math.random() * 0.08})`;
    x.lineWidth = 2 + Math.random() * 5;
    x.beginPath();
    x.moveTo(0, Math.random() * S);
    x.bezierCurveTo(S * 0.35, Math.random() * S, S * 0.7, Math.random() * S, S, Math.random() * S);
    x.stroke();
  }

  // 磕碰露白
  for (let i = 0; i < 9; i++) {
    x.fillStyle = `rgba(152,122,90,${0.12 + Math.random() * 0.16})`;
    x.fillRect(Math.random() * S, Math.random() * S, 2 + Math.random() * 11, 1 + Math.random() * 3);
  }

  grain(x, S, S, 12);
  return toTex(c);
}

function weaponPoly() {
  const S = 64, c = cv(S, S), x = c.getContext('2d');
  x.fillStyle = '#4a4d54';
  x.fillRect(0, 0, S, S);
  // 磨砂颗粒
  for (let i = 0; i < 900; i++) {
    const v = Math.random();
    x.fillStyle = v > 0.5
      ? `rgba(120,124,132,${0.10 + Math.random() * 0.14})`
      : `rgba(28,30,34,${0.10 + Math.random() * 0.16})`;
    x.fillRect(Math.random() * S, Math.random() * S, 1 + Math.random() * 2, 1 + Math.random() * 2);
  }
  // 注塑合模线与划痕
  for (let i = 0; i < 4; i++) {
    x.strokeStyle = `rgba(160,164,172,${0.06 + Math.random() * 0.08})`;
    x.lineWidth = 0.8;
    x.beginPath();
    x.moveTo(Math.random() * S, 0);
    x.lineTo(Math.random() * S, S);
    x.stroke();
  }
  overlayFbm(x, S, { basePer: 3, oct: 3, strength: 0.16, seed: 77 });
  return toTex(c);
}

let wtCache = null;
export function getWeaponTextures() {
  if (wtCache) return wtCache;
  wtCache = { metal: weaponMetal(), wood: weaponWood(), poly: weaponPoly() };
  return wtCache;
}

// 天空：等距柱状渐变 + 分层云的椭圆堆积，直接作为 scene.background
export function makeSkyTexture() {
  const S = 512, c = cv(S, S), x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, S);
  g.addColorStop(0, '#4d78ae');
  g.addColorStop(0.34, '#93b1cd');
  g.addColorStop(0.56, '#cfc6ae');
  g.addColorStop(0.72, '#e3d5b6');
  g.addColorStop(1, '#e8dcc0');
  x.fillStyle = g;
  x.fillRect(0, 0, S, S);

  // 云：分层堆积，低层更亮更扁
  for (let layer = 0; layer < 3; layer++) {
    const count = 10 - layer * 2;
    for (let i = 0; i < count; i++) {
      const cx = Math.random() * S;
      const cy = 30 + Math.random() * 150 + layer * 26;
      const r = 26 + Math.random() * 60;
      const rg = x.createRadialGradient(cx, cy, 2, cx, cy, r);
      const a = 0.42 - layer * 0.09;
      rg.addColorStop(0, `rgba(255,255,255,${a})`);
      rg.addColorStop(0.55, `rgba(248,246,240,${a * 0.5})`);
      rg.addColorStop(1, 'rgba(255,255,255,0)');
      x.fillStyle = rg;
      x.beginPath(); x.ellipse(cx, cy, r * 1.5, r * 0.62, 0, 0, 7); x.fill();
    }
  }

  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = MAX_ANISO;
  return t;
}
