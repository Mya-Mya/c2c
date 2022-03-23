/**@abstract */
class ParticleStyle {
  /**
   * @abstract
   * @param {number} minLevel
   * @param {number} level
   * @param {number} maxLevel
   * @param {number} age
   * @returns {*}
   */
  color(minLevel, level, maxLevel, age) {}
  /**
   * @abstract
   * @param {number} minLevel
   * @param {number} level
   * @param {number} maxLevel
   * @param {number} age
   * @returns {number}
   */
  weight(minLevel, level, maxLevel, age) {}
}
class ParticleStyle1 extends ParticleStyle {
  color(minLevel, level, maxLevel, age) {
    var r = map(level, minLevel, maxLevel, 31, 255, true);
    var g = map(level, minLevel, maxLevel, 31, 0, true);
    var b = map(level, minLevel, maxLevel, 197, 0, true);
    var a = map(age, 0, 10, 255, 0);
    return color(r, g, b, a);
  }
  weight(minLevel, level, maxLevel, age) {
    return map(level, minLevel, maxLevel, 0.1, 3, true);
  }
}
