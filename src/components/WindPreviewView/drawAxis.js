import _ from "./globals";
export default () => {
  const deltaU = (_.rightU - _.leftU) * 0.1;
  const deltaV = (_.topV - _.bottomV) * 0.1;

  const groundX = _.transformer.x(0);
  const groundY = _.transformer.y(0);

  _.p.line(groundX, 0, groundX, _.p.height);
  _.p.line(0, groundY, _.p.width, groundY);

  for (let u = 0; u <= _.rightU; u += deltaU)
    _.p.text(_.p.nfc(u, 1), _.transformer.x(u), groundY);
  for (let u = -deltaU; _.leftU <= u; u -= deltaU)
    _.p.text(_.p.nfc(u, 1), _.transformer.x(u), groundY);

  for (let v = 0; v <= _.topV; v += deltaV)
    _.p.text(_.p.nfc(v, 1), groundX, _.transformer.y(v));
  for (let v = -deltaV; _.bottomV <= v; v -= deltaV)
    _.p.text(_.p.nfc(v, 1), groundX, _.transformer.y(v));
};
