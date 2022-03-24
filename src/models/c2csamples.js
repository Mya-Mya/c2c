import { Complex } from "complex.js";
/**
 * @typedef {object} C2CSample
 * @property {string} formula
 * @property {(Complex)=>Complex} func
 */

/**@type {C2CSample[]} */
const samples = [
  {
    formula: "\\frac{1}{z}",
    func: (/**@type {Complex}*/ z) => z.inverse(),
  },
  {
    formula: "z^2",
    func: (/**@type {Complex}*/ z) => z.mul(z),
  },
  {
    formula: "\\sqrt{z}",
    func: (/**@type {Complex}*/ z) => z.sqrt(),
  },
  {
    formula: "\\exp{z}",
    func: (/**@type {Complex}*/ z) => z.exp(),
  },
  {
    formula: "\\sin",
    func: (/**@type {Complex}*/ z) => z.sin(),
  },
  {
    formula: "\\cos",
    func: (/**@type {Complex}*/ z) => z.cos(),
  },
  {
    formula: "\\tan",
    func: (/**@type {Complex}*/ z) => z.tan(),
  },
  {
    formula: "\\sinh",
    func: (/**@type {Complex}*/ z) => z.sinh(),
  },
  {
    formula: "\\cosh",
    func: (/**@type {Complex}*/ z) => z.cosh(),
  },
  {
    formula: "\\tanh",
    func: (/**@type {Complex}*/ z) => z.tanh(),
  },
  {
    formula: "\\cot",
    func: (/**@type {Complex}*/ z) => z.cot(),
  },
  {
    formula: "\\sec",
    func: (/**@type {Complex}*/ z) => z.sec(),
  },
  {
    formula: "\\csc",
    func: (/**@type {Complex}*/ z) => z.csc(),
  },
  {
    formula: "\\coth",
    func: (/**@type {Complex}*/ z) => z.coth(),
  },
  {
    formula: "\\sech",
    func: (/**@type {Complex}*/ z) => z.sech(),
  },
  {
    formula: "\\log",
    func: (/**@type {Complex}*/ z) => z.log(),
  },
];

/** @type {Object<number,C2CSample>}*/
let c2csamples = {};
for (let i = 0; i < samples.length; i++) {
  c2csamples[i] = samples[i];
}
export default c2csamples;
export const ids = Object.keys(c2csamples);
