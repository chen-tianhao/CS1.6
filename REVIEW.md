# CS 1.6 Web 版 · 项目审查报告

> 审查方式：通读全部源码 + 重新构建校验 + 用 headless Chromium 以 `file://` 实际运行、截图、运行时探针量行为。

---

## 一、项目现状

**技术栈**：three.js 0.160 + esbuild 打包成 IIFE。无框架、无构建服务，双击 `index.html` 即可运行。

**体量**：源码 218 KB / 17 个模块；`assets/game.js` 1.09 MB（未压缩、未 minify）。
我重新执行 `npx esbuild src/main.js --bundle --format=iife --target=es2020`，产物 SHA256 与入库版本**完全一致** —— 说明构建可复现、源码与发布物同步，这点做得好。

**结构**（分层是清楚的）：

| 模块 | 职责 |
|---|---|
| `src/config.js` | 全部数值：物理、规则、武器、装备、地图常量 |
| `src/player.js` | GoldSrc 移动物理、视角、命中盒、武器持有 |
| `src/weapons.js` | 弹道射线、伤害结算 |
| `src/round.js` | 回合状态机、经济、C4 |
| `src/bots.js` | BOT 感知 / A* 寻路 / 交战 |
| `src/map.js` + `src/maps/*` | 纯数据地图 → 自动生成墙体/碰撞/AO/导航 |
| `src/textures.js` | 全程序化 Canvas 贴图 |
| `src/models.js` | 程序化角色与武器几何 |
| `src/viewmodel.js` | 第一人称武器姿态与动画 |
| `src/fx.js` | 特效池 + 投掷物 |
| `src/audio.js` | WebAudio 实时合成音效 |
| `src/hud.js` | HUD / 雷达 / 购买 / 计分板 |

**明确做得好的地方：**

1. **GoldSrc 移动物理参数基本是对的** —— gravity 800、maxSpeed 250、accelerate 10、airaccelerate 10、空中 wishspeed 夹到 30、friction 4、stopspeed 75、跳跃初速 268、碰撞体 16×16×72、眼高 64/28。这是绝大多数"CS 复刻"最容易做错的一块，这里是对的。
2. **地图是纯数据驱动** —— `areas/props/sites/spawns` 进去，墙体、碰撞体、A* 导航格、AO、雷达底图自动推导。换地图成本极低。
3. **fx 做了对象池 + 固定灯光数量**，避免 three 因灯光数量变化重新编译 shader。这是有经验的优化。
4. **音频有完整信号链设计**（压缩器 + 卷积混响 + HRTF + 距离低通 + 分层合成），比多数网页游戏讲究。
5. **数值贴近 1.6** —— AK 只给 T、M4 只给 CT、AWP 击杀奖励 100、刀 1500、MP5 600、购买分类 1–6 的编号习惯。

---

## 二、必须先修的 Bug（P0）

> **状态：以下 9 项已全部修复并逐项回归验证（2026-11-14）。**
> 本节保留原始问题描述作为记录；修复内容见文末「附录 B · P0 修复记录」。

### 1. 开镜后全屏纯黑 🔴

[src/style.css:58](src/style.css#L58)：

```css
#scope-overlay { position: fixed; inset: 0; ...; background: #000; }
```

父层是纯黑，子层 `.scope-ring` 的 `box-shadow: 0 0 0 200vmax #000` 本来是想"用阴影涂黑圆外、留出圆内的透明洞"，但圆内透明露出的是父层的黑 —— 于是整个 viewport 全黑。

**AWP / Scout / AUG / SG552 一开镜 = 黑屏。** 项目自带的 `shots/vm-awp-scope.png` 只有 4.7 KB（纯色图），就是这个 bug 的证据，一直没被注意到。

修法：删掉父层 `background`，挖洞完全交给 `.scope-ring`；或用单层 `radial-gradient` 实现。

### 2. BOT 的安包/拆包进度条串到玩家 HUD 🔴

[src/round.js:204-239](src/round.js#L204-L239) 的 `updateObjectives()` 遍历**所有玩家（含 BOT）**，直接调用 `game.hud.setProgress()`。HUD 只有一个进度条，于是：

- 玩家站在出生点不动，屏幕中央也会冒出"正在安放 C4"（已截图复现）
- 两个 BOT 同时动作时进度条会来回闪

修法：进度条只跟 `game.localPlayer` 绑定；BOT 的安包/拆包不要进 HUD。

### 3. 垂直方向没有碰撞：站不上任何箱子 🔴

[src/player.js:285-323](src/player.js#L285-L323) 的 `integrate()` 只有"地面 = y 0"和水平 AABB 推出；落地判定写死 `pos.y <= 0`。

运行时实测：把玩家放到 120 高的木箱正上方，40 帧后 `y` 回落到 0 —— 直接穿过去。

后果：

- CS 1.6 最核心的「跳箱子 / 垫人 / 上高点架点」全部消失
- `jumpVel 268` 只能跳约 45 单位，比 100 高的箱子还低
- [src/config.js:19](src/config.js#L19) 的 `stepHeight: 18` 是死参数

修法：collider 增加"可站立顶面"语义；`integrate` 里做脚下地面高度采样（取最高可站面）；把 `stepHeight` 用起来。

### 4. 半场把比分的阵营对调了 🔴

[src/round.js:163-164](src/round.js#L163-L164)：

```js
const tmp = this.scoreCT; this.scoreCT = this.scoreT; this.scoreT = tmp;
```

比分应该跟着**阵营**走，玩家换边，比分不换。现在半场后屏幕上 CT/T 的数字互换，等于把 1.6 的比分逻辑做反了。

### 5. 连败奖金封顶算错 🟠

[src/round.js:118-120](src/round.js#L118-L120) + [src/config.js:44-46](src/config.js#L44-L46)：

```js
const streak = this.lossStreak[p.team] = Math.min(4, this.lossStreak[p.team] + 1);
reward += Math.min(RULES.lossMax, RULES.lossBase + (streak - 1) * RULES.lossStep);
```

`streak` 最大 4 → `1400 + 3×500 = 2900`。1.6 是五档 1400 / 1900 / 2400 / 2900 / 3400，`lossMax: 3400` **永远拿不到**。把 `Math.min(4, …)` 改成 `Math.min(5, …)`。

### 6. 护甲穿透系数定义了却没用 🔴

[src/player.js:559-562](src/player.js#L559-L562)：

```js
if (this.armor > 0 && group !== 'leg') {
  const pen = 0.72;          // ← 写死
  d *= pen;
```

而 [src/config.js:76-137](src/config.js#L76-L137) 里每把枪都认真配了 `pen`（AK 0.775、M4 0.77、AWP 0.9、Deagle 0.6…），**全代码没有任何地方读 `def.pen`**。

结果：所有枪打甲伤害一模一样，AK/M4 打有甲目标的手感差异消失。

### 7. 子弹穿过队友 🟠

[src/weapons.js:20](src/weapons.js#L20)：

```js
if (p.team === shooter.team) continue;
```

直接跳过队友命中盒。1.6 里队友是实体、会挡子弹（友伤关 ≠ 子弹穿人）。

实测：队友站在中间，射线仍然命中了后面的敌人。

### 8. 回合横幅用 setTimeout 关 🟠

[src/hud.js:362](src/hud.js#L362) 用 `setTimeout` 隐藏横幅。暂停 / 切后台 / 重开时横幅会卡在屏幕上（我截到一张"反恐精英获胜 · 时间耗尽"压在购买菜单后面）。应该走游戏内 `dt` 计时。

### 9. 冻结时间计时器不动 🟡

[src/hud.js:130](src/hud.js#L130)：

```js
const t = r.phase === 'freeze' ? RULES.roundTime : Math.max(0, r.time);
```

冻结期间固定显示 `1:55`。1.6 显示的是 freezetime 倒计时（6→0）。

---

## 三、画质：离 1.6 的差距

> **方向先明确**：1.6 的观感来自「烘焙光 + 强明暗对比 + 低分辨率贴图的高频细节」，**不是**来自现代后处理。项目现在没有后处理（这点是对的），缺的恰好是 1.6 最核心的那件东西 —— lightmap。

### 1. 没有烘焙光照，全是平光 ⭐ 最高优先级

[src/map.js:91-128](src/map.js#L91-L128) 只有 `HemisphereLight` + 2 个 `DirectionalLight`，所有墙面地面共用 `MeshLambertMaterial`。

结果：同一堵墙的几个面亮度几乎一样，没有"太阳从一侧打过来"的方向感。1.6 的 dust 之所以有味道，就是**每面墙有独立 lightmap**，暗角、光斑、门口的光带都是烘出来的。

**建议**：现有 `_applyAO` / `_aoFactor`（[src/map.js:184-241](src/map.js#L184-L241)）已经是逐顶点采样的框架，把它从"灰度"升级成"伪 lightmap 颜色"：
- 逐顶点算 `太阳可见性(法线·光向) × 天光占比`，写进顶点 RGB（而不是灰度）
- 成本几乎不变，但方向感立刻出来

### 2. 隧道/天花板是黑的，从外面看是悬空的黑色板子 ⭐

[src/map.js:451-464](src/map.js#L451-L464)：天花板材质 `color: 0x6f6c66` + Lambert + 朝下法线 → 半球光给的是很暗的地面色，实际渲染接近纯黑。

实测截图：
- 在隧道里抬头，上方一片全黑，走进去什么都看不见
- 在 T 出生点朝北看，天上挂着一块黑色斜板（就是隧道顶）

1.6 的隧道是"暗但看得见"，而且有灯。

**建议**：给 ceiling 区间的空间加一个顶点色下限（约 0.45），并加几盏顶灯 / 灯带贴图。

### 3. 地面出现横向条带 / 掠射角糊成一片 ⭐

[src/map.js:243-269](src/map.js#L243-L269)：逐格 `PlaneGeometry(100,100)` 合并，**顶点不焊接**，每格独立算 AO → 每格一个梯度，拼接处出现规则条带。贴图只有 256²、UV 每格重复，远处 mipmap 一压就成一片糊。

**建议**：地板改成整块大平面（或按区域合并），UV 走世界坐标，不要逐格 AO。

### 4. 贴图分辨率与变化不足

[src/textures.js](src/textures.js) 全部是 128–256² 的 Canvas 程序化贴图。方向对（fBm + 砖缝 + 水渍 + 颗粒），但：

- 分辨率偏低
- **整张地图只用了一种砖墙**（`sandWall`），所有墙一模一样
- 远景建筑用的 `concrete` 放大到 220 UV 后，随机色斑变成彩色噪点 —— 截图里远景高楼上有明显的粉/绿/紫色块

**建议**：至少 3–4 种墙面变体（砖 / 抹灰 / 石砌 / 木），提到 512²；远景建筑单独做材质（去掉高饱和色斑 + 加强雾）。

### 5. 第一人称武器位置/比例不对，且看不到手 ⭐

[src/viewmodel.js:31](src/viewmodel.js#L31)：

```js
this.pose = { x: 4.2, y: -6.8, z: -33, s: 0.72 };
```

相机 FOV 68。在 `z = -33` 处可见半高只有 22 单位、半宽约 40 单位 → 枪的水平位置只偏右 **10%**、垂直只低 **30%**。而 1.6 的 viewmodel 大约在屏幕右侧 30%、下方 25%。

结果就是截图里那把"糊在屏幕正中偏下、占掉 45% 屏高"的 AK。

另外 [src/models.js:297-302](src/models.js#L297-L302) 的 `glovedHand()` 做出来的手基本被枪身挡住（截图里完全看不到手/前臂）。**"看得到手"是 1.6 viewmodel 辨识度的一部分。**

AWP 尤其糟：画面里就是一个黑色长方体（`W.black` 把镜筒和枪托都刷黑了），镜桥/枪管辨识度全丢。

**建议**：根节点挪到 `x≈14, y≈-9, z≈-30`，整体再缩 ~15%；手部前移到护木下方并放大；AWP 单独调材质（镜筒用深灰金属 + 玻璃，别全黑）。

### 6. 角色只有一张很淡的圆形贴地阴影

[src/player.js:601-612](src/player.js#L601-L612) 的 blob 阴影缩放到 48 单位、`opacity 0.5`。运行时确认它每帧都在（`visible: true`、`scale: 48`），但在浅色沙地上 30% 黑几乎看不出来 —— 角色像是"贴"在地上而不是"站"在地上。

1.6 的角色是靠 lightmap 里的接触阴影贴在地面上的。

**建议**：改小、改黑、加硬边衰减，至少让人看出接触关系。

### 7. 天空 / 远景

`makeSkyTexture()`（[src/textures.js:453-486](src/textures.js#L453-L486)）做了云层，但实际看起来是纯蓝渐变，云几乎看不见。远景 44 栋楼在半径 3150–4050，`fog 1800–5000` 太浅，边缘生硬、没有地平线雾。

### 8. 关于后处理：要克制

1.6 **没有** bloom / SSAO / 景深。想更像 1.6，要优先做"烘焙感"而不是"现代感"：

- ✅ 可以做：极轻的对比 + 轻微色偏（用 CSS `filter` 最省事，几乎零成本），gain 控制在 1.05–1.1
- ❌ 不要加：bloom / SSAO / 景深 / 体积光 —— 每一项都会让你离 1.6 更远

---

## 四、音效：离 1.6 的差距

现状是**全部 WebAudio 实时合成**：四层（爆裂 / 枪身 / 胸腔 / 机械）+ 压缩器 + 卷积混响 + HRTF + 距离低通。设计思路是对的，但有几个结构性问题。

### 1. 混响给太多了：1.6 的枪声是"干、硬、有短尾"

[src/audio.js:25](src/audio.js#L25) `OUTDOOR_WET = 0.17`，IR 长度 1.25 s（[src/audio.js:39](src/audio.js#L39)）。每一声枪响都被糊上一层空间尾巴。

1.6 的实际听感：近处**极干、极响**，尾音不到 0.4 s。

**建议**：wet 降到 0.06–0.10，IR 缩到 0.5–0.7 s。

### 2. 每个声音都新建节点链，没有池化

[src/audio.js:159-205](src/audio.js#L159-L205)：每声枪响 `new` 5–6 个节点（BufferSource / Biquad / Gain / Panner），**HRTF Panner 尤其贵**。5 个 BOT 同时扫射就是每帧几十个节点。

注意：`fx.js` 全做了池化，音频没做 —— 同一个项目里标准不一致。

**建议**：预建固定数量的 voice 通道（比如 24 条），复用 Gain/Biquad/Panner，只换参数。

### 3. 缺少 1.6 的关键音效（这些是"听起来像不像"的决定项）

| 缺失 | 影响 |
|---|---|
| **换弹分枪种** | `playReload()`（[src/audio.js:291](src/audio.js#L291)）是通用三段 click，所有枪一样。1.6 每把枪换弹声完全不同 |
| **拔枪/收枪（deploy）** | 完全没有。切枪时那一声是 1.6 手感的一部分 |
| **开镜/退镜** | 没有（1.6 有 zoom in/out 音效） |
| **命中分甲/肉** | `playHit()` 只有 headshot 与否，打甲和打肉没区别 |
| **弹着点分材质** | 没有 impact 音（沙地 / 砖 / 金属 / 木） |
| **脚步分材质** | [src/player.js:201](src/player.js#L201) 恒传 `onSand=true` |
| **死亡音 / C4 语音提示 / 手雷弹地 / 拆弹成功** | 全缺 |
| **闪光弹聋感** | 只有 2.6 kHz 耳鸣（[src/audio.js:342-359](src/audio.js#L342-L359)），没有 1.6 那种全频段衰减 + 低频压制 |

**优先级**：换弹分枪种 → 弹着点分材质 → 拔枪/开镜 → 脚步分材质 → 命中分甲/肉。

### 4. 没有"声音被墙挡住"

现在只有距离低通 + 混响，没有遮挡判定。**建议**：射线加一个 LOS 判断，被墙挡住的声源额外多压 6–10 dB 高频。成本极低（BOT 的 LOS 结果可以复用）。

### 5. 静步（Shift）应该没有脚步声 🔴

[src/player.js:197](src/player.js#L197)：

```js
if (this.onGround && hspeed > 90) { ...playFootstep... }
```

Shift 走 = `250 × 0.52 = 130 > 90` → **静步照样有脚步声**（只是变快）。蹲下 = 85 < 90 才静音。

这是 1.6 潜行体系的地基，必须改：`walk` 时直接不播，或音量 ×0.15。

---

## 五、操作 / 手感：离 1.6 的差距

### 1. 后坐力是随机的 —— 压枪学不会 🔴⭐

[src/player.js:681-700](src/player.js#L681-L700) 的 `recoilPattern()` 里**全是 `Math.random()`**。

1.6 的 AK / M4 是**固定弹道**（前几发直上、中段右偏、后段左偏），玩家可以背下来往反方向压。随机弹道 = 这个游戏最核心的技巧体系直接消失。

**建议**：AK / M4 / MP5 改成从 1.6 弹道表取点的固定序列 + 很小的抖动。

### 2. 缺少蹲跳 / 梯子

- crouch-jump（跳的瞬间蹲下增加高度、上箱子）不存在（而且因为没有垂直碰撞也用不上）
- [src/config.js:28](src/config.js#L28) `maxLadderSpeed: 200` 是死参数，地图里没有梯子。1.6 的 ladders 是核心地形元素

### 3. 移动参数基本对，这块是目前最像的部分 ✅

`airWishSpeed 30` + `airAccel 10` 与 1.6 的 `sv_airaccelerate` 语义一致，连跳/急停的根源是对的。

### 4. 灵敏度映射语义不对齐

[src/main.js:219](src/main.js#L219)：

```js
const sens = this.settings.sensitivity * 0.0022;   // rad / count
```

1.6 默认 `sensitivity 3` + `m_yaw 0.022` → `0.066°/count`。这里 `sens=1.0` 就是 `0.126°/count`，约 **1.9 倍**。

**建议**：改成 `yaw += 0.022 * sensitivity`（度），默认值设 3 —— 和 1.6 的配置语义一致，玩家迁移过来不用重新适应。

### 5. 手雷没有拔销 / 计时

[src/player.js:529-543](src/player.js#L529-L543) 的 `throwGrenade()` 只有"扔"一个动作。1.6 的 HE 可以按住（prime）、打空爆、闪光可以提前引爆 —— 这是很有辨识度的操作。

### 6. 没有"走过去自动捡枪"

`pickUp()`（[src/player.js:545](src/player.js#L545)）存在但**没有任何调用点**。1.6 是走上去自动捡，尸体旁换枪是最常见的操作。

### 7. 观战太弱

死后只能左键在队友间循环（[src/main.js:528-533](src/main.js#L528-L533)），没有自由视角、没有切敌人第一视角。1.6 死后可以看所有人、可以自由飞。

### 8. 键位写死

[src/main.js:334-377](src/main.js#L334-L377) 全部硬编码 WASD / 空格 / Shift / Ctrl / R / B / E / 1-4。1.6 玩家几乎都改过键。

### 9. 没有手电筒

1.6 有 flashlight（F 键），在暗处是关键道具 —— 正好和"隧道全黑"的现状配套。

---

## 六、内容与原版的差距（缺失清单）

### 武器：现有 11 把 / 1.6 有 25+

**缺**：FAMAS、Galil、MAC-10、TMP、UMP45、XM1014、M3、M249、Nova、双枪 Elite、Five-SeveN、P228、Tec-9。

**且现有武器没有"半自动/全自动切换"** —— Glock 18、FAMAS、SG552 在 1.6 里都能切连发模式。

### 装备

缺：夜视仪、手电。闪光/烟雾/HE/拆弹器/护甲基本齐 ✅

### 规则

- 缺**加时赛（overtime）**
- 缺**人质图（cs_ maps）** 玩法
- `mp_freezetime` 写死 3 秒（[src/config.js:33](src/config.js#L33)），1.6 默认 6
- 缺团队存活/全歼奖励等经济细节

### HUD / UI

- 武器是**文字**不是图标（1.6 的 HUD 是武器名 + 图标）
- **购买菜单不是 1.6 的 VGUI 样式** —— 现在是 660px 网页列表面板。想"向原版靠近"，这是最容易被一眼认出来的一个
- 雷达是整图 + 静态底图；1.6 是半透明、只显示附近、会旋转
- 没有 radio 菜单（z/x/c 快捷指令）、没有语音提示

---

## 七、工程与性能

### 1. 每帧重建 DOM ⭐ 最容易拿到的性能收益

- [src/hud.js:168](src/hud.js#L168) `gearRow.innerHTML = ...` **每帧**重新解析 HTML
- [src/hud.js:218](src/hud.js#L218) `renderAlive()` **每帧** `innerHTML`
- `update()` 里十几个 `textContent` 赋值

每一项都会触发 CSS 重算 / 回流。**建议**：做脏值比较（值变了才写），`innerHTML` 改成预建节点 + class 切换。

### 2. 每帧分配对象

- `player.hitboxes()` 每次调用 new 一个数组 + 4 个对象；`tracePlayers` 对每个玩家每颗子弹调用一次
- `fx.blocksLineOfSight()` 每次 new 2–3 个 `Vector3`，BOT 每帧调 N 次
- `bots.js` 里到处 `.clone()`

**建议**：模块级 scratch `Vector3` 复用；`hitboxes` 写进预分配数组。

### 3. 物理没有固定步长

[src/main.js:540](src/main.js#L540) `dt` 上限 0.05，物理直接用可变 `dt`。GoldSrc 是 1/64 s 定步长。

后果：连跳时机和加速手感**随帧率变化**；低帧率时每帧位移可达 12 单位（墙体厚 24，勉强不穿）。

**建议**：物理固定 1/64 步长 + 累加器插值。

### 4. A* 不是堆

[src/map.js:610-643](src/map.js#L610-L643)：open 集合用 `Map` 线性找最小 f + `guard 6000`。40×40 网格问题不大，但每个 BOT 每 2 秒跑一次就是浪费。换成二叉堆约 10 分钟工作量。

### 5. 内存泄漏

[src/fx.js:297-315](src/fx.js#L297-L315) 的 `smokeCloud()` 建一个 Group + 16 个 Sprite，过期清理时：

```js
if (o.material) { ... }   // Group 没有 material
```

→ 16 个 `SpriteMaterial` **永久泄漏**。多次扔烟雾会累积。

### 6. 未使用 / 死代码

| 位置 | 内容 |
|---|---|
| [src/config.js:19](src/config.js#L19) | `stepHeight: 18` 从未使用 |
| [src/config.js:28](src/config.js#L28) | `maxLadderSpeed` 从未使用 |
| [src/config.js:186-187](src/config.js#L186-L187) | `MAP_NAME` / `MAP_DISPLAY` 未导出使用 |
| [src/player.js:60](src/player.js#L60) | `assists` |
| [src/player.js:78](src/player.js#L78) | `triggerQueued` |
| [src/player.js:88](src/player.js#L88) | `spawnProtect` |
| [src/player.js:93](src/player.js#L93) | `muzzleLight` |
| [src/main.js:318-325](src/main.js#L318-L325) | 找 `#set-chcolor`，**`index.html` 里没有这个元素** → 准星自定义永远是死的 |
| [src/round.js:161](src/round.js#L161) | `p.bot.constructor = p.bot.constructor` 是一句废话 |
| 全项目 | `def.pen` 定义了但没被读（见 P0-6） |

### 7. 构建 / 测试

- bundle **1.09 MB 未 minify**。加 `--minify` 大约能到 400 KB（gzip 后 ~120 KB）
- [package.json](package.json) 只有 `build / watch / serve / shot`，**没有 test / lint / typecheck**
- 17 个 `test/*.mjs` 全是"跑一遍打日志 + 截图"的脚本，**没有断言**，不能 CI
- Chrome 路径写死 `C:/Program Files/Google/Chrome/Application/chrome.exe`
- `npm run serve` 依赖系统 `python`
- **没有 README**（只有 `.gitignore` 里一段注释解释为什么把 bundle 入库）

### 8. 其它

- `window.game` 全局暴露（方便调试，但没有 dev/prod 区分）
- 没有 favicon / manifest / 加载进度（贴图同步生成，首屏会卡一下）

---

## 八、建议的推进顺序

### P0 —— 修完才算"能正常玩"（半天到一天）

1. 开镜黑屏
2. 进度条串 HUD
3. 半场比分互换
4. 连败奖金封顶
5. **垂直碰撞**（能站箱子）— 工作量最大，但收益最高
6. 队友挡弹
7. `def.pen` 接入伤害计算
8. 回合横幅改游戏内计时
9. 冻结时间倒计时

### P1 —— 直接决定"像不像 1.6"（1–2 周）

1. **光照**：AO 升级成"伪 lightmap"（有方向、有颜色）；隧道加最低亮度 + 灯
2. **第一人称视角**：viewmodel 位置 / 比例 / 手的可见性；AWP 等大枪单独调
3. **音效**：换弹分枪种、静步静音、弹着点分材质、拔枪 / 开镜、混响收敛到干声
4. **弹道**：AK / M4 改成固定弹道
5. **灵敏度**改成 1.6 的 `m_yaw × sensitivity` 语义

### P2 —— 让"玩法"齐

蹲跳 / 箱子 / 梯子、手雷拔销、自动捡枪、可配键位、手电、补武器（FAMAS / Galil / MAC-10 / XM1014 / M249 / 双枪）、半场加时

### P3 —— 观感与工程

购买菜单 VGUI 皮肤、雷达样式、HUD 图标、固定步长物理、DOM 脏值更新、A* 堆化、测试改断言 + CI、minify

---

## 九、附：本次验证记录

- ✅ 重新构建 bundle，SHA256 与入库版本一致（源码与发布物同步，构建可复现）
- ✅ headless Chromium 以 `file://` 打开，**无 console / page error**
- 📷 截图：菜单、A 点、T 出生点、隧道、开镜、天空、购买菜单、计分板
- 🔬 运行时探针：
  - 站上 120 高木箱 → 40 帧后 `y = 0`（垂直碰撞缺失）
  - 队友挡在中间 → 射线仍命中后方敌人（穿人）
  - 每帧阴影 `visible: true` / `scale: 48` → 但视觉上几乎不可见
  - 购买菜单 T 侧只列出 AK-47 / SG552（阵营限制正确 ✅）
- ⚠️ 项目自带的 `node test/*.mjs` 在本会话沙箱里跑不了（`spawn EPERM`，是沙箱禁止子进程管道，不是项目问题）

---

## 附录 B · P0 修复记录（2026-11-14）

| # | 问题 | 改动 | 验证结果 |
|---|---|---|---|
| 1 | 开镜全屏黑 | [src/style.css:58](src/style.css#L58) 去掉 `#scope-overlay` 的 `background:#000`，挖洞交还给 `.scope-ring` 的 box-shadow | 开镜后透过圆形视野能看到世界，圆外纯黑 |
| 2 | BOT 进度条串 HUD | [src/round.js](src/round.js#L207) `updateObjectives` 改为逐帧汇总 `bar`，只有 `p === localPlayer` 才写 HUD；每帧显式 `setProgress(null)` 防残留 | BOT 安包时进度条保持隐藏；玩家自己安包才显示；松手立刻消失 |
| 3 | 站不上箱子（无垂直碰撞） | 新增 [src/map.js](src/map.js#L64) `supportHeightAt()`；重写 [src/player.js](src/player.js#L276) `integrate()` 与 `resolveAxis()`：水平推出跳过 ≤ `stepHeight` 的可迈面，竖直按支撑面落地/跟随/转为下落；阴影改用 `groundY` | 从 200 高落到 120 木箱顶 → 停在 y=120 并 `onGround`；走出箱沿 → 逐级落到地面；水平仍被木箱正确挡住 |
| 4 | 半场比分对调 | [src/round.js](src/round.js#L152) 删除 swap，比分跟随阵营 | 7:3 过完半场仍是 7:3 |
| 5 | 连败奖金封顶 | [src/round.js](src/round.js#L118) `Math.min(4,…)` → `Math.min(5,…)` | 第 5 连败实得 $3400 |
| 6 | `def.pen` 未接入 | [src/player.js](src/player.js#L560) `takeDamage` 改用 CS 1.6 的护甲模型（按 `def.pen` 吸收、护甲见底反推、无头盔头部无视护甲） | 同样 100 基础伤害打满甲：AK 78 / M4 77 / AWP 90 / USP 50；无头盔爆头 100 且护甲不掉 |
| 7 | 子弹穿过队友 | [src/weapons.js](src/weapons.js#L15) `tracePlayers` 取消阵营过滤，命中结果带 `friendly`；`traceBullet` 与 `knifeAttack` 对友军只挡不结算 | 队友挡在中间时射线命中队友且 `friendly: true`，后面的敌人不再被打到 |
| 8 | 回合横幅用 setTimeout | [src/hud.js](src/hud.js#L366) 改为 `bannerTimer` + 游戏内 `dt`；新增 `hideBanner()`，`startGame` / `matchEnd` 显式处理 | 出现 → 1s 后仍在 → 累计 4s 后隐藏 |
| 9 | 冻结期计时器不动 | [src/hud.js](src/hud.js#L130) 冻结/交战都显示 `r.time` 倒计时，其余阶段归零 | 冻结 2.4s → `0:02`；0.4s → `0:00`；交战 97s → `1:37`；回合结束 → `0:00` |

顺带清理：`halftime()` 里那句 `p.bot.constructor = p.bot.constructor` 空操作删除；半场重建外观前先回收旧网格与贴地阴影（原来每半场会多留 6 份阴影对象）。

**遗留（不在本次 P0 范围）**

- 垂直碰撞现在是对的，但**地图里所有箱子都 ≥90 高**，而 1.6 的跳跃上限只有约 45（`jumpVel 268` / `gravity 800`）。所以"跳上箱子"这个动作仍不可用 —— 需要把若干掩体降到 32/64 高，或补跳蹲机制。
- `config.js` 里 `m4a1.pen = 0.77`，1.6 实际 ArmorRatio 是 0.70；AWP 配 0.9、实际 0.975。现在 `pen` 真的参与结算了，这两个值值得校准。

---

## 附录 C · 第二轮：掩体高度与护甲校准（2026-11-14）

### C1. 掩体归成 32 / 64 两档

[src/maps/de_outpost.js](src/maps/de_outpost.js#L51) 的 26 个木箱重新分级，依据是 GoldSrc 的实际移动能力：

| 高度 | 用途 | 依据 |
|---|---|---|
| 32 | 台阶箱 | 跳跃高度 45（268²/2·800）> 32，从地面可直接跳上；但 32 > `stepHeight` 18，**不能走上去，必须跳** |
| 64 | 架点箱 | 45 < 64，地面跳不上去，只能踩 32 再跳（32 + 45 = 77） |
| ≥110 | 纯掩体 / 远景 | 不用想着上去 |

分布：11 个 32 / 12 个 64 / 3 个高层；A 点、B 点、T 出生点各有一组「32 紧邻 64」的阶梯。

`_markPropTiles` 只看碰撞体的 x/z 范围，没改 `s`，所以 **BOT 的导航格完全没变**，colliders 数量仍是 314。

固定 1/64 步长实测：

| 场景 | 结果 |
|---|---|
| 地面满速起跳 → 32 | ✅ 站上 y=32 |
| 地面满速起跳 → 64 | ✅ 正确撞停（apex 42.8 < 64），停在箱面前 16 单位 |
| 站在 32 上满速起跳 → 64 | ✅ 落到 y=64 并站住 |
| 站在 32 上原地起跳 → 64 | ✅ 靠空中微调也能上（符合 1.6 的空中加速手感） |
| 站在 64 上继续前进 | ✅ 走出边缘后正常坠落 |

### C2. 护甲穿透校准

| 武器 | 旧 `pen` | 新 `pen` | 100 基础伤害打满甲的实测结果 |
|---|---|---|---|
| M4A1 | 0.77 | **0.70** | 70（原 77） |
| AWP | 0.90 | **0.975** | 98（原 90） |
| AK-47 | 0.775 | 0.775 | 78 |
| USP-45 | 0.50 | 0.50 | 50 |
| Desert Eagle | 0.60 | 0.60 | 60 |

### C3. 顺带修掉的一个真实 bug

[src/player.js](src/player.js#L339) `resolveAxis` 原来用**速度方向**决定把角色往哪一侧推出。角色一旦已经和碰撞体重叠（出生点压在道具上、或单帧位移过大），就会被推到**另一侧** —— 等于瞬间穿过箱子。

实测复现：玩家从 `z=-690` 一帧被送到 `z=-544`，穿过了一个厚 120 的木箱。

改成推出到**最近的一侧**后，正常贴墙滑动行为不变（每帧位移远小于半个体宽），重叠情形不再穿模。

> 这一项不在原 P0 清单里，是这一轮测试时撞出来的。


