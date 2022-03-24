import { P5Instance } from "react-p5-wrapper";
import Transformer from "../../models/Transformer";
import { Complex } from "complex.js";
import ParticleStyle from "../../models/particlestyle/ParticleStyle";
type WindPreviewViewGlobals = {
  p: P5Instance;
  transformer: Transformer;
  particleStyle: ParticleStyle;
  func: (z: Complex) => Complex;
  leftU: number;
  rightU: number;
  topV: number;
  bottomV: number;
  dispatch: (x: any) => void;
};
export default {
  /**@type {P5Instance} */ p: null,
  /**@type {Transformer} */ transformer: null,
  /**@type {ParticleStyle} */ particleStyle: null,
  /**@type {(Complex)=>Complex} */ func: (z) => z,
  /**@type {number} */ leftU: 0,
  /**@type {number} */ rightU: 0,
  /**@type {number} */ topV: 0,
  /**@type {number} */ bottomV: 0,
  /**@type {any=>void} */ dispatch: null,
} as WindPreviewViewGlobals;
