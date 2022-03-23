import ParticleStyle from "./ParticleStyle";
/**
 * @extends {ParticleStyle}
 */
export default class {
  constructor() {
    this.normalized = 0;
    this.cachedWeight = 0;
  }
  set(minLevel, level, maxLevel, age) {
    if (level < minLevel) {
      this.normalized = 0;
    } else if (level > maxLevel) {
      this.normalized = 1;
    } else {
      this.normalized = (level - minLevel) / (maxLevel - minLevel);
    }
    this.cachedWeight = 3 * 0.9 ** age;
    this.cachedA = 255 * 0.8 ** age;
  }
  r() {
    return 31 + this.normalized * 224;
  }
  g() {
    return 31 - this.normalized * 31;
  }
  b() {
    return 197 - this.normalized * 197;
  }
  a() {
    return this.cachedA;
  }
  weight() {
    return this.cachedWeight;
  }
}
