import DoubleParamComplexOperation from "./DoubleParamComplexOperation";
export default new DoubleParamComplexOperation((me, other) => {
  var x1 = me.getX();
  var y1 = me.getY();
  var x2 = other.getX();
  var y2 = other.getY();
  var newX = x1 * x2 - y1 * y2;
  var newY = x1 * y2 + x2 * y1;
  me.setXY(newX, newY);
});
