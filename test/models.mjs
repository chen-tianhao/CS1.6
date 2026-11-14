// 模型审视脚本：把角色摆到镜头前、逐把武器截图，用于人工核对
import puppeteer from 'puppeteer-core';
import path from 'node:path';
import fs from 'node:fs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const OUT = path.resolve('shots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--allow-file-access-from-files', '--use-gl=angle', '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader', '--window-size=1280,800', '--mute-audio'],
  defaultViewport: { width: 1280, height: 800 },
});

const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));

const url = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');
await page.goto(url, { waitUntil: 'load', timeout: 60000 });
await new Promise((r) => setTimeout(r, 2500));

await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 1500));

// 冻结 AI，隐藏 HUD，把角色排成一排
await page.evaluate(() => {
  const g = window.game;
  document.getElementById('hud').style.display = 'none';
  g.settings.fov = 46;
  g.camera.fov = 46;
  g.camera.updateProjectionMatrix();
  g.players.forEach((p) => { p.bot = null; p.fireHeld = false; });

  const cts = g.players.filter((p) => p.team === 'CT');
  cts.forEach((p, i) => {
    p.pos.set(-70 + i * 70, 0, 0);
    p.yaw = 0;
    p.alive = true;
    p.health = 100;
    p.duckAmount = 0;
    p.syncMesh();
  });

  const lp = g.localPlayer;
  lp.pos.set(0, 0, -235);
  lp.yaw = Math.PI;
  lp.pitch = -0.03;
  lp.alive = true;
  lp.syncMesh();
});

await new Promise((r) => setTimeout(r, 700));
await page.screenshot({ path: path.join(OUT, 'mdl-characters.png') });

// 侧面：让角色转身 90°，玩家位置不动
await page.evaluate(() => {
  const g = window.game;
  g.players.filter((p) => p.team === 'CT').forEach((p) => {
    p.yaw = Math.PI / 2;
    p.syncMesh();
  });
});
await new Promise((r) => setTimeout(r, 500));
await page.screenshot({ path: path.join(OUT, 'mdl-characters-side.png') });

// 逐把武器（第一人称）
const WEAPONS = ['ak47', 'm4a1', 'awp', 'deagle', 'mp5navy', 'knife'];
for (const wid of WEAPONS) {
  await page.evaluate((id) => {
    const g = window.game;
    const lp = g.localPlayer;
    lp.money = 99999;
    lp.slots.primary = null;
    lp.slots.secondary = null;
    if (id === 'knife') {
      lp.curSlot = 'melee';
    } else if (id === 'deagle') {
      g.botBuy(lp, id);
      lp.curSlot = 'secondary';
    } else {
      g.botBuy(lp, id);
      lp.curSlot = 'primary';
    }
    lp.deployTime = 0;
  }, wid);
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT, `mdl-w-${wid}.png`) });

  // 匕首额外截一张挥砍中途的帧
  if (wid === 'knife') {
    await page.evaluate(() => { window.game.localPlayer.swingT = 0.78; });
    await new Promise((r) => setTimeout(r, 70));
    await page.screenshot({ path: path.join(OUT, 'mdl-w-knife-swing.png') });
  }
}

console.log('ERRORS:', errors.length ? errors : 'none');
await browser.close();
