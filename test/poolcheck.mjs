// 池化验证：连续触发特效后，场景对象与灯光数量必须保持恒定
import puppeteer from 'puppeteer-core';
import path from 'node:path';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--allow-file-access-from-files', '--use-gl=angle', '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader', '--window-size=1280,800', '--mute-audio'],
  defaultViewport: { width: 1280, height: 800 },
});

const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));

const url = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');
await page.goto(url, { waitUntil: 'load', timeout: 60000 });
await new Promise((r) => setTimeout(r, 2500));
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 1500));

const snap = () => page.evaluate(() => {
  const s = window.game.scene;
  const count = (t) => s.children.filter((o) => o.type === t).length;
  return {
    children: s.children.length,
    pointLights: count('PointLight'),
    meshes: count('Mesh'),
    sprites: count('Sprite'),
    lines: count('Line'),
  };
});

const before = await snap();

// 连续触发 150 次枪口特效 + 200 次弹着点
await page.evaluate(() => {
  const g = window.game;
  const base = g.localPlayer.pos.clone();
  for (let i = 0; i < 150; i++) {
    g.fx.muzzle(g.localPlayer, {});
    g.fx.impact(base.clone().set(base.x + (i % 20) * 8, 12, base.z + Math.floor(i / 20) * 8), { x: 0, y: 1, z: 0 });
  }
  g.fx.tracer(base.clone(), base.clone().set(base.x + 400, 40, base.z));
});
await new Promise((r) => setTimeout(r, 400));

const after = await snap();

// 弹孔可见数量（上限应为 64）
const decals = await page.evaluate(() => {
  const g = window.game;
  return g.fx._decals.filter((m) => m.visible).length;
});

console.log('BEFORE:', JSON.stringify(before));
console.log('AFTER :', JSON.stringify(after));
console.log('DECALS:', decals, '(上限 64)');
console.log('GROWTH:', JSON.stringify({
  children: after.children - before.children,
  pointLights: after.pointLights - before.pointLights,
  meshes: after.meshes - before.meshes,
  sprites: after.sprites - before.sprites,
}));
console.log('ERRORS:', errors.length ? errors : 'none');

await browser.close();
