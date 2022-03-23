class Transformer {
  constructor(u, v, x, y, a) {
    this.setAOnly(a);
    this.shift(u, v, x, y);
  }
  setAOnly(a) {
    this.a = a;
    this.inva = 1 / this.a;
  }
  shift(u, v, x, y) {
    this.e = x - this.a * u;
    this.f = y + this.a * v;
  }
  multA(ratio, x, y) {
    this.setAOnly(this.a * ratio);
    var one_minus_ratio = 1 - ratio;
    this.e = this.e * ratio + x * one_minus_ratio;
    this.f = this.f * ratio + y * one_minus_ratio;
  }
  transform() {
    applyMatrix(this.a, 0, 0, -this.a, this.e, this.f);
  }
  x(u) {
    return this.a * u + this.e;
  }
  y(v) {
    return this.f - this.a * v;
  }
  u(x) {
    return (x - this.e) * this.inva;
  }
  v(y) {
    return (this.f - y) * this.inva;
  }
}
