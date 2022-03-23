class SingleParamComplexOperation {
  /**
   *
   * @param {(ComplexNumber)=>void} operator a function that calculates something and calls set functions on the given ComplexNumber
   */
  constructor(operator) {
    this.operator = operator;
  }
  /**
   * Perform a destructive operation on the given ComplexNumber
   * @param {ComplexNumber} z
   * @returns {ComplexNumber}
   */
  d(z) {
    this.operator(z);
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
class DoubleParamComplexOperation {
  /**
   *
   * @param {(ComplexNumber,ComplexNumber|number)=>void} operator a function that calculates something and calls set functions on the first given ComplexNumber
   */
  constructor(operator) {
    this.operator = operator;
  }
  /**
   * Perform a destructive operation on the given ComplexNumber
   * @param {ComplexNumber} z
   * @param {ComplexNumber|number} w
   * @returns {ComplexNumber}
   */
  d(z, w) {
    this.operator(z, w);
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
var complexoperations = {
  add: new DoubleParamComplexOperation(
    /**
     * @param {ComplexNumber} me
     * @param {ComplexNumber} other
     */
    function (me, other) {
      me.setXY(me.getX() + other.getX(), me.getY() + other.getY());
    }
  ),
  sub: new DoubleParamComplexOperation(
    /**
     * @param {ComplexNumber} me
     * @param {ComplexNumber} other
     */
    function (me, other) {
      me.setXY(me.getX() - other.getX(), me.getY() - other.getY());
    }
  ),
  mulByXY: new DoubleParamComplexOperation(
    /**
     * @param {ComplexNumber} me
     * @param {ComplexNumber} other
     */
    function (me, other) {
      var x1 = me.getX();
      var y1 = me.getY();
      var x2 = other.getX();
      var y2 = other.getY();
      var newX = x1 * x2 - y1 * y2;
      var newY = x1 * y2 + x2 * y1;
      me.setXY(newX, newY);
    }
  ),
  mulByPolar: new DoubleParamComplexOperation(
    /**
     * @param {ComplexNumber} me
     * @param {ComplexNumber} other
     */
    function (me, other) {
      me.setPolar(me.getR() * other.getR(), me.getT() + other.getT());
    }
  ),
  mulByRealByXY: new DoubleParamComplexOperation(
    /**
     * @param {ComplexNumber} me
     * @param {number} other
     */
    function (me, other) {
      me.setXY(me.getX() * other, me.getY() * other);
    }
  ),
  mulByRealByPolar: new DoubleParamComplexOperation(
    /**
     * @param {ComplexNumber} me
     * @param {number} other
     */
    function (me, other) {
      me.setPolar(me.getR() * other, me.getT());
    }
  ),
  div: new DoubleParamComplexOperation(
    /**
     * @param {ComplexNumber} me
     * @param {ComplexNumber} other
     */
    function (me, other) {
      me.setPolar(me.getR() / other.getR(), me.getT() - other.getT());
    }
  ),
  divByRealByXY: new DoubleParamComplexOperation(
    /**
     * @param {ComplexNumber} me
     * @param {number} other
     */
    function (me, other) {
      me.setXY(me.getX() / other, me.getY() / other);
    }
  ),
  divByRealByPolar: new DoubleParamComplexOperation(
    /**
     * @param {ComplexNumber} me
     * @param {number} other
     */
    function (me, other) {
      me.setPolar(me.getR() / other, me.getT());
    }
  ),
  exp: new SingleParamComplexOperation(
    /**
     * @param {ComplexNumber} me
     */
    function (me) {
      var r = exp(me.getX());
      var y = me.getY();
      me.setXY(r * cos(y), r * sin(y));
    }
  ),
  sin: new SingleParamComplexOperation(
    /**
     * @param {ComplexNumber} me
     */
    function (me) {
      var x = me.getX();
      var y = me.getY();
      var expy = exp(y);
      var expminusy = exp(-y);
      var newX = sin(x) * (expy + expminusy) * 0.5;
      var newY = cos(x) * (expy - expminusy) * 0.5;
      me.setXY(newX, newY);
    }
  ),
  cos: new SingleParamComplexOperation(
    /**
     * @param {ComplexNumber} me
     */
    function (me) {
      var x = me.getX();
      var y = me.getY();
      var expy = exp(y);
      var expminusy = exp(-y);
      var newX = cos(x) * (expy + expminusy) * 0.5;
      var newY = -sin(x) * (expy - expminusy) * 0.5;
      me.setXY(newX, newY);
    }
  ),
};
