import ComplexNumber from "../ComplexNumber";

export default class {
  /**
   *
   * @param {(ComplexNumber,ComplexNumber|number)} consumer a function that calculates something and calls set functions on the first given ComplexNumber
   */
  constructor(consumer) {
    this.consumer = consumer;
  }
  /**
   * Perform a destructive operation on the given ComplexNumber
   * @param {ComplexNumber} z
   * @param {ComplexNumber|number} w
   * @returns {ComplexNumber}
   */
  d(z, w) {
    this.consumer(z, w);
    return z;
  }
  /**
   * Perform a non-destructive operation on the given ComplexNumber
   * @param {ComplexNumber} z
   * @param {ComplexNumber|number} w
   * @returns {ComplexNumber}
   */
  n(z, w) {
    return this.d(z.clone(), w);
  }
}
