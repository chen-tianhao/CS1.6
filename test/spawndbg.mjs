import puppeteer from 'puppeteer-core';
import path from 'node:path';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--allow-file-access-from-files', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'],
  defaultViewport: { width: 1000, height: 700 },
});
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('PAGEERROR:', e.message));
const fp = path.resolve('index.html').split(path.sep).join('/');
await page.goto('file:///' + fp, { waitUntil: 'load' });
await new Promise((r) => setTimeout(r, 1500));
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 2500));

const info = await page.evaluate(() => {
  const g = window.game;
  const p = g.localPlayer;
  const near = g.map.colliders
    .filter((b) => {
      const cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2;
      return Math.hypot(cx - p.pos.x, cz - p.pos.z) < 500 && b.y1 > 200;
    })
    .map((b) => ({ x: [b.x0, b.x1], y: [b.y0, b.y1], z: [b.z0, b.z1] }));
  return {
    pos: p.pos.toArray().map(Math.round),
    yaw: +p.yaw.toFixed(2),
    tall: near,
    spawns: g.map.spawns.T,
  };
});
console.log(JSON.stringify(info, null, 1));
await browser.close();
