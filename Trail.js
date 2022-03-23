/**
 * @typedef {(ComplexNumber)=>ComplexNumber} ComplexFunc
 */

var _trailsConfig = {
  /**@type {Transformer} */
  tf: null,
  /**@type {number} */
  minLevel: 0,
  /**@type {number} */
  maxLevel: 0,
  /**@type {number} */
  leftU: 0,
  /**@type {number} */
  rightU: 0,
  /**@type {number} */
  topV: 0,
  /**@type {number} */
  bottomV: 0,
  /**@type {ParticleStyle} */
  particleStyle: new ParticleStyle1(),
  /**@type {ComplexFunc} */
  complexFunc: null,
};

class Particle {
  constructor(z) {
    this.age = 0;
    this.z = z;
    this.fz = _trailsConfig.complexFunc(z);
    this.fzSize = this.fz.getR();
    this.level = Math.log10(this.fzSize);
    this.next = undefined;
    this.updateXY();
  }
  updateXY() {
    this.x = _trailsConfig.tf.x(this.z.getX());
    this.y = _trailsConfig.tf.y(this.z.getY());
  }

  draw() {
    this.updateXY();
    var color = _trailsConfig.particleStyle.color(
      _trailsConfig.minLevel,
      this.level,
      _trailsConfig.maxLevel,
      this.age
    );
    stroke(color);
    var weight = _trailsConfig.particleStyle.weight(
      _trailsConfig.minLevel,
      this.level,
      _trailsConfig.maxLevel,
      this.age
    );
    strokeWeight(weight);
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
    this.next = new Particle(z);
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
    for (var particle of this.particles) {
      particle.draw();
    }
    if (frameCount % 2 === 0) {
      this._updateIsNeeded();
    }
  }
  _updateIsNeeded() {
    this.isNeeded = false;
    for (var particle of this.particles) {
      particle.draw();
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
   */
  constructor(tf) {
    _trailsConfig.tf = tf;
    /**@type {Trail[]} */
    this.trails = [];
    this.setAutomaticallyCreate(false);
    this.setNumberOfTrailsGoal(10);
  }
  setAutomaticallyCreate(b) {
    this.automaticallyCreate = b;
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
    var trail = new Trail(z);
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

var traillevels = {
  setLevelRange: (minLevel, maxLevel) => {
    _trailsConfig.minLevel = minLevel;
    _trailsConfig.maxLevel = maxLevel;
  },
};
var trailfunctions = {
  setComplexFunc: (f) => {
    _trailsConfig.complexFunc = f;
  },
};
