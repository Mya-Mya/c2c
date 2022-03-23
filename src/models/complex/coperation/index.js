import ComplexNumber from "../ComplexNumber";
//足し算
import add from "./add";
//引き算
import sub from "./sub";
//複素数同士の掛け算
import mulByXY from "./mulByXY";
import mulByPolar from "./mulByPolar";
//複素数と実数の掛け算
import mulByRealByXY from "./mulByRealByXY";
import mulByRealByPolar from "./mulByRealByPolar";
//複素数同士の割り算
import div from "./div";
//複素数と実数の割り算
import divByRealByXY from "./divByRealByXY";
import divByRealByPolar from "./divByRealByPolar";
//高校レベルの複素数の計算
import exp from "./exp";
import sin from "./sin";
import cos from "./cos";

export default {
  ComplexNumber,
  add,
  sub,
  mulByXY,
  mulByPolar,
  mulByRealByXY,
  mulByRealByPolar,
  div,
  divByRealByXY,
  divByRealByPolar,
  exp,
  sin,
  cos,
};
