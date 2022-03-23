var _trailsConfig = {
  /**@type {Transformer} */
  tf: null,
  /**@type {number} */
  minSize: 0,
  /**@type {number} */
  maxSize: 10,
  /**@type {number} */
  leftU: 0,
  /**@type {number} */
  rightU: 0,
  /**@type {number} */
  topV: 0,
  /**@type {number} */
  bottomV: 0,
};
/**
 * @typedef {(ComplexNumber)=>ComplexNumber} ComplexFunc
 */

class Particle {
  /**
   * @param {ComplexNumber} z
   * @param {ComplexFunc} f
   */
  constructor(z, f) {
    this.z = z;
    this.f = f;
    this.age = 0;
    this.fz = f(z);
    this.fzSize = this.fz.getR();
    this.next = undefined;
    this.updateXY();
  }
  updateXY() {
    this.x = _trailsConfig.tf.x(this.z.getX());
    this.y = _trailsConfig.tf.y(this.z.getY());
  }

  draw() {
    this.updateXY();
    var level = map(
      log(this.fzSize),
      _trailsConfig.minSize,
      _trailsConfig.maxSize,
      0,
      1,
      true
    );
    var r = 127 - 127 * level;
    var g = 60 + 160 * level;
    var b = 255;
    var a = map(this.age, 0, 10, 255, 0);
    stroke(r, g, b, a);
    if (this.next) {
      line(this.x, this.y, this.next.x, this.next.y);
    } else {
      point(this.x, this.y);
    }
    this.age++;
  }
  isInScreen() {
    var u = this.z.getX();
    var v = this.z.getY();
    return (
      _trailsConfig.leftU <= u &&
      u <= _trailsConfig.rightU &&
      _trailsConfig.bottomV <= v &&
      v <= _trailsConfig.topV
    );
  }
  /**
   * @returns {Particle}
   */
  createNext() {
    var direction = complexoperations.divByRealByXY.n(this.fz, this.fzSize);
    var z = complexoperations.add.n(this.z, direction);
    this.next = new Particle(z, this.f);
    return this.next;
  }
}
class Trail {
  /**
   * @param {ComplexNumber} z
   * @param {ComplexFunc} f
   */
  constructor(z, f) {
    var particle = new Particle(z, f);
    /**@type {Particle[]} */
    this.particles = [particle];
    this.maxLength = 10;
    this.isNeeded = true;
  }
  draw() {
    var particle = this.particles[this.particles.length - 1];
    var newParticle = particle.createNext();
    this.particles.push(newParticle);

    if (this.particles.length > this.maxLength) this.particles.shift();

    this.isNeeded = false;
    for (var i = 0; i < this.particles.length; i++) {
      var particle = this.particles[i];
      particle.draw(i);
      if (particle.isInScreen()) this.isNeeded = true;
    }
  }
  getIsNeeded() {
    return this.isNeeded;
  }
}

class Trails {
  /**
   *
   * @param {Transformer} tf
   * @param {number} minSize
   * @param {number} maxSize
   * @param {ComplexFunc} f
   */
  constructor(tf, minSize, maxSize, f) {
    _trailsConfig.tf = tf;
    /**@type {Trail[]} */
    this.trails = [];
    this.setSizeRange(minSize, maxSize);
    this.setAutomaticallyCreate(false);
    this.setComplexFunc(f);
    this.setNumberOfTrailsGoal(10);
  }
  setSizeRange(minSize, maxSize) {
    _trailsConfig.minSize = minSize;
    _trailsConfig.maxSize = maxSize;
  }
  setAutomaticallyCreate(b) {
    this.automaticallyCreate = b;
  }
  /**
   * @param {ComplexFunc} f
   */
  setComplexFunc(f) {
    this.f = f;
  }
  setNumberOfTrailsGoal(n) {
    this.numberOfTrailsGoal = n;
  }
  /**
   *
   * @param {Trail} trail
   */
  addTrail(trail) {
    this.trails.push(trail);
  }
  createTrail(u, v) {
    var z = ComplexNumber.fromXY(u, v);
    var trail = new Trail(z, this.f);
    this.addTrail(trail);
  }
  draw() {
    _trailsConfig.leftU = _trailsConfig.tf.u(0);
    _trailsConfig.rightU = _trailsConfig.tf.u(width);
    _trailsConfig.topV = _trailsConfig.tf.v(0);
    _trailsConfig.bottomV = _trailsConfig.tf.v(height);
    if (this.automaticallyCreate) {
      var numToCreate = this.numberOfTrailsGoal - this.trails.length;
      for (var i = 0; i < numToCreate; i++) {
        var u = random(_trailsConfig.leftU, _trailsConfig.rightU);
        var v = random(_trailsConfig.bottomV, _trailsConfig.topV);
        this.createTrail(u, v);
      }
    }
    push();
    strokeWeight(3);
    for (var i = this.trails.length - 1; i >= 0; i--) {
      var trail = this.trails[i];
      trail.draw();
      if (!trail.getIsNeeded()) this.trails.splice(i, 1);
    }
    pop();
  }
}
