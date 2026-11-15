// ============================================================
//  audio.js — WebAudio 程序化音效（无外部音源，规避版权素材）
//
//  信号链：
//    声源 → [距离低通] → [HRTF Panner] ─┬→ master ─→ 压缩器 → 输出
//                                       └→ 混响发送 → 卷积混响 ─┘
//
//  三件事决定"枪声像不像"：
//    1. 压缩器 —— 把并发枪声粘成一个整体，避免削波糊成一团
//    2. 卷积混响 —— 补上空间尾音，室外 0.17，室内可上调
//    3. 分层合成 —— 爆裂 / 枪身 / 胸腔 / 机械，四层各管一段频率
// ============================================================
import { SETTINGS_DEFAULT, WEAPONS } from './config.js';

let ctx = null;
let master = null;      // 总音量，setVolume 控制这里
let comp = null;        // 总线压缩器
let reverbIn = null;    // 混响发送量
let reverbWet = null;   // 混响返回量
let conv = null;
let noiseBuf = null;
export let volume = SETTINGS_DEFAULT.volume;

// 室外混响比例。
// 1.6 的枪声是"干、硬、尾巴短"：近处几乎没有空间感，远处的尾音也不到 0.4 秒。
// 之前 0.17 + 1.25s 的卷积会把每一发都糊上一层混响，听起来像在礼堂里打枪。
const OUTDOOR_WET = 0.075;

// 各武器四层合成的参数表
// taps = 离散反射 [延迟(s), 相对增益, 低通频率]。口径越大、弹速越低的枪，
// 尾音越长越"钝"，所以 AWP 的反射比冲锋枪更远更闷。
const GUN = {
  pistol: { crack: 2100, body: 700, sub: 150, decay: 0.10, gain: 0.55, mechFreq: 3800, mechDelay: 0.006, taps: [[0.038, 0.20, 3400], [0.092, 0.11, 2000], [0.170, 0.06, 1300]] },
  deagle: { crack: 1500, body: 520, sub: 92, decay: 0.22, gain: 0.88, mechFreq: 3200, mechDelay: 0.005, taps: [[0.050, 0.24, 3000], [0.118, 0.14, 1700], [0.225, 0.08, 1100]] },
  smg: { crack: 2500, body: 860, sub: 178, decay: 0.07, gain: 0.46, mechFreq: 4300, mechDelay: 0.018, taps: [[0.034, 0.17, 3600], [0.080, 0.09, 2100], [0.150, 0.05, 1400]] },
  ak47: { crack: 1350, body: 430, sub: 108, decay: 0.17, gain: 0.82, mechFreq: 3400, mechDelay: 0.012, taps: [[0.046, 0.23, 3100], [0.110, 0.13, 1800], [0.210, 0.075, 1150]] },
  m4a1: { crack: 1750, body: 520, sub: 122, decay: 0.15, gain: 0.74, mechFreq: 3600, mechDelay: 0.011, taps: [[0.042, 0.21, 3300], [0.102, 0.12, 1900], [0.195, 0.07, 1200]] },
  awp: { crack: 950, body: 300, sub: 68, decay: 0.58, gain: 1.00, mechFreq: 2600, mechDelay: 0.028, taps: [[0.062, 0.30, 2600], [0.148, 0.19, 1500], [0.290, 0.11, 950], [0.480, 0.05, 700]] },
  default: { crack: 2000, body: 650, sub: 140, decay: 0.12, gain: 0.60, mechFreq: 3600, mechDelay: 0.010, taps: [[0.044, 0.21, 3200], [0.104, 0.12, 1850], [0.198, 0.07, 1200]] },
};

// 程序化脉冲响应：指数衰减噪声 + 高频加速衰减 + 稀疏早期反射
function buildImpulse(seconds = 0.62, decay = 2.6) {
  const rate = ctx.sampleRate;
  const len = Math.max(1, Math.floor(rate * seconds));
  const buf = ctx.createBuffer(2, len, rate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    let lp = 0;
    for (let i = 0; i < len; i++) {
      const t = i / len;
      const env = Math.pow(1 - t, decay);
      const n = (Math.random() * 2 - 1) * env;
      // 系数随 t 变小 → 尾音逐渐变暗，真实空间都是这样
      const a = 0.34 + 0.62 * (1 - t);
      lp += (n - lp) * a;
      d[i] = lp;
    }
    // 早期反射：4 个稀疏脉冲，给"墙面"一个定位线索
    const taps = [0.011, 0.019, 0.031, 0.047];
    taps.forEach((tt, k) => {
      const idx = Math.floor(tt * rate) + (ch ? 37 : 0);
      if (idx < len) d[idx] += (0.55 - k * 0.1) * (ch ? -1 : 1);
    });
  }
  // 峰值归一化：低通会吃掉大量能量，不补偿的话混响几乎听不见
  let peak = 0;
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) {
      const v = Math.abs(d[i]);
      if (v > peak) peak = v;
    }
  }
  const k = peak > 0 ? 0.92 / peak : 1;
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) d[i] *= k;
  }
  return buf;
}

export function initAudio() {
  if (ctx) return ctx;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();

  // 压缩器放在最末端，作用等同调音台的限幅器。
  // 参数取"只压峰值"的设定：正常单发音量几乎不变，齐射时才收紧，
  // 否则阈值压太低会把所有枪声一起闷掉。
  comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -8;
  comp.knee.value = 6;
  comp.ratio.value = 8;
  comp.attack.value = 0.001;
  comp.release.value = 0.12;

  // 压缩会削掉峰值，用 makeup 把整体电平补回来（峰值仍低于 1.0，不会削波）
  const makeup = ctx.createGain();
  makeup.gain.value = 1.7;
  comp.connect(makeup);
  makeup.connect(ctx.destination);

  master = ctx.createGain();
  master.gain.value = volume;
  master.connect(comp);

  // 混响支路：send → 卷积 → 返回，返回后同样过压缩器
  reverbIn = ctx.createGain();
  reverbIn.gain.value = OUTDOOR_WET;
  conv = ctx.createConvolver();
  conv.buffer = buildImpulse();
  reverbWet = ctx.createGain();
  reverbWet.gain.value = 1.0;
  reverbIn.connect(conv);
  conv.connect(reverbWet);
  reverbWet.connect(master);

  // 预生成 2 秒白噪声（循环取样，每次随机播放速率去相关）
  const len = ctx.sampleRate * 2;
  noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  return ctx;
}

export function setVolume(v) {
  volume = v;
  if (master) master.gain.value = v;
}

// 遮挡判定交给 main.js 注入 —— audio.js 没有地图，做不了射线检测。
let occluderFn = null;
export function setOccluder(fn) { occluderFn = fn; }

function isOccluded(pos, listener) {
  if (!occluderFn || !pos || !listener) return false;
  try { return !!occluderFn(pos, listener); } catch (e) { return false; }
}

function now() { return ctx ? ctx.currentTime : 0; }

function noiseSource() {
  const s = ctx.createBufferSource();
  s.buffer = noiseBuf;
  s.loop = true;
  s.playbackRate.value = 0.9 + Math.random() * 0.2;
  return s;
}

// 同步 AudioListener：PannerNode 用的是世界坐标，listener 不跟着走方位就全错
export function setListener(l) {
  if (!ctx || !l) return;
  const L = ctx.listener;
  if (!L) return;
  const yaw = l.yaw || 0;
  const fx = -Math.sin(yaw), fz = -Math.cos(yaw);
  try {
    if (L.positionX) {
      L.positionX.value = l.x; L.positionY.value = l.y; L.positionZ.value = l.z;
      L.forwardX.value = fx; L.forwardY.value = 0; L.forwardZ.value = fz;
      L.upX.value = 0; L.upY.value = 1; L.upZ.value = 0;
    } else if (L.setPosition) {
      L.setPosition(l.x, l.y, l.z);
      L.setOrientation(fx, 0, fz, 0, 1, 0);
    }
  } catch (e) { /* 老旧实现忽略 */ }
}

// 返回一个输入节点；内部按距离决定走 2D 直连还是 HRTF 空间化
function spatial(pos, listener) {
  const input = ctx.createGain();
  if (!pos || !listener) {
    input.connect(master);
    input.connect(reverbIn);
    return input;
  }
  const dx = pos.x - listener.x;
  const dy = (pos.y || 0) - (listener.y || 0);
  const dz = pos.z - listener.z;
  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

  // 自己的枪声/脚步不做 HRTF：0 距离附近声像会被甩到侧面，反而不自然
  if (dist < 110) {
    input.connect(master);
    input.connect(reverbIn);
    return input;
  }

  setListener(listener);

  // 遮挡检测：交给 main.js 注入的回调（它才有地图可以射线检测）
  const blocked = isOccluded(pos, listener);

  // 空气吸收：远处只剩低频，"远方的交火"就是这么来的
  const air = ctx.createBiquadFilter();
  air.type = 'lowpass';
  air.frequency.value = Math.max(420, 18000 * Math.exp(-dist / 1400));
  air.Q.value = 0.4;

  const pan = ctx.createPanner();
  pan.panningModel = 'HRTF';
  pan.distanceModel = 'inverse';
  pan.refDistance = 140;
  pan.rolloffFactor = 1.05;
  pan.maxDistance = 6000;
  pan.coneInnerAngle = 360;
  const py = pos.y || 0;
  if (pan.positionX) {
    pan.positionX.value = pos.x; pan.positionY.value = py; pan.positionZ.value = pos.z;
  } else if (pan.setPosition) {
    pan.setPosition(pos.x, py, pos.z);
  }

  input.connect(air);
  // 遮挡：中间隔了墙就把高频砍掉再衰减。
  // 这是"声音真不真"里分量最大的一条 —— 没有它，隔着水泥墙开枪和空地开枪一模一样。
  let tail = air;
  if (blocked) {
    const occl = ctx.createBiquadFilter();
    occl.type = 'lowpass';
    occl.frequency.value = 780;
    occl.Q.value = 0.7;
    const og = ctx.createGain();
    og.gain.value = 0.42;
    air.connect(occl);
    occl.connect(og);
    tail = og;
  }
  tail.connect(pan);
  pan.connect(master);
  // 远处的枪声混响占比更高：近处是干声，远处是"在街道上回荡"
  const revSend = ctx.createGain();
  revSend.gain.value = Math.min(2.6, 0.55 + dist / 1400);
  pan.connect(revSend);
  revSend.connect(reverbIn);
  return input;
}

// 噪声爆裂：attack 是"瞬态"的来源，缺了它声音就是软的
function burst(dest, t, { dur = 0.12, freq = 2400, q = 1, gain = 0.6, type = 'lowpass', decay = 0.09, attack = 0.002 }) {
  const src = noiseSource();
  const f = ctx.createBiquadFilter();
  f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ctx.createGain();
  const peak = Math.max(0.0005, gain);
  const atkEnd = t + Math.max(0.0005, attack);
  const relEnd = t + Math.max(attack + 0.012, decay);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, atkEnd);
  g.gain.exponentialRampToValueAtTime(0.0008, relEnd);
  src.connect(f); f.connect(g); g.connect(dest);
  src.start(t);
  src.stop(t + Math.max(dur, relEnd - t) + 0.08);
}

// 次低频正弦：胸腔冲击
function thump(dest, t, freq = 90, dur = 0.18, gain = 0.5) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(freq * 1.7, t);
  o.frequency.exponentialRampToValueAtTime(Math.max(28, freq * 0.55), t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(Math.max(0.0005, gain), t + 0.004);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(dest);
  o.start(t); o.stop(t + dur + 0.02);
}

// 机械咬合声：8ms 的窄带脉冲，枪的"金属感"全在这一层
function click(dest, t, freq = 3800, gain = 0.25) {
  const src = noiseSource();
  const f = ctx.createBiquadFilter();
  f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = 7;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(Math.max(0.0004, gain), t + 0.0008);
  g.gain.exponentialRampToValueAtTime(0.0006, t + 0.014);
  src.connect(f); f.connect(g); g.connect(dest);
  src.start(t); src.stop(t + 0.035);
}

// 四层合成：爆裂（脆）/ 枪身（厚）/ 胸腔（重）/ 机械（金属）+ 离散反射
function gunshot(dest, t, kind) {
  const G = GUN[kind] || GUN.default;
  // 每一发都抖动 ±7%：参数完全一致的连发，耳朵立刻能认出是合成的。
  // 真实枪械每一发的装药、枪机位置、麦克风相位都不同。
  const j = (v, amt = 0.07) => v * (1 + (Math.random() * 2 - 1) * amt);
  const gain = j(G.gain, 0.09);
  const sub = j(G.sub, 0.05);

  burst(dest, t, {
    freq: j(G.crack), gain: gain * 0.85, decay: G.decay * 0.55,
    type: 'highpass', attack: 0.0012,
  });
  burst(dest, t, {
    freq: j(G.body), gain: gain * 0.75, decay: G.decay,
    type: 'lowpass', q: 0.9, attack: 0.0025,
  });
  thump(dest, t, sub, G.decay * 1.25, gain * 0.5);
  // 低频的"肉"：单靠正弦扫频听着像电子音，补一层低通噪声才有实体感
  burst(dest, t, {
    freq: j(sub * 3.2, 0.1), gain: gain * 0.40, decay: G.decay * 0.8,
    type: 'lowpass', q: 0.8, attack: 0.003,
  });
  // 机械：枪机往复在击发之后，不是同时
  click(dest, t + j(G.mechDelay || 0.008, 0.35), G.mechFreq, gain * 0.3);

  // 离散反射：室外听到的是几次清晰的墙面反射，不是一团弥散混响。
  // 卷积那条支路给的是"房间感"，给不了这个。
  for (const [dly, g2, fr] of (G.taps || [])) {
    burst(dest, t + dly, {
      freq: fr, gain: gain * g2, decay: 0.05 + dly * 0.20,
      type: 'lowpass', q: 0.7, attack: 0.004,
    });
  }
}

export function playShot(kind, pos, listener) {
  if (!ctx) return;
  const t = now();
  const dest = spatial(pos, listener);
  if (kind === 'knife') {
    // 挥刀是"空气被切开的呼哧声"，不是枪声。
    // 关键是三点：起音要软（attack 30ms）、中心频率要低、增益要小。
    // 原来是 4200Hz / gain 0.28 / attack 5ms —— 那是一记硬脆的爆裂声，听起来就是开枪。
    burst(dest, t, { freq: 850, gain: 0.085, decay: 0.15, type: 'bandpass', q: 1.3, attack: 0.035 });
    burst(dest, t + 0.02, { freq: 2400, gain: 0.028, decay: 0.10, type: 'highpass', attack: 0.03 });
    return;
  }
  gunshot(dest, t, kind);
}

// 刀砍中：低沉的"噗" + 一点湿响。没有它，砍中人只能靠血迹判断。
export function playKnifeHit(pos, listener) {
  if (!ctx) return;
  const t = now();
  const dest = spatial(pos, listener);
  thump(dest, t, 150, 0.13, 0.30);
  burst(dest, t, { freq: 700, gain: 0.16, decay: 0.10, type: 'lowpass', attack: 0.002 });
  burst(dest, t + 0.01, { freq: 1900, gain: 0.05, decay: 0.08, type: 'bandpass', q: 2, attack: 0.004 });
}

// 脚步声按脚下材质分：沙地闷、石头脆、木头空、金属亮
// body = 落地的低频冲击（体重感），grit = 表面颗粒（沙/碎石），
// ring = 金属/木头的共振余音
const STEP = {
  sand: { freq: 900, gain: 0.16, decay: 0.065, q: 1.4, type: 'lowpass', grit: 5200, gritGain: 0.055, body: 95, bodyGain: 0.10, ring: 0, ringGain: 0 },
  stone: { freq: 1900, gain: 0.14, decay: 0.045, q: 2.2, type: 'bandpass', grit: 4200, gritGain: 0.028, body: 120, bodyGain: 0.09, ring: 0, ringGain: 0 },
  wood: { freq: 620, gain: 0.15, decay: 0.075, q: 3.0, type: 'bandpass', grit: 0, gritGain: 0, body: 85, bodyGain: 0.10, ring: 340, ringGain: 0.05 },
  metal: { freq: 2600, gain: 0.12, decay: 0.060, q: 5.0, type: 'bandpass', grit: 0, gritGain: 0, body: 110, bodyGain: 0.07, ring: 720, ringGain: 0.06 },
};

export function playFootstep(pos, listener, surface = 'sand') {
  if (!ctx) return;
  const S = STEP[surface] || STEP.sand;
  const t = now();
  const dest = spatial(pos, listener);
  // 每一步的频率和时长都抖一下：完全一致的脚步声 ≈ 节拍器
  const jitter = 0.90 + Math.random() * 0.20;
  // 鞋底砸地的空气声
  burst(dest, t, {
    freq: S.freq * jitter, gain: S.gain * (0.9 + Math.random() * 0.2), decay: S.decay * jitter,
    type: S.type, q: S.q, attack: 0.003,
  });
  // 体重压下去的闷响：没有这一层，脚步声会"飘"在地上
  if (S.body) thump(dest, t, S.body * jitter, 0.075, S.bodyGain * (0.85 + Math.random() * 0.3));
  // 表面颗粒：沙粒/碎石被碾过的细碎声
  if (S.grit) {
    burst(dest, t + 0.006 + Math.random() * 0.006, {
      freq: S.grit * jitter, gain: S.gritGain, decay: 0.04 + Math.random() * 0.02, type: 'highpass',
    });
  }
  // 木板/钢板的共振余音
  if (S.ring) {
    burst(dest, t + 0.004, {
      freq: S.ring * jitter, gain: S.ringGain, decay: 0.09, type: 'bandpass', q: 9, attack: 0.002,
    });
  }
}

// 换弹的时序与音色按武器类别分 —— 1.6 里每把枪的换弹声都不一样，
// 这是"听声辨枪"最重要的一环。
// out / seat / bolt 是占 reload 总时长的比例：弹匣脱出 → 新弹匣到位 → 上膛。
const RELOAD = {
  rifle: { out: 0.06, seat: 0.44, bolt: 0.74, magHz: 250, metalHz: 3100, boltGain: 0.22 },
  smg: { out: 0.05, seat: 0.46, bolt: 0.76, magHz: 300, metalHz: 3400, boltGain: 0.20 },
  pistol: { out: 0.05, seat: 0.45, bolt: 0.76, magHz: 430, metalHz: 2500, boltGain: 0.24 },
  sniper: { out: 0.04, seat: 0.40, bolt: 0.60, magHz: 230, metalHz: 2100, boltGain: 0.26 },
};

export function playReload(weaponId) {
  if (!ctx) return;
  const def = WEAPONS[weaponId];
  const dur = def && def.reload ? def.reload : 2.2;
  const P = RELOAD[(def && def.cls) || 'rifle'] || RELOAD.rifle;
  const t = now();
  const dest = spatial(null, null);

  // 1) 按下弹匣扣，弹匣脱出
  click(dest, t + dur * 0.015, P.metalHz * 0.80, 0.16);
  click(dest, t + dur * P.out, P.metalHz, 0.20);
  burst(dest, t + dur * P.out + 0.012, { freq: 900, gain: 0.07, decay: 0.06, type: 'lowpass' });
  // 2) 新弹匣滑入，卡榫咬合
  burst(dest, t + Math.max(0.01, dur * P.seat - 0.06), { freq: 1400, gain: 0.05, decay: 0.07, type: 'bandpass', q: 2 });
  click(dest, t + dur * P.seat, P.metalHz * 0.72, 0.26);
  thump(dest, t + dur * P.seat, P.magHz, 0.08, 0.18);
  // 3) 拉机柄 / 套筒复位
  click(dest, t + dur * P.bolt, P.metalHz * 1.25, P.boltGain);
  burst(dest, t + dur * P.bolt + 0.02, { freq: 2600, gain: 0.04, decay: 0.05, type: 'bandpass', q: 3 });
}

// 拔枪 / 切枪：枪背带摩擦 + 金属轻碰
export function playDeploy(weaponId) {
  if (!ctx) return;
  const def = WEAPONS[weaponId];
  const cls = def ? def.cls : 'rifle';
  const t = now();
  const dest = spatial(null, null);
  burst(dest, t, { freq: 1200, gain: 0.07, decay: 0.09, type: 'bandpass', q: 1.2, attack: 0.006 });
  click(dest, t + 0.02, cls === 'sniper' ? 2100 : 3000, 0.13);
  burst(dest, t + 0.05, { freq: 700, gain: 0.05, decay: 0.06, type: 'lowpass' });
}

// 投掷：一声短促的破空
export function playThrow() {
  if (!ctx) return;
  const t = now();
  const dest = spatial(null, null);
  burst(dest, t, { freq: 1600, gain: 0.10, decay: 0.10, type: 'bandpass', q: 1.4, attack: 0.004 });
  burst(dest, t + 0.05, { freq: 600, gain: 0.05, decay: 0.06, type: 'lowpass' });
}

// 开镜 / 退镜：1.6 是一声很干脆的机械"咔"
export function playZoom(inScope = true) {  if (!ctx) return;
  const t = now();
  const dest = spatial(null, null);
  click(dest, t, inScope ? 1450 : 1050, 0.17);
  burst(dest, t + 0.008, { freq: 900, gain: 0.03, decay: 0.04, type: 'lowpass' });
}

// 弹着点按材质分：沙扬、石脆、木闷、金亮
const IMPACT = {
  sand: { freq: 850, q: 0.8, gain: 0.15, decay: 0.085, type: 'lowpass' },
  stone: { freq: 2500, q: 1.8, gain: 0.19, decay: 0.060, type: 'bandpass' },
  wood: { freq: 720, q: 3.4, gain: 0.17, decay: 0.100, type: 'bandpass' },
  metal: { freq: 3400, q: 7.0, gain: 0.14, decay: 0.140, type: 'bandpass' },
};

export function playImpact(surface, pos, listener) {
  if (!ctx) return;
  const S = IMPACT[surface] || IMPACT.stone;
  const t = now();
  const dest = spatial(pos, listener);
  burst(dest, t, { freq: S.freq, gain: S.gain, decay: S.decay, type: S.type, q: S.q, attack: 0.001 });
  if (surface === 'metal') {
    // 金属被打中的那一串余振，是"打到铁皮"最直接的线索
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'triangle';
    o.frequency.setValueAtTime(2400, t);
    o.frequency.exponentialRampToValueAtTime(1450, t + 0.16);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.05, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0008, t + 0.18);
    o.connect(g); g.connect(dest);
    o.start(t); o.stop(t + 0.2);
  }
}

export function playHit(headshot = false) {
  if (!ctx) return;
  const t = now();
  const dest = spatial(null, null);
  if (headshot) {
    // 爆头：金属脆响 + 短促提示音，跟枪声要能分开
    burst(dest, t, { freq: 5000, gain: 0.30, decay: 0.07, type: 'bandpass', q: 6, attack: 0.001 });
    thump(dest, t, 1200, 0.09, 0.28);
  } else {
    burst(dest, t, { freq: 1400, gain: 0.14, decay: 0.05, type: 'bandpass', q: 3 });
    thump(dest, t, 500, 0.05, 0.18);
  }
}

export function playBeep(high = false) {
  if (!ctx) return;
  const t = now();
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = 'square';
  o.frequency.value = high ? 2400 : 1500;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.25, t + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
  o.connect(g); g.connect(master);
  o.start(t); o.stop(t + 0.09);
}

export function playExplosion(pos, listener) {
  if (!ctx) return;
  const t = now();
  const dest = spatial(pos, listener);
  burst(dest, t, { freq: 700, gain: 1.0, decay: 1.1, dur: 1.4, attack: 0.004 });
  burst(dest, t, { freq: 90, gain: 0.9, decay: 1.5, dur: 1.6, type: 'lowpass', attack: 0.006 });
  thump(dest, t, 45, 1.2, 0.9);
  // 碎片飞散的高频尾巴
  burst(dest, t + 0.18, { freq: 4200, gain: 0.22, decay: 0.6, type: 'highpass', attack: 0.02 });
}

export function playFlashbang(pos, listener) {
  if (!ctx) return;
  const t = now();
  const dest = spatial(pos, listener);
  burst(dest, t, { freq: 9000, gain: 0.7, decay: 0.35, type: 'highpass', attack: 0.0008 });
  thump(dest, t, 300, 0.5, 0.3);
  // 耳鸣：2.6kHz 正弦缓慢衰减，模拟暂时性听阈偏移
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(2650, t);
  o.frequency.linearRampToValueAtTime(2300, t + 1.6);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.05, t + 0.08);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);
  o.connect(g); g.connect(master);
  o.start(t); o.stop(t + 1.9);
}

export function playPlantTick() {
  if (!ctx) return;
  const t = now();
  burst(spatial(null, null), t, { freq: 1200, gain: 0.2, decay: 0.04, type: 'bandpass', q: 8, attack: 0.001 });
}

export function playPickup() {
  if (!ctx) return;
  const t = now();
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'triangle';
  o.frequency.setValueAtTime(660, t);
  o.frequency.exponentialRampToValueAtTime(1320, t + 0.08);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.18, t + 0.006);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
  o.connect(g); g.connect(master);
  o.start(t); o.stop(t + 0.14);
}

export function playUIClick() {
  if (!ctx) return;
  const t = now();
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'square';
  o.frequency.value = 900;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.08, t + 0.003);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
  o.connect(g); g.connect(master);
  o.start(t); o.stop(t + 0.06);
}

export function playRoundStart() {
  if (!ctx) return;
  const t = now();
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'sawtooth';
  o.frequency.setValueAtTime(220, t);
  o.frequency.exponentialRampToValueAtTime(440, t + 0.25);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.12, t + 0.05);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
  o.connect(g); g.connect(master);
  o.start(t); o.stop(t + 0.4);
}

export function resumeAudio() {
  if (ctx && ctx.state === 'suspended') ctx.resume();
}
