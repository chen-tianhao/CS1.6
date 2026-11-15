// ============================================================
//  viewmodel.js — 第一人称武器（独立场景渲染，避免穿墙与比例失真）
//  具体枪型几何见 models.js；这里只负责挂载、姿态与动画。
//
//  注意：模型几何体按 id 缓存在 models.js 里，切换武器时**不能** dispose，
//  否则切回来会拿到已销毁的 buffer。
// ============================================================
import * as THREE from 'three';
import { WEAPONS } from './config.js';
import { buildWeaponModel, getWeaponStyle } from './models.js';

// 各枪型的持枪姿态。
// 1.6 的第一人称武器压在屏幕右下角：枪身约在右侧 25~35%、下方 25%，
// 枪口朝画面中心偏上。原来的 (4.2, -6.8, -33) 几乎糊在正中，而且太近，
// 0.72 的缩放下木托会顶到镜头前，看起来像半截贴在脸上的枪。
const VM_POSE = {
  rifle: { x: 15.0, y: -8.0, z: -40, s: 0.62, ry: 0.30 },
  sniper: { x: 16.2, y: -8.4, z: -44, s: 0.64, ry: 0.30 },
  smg: { x: 14.6, y: -7.6, z: -37, s: 0.62, ry: 0.32 },
  pistol: { x: 12.4, y: -7.2, z: -31, s: 0.58, ry: 0.34 },
  // 匕首：靠 rx 把刀尖抬起来，和枪管一个朝向。
  // 以前这个角度是写死在模型里的（-0.32），和姿态系统的 yaw 叠在一起
  // 就把刀压成了"横着朝下"。
  melee: { x: 13.4, y: -7.6, z: -36, s: 0.60, ry: 0.30, rx: 0.26, rz: 0.10 },
  grenade: { x: 13.2, y: -8.8, z: -31, s: 0.60, ry: 0.32 },
};

// 个别枪按 id 覆写姿态。
// 双枪是两把手枪并排，整体重心比单枪低一截，按手枪姿态摆会掉出画面底部；
// 长枪（AWP / M249 / 霰弹）则要再往右下推一点，免得枪口顶到准心。
const VM_ID_POSE = {
  elite: { x: 11.6, y: -4.4, z: -28, s: 0.52, ry: 0.32 },
  awp: { x: 16.6, y: -8.6, z: -46, s: 0.64, ry: 0.28 },
  scout: { x: 16.4, y: -8.4, z: -44, s: 0.63, ry: 0.28 },
  m249: { x: 15.8, y: -8.6, z: -44, s: 0.64, ry: 0.28 },
  xm1014: { x: 15.2, y: -8.2, z: -40, s: 0.62, ry: 0.30 },
};

export class ViewModel {
  constructor(game) {
    this.game = game;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, 16 / 9, 1, 600);

    // 三点布光：主光偏暖、轮廓光偏冷、地面反弹补一点沙色。
    // 强度不能太高——浅色金属在 1.0 环境光 + 2.2 主光下会直接过曝成白色。
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.78));
    const key = new THREE.DirectionalLight(0xfff2d8, 1.5);
    key.position.set(-0.5, 1.3, 0.9);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x8fb0d8, 0.7);
    rim.position.set(1.4, 0.3, -1);
    this.scene.add(rim);
    const bounce = new THREE.PointLight(0xd8b070, 0.55, 200);
    bounce.position.set(0, -20, 10);
    this.scene.add(bounce);

    this.pose = { x: 4.2, y: -6.8, z: -33, s: 0.72 };   // 当前姿态（每帧被 VM_POSE 覆盖）
    this.root = new THREE.Group();
    this.root.position.set(this.pose.x, this.pose.y, this.pose.z);
    this.root.rotation.y = 0.16;
    this.root.scale.setScalar(this.pose.s);
    this.scene.add(this.root);

    this.weaponGroup = null;
    this.curId = null;
    this.kick = 0;
    this.swayX = 0;
    this.swayY = 0;
    this.bob = 0;
    this.rise = 1;
    this.reloadT = 0;
  }

  resize(aspect) {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  // 换风格后强制重建当前武器
  invalidate() { this.curId = null; }

  // PBR 金属必须有东西可反射，否则在只有平行光的场景里会变成死黑。
  // 环境贴图只挂给"第一人称场景" —— 世界场景保持原来的 Lambert 顶点烘焙。
  ensureEnv() {
    if (this.scene.environment) return;
    const bg = this.game && this.game.scene && this.game.scene.background;
    if (!bg || !bg.isTexture) return;
    try {
      const pmrem = new THREE.PMREMGenerator(this.game.renderer);
      const rt = pmrem.fromEquirectangular(bg);
      this.scene.environment = rt.texture;
      pmrem.dispose();
    } catch (e) { /* 环境反射是锦上添花，失败不影响可玩 */ }
  }

  setWeapon(id) {    if (id === this.curId) return;
    this.curId = id;
    if (this.weaponGroup) {
      this.root.remove(this.weaponGroup);
      this.weaponGroup = null;
    }
    if (!id || !WEAPONS[id]) return;
    const g = buildWeaponModel(id);
    this.weaponGroup = g;
    this.root.add(g);
  }

  update(dt, p) {
    if (!p) return;
    if (getWeaponStyle() === 'modern') this.ensureEnv();
    this.setWeapon(p.curSlot === 'melee' ? 'knife' : p.curSlot === 'grenade' ? null : (p.weapon ? p.weapon.id : null));
    this.root.visible = p.alive && p.zoom === 0 && p.curSlot !== 'grenade' && !!this.weaponGroup;
    if (!this.root.visible) return;

    const speed = Math.hypot(p.vel.x, p.vel.z);
    const moving = p.onGround && speed > 40;
    this.bob += dt * (moving ? speed * 0.055 : 1.4);
    const bobX = moving ? Math.sin(this.bob) * Math.min(1.8, speed * 0.007) : Math.sin(this.bob * 0.6) * 0.22;
    const bobY = moving ? Math.abs(Math.cos(this.bob)) * Math.min(1.4, speed * 0.0055) : Math.sin(this.bob * 0.45) * 0.2;

    this.kick += (Math.min(7, Math.abs(p.punchPitch) * 1.1) - this.kick) * Math.min(1, dt * 16);
    const reloading = p.reloadEnd > 0;
    this.reloadT += ((reloading ? 1 : 0) - this.reloadT) * Math.min(1, dt * 8);
    this.rise += ((p.deployTime > 0 ? 0 : 1) - this.rise) * Math.min(1, dt * 9);

    const targetSwayX = -(p.lastMouseDX || 0) * 0.55;
    const targetSwayY = (p.lastMouseDY || 0) * 0.35;
    this.swayX += (targetSwayX - this.swayX) * Math.min(1, dt * 9);
    this.swayY += (targetSwayY - this.swayY) * Math.min(1, dt * 9);
    p.lastMouseDX = 0;
    p.lastMouseDY = 0;

    // 按枪型取姿态：长枪更靠右下、手枪更靠中心，匕首有单独的握法
    const cls = p.curSlot === 'melee' ? 'melee'
      : p.curSlot === 'grenade' ? 'grenade'
        : ((p.weaponDef && p.weaponDef.cls) || 'rifle');
    const wid = p.curSlot === 'melee' ? 'knife'
      : p.curSlot === 'grenade' ? null
        : (p.weaponDef ? p.weaponDef.id : null);
    const pose = (this.game && this.game.vmPose)
      || VM_ID_POSE[wid]
      || VM_POSE[cls]
      || VM_POSE.rifle;
    const crouchOff = p.duckAmount * 2.2;

    // 挥刀弧线：swingT 从 1 衰减到 0，sin 包络做"抬起—劈下—收回"
    const swingRaw = p.curSlot === 'melee' ? (p.swingT || 0) : 0;
    const sw = swingRaw > 0 ? Math.sin(Math.PI * (1 - swingRaw)) : 0;

    this.root.scale.setScalar(pose.s);
    this.root.position.set(
      pose.x + bobX + this.swayX * 0.06 - sw * 2.6,
      pose.y + bobY - crouchOff - (1 - this.rise) * 11 - this.reloadT * 4.5 + this.swayY * 0.06 + sw * 1.8,
      pose.z + this.kick * 1.5 - sw * 6,
    );
    this.root.rotation.set(
      (pose.rx || 0) + this.kick * 0.02 + this.reloadT * 0.42 - (1 - this.rise) * 0.8 - sw * 0.62,
      (pose.ry ?? 0.30) - this.kick * 0.008 + this.swayX * 0.006 + sw * 0.34,
      (pose.rz || 0) + this.reloadT * 0.3 + Math.sin(this.bob) * 0.01 + sw * 0.42,
    );
  }
}
