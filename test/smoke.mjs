// 自动化冒烟测试：加载页面 → 启动比赛 → 截图 → 收集报错
import puppeteer from 'puppeteer-core';
import path from 'node:path';
import fs from 'node:fs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const OUT = path.resolve('shots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: [
    '--allow-file-access-from-files',
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader',
    '--window-size=1440,900',
    '--mute-audio',
  ],
  defaultViewport: { width: 1440, height: 900 },
});

const page = await browser.newPage();
const logs = [];
const errors = [];
page.on('console', (m) => logs.push(`[${m.type()}] ${m.text()}`));
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
page.on('requestfailed', (r) => errors.push('REQFAIL: ' + r.url() + ' ' + r.failure()?.errorText));

const url = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');
console.log('URL:', url);
await page.goto(url, { waitUntil: 'load', timeout: 60000 });
await new Promise((r) => setTimeout(r, 2500));

await page.screenshot({ path: path.join(OUT, '01-menu.png') });

const boot = await page.evaluate(() => ({
  hasGame: !!window.game,
  hasMap: !!(window.game && window.game.map),
  players: window.game ? window.game.players.length : -1,
  mapMeshes: window.game ? window.game.map.solids.length : -1,
  colliders: window.game ? window.game.map.colliders.length : -1,
}));
console.log('BOOT:', JSON.stringify(boot));

// 进入战场
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 1200));
await page.screenshot({ path: path.join(OUT, '02-start.png') });

// 冻结时间内截图，等进入 live
await new Promise((r) => setTimeout(r, 3500));
await page.screenshot({ path: path.join(OUT, '03-live.png') });

const state = await page.evaluate(() => {
  const g = window.game;
  const p = g.localPlayer;
  return {
    phase: g.round.phase,
    time: +g.round.time.toFixed(1),
    round: g.round.roundNum,
    score: [g.round.scoreCT, g.round.scoreT],
    local: {
      pos: p.pos.toArray().map((v) => +v.toFixed(1)),
      hp: p.health, money: p.money, slot: p.curSlot,
      weapon: p.weapon ? p.weapon.id : null,
      alive: p.alive,
    },
    players: g.players.map((x) => ({
      n: x.name, t: x.team, hp: x.health, alive: x.alive,
      w: x.slots.primary ? x.slots.primary.id : (x.slots.secondary ? x.slots.secondary.id : null),
      pos: x.pos.toArray().map((v) => +v.toFixed(0)),
    })),
    fps: Math.round(g.fps),
  };
});
console.log('STATE:', JSON.stringify(state, null, 1));

// 模拟移动 + 射击：直接调用内部接口（无指针锁时无法用鼠标）
await page.evaluate(() => {
  const g = window.game;
  g.keys['KeyW'] = true;
});
await new Promise((r) => setTimeout(r, 1500));
await page.evaluate(() => { window.game.keys['KeyW'] = false; });
await page.screenshot({ path: path.join(OUT, '04-move.png') });

const moved = await page.evaluate(() => window.game.localPlayer.pos.toArray().map((v) => +v.toFixed(1)));
console.log('MOVED TO:', JSON.stringify(moved));

// 开一枪（直接调用）
const shot = await page.evaluate(() => {
  const g = window.game;
  const p = g.localPlayer;
  const before = p.weapon ? p.weapon.ammo : -1;
  p.tryFire();
  return { before, after: p.weapon ? p.weapon.ammo : -1, punch: +p.punchPitch.toFixed(2) };
});
console.log('SHOT:', JSON.stringify(shot));
await new Promise((r) => setTimeout(r, 600));
await page.screenshot({ path: path.join(OUT, '05-shot.png') });

// 等 30 秒观察 BOT 行为与回合推进
await new Promise((r) => setTimeout(r, 12000));
const late = await page.evaluate(() => {
  const g = window.game;
  return {
    phase: g.round.phase,
    time: +g.round.time.toFixed(1),
    score: [g.round.scoreCT, g.round.scoreT],
    round: g.round.roundNum,
    alive: g.players.map((x) => `${x.name}:${x.team}:${x.alive ? 'A' : 'D'}:${Math.round(x.health)}:${x.pos.toArray().map((v) => Math.round(v)).join(',')}`),
    bomb: g.round.bomb.state,
    kills: g.players.map((x) => `${x.name}:${x.kills}/${x.deaths}`),
    fps: Math.round(g.fps),
  };
});
console.log('LATE:', JSON.stringify(late, null, 1));
await page.screenshot({ path: path.join(OUT, '06-late.png') });

console.log('--- ERRORS ---');
console.log(errors.length ? errors.join('\n') : 'none');
console.log('--- LOGS (last 30) ---');
console.log(logs.slice(-30).join('\n'));

await browser.close();
