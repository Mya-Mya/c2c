/**
 * @abstract
 */
export default class {
  /**
   * @abstract
   * @param {number} minLevel
   * @param {number} level
   * @param {number} maxLevel
   * @param {number} age
   */
  set(minLevel, level, maxLevel, age) {}
  /**
   * @abstract
   * @returns {number}
   */
  r() {}
  /**
   * @abstract
   * @returns {number}
   */
  g() {}
  /**
   * @abstract
   * @returns {number}
   */
  b() {}
  /**
   * @abstract
   * @returns {number}
   */
  a() {}
  /**
   * @abstract
   * @returns {number}
   */
  weight() {}
}
