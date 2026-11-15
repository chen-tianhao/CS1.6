// ============================================================
//  map.js — de_outpost（dust 风格原创布局）
//  房间/通道矩形 → 栅格化 → 自动生成封闭墙体 → 碰撞体 / 导航格 / 雷达
// ============================================================
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { TILE, GRID, WORLD_HALF } from './config.js';
import { getTextures, makeSkyTexture } from './textures.js';

const WALL_H = 440;
const WALL_T = 24;

// 太阳方向（指向太阳），与 _buildAtmosphere 里那盏 DirectionalLight 保持一致：
// (-900, 1500, 700) 归一化。顶点烘焙和实时光必须同向，否则会出现"两个太阳"。
const SUN_DIR = { x: -0.478, y: 0.796, z: 0.372 };
const SUN_GAIN = 0.45;
const HEMI_GAIN = 0.20;
const SHADE_BASE = 0.62;

export class GameMap {
  // def 来自 src/maps/*.js：纯数据，渲染与碰撞全部由此推导
  constructor(scene, def) {
    if (!def) throw new Error('GameMap: 缺少地图定义，见 src/maps/index.js');
    this.scene = scene;
    this.def = def;
    this.tex = getTextures();
    this.colliders = [];       // {x0,x1,y0,y1,z0,z1}
    this.solids = [];          // 视觉网格
    this.ceilingZones = [];
    this.grid = new Uint8Array(GRID * GRID); // 0 = 实心, 1 = 地面
    this.blocked = new Uint8Array(GRID * GRID); // 1 = 道具占位（不可通行）
    this.propTop = new Float32Array(GRID * GRID); // 每格上道具的最高顶面（烘焙阴影用）
    this.spawns = { T: [], CT: [] };
    this.sites = def.sites;
    this.ladders = [];         // 攀爬区 {x0,x1,z0,z1,y0,y1}
    this.label = def.label || def.id || '';
    this._build();
  }

  // ---------- 坐标换算 ----------
  tileToWorld(cx, cz) {
    return {
      x: -WORLD_HALF + (cx + 0.5) * TILE,
      z: -WORLD_HALF + (cz + 0.5) * TILE,
    };
  }
  worldToTile(x, z) {
    return {
      cx: Math.floor((x + WORLD_HALF) / TILE),
      cz: Math.floor((z + WORLD_HALF) / TILE),
    };
  }
  inBounds(cx, cz) { return cx >= 0 && cz >= 0 && cx < GRID && cz < GRID; }
  isFloorTile(cx, cz) {
    if (!this.inBounds(cx, cz)) return false;
    return this.grid[cz * GRID + cx] === 1;
  }
  isWalkable(cx, cz) {
    if (!this.inBounds(cx, cz)) return false;
    const i = cz * GRID + cx;
    return this.grid[i] === 1 && this.blocked[i] === 0;
  }
  isFloorAt(x, z) {
    const { cx, cz } = this.worldToTile(x, z);
    return this.isFloorTile(cx, cz);
  }
  isWalkableAt(x, z) {
    const { cx, cz } = this.worldToTile(x, z);
    return this.isWalkable(cx, cz);
  }
  floorHeightAt() { return 0; }

  // (x, z) 处玩家脚下可站立的最高平面高度（不考虑 maxY 以上的面）。
  // maxY 由调用方决定含义：
  //   · 站在地面上时传 pos.y + stepHeight —— 于是不高于台阶的沿儿能直接迈上去
  //   · 空中时传 pos.y —— 只有已经低于脚面的面才会接住玩家（不会被"吸"上去）
  // 墙体 / 石墩的顶面是 WALL_H，永远进不来。
  supportHeightAt(x, z, r, maxY) {
    let best = 0;                       // 地图地面恒为 0
    let mat = 'sand';
    const cols = this.colliders;
    for (let i = 0; i < cols.length; i++) {
      const b = cols[i];
      if (b.y1 > maxY || b.y1 <= best) continue;
      if (x + r <= b.x0 || x - r >= b.x1) continue;
      if (z + r <= b.z0 || z - r >= b.z1) continue;
      best = b.y1;
      mat = b.mat || 'stone';
    }
    return { y: best, mat };
  }

  // ---------- 现代渲染：世界材质统一到 PBR ----------
  // roughness 接近 1、metalness 0 → 观感仍然是漫反射，和原来的 Lambert 差不多，
  // 但它会响应 scene.environment，于是世界和 PBR 武器处在同一套光照模型里，
  // 不会再出现"武器像贴纸浮在平涂场景上"的错配。
  _pbr(map, opts = {}) {
    return new THREE.MeshStandardMaterial({
      map,
      roughness: 0.94,
      metalness: 0.0,
      // 环境光只给一点点：世界本身已经有烘焙的顶点光照 + 半球光，
      // IBL 给多了会把方向性整个冲平，墙面变成一片均匀的亮。
      envMapIntensity: 0.11,
      ...opts,
    });
  }

  // ---------- 构建 ----------
  _build() {
    this._rasterize();
    this._buildAtmosphere();
    // 道具要先建：烘焙光照需要知道每格上箱子/集装箱的实际高度（propTop），
    // 否则 32 高的木箱会投出一条 140 高的假阴影。
    this._buildProps();
    this._markPropTiles();
    this._buildFloor();
    this._buildWalls();
    this._buildSpawns();
    this._buildCeilings();
    this._buildLadders();
    this._buildLabels();
  }

  // 站在 (x, z, y) 时是否挂在梯子上
  ladderAt(x, z, y) {
    for (let i = 0; i < this.ladders.length; i++) {
      const L = this.ladders[i];
      if (x < L.x0 || x > L.x1 || z < L.z0 || z > L.z1) continue;
      if (y < (L.y0 || 0) - 20 || y > (L.y1 || 400)) continue;
      return L;
    }
    return null;
  }

  _buildLadders() {
    this.ladders = this.def.ladders || [];
    if (!this.ladders.length) return;
    const mat = this._pbr(this.tex.metalRed, { color: 0xb8b0a4, roughness: 0.52, metalness: 0.62 });
    for (const L of this.ladders) {
      const y0 = L.y0 || 0;
      const y1 = L.y1 || WALL_H;
      const h = y1 - y0;
      const midY = (y0 + y1) / 2;
      const cx = (L.x0 + L.x1) / 2;
      const cz = (L.z0 + L.z1) / 2;
      const alongZ = (L.face || 'x+')[0] === 'x';   // 梯面垂直 X 轴 → 横杆沿 Z 铺
      const span = alongZ ? (L.z1 - L.z0) : (L.x1 - L.x0);
      const half = Math.max(10, span / 2 - 10);
      const g = new THREE.Group();

      const railGeo = new THREE.BoxGeometry(6, h, 6);
      for (const s of [-1, 1]) {
        const rail = new THREE.Mesh(railGeo, mat);
        if (alongZ) rail.position.set(cx, midY, cz + s * half);
        else rail.position.set(cx + s * half, midY, cz);
        g.add(rail);
      }
      const rungGeo = alongZ
        ? new THREE.BoxGeometry(5, 5, half * 2)
        : new THREE.BoxGeometry(half * 2, 5, 5);
      const rungs = Math.max(2, Math.floor(h / 40));
      for (let i = 1; i < rungs; i++) {
        const r = new THREE.Mesh(rungGeo, mat);
        r.position.set(cx, y0 + (h * i) / rungs, cz);
        g.add(r);
      }
      this.scene.add(g);
    }
  }

  _rasterize() {
    for (const a of this.def.areas) {
      const c0 = Math.floor((a.x0 + WORLD_HALF) / TILE);
      const c1 = Math.floor((a.x1 + WORLD_HALF) / TILE);
      const r0 = Math.floor((a.z0 + WORLD_HALF) / TILE);
      const r1 = Math.floor((a.z1 + WORLD_HALF) / TILE);
      for (let r = r0; r < r1; r++) {
        for (let c = c0; c < c1; c++) {
          if (this.inBounds(c, r)) this.grid[r * GRID + c] = 1;
        }
      }
    }
  }

  _buildAtmosphere() {
    const scene = this.scene;
    scene.fog = new THREE.Fog(0xd8c9ab, 1800, 5000);
    scene.background = new THREE.Color(0x9fb6cc);

    // 顶点色里已经烘了一层太阳（受光 ≈1.05 / 背光 ≈0.72），
    // 所以实时光要相应压低，否则受光面会双重叠加过曝。
    const hemi = new THREE.HemisphereLight(0xcfe2f2, 0x9c8055, 0.55);
    scene.add(hemi);

    const sun = new THREE.DirectionalLight(0xfff3d6, 1.22);
    sun.position.set(-900, 1500, 700);
    scene.add(sun);

    const fill = new THREE.DirectionalLight(0x8fa8c8, 0.22);
    fill.position.set(1200, 600, -1400);
    scene.add(fill);

    // 天空：直接用 equirect 背景贴图（比球形天穹稳定，不受远裁剪影响）
    const skyTex = makeSkyTexture();
    skyTex.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = skyTex;

    // 远景天际线：环形低模建筑（纯装饰，无碰撞）
    const bmat = this._pbr(this.tex.concrete, { envMapIntensity: 0.26 });
    const bmat2 = this._pbr(this.tex.sand, { envMapIntensity: 0.26 });
    for (let i = 0; i < 44; i++) {
      const ang = (i / 44) * Math.PI * 2 + Math.random() * 0.05;
      const r = 3150 + Math.random() * 900;
      const w = 220 + Math.random() * 380;
      const h = 380 + Math.random() * 780;
      const d = 220 + Math.random() * 380;
      const g = this._boxGeo(w, h, d, 220);
      const m = new THREE.Mesh(g, Math.random() < 0.5 ? bmat : bmat2);
      m.position.set(Math.cos(ang) * r, h / 2 - 60, Math.sin(ang) * r);
      m.rotation.y = ang + Math.random() * 0.4;
      scene.add(m);
    }
  }

  // 生成带世界比例 UV 的 BoxGeometry
  _boxGeo(w, h, d, uvScale = 128) {
    const g = new THREE.BoxGeometry(w, h, d);
    const uv = g.attributes.uv;
    const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
    for (let f = 0; f < 6; f++) {
      const [du, dv] = dims[f];
      for (let i = 0; i < 4; i++) {
        const k = f * 4 + i;
        uv.setXY(k, (uv.getX(k) * du) / uvScale, (uv.getY(k) * dv) / uvScale);
      }
    }
    return g;
  }

  _addSolid(geo, mat, x, y, z, collide = true, rotY = 0, surf = 'stone') {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    if (rotY) m.rotation.y = rotY;
    this.scene.add(m);
    this.solids.push(m);
    if (collide) {
      this.colliders.push({
        x0: x - geo.parameters.width / 2, x1: x + geo.parameters.width / 2,
        y0: y - geo.parameters.height / 2, y1: y + geo.parameters.height / 2,
        z0: z - geo.parameters.depth / 2, z1: z + geo.parameters.depth / 2,
        mat: surf,
      });
    }
    return m;
  }

  // ---------- 顶点级环境光遮蔽 ----------
  // GoldSrc 的纵深来自每面墙独立的 lightmap；这里用栅格近似等价信息：
  // 逐顶点采样周围空间是否被墙体/道具/顶盖占据，把结果写进顶点色。
  // 成本是 O(顶点数)，纯查表，不需要射线。
  _openAt(x, y, z) {
    if (y > WALL_H - 12) return true;   // 高过墙顶，无遮挡
    if (y < 0) return false;            // 地面以下，被地面挡住
    const { cx, cz } = this.worldToTile(x, z);
    if (!this.inBounds(cx, cz)) return false;
    const i = cz * GRID + cx;
    if (this.grid[i] !== 1) return false;              // 实心墙
    // 道具只挡到它的实际高度。原来一刀切写成 y < 140，
    // 结果是 32 高的木箱也会在地面上投出一条 140 高的假阴影。
    if (this.blocked[i] === 1 && y < this.propTop[i] - 1) return false;
    if (y > WALL_H - 46 && this._hasCeiling(x, z)) return false;
    return true;
  }

  _hasCeiling(x, z) {
    for (const zn of (this.def.ceilings || [])) {
      if (x >= zn.x0 && x <= zn.x1 && z >= zn.z0 && z <= zn.z1) return true;
    }
    return false;
  }

  _aoFactor(x, y, z, nx, ny, nz) {
    let occ = 0, total = 0;
    const sample = (dx, dy, dz, r, w = 1) => {
      total += w;
      if (!this._openAt(x + dx * r, y + dy * r, z + dz * r)) occ += w / (1 + r / 70);
    };
    const horiz = Math.abs(ny) > 0.7;
    if (horiz) {
      // 顶盖下方的地面：整体压暗，表达"见不到天"
      if (ny > 0 && this._hasCeiling(x, z)) {
        for (let k = 0; k < 3; k++) { occ += 1.15; total += 1; }
      }
      // 环形采样，抓墙体与道具在脚下的落影。
      // 半径取小一点，否则每个格子都会整片变暗，形成规则条纹。
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        const dx = Math.cos(a), dz = Math.sin(a);
        for (let k = 1; k <= 3; k++) sample(dx, 0, dz, k * 34);
      }
    } else {
      // 垂直面：沿切线方向与竖直方向采样，跳过法线方向，
      // 否则墙面会被自己所在的那堵墙整片压暗。
      const len = Math.hypot(nx, nz) || 1;
      const ux = -nz / len, uz = nx / len;
      for (let k = 1; k <= 3; k++) {
        sample(ux, 0, uz, k * 42);
        sample(-ux, 0, -uz, k * 42);
        // 向上是天空光；向下代表被地面挡住的那半环境光，权重加倍
        sample(0, 1, 0, k * 42, 0.8);
        sample(0, -1, 0, k * 42, 2.2);
      }
    }
    const ratio = total > 0 ? occ / total : 0;
    // 地面用较弱的对比，避免砖块之间出现规则条纹；
    // 墙面需要更强的对比才有 GoldSrc 那种自上而下的光照梯度。
    const strength = horiz ? 1.35 : 1.9;
    // 下限保证暗部仍有细节，不压成黑块
    return Math.max(0.34, 1 - ratio * strength);
  }

  // 沿太阳方向做一次可见性步进：被挡住就是背光面。
  // 高过墙顶 / 走出地图都当作天空，否则贴边的墙会被自己的地图边界判成阴影。
  _sunVisible(x, y, z) {
    const d = SUN_DIR;
    for (let k = 1; k <= 7; k++) {
      const t = k * 46;
      const px = x + d.x * t, py = y + d.y * t, pz = z + d.z * t;
      if (py > WALL_H - 12) return 1;
      const { cx, cz } = this.worldToTile(px, pz);
      if (!this.inBounds(cx, cz)) return 1;
      if (!this._openAt(px, py, pz)) return 0;
    }
    return 1;
  }

  // 把「遮蔽 × 太阳可见性 × 半球权重」烘进顶点色 RGB。
  // 顶点色会乘在整个光照结果上，所以受光面 ≈1.2、背光面 ≈0.45、
  // 背光又蔽塞的角落再压一档 —— 这就是 1.6 那种"一面亮一面暗"的来路。
  _applyLighting(geo) {
    const pos = geo.attributes.position;
    const nor = geo.attributes.normal;
    if (!pos || !nor) return geo;
    const n = pos.count;
    const colors = new Float32Array(n * 3);
    const d = SUN_DIR;
    for (let i = 0; i < n; i++) {
      const vx = pos.getX(i), vy = pos.getY(i), vz = pos.getZ(i);
      const nx = nor.getX(i), ny = nor.getY(i), nz = nor.getZ(i);
      const occl = this._aoFactor(vx, vy, vz, nx, ny, nz);
      const facing = nx * d.x + ny * d.y + nz * d.z;
      let sun = 0;
      // 顶盖下（隧道里）永远见不到太阳
      if (facing > 0.02 && !(vy < WALL_H - 16 && this._hasCeiling(vx, vz))) {
        sun = facing * this._sunVisible(vx, vy, vz);
      }
      const hemi = 0.5 + 0.5 * ny;               // 1 = 朝天，0 = 朝地
      // 基准 0.62 → 受光面约 1.05、背光面约 0.72，再乘上遮蔽。
      // 平均值接近 1，所以整体曝光不变，变的是"明暗差"。
      const shade = SHADE_BASE + HEMI_GAIN * hemi + SUN_GAIN * sun;
      const k = Math.max(0.16, occl * shade);
      // 受光偏暖、背光偏冷 —— 色温差本身就是"有阳光"的线索
      colors[i * 3] = Math.min(1.45, k * (1 + 0.10 * sun));
      colors[i * 3 + 1] = Math.min(1.45, k);
      colors[i * 3 + 2] = Math.min(1.45, k * (1 - 0.15 * sun));
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }

  _buildFloor() {
    const geos = [];
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        if (this.grid[r * GRID + c] !== 1) continue;
        const { x, z } = this.tileToWorld(c, r);
        const g = new THREE.PlaneGeometry(TILE, TILE, 2, 2);
        g.rotateX(-Math.PI / 2);
        // UV 按世界尺寸铺贴
        const uv = g.attributes.uv;
        for (let i = 0; i < uv.count; i++) {
          uv.setXY(i, (uv.getX(i) * TILE) / 220, (uv.getY(i) * TILE) / 220);
        }
        g.translate(x, 0, z);
        geos.push(g);
      }
    }
    if (!geos.length) return;
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    this._applyLighting(merged);
    const mat = this._pbr(this.tex.floor, { vertexColors: true });
    const mesh = new THREE.Mesh(merged, mat);
    mesh.position.y = 0;
    this.scene.add(mesh);
    this.solids.push(mesh);
  }

  _buildWalls() {
    // 三种墙面按格里位置分桶：整张图只有一种砖墙会非常单调
    const buckets = [[], [], []];
    const t = WALL_T;
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        if (this.grid[r * GRID + c] !== 1) continue;
        const { x, z } = this.tileToWorld(c, r);
        const half = TILE / 2;
        const bucket = buckets[(c * 7 + r * 13) % 3];
        // 北 / 南 / 西 / 东
        const edges = [
          { dx: 0, dz: -1, nx: 0, nz: -1 },
          { dx: 0, dz: 1, nx: 0, nz: 1 },
          { dx: -1, dz: 0, nx: -1, nz: 0 },
          { dx: 1, dz: 0, nx: 1, nz: 0 },
        ];
        for (const e of edges) {
          if (this.isFloorTile(c + e.dx, r + e.dz)) continue;
          const h = WALL_H;
          let g;
          if (e.nx === 0) {
            g = this._boxGeo(TILE + t, h, t, 128);
            g.translate(x, h / 2, z + e.nz * (half + t / 2 - 2));
          } else {
            g = this._boxGeo(t, h, TILE + t, 128);
            g.translate(x + e.nx * (half + t / 2 - 2), h / 2, z);
          }
          bucket.push(g);
        }
      }
    }
    const wallTex = [this.tex.sand, this.tex.sand2, this.tex.sand3];
    for (let i = 0; i < buckets.length; i++) {
      const geos = buckets[i];
      if (!geos.length) continue;
      const merged = mergeGeometries(geos, false);
      geos.forEach((g) => g.dispose());
      this._applyLighting(merged);
      const mat = this._pbr(wallTex[i], { vertexColors: true });
      const mesh = new THREE.Mesh(merged, mat);
      this.scene.add(mesh);
      this.solids.push(mesh);
    }

    // 顶点级碰撞体：把整张墙网按格拆成 AABB（用于射线与玩家碰撞）
    // 用合并后的三角形做碰撞代价过高，这里用格网表达：
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        if (this.grid[r * GRID + c] !== 1) continue;
        const { x, z } = this.tileToWorld(c, r);
        const half = TILE / 2;
        const edges = [
          { dx: 0, dz: -1 }, { dx: 0, dz: 1 }, { dx: -1, dz: 0 }, { dx: 1, dz: 0 },
        ];
        for (const e of edges) {
          if (this.isFloorTile(c + e.dx, r + e.dz)) continue;
          if (e.dz !== 0) {
            this.colliders.push({
              x0: x - half, x1: x + half,
              y0: 0, y1: WALL_H,
              z0: z + e.dz * half, z1: z + e.dz * (half + WALL_T),
              mat: 'stone',
            });
          } else {
            this.colliders.push({
              x0: x + e.dx * half, x1: x + e.dx * (half + WALL_T),
              y0: 0, y1: WALL_H,
              z0: z - half, z1: z + half,
              mat: 'stone',
            });
          }
        }
      }
    }
  }

  _addTileBlocker(cx, cz, mat) {
    const { x, z } = this.tileToWorld(cx, cz);
    this._addSolid(this._boxGeo(TILE - 6, WALL_H, TILE - 6, 140), mat, x, WALL_H / 2, z, true, 0, 'stone');
    this.blocked[cz * GRID + cx] = 1;
    this.propTop[cz * GRID + cx] = WALL_H;
  }

  _prop(cx, cz, kind) {
    const { x, z } = this.tileToWorld(cx, cz);
    this.blocked[cz * GRID + cx] = 1;
    return { x, z };
  }

  _buildProps() {
    const mats = {
      crate: this._pbr(this.tex.crate, { roughness: 0.88 }),
      concrete: this._pbr(this.tex.concrete),
      metalRed: this._pbr(this.tex.metalRed, { roughness: 0.58, metalness: 0.55 }),
      metalBlue: this._pbr(this.tex.metalBlue, { roughness: 0.58, metalness: 0.55 }),
      metalGreen: this._pbr(this.tex.metalGreen, { roughness: 0.58, metalness: 0.55 }),
    };
    const pick = (name) => mats[name] || mats.concrete;
    // 弹着点/脚步要用的面材
    const surfOf = (name) => (name && name.indexOf('metal') === 0 ? 'metal' : 'stone');

    for (const p of this.def.props || []) {
      switch (p.t) {
        case 'crate': {
          const size = p.s ?? 100;
          const h = p.h ?? size;
          // 确定性微抖动：同一张地图每次生成的摆放角度一致
          const rot = p.rot ?? (((p.x * 13 + p.z * 7) % 100) / 1000 - 0.05);
          this._addSolid(this._boxGeo(size, h, size, 96), pick('crate'), p.x, h / 2, p.z, true, rot, 'wood');
          const top = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({
            color: 0x000000, transparent: true, opacity: 0.16, depthWrite: false,
          }));
          top.rotation.x = -Math.PI / 2;
          top.position.set(p.x, h + 0.6, p.z);
          this.scene.add(top);
          break;
        }
        case 'barrel': {
          const r = p.r ?? 30;
          const h = p.h ?? 96;
          const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 12), pick(p.mat || 'metalRed'));
          m.position.set(p.x, h / 2, p.z);
          this.scene.add(m);
          this.solids.push(m);
          this.colliders.push({ x0: p.x - r, x1: p.x + r, y0: 0, y1: h, z0: p.z - r, z1: p.z + r, mat: 'metal' });
          break;
        }
        case 'box': {
          const g = this._boxGeo(p.w, p.h, p.d, p.uv ?? 128);
          this._addSolid(g, pick(p.mat), p.x, p.y ?? p.h / 2, p.z, p.solid !== false, p.rot || 0, surfOf(p.mat));
          break;
        }
        case 'blocker':
          this._addTileBlocker(p.cx, p.cz, pick(p.mat));
          break;
        default:
          break;
      }
    }

    // 无碰撞装饰
    for (const d of this.def.decor || []) {
      if (d.kind === 'cylinder') {
        const m = new THREE.Mesh(new THREE.CylinderGeometry(d.r0, d.r1, d.h, 8), pick(d.mat));
        m.position.set(d.x, d.y, d.z);
        this.scene.add(m);
      }
    }
  }

  // 把地面道具占用的格子在导航栅格中标记为不可通行（防止 BOT 撞箱子）
  _markPropTiles() {
    for (const b of this.colliders) {
      if (b.y1 >= WALL_H - 1 || b.y0 > 40) continue;
      const w = b.x1 - b.x0, d = b.z1 - b.z0;
      if (w > 700 || d > 700) continue;
      const c0 = Math.floor((b.x0 + WORLD_HALF) / TILE);
      const c1 = Math.floor((b.x1 + WORLD_HALF) / TILE);
      const r0 = Math.floor((b.z0 + WORLD_HALF) / TILE);
      const r1 = Math.floor((b.z1 + WORLD_HALF) / TILE);
      for (let r = r0; r <= r1; r++) {
        for (let c = c0; c <= c1; c++) {
          if (!this.isFloorTile(c, r)) continue;
          const p = this.tileToWorld(c, r);
          const margin = 26;
          if (p.x > b.x0 - margin && p.x < b.x1 + margin && p.z > b.z0 - margin && p.z < b.z1 + margin) {
            const i = r * GRID + c;
            this.blocked[i] = 1;
            // 记录这一格上道具的实际最高点，烘焙阴影和遮挡采样都要用
            if (b.y1 > this.propTop[i]) this.propTop[i] = b.y1;
          }
        }
      }
    }
  }

  _buildSpawns() {
    for (const team of ['T', 'CT']) {
      const cfg = this.def.spawns && this.def.spawns[team];
      if (!cfg) continue;
      const n = cfg.count ?? 5;
      const phase = cfg.phase || 0;
      for (let i = 0; i < n; i++) {
        const ang = (i / n) * Math.PI * 2 + phase;
        this.spawns[team].push({
          x: cfg.x + Math.cos(ang) * (cfg.rx ?? 190),
          z: cfg.z + Math.sin(ang) * (cfg.rz ?? 110),
          yaw: cfg.yaw || 0,
        });
      }
    }
  }

  _buildCeilings() {
    // 隧道顶：朝下的法线只能拿到半球光里的"地面色"，纯 Lambert 会黑成一整块。
    // 所以底色提亮 + 加一点自发光，保证"暗但看得见"，再配一盏吊灯给光池。
    const mat = this._pbr(this.tex.concrete, {
      side: THREE.DoubleSide,
      color: 0xa39c90,
      emissive: 0x1b1916,
      envMapIntensity: 0.20,
    });
    const lampShadeMat = new THREE.MeshBasicMaterial({
      color: 0xffe0b0, transparent: true, opacity: 0.55, depthWrite: false,
      side: THREE.DoubleSide,
    });
    for (const zn of (this.def.ceilings || [])) {
      const w = zn.x1 - zn.x0, d = zn.z1 - zn.z0;
      const g = this._boxGeo(w, 30, d, 200);
      const m = new THREE.Mesh(g, mat);
      m.position.set((zn.x0 + zn.x1) / 2, WALL_H - 15, (zn.z0 + zn.z1) / 2);
      this.scene.add(m);
      this.ceilingZones.push(zn);

      // 每条隧道一盏吊灯（限制数量：点光源会抬高所有 Lambert 的逐片元成本）
      const lx = (zn.x0 + zn.x1) / 2;
      const lz = (zn.z0 + zn.z1) / 2;
      const lamp = new THREE.PointLight(0xffcb92, 0.85, 1100, 1.6);
      lamp.position.set(lx, WALL_H - 70, lz);
      this.scene.add(lamp);

      const shade = new THREE.Mesh(new THREE.PlaneGeometry(90, 90), lampShadeMat);
      shade.rotation.x = Math.PI / 2;
      shade.position.set(lx, WALL_H - 34, lz);
      this.scene.add(shade);
    }
  }

  _buildLabels() {
    const make = (letter, color) => {
      const c = document.createElement('canvas');
      c.width = c.height = 256;
      const x = c.getContext('2d');
      x.fillStyle = 'rgba(0,0,0,0)';
      x.fillRect(0, 0, 256, 256);
      x.font = 'bold 200px Impact, Arial Black, sans-serif';
      x.textAlign = 'center';
      x.textBaseline = 'middle';
      x.fillStyle = color;
      x.globalAlpha = 0.55;
      x.fillText(letter, 128, 138);
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      return t;
    };
    for (const key of Object.keys(this.sites)) {
      const s = this.sites[key];
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(420, 420),
        new THREE.MeshBasicMaterial({ map: make(key, '#e8dcc0'), transparent: true, depthWrite: false }),
      );
      m.rotation.x = -Math.PI / 2;
      m.position.set((s.x0 + s.x1) / 2, 0.8, (s.z0 + s.z1) / 2);
      this.scene.add(m);
    }
  }

  siteAt(x, z) {
    for (const key of Object.keys(this.sites)) {
      const s = this.sites[key];
      if (x >= s.x0 && x <= s.x1 && z >= s.z0 && z <= s.z1) return key;
    }
    return null;
  }

  // ---------- 射线 ----------
  // 返回 {dist, nx, ny, nz} 或 null
  raycast(origin, dir, maxDist = 8000) {
    let best = maxDist, hit = null;
    const arr = this.colliders;
    for (let i = 0; i < arr.length; i++) {
      const b = arr[i];
      // slab
      let tmin = 0, tmax = best;
      let nAxis = -1, nSign = 0;
      let ok = true;
      for (let a = 0; a < 3; a++) {
        const o = a === 0 ? origin.x : a === 1 ? origin.y : origin.z;
        const d = a === 0 ? dir.x : a === 1 ? dir.y : dir.z;
        const mn = a === 0 ? b.x0 : a === 1 ? b.y0 : b.z0;
        const mx = a === 0 ? b.x1 : a === 1 ? b.y1 : b.z1;
        if (Math.abs(d) < 1e-8) {
          if (o < mn || o > mx) { ok = false; break; }
        } else {
          let t1 = (mn - o) / d, t2 = (mx - o) / d;
          let sign = -1;
          if (t1 > t2) { const tmp = t1; t1 = t2; t2 = tmp; sign = 1; }
          if (t1 > tmin) { tmin = t1; nAxis = a; nSign = sign; }
          if (t2 < tmax) tmax = t2;
          if (tmin > tmax) { ok = false; break; }
        }
      }
      if (!ok) continue;
      if (tmin > 0 && tmin < best) {
        best = tmin;
        hit = {
          dist: tmin,
          nx: nAxis === 0 ? nSign : 0,
          ny: nAxis === 1 ? nSign : 0,
          nz: nAxis === 2 ? nSign : 0,
          mat: b.mat || 'stone',
        };
      }
    }

    // 地面：碰撞体里没有地板，单独做一次 y = 0 的平面求交。
    // 缺这一步的话，打在地上既没有弹孔也没有声音。
    if (dir.y < -1e-6) {
      const t = -origin.y / dir.y;
      if (t > 0 && t < best) {
        const px = origin.x + dir.x * t;
        const pz = origin.z + dir.z * t;
        if (this.isFloorAt(px, pz)) {
          hit = { dist: t, nx: 0, ny: 1, nz: 0, mat: 'sand' };
        }
      }
    }
    return hit;
  }

  lineOfSight(a, b) {
    const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (dist < 1) return true;
    const dir = { x: dx / dist, y: dy / dist, z: dz / dist };
    const hit = this.raycast(a, dir, dist - 4);
    return !hit;
  }

  // ---------- 导航 A* ----------
  neighbors(cx, cz) {
    const out = [];
    const dirs = [
      [1, 0], [-1, 0], [0, 1], [0, -1],
      [1, 1], [1, -1], [-1, 1], [-1, -1],
    ];
    for (const [dx, dz] of dirs) {
      const nx = cx + dx, nz = cz + dz;
      if (!this.isWalkable(nx, nz)) continue;
      if (dx && dz && (!this.isWalkable(cx + dx, cz) || !this.isWalkable(cx, cz + dz))) continue;
      out.push({ cx: nx, cz: nz, cost: dx && dz ? 1.414 : 1 });
    }
    return out;
  }

  findPath(from, to) {
    const a = this.worldToTile(from.x, from.z);
    const b = this.worldToTile(to.x, to.z);
    if (!this.isWalkable(b.cx, b.cz)) {
      // 找最近可走格
      let best = null, bd = Infinity;
      for (let r = -3; r <= 3; r++) {
        for (let c = -3; c <= 3; c++) {
          if (!this.isWalkable(b.cx + c, b.cz + r)) continue;
          const d = c * c + r * r;
          if (d < bd) { bd = d; best = { cx: b.cx + c, cz: b.cz + r }; }
        }
      }
      if (!best) return null;
      b.cx = best.cx; b.cz = best.cz;
    }
    if (!this.isWalkable(a.cx, a.cz)) {
      let best = null, bd = Infinity;
      for (let r = -2; r <= 2; r++) {
        for (let c = -2; c <= 2; c++) {
          if (!this.isWalkable(a.cx + c, a.cz + r)) continue;
          const d = c * c + r * r;
          if (d < bd) { bd = d; best = { cx: a.cx + c, cz: a.cz + r }; }
        }
      }
      if (!best) return null;
      a.cx = best.cx; a.cz = best.cz;
    }

    const startKey = a.cz * GRID + a.cx;
    const goalKey = b.cz * GRID + b.cx;
    if (startKey === goalKey) return [];

    const gScore = new Map([[startKey, 0]]);
    const came = new Map();
    const closed = new Set();
    const h = (cx, cz) => Math.hypot(cx - b.cx, cz - b.cz);

    // 二叉堆：原来用 Map 线性找最小 f，每个节点都要扫一遍整个 open 集，
    // 40×40 网格还撑得住，但每个 BOT 每 2 秒跑一次就白烧 CPU。
    const heap = [];
    const push = (node) => {
      heap.push(node);
      let i = heap.length - 1;
      while (i > 0) {
        const par = (i - 1) >> 1;
        if (heap[par].f <= heap[i].f) break;
        const t = heap[par]; heap[par] = heap[i]; heap[i] = t;
        i = par;
      }
    };
    const pop = () => {
      const top = heap[0];
      const last = heap.pop();
      if (heap.length) {
        heap[0] = last;
        let i = 0;
        for (;;) {
          const l = i * 2 + 1, r = l + 1;
          let s = i;
          if (l < heap.length && heap[l].f < heap[s].f) s = l;
          if (r < heap.length && heap[r].f < heap[s].f) s = r;
          if (s === i) break;
          const t = heap[s]; heap[s] = heap[i]; heap[i] = t;
          i = s;
        }
      }
      return top;
    };

    push({ key: startKey, cx: a.cx, cz: a.cz, f: h(a.cx, a.cz) });

    let guard = 0;
    while (heap.length && guard++ < 8000) {
      const cur = pop();
      if (closed.has(cur.key)) continue;   // 堆里可能有同一个节点的旧副本
      closed.add(cur.key);
      if (cur.key === goalKey) {
        const path = [];
        let k = goalKey;
        while (k !== startKey) {
          path.push(this.tileToWorld(k % GRID, Math.floor(k / GRID)));
          k = came.get(k);
          if (k === undefined) break;
        }
        path.reverse();
        return path;
      }
      for (const nb of this.neighbors(cur.cx, cur.cz)) {
        const nk = nb.cz * GRID + nb.cx;
        if (closed.has(nk)) continue;
        const tentative = (gScore.get(cur.key) ?? 0) + nb.cost;
        if (tentative < (gScore.get(nk) ?? Infinity)) {
          came.set(nk, cur.key);
          gScore.set(nk, tentative);
          push({ key: nk, cx: nb.cx, cz: nb.cz, f: tentative + h(nb.cx, nb.cz) });
        }
      }
    }
    return null;
  }

  // 随机可走点
  randomWalkableNear(x, z, radius = 800) {
    for (let i = 0; i < 30; i++) {
      const ang = Math.random() * Math.PI * 2;
      const r = Math.random() * radius;
      const px = x + Math.cos(ang) * r, pz = z + Math.sin(ang) * r;
      if (this.isWalkableAt(px, pz)) return { x: px, z: pz };
    }
    return { x, z };
  }
}
