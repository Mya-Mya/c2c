var tf = new Transformer(0, 0, 300, 200, 10);
/**@type {Trails} */
var trails;

var grabbingU;
var grabbingV;
var grabbing = false;
function setup() {
  createCanvas(600, 400);
  background(245);
  frameRate(8);
  doms.onLevelsChange((minLevel, maxLevel) =>
    traillevels.setLevelRange(minLevel, maxLevel)
  );
  trails = new Trails(tf, function (z) {
    return z.clone();
  });
  doms.onAutomaticallyCreateTrailsChange(function (b) {
    trails.setAutomaticallyCreate(b);
  });
  doms.onNumberOfTrailsGoalChange(function (n) {
    trails.setNumberOfTrailsGoal(n);
  });
}

function draw() {
  background(250);
  if (grabbing) tf.shift(grabbingU, grabbingV, mouseX, mouseY);
  drawAxis();
  trails.draw();
  doms.NumberOfTrailsDOM.innerText = trails.trails.length;
}
function drawAxis() {
  var leftU = tf.u(0);
  var rightU = tf.u(width);
  var topV = tf.v(0);
  var bottomV = tf.v(height);
  var deltaU = (rightU - leftU) * 0.1;
  var deltaV = (topV - bottomV) * 0.1;
  line(tf.x(0), tf.y(bottomV), tf.x(0), tf.y(topV));
  line(tf.x(leftU), tf.y(0), tf.x(rightU), tf.y(0));
  for (var u = 0; u <= rightU; u += deltaU) text(nfc(u, 1), tf.x(u), tf.y(0));
  for (var u = -deltaU; leftU <= u; u -= deltaU)
    text(nfc(u, 1), tf.x(u), tf.y(0));
  for (var v = 0; v <= topV; v += deltaV) text(nfc(v, 1), tf.x(0), tf.y(v));
  for (var v = -deltaV; bottomV <= v; v -= deltaV)
    text(nfc(v, 1), tf.x(0), tf.y(v));
}

function mouseWheel(e) {
  tf.multA(1 - e.delta * 0.001, mouseX, mouseY);
}
function mousePressed() {
  if (0 < mouseX && mouseX < width && 0 < mouseY && mouseY < height) {
    grabbing = true;
    grabbingU = tf.u(mouseX);
    grabbingV = tf.v(mouseY);
  }
}
function mouseReleased() {
  grabbing = false;
}
function keyPressed() {
  var u = tf.u(mouseX);
  var v = tf.v(mouseY);
  trails.createTrail(u, v);
}
