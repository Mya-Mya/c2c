import DoubleParamComplexOperation from "./DoubleParamComplexOperation";
export default new DoubleParamComplexOperation((me, other) => {
  me.setXY(me.getX() / other, me.getY() / other);
});
