import puppeteer from 'puppeteer-core';
import path from 'node:path';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--allow-file-access-from-files', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'],
  defaultViewport: { width: 1000, height: 700 },
});
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('PAGEERROR:', e.message, '\n', e.stack));
const fp = path.resolve('index.html').split(path.sep).join('/');
await page.goto('file:///' + fp, { waitUntil: 'load' });
await new Promise((r) => setTimeout(r, 1500));
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 800));

const res = await page.evaluate(() => {
  const g = window.game;
  g.paused = true;
  const p = g.localPlayer;
  // 进入 live 阶段
  for (let i = 0; i < 60 * 4; i++) g.update(1 / 60);
  const out = {};

  // 1. 射击命中判定：把玩家放到敌人正前方
  p.alive = true; p.health = 100;
  const enemy = g.players.find((x) => x.team !== p.team);
  enemy.alive = true; enemy.health = 100;
  enemy.pos.set(1000, 0, -700);
  p.pos.set(1000, 0, -480);
  p.yaw = Math.PI;      // 朝 -Z? 需要朝向敌人
  // 朝向敌人：(dx,dz) -> yaw = atan2(-dx,-dz)
  p.yaw = Math.atan2(-(enemy.pos.x - p.pos.x), -(enemy.pos.z - p.pos.z));
  p.pitch = 0;
  p.giveWeapon('ak47');
  p.deployTime = 0; p.reloadEnd = 0; p.nextFire = 0;
  const before = enemy.health;
  let shots = 0;
  for (let i = 0; i < 6; i++) {
    p.nextFire = 0; p.punchPitch = 0; p.punchYaw = 0;
    p.tryFire(); shots++;
    for (let k = 0; k < 10; k++) g.update(1 / 60);
  }
  out.shoot = {
    before, after: enemy.health, shots, aliveEnemy: enemy.alive,
    ammo: p.weapon ? p.weapon.ammo : null, localAlive: p.alive, round: g.round.roundNum,
    kills: p.kills, money: p.money,
  };

  // 2. 手雷
  const target2 = g.players.find((x) => x.team !== p.team && x.alive);
  if (target2) {
    target2.alive = true; target2.health = 100;
    target2.pos.set(1000, 0, -700);
    p.pos.set(1000, 0, -480);
    p.grenades.he = 1;
    p.grenadeSel = 'he';
    p.curSlot = 'grenade';
    p.nextFire = 0;
    p.yaw = Math.atan2(-(target2.pos.x - p.pos.x), -(target2.pos.z - p.pos.z));
    p.pitch = -0.05;
    p.throwGrenade();
    const hpBefore = target2.health;
    for (let i = 0; i < 60 * 4; i++) g.update(1 / 60);
    out.grenade = { hpBefore, hpAfter: target2.health, grenadesLeft: g.grenades.length, smoke: g.fx.smokeVolumes.length };
  }

  // 3. 安放 C4
  p.alive = true; p.health = 100;
  const site = g.map.sites.A;
  p.pos.set((site.x0 + site.x1) / 2, 0, (site.z0 + site.z1) / 2);
  p.hasBomb = true;
  g.round.bomb.state = 'carried';
  g.round.bomb.carrier = p;
  g.round.phase = 'live';
  g.round.time = 60;
  g.keys['KeyE'] = true;
  for (let i = 0; i < 60 * 4; i++) g.update(1 / 60);
  g.keys['KeyE'] = false;
  out.plant = { bombState: g.round.bomb.state, site: g.round.bomb.site, timer: +g.round.bomb.timer.toFixed(1) };

  // 4. 拆弹
  const ct = g.players.find((x) => x.team === 'CT' && x.alive) || g.players.find((x) => x.team === 'CT');
  if (ct) {
    ct.alive = true; ct.health = 100; ct.hasKit = false;
    const b = g.round.bomb.pos;
    ct.pos.set(b.x + 20, 0, b.z + 20);
    g.keys['KeyE'] = true;
    ct.wantUse = true;
    for (let i = 0; i < 60 * 12; i++) { ct.wantUse = true; g.update(1 / 60); }
    g.keys['KeyE'] = false;
    out.defuse = { bombState: g.round.bomb.state, phase: g.round.phase, score: [g.round.scoreCT, g.round.scoreT] };
  }

  // 5. 换弹 / 弹药
  p.giveWeapon('m4a1');
  p.slots.primary.ammo = 3;
  p.nextFire = 0; p.reloadEnd = 0;
  p.reload();
  for (let i = 0; i < 60 * 4; i++) g.update(1 / 60);
  out.reload = { ammo: p.slots.primary.ammo, reserve: p.slots.primary.reserve };

  return out;
});
console.log(JSON.stringify(res, null, 1));
await browser.close();
