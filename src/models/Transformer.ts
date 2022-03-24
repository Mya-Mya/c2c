export default class {
  private a: number;
  private inva: number;
  private e: number;
  private f: number;

  constructor(u: number, v: number, x: number, y: number, a: number) {
    this.setAOnly(a);
    this.shift(u, v, x, y);
  }
  setAOnly(a: number): void {
    this.a = a;
    this.inva = 1 / this.a;
  }
  shift(u: number, v: number, x: number, y: number): void {
    this.e = x - this.a * u;
    this.f = y + this.a * v;
  }
  multA(ratio: number, x: number, y: number): void {
    this.setAOnly(this.a * ratio);
    var one_minus_ratio = 1 - ratio;
    this.e = this.e * ratio + x * one_minus_ratio;
    this.f = this.f * ratio + y * one_minus_ratio;
  }
  x(u: number): number {
    return this.a * u + this.e;
  }
  y(v: number): number {
    return this.f - this.a * v;
  }
  u(x: number): number {
    return (x - this.e) * this.inva;
  }
  v(y: number): number {
    return (this.f - y) * this.inva;
  }
}
