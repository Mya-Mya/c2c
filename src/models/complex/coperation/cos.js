import SingleParamComplexOperation from "./SingleParamComplexOperation";
export default new SingleParamComplexOperation((me) => {
  const x = me.getX();
  const y = me.getY();
  const expy = Math.exp(y);
  const expminusy = Math.exp(-y);
  const newX = Math.cos(x) * (expy + expminusy) * 0.5;
  const newY = -Math.sin(x) * (expy - expminusy) * 0.5;
  me.setXY(newX, newY);
});
