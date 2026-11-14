// ============================================================
//  textures.js — 程序化贴图（不依赖任何外部素材，全部 Canvas 生成）
// ============================================================
import * as THREE from 'three';

function cv(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

function noise(ctx, w, h, amount, alpha = 1) {
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * amount;
    d[i] = Math.max(0, Math.min(255, d[i] + n));
    d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n));
    d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n));
    d[i + 3] = Math.max(0, Math.min(255, d[i + 3] * alpha));
  }
  ctx.putImageData(img, 0, 0);
}

function toTex(canvas, repeat = 1) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  t.repeat.set(repeat, repeat);
  return t;
}

// 沙漠砂岩砖墙（dust 风格）
function sandWall() {
  const S = 256, c = cv(S, S), x = c.getContext('2d');
  x.fillStyle = '#b99a68';
  x.fillRect(0, 0, S, S);
  const rowH = 32;
  for (let r = 0; r < S / rowH; r++) {
    const off = (r % 2) * 42;
    for (let bx = -1; bx < 4; bx++) {
      const w = 78, h = rowH - 3;
      const px = bx * 84 + off + 2;
      const py = r * rowH + 2;
      const v = 20 * Math.random();
      x.fillStyle = `rgb(${184 - v | 0},${156 - v | 0},${106 - v | 0})`;
      x.fillRect(px, py, w, h);
      x.fillStyle = 'rgba(255,255,255,0.07)';
      x.fillRect(px, py, w, 3);
      x.fillStyle = 'rgba(0,0,0,0.12)';
      x.fillRect(px, py + h - 3, w, 3);
    }
  }
  // 污渍
  for (let i = 0; i < 40; i++) {
    const g = x.createRadialGradient(Math.random() * S, Math.random() * S, 2, Math.random() * S, Math.random() * S, 30);
    g.addColorStop(0, 'rgba(90,70,45,0.10)');
    g.addColorStop(1, 'rgba(90,70,45,0)');
    x.fillStyle = g;
    x.fillRect(0, 0, S, S);
  }
  noise(x, S, S, 26);
  return toTex(c);
}

// 沙地
function sandFloor() {
  const S = 256, c = cv(S, S), x = c.getContext('2d');
  x.fillStyle = '#c4a878';
  x.fillRect(0, 0, S, S);
  for (let i = 0; i < 2600; i++) {
    const v = Math.random() * 40 - 20;
    x.fillStyle = `rgba(${190 + v | 0},${164 + v | 0},${118 + v | 0},0.55)`;
    x.fillRect(Math.random() * S, Math.random() * S, 2 + Math.random() * 3, 1 + Math.random() * 2);
  }
  for (let i = 0; i < 14; i++) {
    x.strokeStyle = 'rgba(140,116,80,0.24)';
    x.lineWidth = 1 + Math.random() * 2;
    x.beginPath();
    let px = Math.random() * S, py = Math.random() * S;
    x.moveTo(px, py);
    for (let k = 0; k < 6; k++) {
      px += (Math.random() - 0.5) * 40; py += (Math.random() - 0.5) * 40;
      x.lineTo(px, py);
    }
    x.stroke();
  }
  noise(x, S, S, 16);
  return toTex(c, 1);
}

// 木箱
function crate() {
  const S = 128, c = cv(S, S), x = c.getContext('2d');
  x.fillStyle = '#9c7442';
  x.fillRect(0, 0, S, S);
  for (let i = 0; i < 7; i++) {
    const y = i * (S / 7);
    x.fillStyle = i % 2 ? '#a87e49' : '#93693a';
    x.fillRect(0, y + 1, S, S / 7 - 2);
    x.fillStyle = 'rgba(0,0,0,0.18)';
    x.fillRect(0, y, S, 1.5);
  }
  x.strokeStyle = '#6d4c26';
  x.lineWidth = 7;
  x.strokeRect(3.5, 3.5, S - 7, S - 7);
  // 斜撑
  x.beginPath(); x.moveTo(6, 6); x.lineTo(S - 6, S - 6); x.stroke();
  // 钉子
  x.fillStyle = '#4a3520';
  [[14, 14], [S - 14, 14], [14, S - 14], [S - 14, S - 14]].forEach(([px, py]) => {
    x.beginPath(); x.arc(px, py, 2.6, 0, 7); x.fill();
  });
  noise(x, S, S, 18);
  return toTex(c);
}

// 混凝土
function concrete() {
  const S = 128, c = cv(S, S), x = c.getContext('2d');
  x.fillStyle = '#8d8a82';
  x.fillRect(0, 0, S, S);
  for (let i = 0; i < 26; i++) {
    x.fillStyle = `rgba(${110 + Math.random() * 50 | 0},${108 + Math.random() * 46 | 0},${100 + Math.random() * 40 | 0},0.5)`;
    x.fillRect(Math.random() * S, Math.random() * S, 8 + Math.random() * 30, 6 + Math.random() * 20);
  }
  noise(x, S, S, 24);
  return toTex(c);
}

// 金属 / 集装箱
function metal(color) {
  const S = 128, c = cv(S, S), x = c.getContext('2d');
  x.fillStyle = color;
  x.fillRect(0, 0, S, S);
  for (let i = 0; i < S; i += 8) {
    x.fillStyle = 'rgba(255,255,255,0.07)';
    x.fillRect(i, 0, 2, S);
    x.fillStyle = 'rgba(0,0,0,0.10)';
    x.fillRect(i + 4, 0, 2, S);
  }
  for (let i = 0; i < 24; i++) {
    x.fillStyle = `rgba(80,55,35,${Math.random() * 0.16})`;
    x.fillRect(Math.random() * S, Math.random() * S, Math.random() * 22, Math.random() * 22);
  }
  noise(x, S, S, 14);
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

// 画布贴图 → 供雷达使用的地面缩略（保留接口）
export function makeSkyTexture() {
  const S = 512, c = cv(S, S), x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, S);
  g.addColorStop(0, '#5f86b8');
  g.addColorStop(0.45, '#a8c0d6');
  g.addColorStop(0.62, '#d9cfb4');
  g.addColorStop(1, '#e8dcc0');
  x.fillStyle = g;
  x.fillRect(0, 0, S, S);
  // 云
  for (let i = 0; i < 18; i++) {
    const cx = Math.random() * S, cy = 40 + Math.random() * 180, r = 30 + Math.random() * 70;
    const rg = x.createRadialGradient(cx, cy, 2, cx, cy, r);
    rg.addColorStop(0, 'rgba(255,255,255,0.5)');
    rg.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = rg;
    x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
