import SingleParamComplexOperation from "./SingleParamComplexOperation";
export default new SingleParamComplexOperation((me) => {
  const r = Math.exp(me.getX());
  const y = me.getY();
  me.setXY(r * Math.cos(y), r * Math.sin(y));
});
