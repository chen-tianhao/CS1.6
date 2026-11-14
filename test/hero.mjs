import puppeteer from 'puppeteer-core';
import path from 'node:path';
import fs from 'node:fs';

const OUT = path.resolve('shots');
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--allow-file-access-from-files', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'],
  defaultViewport: { width: 1440, height: 810 },
});
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('PAGEERROR:', e.message));
const fp = path.resolve('index.html').split(path.sep).join('/');
await page.goto('file:///' + fp, { waitUntil: 'load' });
await new Promise((r) => setTimeout(r, 1500));
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 4500));

await page.evaluate(() => {
  const g = window.game;
  const p = g.localPlayer;
  p.alive = true; p.health = 100; p.armor = 100; p.helmet = true;
  p.pos.set(1180, 0, -420);          // A 点入口
  p.yaw = 0;                         // 朝北（-Z）
  p.pitch = -0.02;
  p.giveWeapon('ak47'); p.deployTime = 0;
  p.money = 4200;

  // 敌人摆到长通道里
  const enemies = g.players.filter((x) => x.team !== p.team);
  const spots = [[1120, 0, -700], [1420, 0, -760], [1250, 0, -600]];
  enemies.forEach((e, i) => {
    e.alive = true; e.health = 100;
    if (spots[i]) e.pos.set(spots[i][0], 0, spots[i][2]);
    e.yaw = Math.PI;
    e.bot.target = null;
    e.bot.reactionAt = g.time + 99;
  });
  // 队友跟在身后
  const mates = g.players.filter((x) => x.team === p.team && x !== p);
  mates.forEach((m, i) => {
    m.alive = true; m.health = 100;
    m.pos.set(1180 + (i === 0 ? -110 : 110), 0, -300 + i * 40);
    m.bot.reactionAt = g.time + 99;
  });
  g.hud.announce('A 点 · 交火', 3);
});
await new Promise((r) => setTimeout(r, 1500));
await page.screenshot({ path: path.join(OUT, 'hero-long-a.png') });

// 再拍一张开枪瞬间
await page.evaluate(() => {
  const g = window.game;
  const p = g.localPlayer;
  p.nextFire = 0;
  p.tryFire();
  p.fireHeld = true;
});
await new Promise((r) => setTimeout(r, 120));
await page.screenshot({ path: path.join(OUT, 'hero-shoot.png') });
await browser.close();
console.log('done');
