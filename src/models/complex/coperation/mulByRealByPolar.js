import DoubleParamComplexOperation from "./DoubleParamComplexOperation";
export default new DoubleParamComplexOperation((me, other) => {
  me.setPolar(me.getR() * other, me.getT());
});
