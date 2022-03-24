export default class ComplexNumber {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.r = undefined;
    this.t = undefined;
  }
  static fromXY(x, y) {
    var z = new ComplexNumber();
    z.setXY(x, y);
    return z;
  }
  static fromPolar(r, t) {
    var z = new ComplexNumber();
    z.setPolar(r, t);
    return z;
  }
  //X
  getX() {
    if (this.x === undefined) this._prepareXFromPolar();
    return this.x;
  }
  setX(x) {
    if (this.x === x) return;
    this.x = x;
    this._clearPolar();
  }
  _prepareXFromPolar() {
    this.x = this.r * Math.cos(this.t);
  }
  //Y
  getY() {
    if (this.y === undefined) this._prepareYFromPolar();
    return this.y;
  }
  setY(y) {
    if (this.y === y) return;
    this.y = y;
    this._clearPolar();
  }
  _prepareYFromPolar() {
    this.y = this.r * Math.sin(this.t);
  }
  //XY
  setXY(x, y) {
    this.x = x;
    this.y = y;
    this._clearPolar();
  }
  _clearXY() {
    this.x = undefined;
    this.y = undefined;
  }
  //R
  getR() {
    if (this.r === undefined) this._prepareRFromXY();
    return this.r;
  }
  setR(r) {
    if (this.r === r) return;
    this.r = r;
    this._clearXY();
  }
  _prepareRFromXY() {
    this.r = Math.sqrt(this.x * this.x + this.y * this.y);
  }
  //T
  getT() {
    if (this.t === undefined) this._prepareTFromXY();
    return this.t;
  }
  setT(t) {
    if (this.t === t) return;
    this.t = t;
    this._clearXY();
  }
  _prepareTFromXY() {
    this.t = Math.atan2(this.y, this.x);
  }
  //Polar
  setPolar(r, t) {
    this.r = r;
    this.t = t;
    this._clearXY();
  }
  _clearPolar() {
    this.r = undefined;
    this.t = undefined;
  }
  //Tools
  isPureReal() {
    return this.getY() === 0;
  }
  isPureImaginary() {
    return this.getX() === 0;
  }
  isXYReady() {
    return this.x !== undefined && this.y !== undefined;
  }
  isPolarReady() {
    return this.r !== undefined && this.t !== undefined;
  }
  clone() {
    var cloned = new ComplexNumber();
    cloned.x = this.x;
    cloned.y = this.y;
    cloned.r = this.r;
    cloned.t = this.t;
    return cloned;
  }
}
