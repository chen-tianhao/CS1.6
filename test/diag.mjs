import puppeteer from 'puppeteer-core';
import path from 'node:path';

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
await new Promise((r) => setTimeout(r, 3500));

const diag = await page.evaluate(() => {
  const g = window.game;
  g.paused = true;
  g.camera.position.set(0, 2800, 400);
  g.camera.rotation.set(-Math.PI / 2, 0, 0);
  g.camera.fov = 70; g.camera.updateProjectionMatrix();
  g.viewModel.root.visible = false;
  const sky = g.scene.children.find((o) => o.material && o.material.side === 2 && o.renderOrder === -10000);
  return {
    floorAt: g.map.isFloorAt(0, 400),
    skyFound: !!sky,
    children: g.scene.children.length,
    bigPlanes: g.scene.children.filter((o) => o.geometry && o.geometry.type === 'PlaneGeometry').map((o) => ({
      pos: o.position.toArray().map((v) => Math.round(v)),
      size: o.geometry.parameters,
      mat: o.material.type,
      transparent: o.material.transparent,
      map: !!o.material.map,
      rot: +o.rotation.x.toFixed(2),
    })),
  };
});
console.log(JSON.stringify(diag, null, 1));
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: 'shots/diag-initial.png' });

// 隐藏天空
await page.evaluate(() => {
  const g = window.game;
  const sky = g.scene.children.find((o) => o.material && o.material.side === 2 && o.renderOrder === -10000);
  if (sky) sky.visible = false;
  g.scene.background = new (window.THREE ? window.THREE.Color : Object)(0xff00ff);
});
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: 'shots/diag-nosky.png' });
await browser.close();
