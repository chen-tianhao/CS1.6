import puppeteer from 'puppeteer-core';
import path from 'node:path';
import fs from 'node:fs';

const OUT = path.resolve('shots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--allow-file-access-from-files', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--mute-audio'],
  defaultViewport: { width: 1280, height: 800 },
});
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('PAGEERROR:', e.message));
const fp = path.resolve('index.html').split(path.sep).join('/');
await page.goto('file:///' + fp, { waitUntil: 'load' });
await new Promise((r) => setTimeout(r, 2000));
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 4000));

const poses = [
  { x: 8, y: -7, z: -34, s: 0.75 },
  { x: 7, y: -6, z: -40, s: 0.8 },
  { x: 10, y: -9, z: -30, s: 0.6 },
];
for (let i = 0; i < poses.length; i++) {
  await page.evaluate((pose) => {
    const g = window.game;
    g.vmPose = pose;
    g.viewModel.update(0.016, g.localPlayer);
  }, poses[i]);
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUT, `pose-${i}.png`) });
}
await browser.close();
console.log('done');
