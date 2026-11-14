import puppeteer from 'puppeteer-core';
import path from 'node:path';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--allow-file-access-from-files', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'],
  defaultViewport: { width: 800, height: 600 },
});
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('PAGEERROR:', e.message, e.stack));
const fp = path.resolve('index.html').split(path.sep).join('/');
await page.goto('file:///' + fp, { waitUntil: 'load' });
await new Promise((r) => setTimeout(r, 1500));
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 1000));

const out = await page.evaluate(() => {
  const g = window.game;
  g.paused = true;
  for (let i = 0; i < 60 * 8; i++) g.update(1 / 60);
  const map = g.map;
  const res = [];
  for (const p of g.players) {
    if (!p.bot) continue;
    const t = map.worldToTile(p.pos.x, p.pos.z);
    const pathToSite = map.findPath(p.pos, p.bot.goal || { x: 0, z: 0 });
    res.push({
      name: p.name, team: p.team, alive: p.alive,
      pos: [Math.round(p.pos.x), Math.round(p.pos.z)],
      tile: [t.cx, t.cz],
      floor: map.isFloorTile(t.cx, t.cz),
      walkable: map.isWalkable(t.cx, t.cz),
      goalKind: p.bot.goalKind,
      goal: p.bot.goal ? [Math.round(p.bot.goal.x), Math.round(p.bot.goal.z)] : null,
      pathLen: p.bot.path ? p.bot.path.length : null,
      pathIdx: p.bot.pathIdx,
      repathIn: +(p.bot.repathAt - g.time).toFixed(1),
      newPathLen: pathToSite ? pathToSite.length : null,
      vel: Math.round(Math.hypot(p.vel.x, p.vel.z)),
      target: p.bot.target ? p.bot.target.name : null,
    });
  }
  return { time: Math.round(g.time), phase: g.round.phase, bots: res };
});
console.log(JSON.stringify(out, null, 1));
await browser.close();
