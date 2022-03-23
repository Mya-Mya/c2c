import DoubleParamComplexOperation from "./DoubleParamComplexOperation";
export default new DoubleParamComplexOperation((me, other) => {
  me.setXY(me.getX() + other.getX(), me.getY() + other.getY());
});
