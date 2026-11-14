import puppeteer from 'puppeteer-core';
import path from 'node:path';
import fs from 'node:fs';

const OUT = path.resolve('shots');
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--allow-file-access-from-files', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'],
  defaultViewport: { width: 1280, height: 800 },
});
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('PAGEERROR:', e.message, '\n', e.stack));
const fp = path.resolve('index.html').split(path.sep).join('/');
await page.goto('file:///' + fp, { waitUntil: 'load' });
await new Promise((r) => setTimeout(r, 1500));
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 1200));

// 给足资金再测试购买
await page.evaluate(() => { window.game.localPlayer.money = 9000; });
// 购买菜单
await page.keyboard.press('KeyB');
await new Promise((r) => setTimeout(r, 500));
await page.screenshot({ path: path.join(OUT, 'ui-buy.png') });

const buyState = await page.evaluate(() => ({
  open: window.game.hud.buyOpen,
  money: window.game.localPlayer.money,
  items: [...document.querySelectorAll('.buy-item')].map((e) => e.textContent.trim().replace(/\s+/g, ' ')),
}));
console.log('BUY:', JSON.stringify(buyState, null, 1));

// 点击第一件步枪
const clicked = await page.evaluate(() => {
  const item = document.querySelector('.buy-item:not(.dis)');
  if (!item) return 'none';
  const k = item.dataset.k;
  item.click();
  const p = window.game.localPlayer;
  return { bought: k, money: p.money, primary: p.slots.primary ? p.slots.primary.id : null, ammo: p.slots.primary ? p.slots.primary.ammo : null };
});
console.log('CLICK BUY:', JSON.stringify(clicked));

// 选择装备分类买甲
await page.evaluate(() => {
  const cats = [...document.querySelectorAll('.buy-cat')];
  const gear = cats.find((c) => c.dataset.k === 'gear');
  if (gear) gear.click();
});
await new Promise((r) => setTimeout(r, 200));
await page.evaluate(() => {
  const item = document.querySelector('.buy-item:not(.dis)');
  if (item) item.click();
});
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: path.join(OUT, 'ui-buy-gear.png') });
const afterGear = await page.evaluate(() => {
  const p = window.game.localPlayer;
  return { money: p.money, armor: p.armor, helmet: p.helmet, primary: p.slots.primary && p.slots.primary.id };
});
console.log('AFTER GEAR:', JSON.stringify(afterGear));

// 关闭购买
await page.keyboard.press('KeyB');
await new Promise((r) => setTimeout(r, 400));

// 计分板
await page.keyboard.down('Tab');
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: path.join(OUT, 'ui-scoreboard.png') });
await page.keyboard.up('Tab');

// 制造一次击杀看 killfeed
await page.evaluate(() => {
  const g = window.game;
  const p = g.localPlayer;
  const enemy = g.players.find((x) => x.team !== p.team && x.alive);
  if (enemy) {
    enemy.alive = true; enemy.health = 20;
    g.round.onKill(enemy, p, 'ak47', true);
    enemy.alive = false;
  }
});
await new Promise((r) => setTimeout(r, 500));
await page.screenshot({ path: path.join(OUT, 'ui-killfeed.png') });

const kf = await page.evaluate(() => document.getElementById('killfeed').textContent.trim());
console.log('KILLFEED:', kf);

await browser.close();
