import ComplexNumber from "../ComplexNumber";

/**
 * @typedef {(me:ComplexNumber)=>void} SingleParamComplexConsumer
 */

export default class {
  /**
   *
   * @param {SingleParamComplexConsumer} consumer a function that calculates something and calls set functions on the given ComplexNumber
   */
  constructor(consumer) {
    this.consumer = consumer;
  }
  /**
   * Perform a destructive operation on the given ComplexNumber
   * @param {ComplexNumber} z
   * @returns {ComplexNumber}
   */
  d(z) {
    this.consumer(z);
    return z;
  }
  /**
   * Perform a non-destructive operation on the given ComplexNumber
   * @param {ComplexNumber} z
   * @returns {ComplexNumber}
   */
  n(z) {
    return this.d(z.clone());
  }
}
