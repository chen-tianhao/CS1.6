import puppeteer from 'puppeteer-core';
import path from 'node:path';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--allow-file-access-from-files', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'],
  defaultViewport: { width: 800, height: 600 },
});
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('PAGEERROR:', e.message, '\n', e.stack));
const fp = path.resolve('index.html').split(path.sep).join('/');
await page.goto('file:///' + fp, { waitUntil: 'load' });
await new Promise((r) => setTimeout(r, 1500));
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 800));

const out = await page.evaluate(() => {
  const g = window.game;
  g.paused = true;
  const p = g.localPlayer;
  for (let i = 0; i < 60 * 4; i++) g.update(1 / 60);

  const enemy = g.players.find((x) => x.team !== p.team);
  enemy.alive = true; enemy.health = 100;
  enemy.pos.set(1300, 0, -650);
  p.pos.set(1300, 0, -450);
  p.alive = true; p.health = 100;
  p.yaw = Math.atan2(-(enemy.pos.x - p.pos.x), -(enemy.pos.z - p.pos.z));
  p.pitch = 0;
  p.punchPitch = 0; p.punchYaw = 0;

  const origin = p.pos.clone(); origin.y = p.eyeY();
  const dir = p.aimDir();
  const wall = g.map.raycast(origin, dir, 8000);
  const hitP = g.tracePlayers(origin, dir, wall ? wall.dist : 8000, p);
  const allP = g.tracePlayers(origin, dir, 8000, p);

  // 直接调用一次伤害
  const before = enemy.health;
  const w = p.weapon;
  return {
    playerPos: p.pos.toArray(),
    eye: p.eyeY(),
    dir: dir.toArray(),
    wallHit: wall ? +wall.dist.toFixed(1) : null,
    traceHit: hitP ? { name: hitP.player.name, dist: +hitP.dist.toFixed(1), group: hitP.group } : null,
    allHit: allP ? { name: allP.player.name, dist: +allP.dist.toFixed(1), group: allP.group } : null,
    hitboxes: enemy.hitboxes(),
    enemyPos: enemy.pos.toArray(),
    weapon: w ? { id: w.id, ammo: w.ammo } : null,
    phase: g.round.phase,
    canFire: p.canFire(),
    team: [p.team, enemy.team],
    hitsBefore: g.stats.hits,
    healthBefore: before,
  };
});
console.log(JSON.stringify(out, null, 1));
await browser.close();
