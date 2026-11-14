// ============================================================
//  viewmodel.js — 第一人称武器（独立场景渲染，避免穿墙与比例失真）
//  具体枪型几何见 models.js；这里只负责挂载、姿态与动画。
//
//  注意：模型几何体按 id 缓存在 models.js 里，切换武器时**不能** dispose，
//  否则切回来会拿到已销毁的 buffer。
// ============================================================
import * as THREE from 'three';
import { WEAPONS } from './config.js';
import { buildWeaponModel } from './models.js';

// 各枪型的持枪姿态。
// 1.6 的第一人称武器压在屏幕右下角：枪身约在右侧 25~35%、下方 25%，
// 枪口朝画面中心偏上。原来的 (4.2, -6.8, -33) 几乎糊在正中，而且太近，
// 0.72 的缩放下木托会顶到镜头前，看起来像半截贴在脸上的枪。
const VM_POSE = {
  rifle: { x: 13.5, y: -7.4, z: -40, s: 0.62 },
  sniper: { x: 14.8, y: -7.8, z: -44, s: 0.64 },
  smg: { x: 13.2, y: -7.0, z: -37, s: 0.62 },
  pistol: { x: 11.4, y: -6.6, z: -31, s: 0.58 },
  melee: { x: 12.2, y: -7.6, z: -32, s: 0.60 },
  grenade: { x: 12.2, y: -8.2, z: -31, s: 0.60 },
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

  setWeapon(id) {
    if (id === this.curId) return;
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
    const pose = (this.game && this.game.vmPose) || VM_POSE[cls] || VM_POSE.rifle;
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
      this.kick * 0.02 + this.reloadT * 0.42 - (1 - this.rise) * 0.8 - sw * 0.62,
      0.16 - this.kick * 0.008 + this.swayX * 0.006 + sw * 0.34,
      this.reloadT * 0.3 + Math.sin(this.bob) * 0.01 + sw * 0.42,
    );
  }
}
