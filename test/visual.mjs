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
await new Promise((r) => setTimeout(r, 1800));
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 4200));

async function shoot(name) {
  await new Promise((r) => setTimeout(r, 700));
  await page.screenshot({ path: path.join(OUT, name + '.png') });
}

// 各武器视图模型
for (const id of ['ak47', 'm4a1', 'awp', 'deagle', 'knife']) {
  await page.evaluate((wid) => {
    const g = window.game;
    const p = g.localPlayer;
    if (wid === 'knife') p.switchSlot('melee');
    else { p.giveWeapon(wid); p.deployTime = 0; }
    p.deployTime = 0;
  }, id);
  await shoot('vm-' + id);
}

// 开镜
await page.evaluate(() => {
  const g = window.game;
  const p = g.localPlayer;
  p.giveWeapon('awp');
  p.deployTime = 0;
  p.toggleZoom();
});
await shoot('vm-awp-scope');

// 关闭开镜，转向上方看远景
await page.evaluate(() => {
  const g = window.game;
  g.localPlayer.zoom = 0;
  g.localPlayer.pitch = 0.18;
});
await shoot('view-skyline');

// 俯视图检查地图布局
await page.evaluate(() => {
  const g = window.game;
  g.paused = true;
  g.camera.position.set(0, 2800, 400);
  g.camera.rotation.set(-Math.PI / 2, 0, 0);
  g.camera.fov = 70;
  g.camera.updateProjectionMatrix();
  g.viewModel.root.visible = false;
});
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: path.join(OUT, 'map-topdown.png') });

await browser.close();
console.log('done');
