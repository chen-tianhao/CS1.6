// ============================================================
//  audio.js — WebAudio 程序化音效（无外部音源，规避版权素材）
// ============================================================
import { SETTINGS_DEFAULT } from './config.js';

let ctx = null;
let master = null;
let noiseBuf = null;
export let volume = SETTINGS_DEFAULT.volume;

export function initAudio() {
  if (ctx) return ctx;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = volume;
  master.connect(ctx.destination);

  // 预生成 2 秒白噪声
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

function now() { return ctx ? ctx.currentTime : 0; }

function noiseSource() {
  const s = ctx.createBufferSource();
  s.buffer = noiseBuf;
  s.loop = true;
  s.playbackRate.value = 0.9 + Math.random() * 0.2;
  return s;
}

// 距离衰减 + 声像
function spatial(pos, listener) {
  const out = ctx.createGain();
  const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
  let gain = 1;
  if (pos && listener) {
    const dx = pos.x - listener.x, dy = (pos.y || 0) - (listener.y || 0), dz = pos.z - listener.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    gain = Math.max(0, 1 - dist / 2600) ** 1.6;
    if (pan) {
      const yaw = listener.yaw || 0;
      const right = dx * Math.cos(yaw) - dz * Math.sin(yaw);
      pan.pan.value = Math.max(-1, Math.min(1, right / 900));
    }
  }
  out.gain.value = gain;
  if (pan) {
    out.connect(pan);
    pan.connect(master);
    return out;
  }
  out.connect(master);
  return out;
}

function burst(dest, t, { dur = 0.12, freq = 2400, q = 1, gain = 0.6, type = 'lowpass', decay = 0.09 }) {
  const src = noiseSource();
  const f = ctx.createBiquadFilter();
  f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ctx.createGain();
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.0008, t + decay);
  src.connect(f); f.connect(g); g.connect(dest);
  src.start(t); src.stop(t + dur + 0.05);
}

function thump(dest, t, freq = 90, dur = 0.18, gain = 0.5) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(freq * 1.6, t);
  o.frequency.exponentialRampToValueAtTime(freq * 0.55, t + dur);
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(dest);
  o.start(t); o.stop(t + dur + 0.02);
}

export function playShot(kind, pos, listener) {
  if (!ctx) return;
  const t = now();
  const dest = spatial(pos, listener);
  switch (kind) {
    case 'pistol':
      burst(dest, t, { freq: 2100, gain: 0.5, decay: 0.09 });
      thump(dest, t, 150, 0.1, 0.28);
      break;
    case 'deagle':
      burst(dest, t, { freq: 1500, gain: 0.8, decay: 0.2 });
      thump(dest, t, 95, 0.22, 0.55);
      break;
    case 'smg':
      burst(dest, t, { freq: 2600, gain: 0.42, decay: 0.06 });
      thump(dest, t, 180, 0.07, 0.2);
      break;
    case 'ak47':
    case 'm4a1':
      burst(dest, t, { freq: kind === 'ak47' ? 1400 : 1800, gain: 0.75, decay: 0.16 });
      burst(dest, t + 0.005, { freq: 5200, gain: 0.25, decay: 0.05, type: 'highpass' });
      thump(dest, t, 110, 0.16, 0.5);
      break;
    case 'awp':
      burst(dest, t, { freq: 1000, gain: 0.95, decay: 0.5 });
      burst(dest, t + 0.01, { freq: 6000, gain: 0.3, decay: 0.08, type: 'highpass' });
      thump(dest, t, 70, 0.45, 0.75);
      break;
    case 'knife':
      burst(dest, t, { freq: 4200, gain: 0.3, decay: 0.07, type: 'highpass' });
      break;
    default:
      burst(dest, t, { freq: 2000, gain: 0.5, decay: 0.1 });
  }
}

export function playFootstep(pos, listener, onSand = true) {
  if (!ctx) return;
  const t = now();
  const dest = spatial(pos, listener);
  burst(dest, t, { freq: onSand ? 900 : 1400, gain: 0.16, decay: 0.06 });
}

export function playReload() {
  if (!ctx) return;
  const t = now();
  const dest = spatial(null, null);
  [0, 0.35].forEach((d, i) => {
    burst(dest, t + d, { freq: 3000, gain: 0.22, decay: 0.05, type: 'bandpass', q: 4 });
    thump(dest, t + d, 220, 0.05, 0.14);
  });
}

export function playHit(headshot = false) {
  if (!ctx) return;
  const t = now();
  const dest = spatial(null, null);
  if (headshot) {
    thump(dest, t, 1200, 0.09, 0.3);
    burst(dest, t, { freq: 5000, gain: 0.3, decay: 0.06, type: 'bandpass', q: 6 });
  } else {
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
  burst(dest, t, { freq: 700, gain: 1.0, decay: 1.1, dur: 1.4 });
  burst(dest, t, { freq: 90, gain: 0.9, decay: 1.4, dur: 1.6, type: 'lowpass' });
  thump(dest, t, 45, 1.2, 0.9);
}

export function playFlashbang(pos, listener) {
  if (!ctx) return;
  const t = now();
  const dest = spatial(pos, listener);
  burst(dest, t, { freq: 9000, gain: 0.7, decay: 0.35, type: 'highpass' });
  thump(dest, t, 300, 0.5, 0.3);
}

export function playPlantTick() {
  if (!ctx) return;
  const t = now();
  burst(spatial(null, null), t, { freq: 1200, gain: 0.2, decay: 0.04, type: 'bandpass', q: 8 });
}

export function playPickup() {
  if (!ctx) return;
  const t = now();
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'triangle';
  o.frequency.setValueAtTime(660, t);
  o.frequency.exponentialRampToValueAtTime(1320, t + 0.08);
  g.gain.setValueAtTime(0.18, t);
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
  g.gain.setValueAtTime(0.08, t);
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
  g.gain.setValueAtTime(0.001, t);
  g.gain.exponentialRampToValueAtTime(0.12, t + 0.05);
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
  o.connect(g); g.connect(master);
  o.start(t); o.stop(t + 0.4);
}

export function resumeAudio() {
  if (ctx && ctx.state === 'suspended') ctx.resume();
}
