import { P5Instance } from "react-p5-wrapper";
import Transformer from "../../models/Transformer";
import { WindPreviewViewProps } from "./index";
import ComplexNumber from "../../models/complex/ComplexNumber";
import ParticleStyle from "../../models/particlestyle/ParticleStyle";
export default {
  /**@type {P5Instance} */ p: null,
  /**@type {Transformer} */ transformer: null,
  /**@type {ParticleStyle} */ particleStyle: null,
  /**@type {(ComplexNumber)=>ComplexNumber} */ func: (z) => z,
  /**@type {number} */ leftU: 0,
  /**@type {number} */ rightU: 0,
  /**@type {number} */ topV: 0,
  /**@type {number} */ bottomV: 0,
  /**@type {WindPreviewViewProps} */ props: null,
};
