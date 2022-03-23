var complexes = {
  /**
   * @param {ComplexNumber} z1
   * @param {ComplexNumber} z2
   * @returns {ComplexNumber}
   */
  add: function (z1, z2) {
    return ComplexNumber.fromXY(z1.getX() + z2.getX(), z1.getY() + z2.getY());
  },
  /**
   * @param {ComplexNumber} me
   * @param {ComplexNumber} other
   * @returns {ComplexNumber}
   */
  added: function (me, other) {
    me.setXY(me.getX() + other.getX(), me.getY() + other.getY());
    return me;
  },
  /**
   * @param {ComplexNumber} z1
   * @param {ComplexNumber} z2
   * @returns {ComplexNumber}
   */
  sub: function (z1, z2) {
    return ComplexNumber.fromXY(z1.getX() - z2.getX(), z1.getY() - z2.getY());
  },
  /**
   * @param {ComplexNumber} me
   * @param {ComplexNumber} other
   * @returns {ComplexNumber}
   */
  subbed: function (me, other) {
    me.setXY(me.getX() - other.getX(), me.getY() - other.getY());
    return me;
  },
  /**
   * @param {ComplexNumber} z1
   * @param {ComplexNumber} z2
   * @returns {ComplexNumber}
   */
  mulByXY: function (z1, z2) {
    var x1 = z1.getX();
    var y1 = z1.getY();
    var x2 = z2.getX();
    var y2 = z2.getY();
    var newX = x1 * x2 - y1 * y2;
    var newY = x1 * y2 + x2 * y1;
    return ComplexNumber.fromXY(newX, newY);
  },

  /**
   * @param {ComplexNumber} me
   * @param {ComplexNumber} other
   * @returns {ComplexNumber}
   */
  mulledByXY: function mulledByXY(me, other) {
    var x1 = me.getX();
    var y1 = me.getY();
    var x2 = other.getX();
    var y2 = other.getY();
    var newX = x1 * x2 - y1 * y2;
    var newY = x1 * y2 + x2 * y1;
    me.setXY(newX, newY);
    return me;
  },
  /**
   * @param {ComplexNumber} z1
   * @param {ComplexNumber} z2
   * @returns {ComplexNumber}
   */
  mulByPolar: function mulByPolar(z1, z2) {
    var r1 = z1.getR();
    var t1 = z1.getT();
    var r2 = z2.getR();
    var t2 = z2.getT();
    var newR = r1 * r2;
    var newT = t1 + t2;
    return ComplexNumber.fromPolar(newR, newT);
  },
  /**
   * @param {ComplexNumber} me
   * @param {ComplexNumber} other
   * @returns {ComplexNumber}
   */
  mulledByPolar: function mulledByPolar(me, other) {
    var r1 = me.getR();
    var t1 = me.getT();
    var r2 = other.getR();
    var t2 = other.getT();
    var newR = r1 * r2;
    var newT = t1 + t2;
    me.setPolar(newR, newT);
    return me;
  },
  /**
   * @param {ComplexNumber} z
   * @param {number} r
   * @returns {ComplexNumber}
   */
  mulByR: function (z, r) {
    return ComplexNumber.fromXY(z.getX() * r, z.getY() * r);
  },
  /**
   * @param {ComplexNumber} me
   * @param {number} r
   * @returns {ComplexNumber}
   */
  mulledByR: function (me, r) {
    me.setXY(me.getX() * r, me.getY() * r);
    return me;
  },

  /**
   * @param {ComplexNumber} z1
   * @param {ComplexNumber} z2
   * @returns {ComplexNumber}
   */
  div: function div(z1, z2) {
    var r1 = z1.getR();
    var t1 = z1.getT();
    var r2 = z2.getR();
    var t2 = z2.getT();
    var newR = r1 / r2;
    var newT = t1 - t2;
    return ComplexNumber.fromPolar(newR, newT);
  },
  /**
   * @param {ComplexNumber} me
   * @param {ComplexNumber} other
   * @returns {ComplexNumber}
   */
  dived: function dived(me, other) {
    var r1 = me.getR();
    var t1 = me.getT();
    var r2 = other.getR();
    var t2 = other.getT();
    var newR = r1 / r2;
    var newT = t1 - t2;
    me.setPolar(newR, newT);
    return me;
  },
  /**
   * @param {ComplexNumber} z
   * @param {number} r
   * @returns {ComplexNumber}
   */
  divByR: function divByR(z, r) {
    if (z.isPolarReady())
      return ComplexNumber.fromPolar(z.getR() / r, z.getT());
    return ComplexNumber.fromXY(z.getX() / r, z.getY() / r);
  },
  /**
   * @param {ComplexNumber} me
   * @param {number} r
   * @returns {ComplexNumber}
   */
  divedByR: function divedByR(me, r) {
    if (me.isPolarReady()) {
      me.setR(me.getR() / r);
    } else {
      me.setXY(me.getX() / r, me.getY() / r);
    }
    return me;
  },
  /**
   * @param {ComplexNumber} z
   * @returns {ComplexNumber}
   */
  exp: function (z) {
    var r = exp(z.getX());
    var newX = r * cos(z.getY());
    var newY = r * sin(z.getY());
    return ComplexNumber.fromXY(newX, newY);
  },
  /**
   * @param {ComplexNumber} me
   * @returns {ComplexNumber}
   */
  expped: function (me) {
    var r = exp(me.getX());
    var newX = r * cos(me.getY());
    var newY = r * sin(me.getY());
    me.setXY(newX, newY);
    return me;
  },
};
