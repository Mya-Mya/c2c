import { Complex } from "complex.js";

export interface C2CSample {
  formula: string;
  func: (z: Complex) => Complex;
}

const samples: C2CSample[] = [
  {
    formula: "\\frac{1}{z}",
    func: (z) => z.inverse(),
  },
  {
    formula: "z^2",
    func: (z) => z.mul(z),
  },
  {
    formula: "\\sqrt{z}",
    func: (z) => z.sqrt(),
  },
  {
    formula: "\\exp{z}",
    func: (z) => z.exp(),
  },
  {
    formula: "\\sin",
    func: (z) => z.sin(),
  },
  {
    formula: "\\cos",
    func: (z) => z.cos(),
  },
  {
    formula: "\\tan",
    func: (z) => z.tan(),
  },
  {
    formula: "\\sinh",
    func: (z) => z.sinh(),
  },
  {
    formula: "\\cosh",
    func: (z) => z.cosh(),
  },
  {
    formula: "\\tanh",
    func: (z) => z.tanh(),
  },
  {
    formula: "\\cot",
    func: (z) => z.cot(),
  },
  {
    formula: "\\sec",
    func: (z) => z.sec(),
  },
  {
    formula: "\\csc",
    func: (z) => z.csc(),
  },
  {
    formula: "\\coth",
    func: (z) => z.coth(),
  },
  {
    formula: "\\sech",
    func: (z) => z.sech(),
  },
  {
    formula: "\\log",
    func: (z) => z.log(),
  },
];

let c2csamples: { [id: number]: C2CSample } = {};
for (let i = 0; i < samples.length; i++) {
  c2csamples[i] = samples[i];
}
export default c2csamples;
export const ids = Object.keys(c2csamples);
