// ============================================================
//  test/run.mjs — 带断言的回归测试（npm test）
//
//  和旧的 test/*.mjs 不同：这里每条都是"断言 + 退出码"，
//  失败会打印期望/实际并以非 0 退出，可以直接挂 CI。
//
//  依赖本机 Chrome。可用 CHROME_PATH 覆盖路径。
// ============================================================
import puppeteer from 'puppeteer-core';
import path from 'node:path';
import fs from 'node:fs';

const CHROME = process.env.CHROME_PATH
  || 'C:/Program Files/Google/Chrome/Application/chrome.exe';

let passed = 0;
const failures = [];
function ok(name, cond, detail) {
  if (cond) { passed += 1; console.log(`  ok   ${name}`); }
  else { failures.push({ name, detail }); console.log(`  FAIL ${name}  ${detail ?? ''}`); }
}
function eq(name, actual, expected) {
  ok(name, JSON.stringify(actual) === JSON.stringify(expected), `期望 ${JSON.stringify(expected)}，实际 ${JSON.stringify(actual)}`);
}
function near(name, actual, expected, tol) {
  ok(name, Math.abs(actual - expected) <= tol, `期望 ${expected}±${tol}，实际 ${actual}`);
}
function section(t) { console.log(`\n── ${t}`); }

if (!fs.existsSync(CHROME)) {
  console.error(`找不到 Chrome：${CHROME}\n用 CHROME_PATH 环境变量指定浏览器路径。`);
  process.exit(2);
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--allow-file-access-from-files', '--use-gl=angle', '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader', '--mute-audio'],
  defaultViewport: { width: 1280, height: 720 },
});
const page = await browser.newPage();
const pageErrors = [];
page.on('pageerror', (e) => pageErrors.push(e.message));
page.on('console', (m) => { if (m.type() === 'error') pageErrors.push(m.text()); });

const url = 'file:///' + path.resolve('index.html').split(path.sep).join('/');
await page.goto(url, { waitUntil: 'load', timeout: 60000 });
await page.waitForFunction(() => window.game && window.game.map, { timeout: 60000 });
await page.click('#btn-start');
await new Promise((r) => setTimeout(r, 1200));

// 让局面安静下来：敌人全灭、回合停在 idle，方便做确定性测量
await page.evaluate(() => {
  const g = window.game, p = g.localPlayer;
  g.round.phase = 'idle';
  for (const x of g.players) if (x !== p) x.alive = false;
  p.alive = true; p.health = 100;
});

// ---------------------------------------------------------------- 地图
section('地图构建');
const mapInfo = await page.evaluate(() => {
  const m = window.game.map;
  return {
    colliders: m.colliders.length,
    withMat: m.colliders.filter((b) => !!b.mat).length,
    propTop: m.propTop.filter((v) => v > 0).length,
    ceilings: m.ceilingZones.length,
    ladders: m.ladders.length,
  };
});
ok('碰撞体已生成', mapInfo.colliders > 100, `实际 ${mapInfo.colliders}`);
eq('每个碰撞体都带面材', mapInfo.withMat, mapInfo.colliders);
ok('propTop 已填充', mapInfo.propTop > 0, `实际 ${mapInfo.propTop}`);
eq('隧道数量', mapInfo.ceilings, 3);
eq('梯子数量', mapInfo.ladders, 1);

// ---------------------------------------------------------------- 物理
section('跳跃与跳蹲');
const jump = await page.evaluate(() => {
  const g = window.game, p = g.localPlayer;
  const run = (start, duck) => {
    p.alive = true; p.health = 100;
    p.pos.set(start[0], start[1], start[2]);
    p.vel.set(0, 0, -240);
    p.onGround = true; p.groundY = start[1];
    p.yaw = 0; p.pitch = 0; p.jumpHeld = false;
    let maxY = p.pos.y;
    for (let i = 0; i < 80; i++) {
      p.update(1 / 64, { forward: 1, side: 0, jump: i < 6, duck, walk: false });
      maxY = Math.max(maxY, p.pos.y);
    }
    return { y: +p.pos.y.toFixed(1), maxY: +maxY.toFixed(1) };
  };
  return {
    // A 点：32 箱 (1100..1200 / -630..-530)，64 箱 (1090..1210 / -760..-640)
    stand32: run([1150, 0, -440], false),     // 站立跳 → 32
    stand64: run([1450, 0, -690], false),     // 站立跳 → 64（应失败）
    duck64: run([1450, 0, -690], true),       // 跳蹲 → 64（应成功）
  };
});
eq('站立跳能上 32 台阶箱', jump.stand32.y, 32);
ok('站立跳上不了 64 架点箱', jump.stand64.y === 0, `实际 y=${jump.stand64.y}`);
eq('跳蹲能上 64 架点箱', jump.duck64.y, 64);

section('梯子');
const ladder = await page.evaluate(() => {
  const g = window.game, p = g.localPlayer;
  p.alive = true;
  p.pos.set(925, 0, 750); p.vel.set(0, 0, 0);
  p.onGround = true; p.yaw = 0; p.jumpHeld = false;
  for (let i = 0; i < 200; i++) {
    p.update(1 / 64, { forward: 1, side: 0, jump: false, duck: false, walk: false });
  }
  return { y: +p.pos.y.toFixed(0), onLadder: p.onLadder };
});
ok('按前进能爬上梯子', ladder.y > 100, `实际 y=${ladder.y}`);
ok('梯子上方仍在攀爬区内', ladder.onLadder === true, `onLadder=${ladder.onLadder}`);

// ---------------------------------------------------------------- 弹道
section('固定弹道');
const recoil = await page.evaluate(() => {
  const g = window.game, p = g.localPlayer;
  g.round.phase = 'live'; g.round.time = 100;
  g.settings.autoReload = false;
  p.alive = true;
  p.giveWeapon('ak47'); p.deployTime = 0; p.reloadEnd = 0;
  const w = p.weapon;
  const run = () => {
    p.punchPitch = 0; p.punchYaw = 0; p.shotCount = 0;
    w.ammo = 90; w.reserve = 100;
    const seq = [];
    for (let i = 0; i < 6; i++) {
      p.nextFire = 0; p.tryFire();
      seq.push([+p.punchPitch.toFixed(2), +p.punchYaw.toFixed(2)]);
    }
    return seq;
  };
  const a = run(), b = run();
  return { a, b, same: JSON.stringify(a) === JSON.stringify(b) };
});
ok('两次扫射弹道完全一致', recoil.same);
ok('第一发上抬 = def.kick', Math.abs(recoil.a[0][0] - 2.2) < 0.001, `实际 ${recoil.a[0][0]}`);
ok('中段向右压', recoil.a[4][1] < recoil.a[0][1], `yaw ${recoil.a[0][1]} → ${recoil.a[4][1]}`);

// ---------------------------------------------------------------- 伤害
section('护甲结算');
const armor = await page.evaluate(() => {
  const g = window.game;
  const v = g.players.find((x) => x.isBot);
  const probe = (id, group, helmet) => {
    v.alive = true; v.health = 100; v.armor = 100; v.helmet = helmet;
    const dealt = v.takeDamage(100, null, group, id);
    return { dealt, armorLeft: +v.armor.toFixed(1) };
  };
  return {
    ak: probe('ak47', 'chest', false),
    m4: probe('m4a1', 'chest', false),
    awp: probe('awp', 'chest', false),
    headNoHelmet: probe('ak47', 'head', false),
    headHelmet: probe('ak47', 'head', true),
  };
});
near('AK 打甲', armor.ak.dealt, 78, 1);
near('M4 打甲（pen 0.70）', armor.m4.dealt, 70, 1);
near('AWP 打甲（pen 0.975）', armor.awp.dealt, 98, 1);
eq('无头盔爆头无视护甲', armor.headNoHelmet.dealt, 100);
near('有头盔爆头会被甲吸收', armor.headHelmet.dealt, 78, 1);

// ---------------------------------------------------------------- 回合
section('回合与经济');
const roundInfo = await page.evaluate(() => {
  const g = window.game;
  g.round.scoreCT = 7; g.round.scoreT = 3;
  const before = [g.round.scoreCT, g.round.scoreT];
  g.round.halftime();
  const after = [g.round.scoreCT, g.round.scoreT];
  const t = g.players.find((x) => x.team === 'T');
  t.money = 800;
  g.round.lossStreak.T = 4;
  g.round.scoreCT = 0; g.round.scoreT = 0;
  g.round.phase = 'live';
  g.round.endRound('CT', 'elim');
  return { before, after, lossDelta: t.money - 800 };
});
eq('半场比分不变', roundInfo.after, roundInfo.before);
eq('第 5 连败奖金', roundInfo.lossDelta, 3400);

// ---------------------------------------------------------------- 界面
section('界面');
const ui = await page.evaluate(() => {
  const scope = document.getElementById('scope-overlay');
  return {
    scopeBg: getComputedStyle(scope).backgroundColor,
    wicon: !!document.getElementById('wicon'),
    kbList: !!document.getElementById('kb-list'),
  };
});
eq('开镜层不再铺满黑色', ui.scopeBg, 'rgba(0, 0, 0, 0)');
ok('武器图标画布存在', ui.wicon);
ok('改键面板存在', ui.kbList);

const buy = await page.evaluate(() => {
  const g = window.game, p = g.localPlayer;
  g.round.phase = 'freeze'; g.round.time = 18;
  p.alive = true; p.team = 'T'; p.money = 16000;
  p.pos.set(0, 0, 1550);
  g.hud.buyCat = 'shotguns';
  g.hud.toggleBuy(true);
  const items = (document.getElementById('buy-items').dataset.items || '').split(',');
  g.hud.toggleBuy(false);
  const cats = document.querySelectorAll('#buy-cats .buy-cat').length;
  return { items, cats };
});
ok('购买菜单出现霰弹枪分类', buy.items.includes('xm1014'), JSON.stringify(buy.items));
eq('购买分类数量', buy.cats, 8);

// ---------------------------------------------------------------- 暂停
section('暂停与购买菜单');

// 判断"世界有没有在跑"用 game.time（只会单调递增），不要用 round.time ——
// 后者会在回合切换时被重置，断言会假失败。
async function worldClock() {
  return page.evaluate(() => ({
    t: window.game.time,
    paused: window.game.paused,
    menuOpen: window.game.pauseMenuOpen,
    buyOpen: window.game.hud.buyOpen,
    overlay: !document.getElementById('pause').classList.contains('hidden'),
  }));
}
async function waitClockAdvances(ms = 4000) {
  const a = await worldClock();
  const started = Date.now();
  while (Date.now() - started < ms) {
    await new Promise((r) => setTimeout(r, 100));
    const b = await worldClock();
    if (b.t > a.t + 0.001) return { advanced: true, from: a.t, to: b.t };
  }
  return { advanced: false, from: a.t, to: (await worldClock()).t };
}

await page.evaluate(() => {
  const g = window.game;
  if (g.hud.buyOpen) g.hud.toggleBuy(false);
  g.round.phase = 'live';
});
await new Promise((r) => setTimeout(r, 600));   // 先确认世界本来在跑

await page.evaluate(() => window.game.pauseGame());
await new Promise((r) => setTimeout(r, 300));
const pausedA = await worldClock();
await new Promise((r) => setTimeout(r, 700));
const pausedB = await worldClock();

ok('Esc 暂停弹出遮罩', pausedA.menuOpen && pausedA.overlay,
  JSON.stringify({ menuOpen: pausedA.menuOpen, overlay: pausedA.overlay }));
ok('Esc 暂停冻结世界', pausedB.t === pausedA.t && pausedA.paused,
  JSON.stringify({ t0: pausedA.t, t1: pausedB.t, paused: pausedA.paused }));

await page.evaluate(() => window.game.resumeGame());
const resumeRun = await waitClockAdvances();
ok('再次 Esc 恢复并继续推进', resumeRun.advanced && !(await worldClock()).paused,
  JSON.stringify(resumeRun));

// 购买菜单：打开冻结、关闭恢复
await page.evaluate(() => {
  const g = window.game, p = g.localPlayer;
  g.round.phase = 'freeze'; g.round.time = 18;
  p.alive = true; p.team = 'T'; p.money = 16000; p.pos.set(0, 0, 1550);
  g.hud.toggleBuy(true);
});
await new Promise((r) => setTimeout(r, 300));
const buyA = await worldClock();
await new Promise((r) => setTimeout(r, 700));
const buyB = await worldClock();
ok('打开购买菜单冻结世界', buyB.t === buyA.t && buyA.paused && buyA.buyOpen,
  JSON.stringify({ t0: buyA.t, t1: buyB.t, paused: buyA.paused }));
ok('购买菜单不弹暂停遮罩', buyA.overlay === false);

await page.evaluate(() => window.game.hud.toggleBuy(false));
const buyRun = await waitClockAdvances();
const buyAfter = await worldClock();
ok('关闭购买菜单自动恢复', buyRun.advanced && !buyAfter.paused,
  JSON.stringify({ ...buyRun, paused: buyAfter.paused }));

// ---------------------------------------------------------------- 键位
section('可配键位');
const keys = await page.evaluate(() => {
  const g = window.game;
  const before = g.settings.keymap.buy;
  g.settings.keymap.buy = 'KeyV';
  const applied = g.km().buy;
  g.settings.keymap.buy = before;
  return { applied };
});
eq('改键生效', keys.applied, 'KeyV');

// ---------------------------------------------------------------- 收尾
section('运行时');
eq('无页面错误', pageErrors, []);

// 退出码只反映断言结果。
// browser.close() 在 Windows 上常被 taskkill 的 "no running instance" 噪音污染，
// 所以显式吞掉并强制结束进程。
try { await browser.close(); } catch { /* ignore */ }
try { browser.process()?.kill('SIGKILL'); } catch { /* ignore */ }

console.log(`\n${passed} 项通过，${failures.length} 项失败`);
if (failures.length) {
  for (const f of failures) console.log(`  ✗ ${f.name} ${f.detail ?? ''}`);
  process.exit(1);
}
process.exit(0);
