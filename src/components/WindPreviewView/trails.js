import ComplexNumber from "../../models/complex/ComplexNumber";
import _ from "./globals";
import coperation from "../../models/complex/coperation";

/**
 * @typedef {(ComplexNumber)=>ComplexNumber} ComplexFunc
 */

class Particle {
  constructor(z) {
    this.age = 0;
    this.z = z;
    this.fz = _.func(z);
    this.fzSize = this.fz.getR();
    this.level = Math.log10(this.fzSize);
    this.next = undefined;
    this.updateXY();
  }
  updateXY() {
    this.x = _.transformer.x(this.z.getX());
    this.y = _.transformer.y(this.z.getY());
  }

  draw() {
    this.updateXY();
    _.particleStyle.set(
      _.props.minLevel,
      this.level,
      _.props.maxLevel,
      this.age
    );
    _.p.stroke(
      _.particleStyle.r(),
      _.particleStyle.g(),
      _.particleStyle.b(),
      _.particleStyle.a()
    );
    _.p.strokeWeight(_.particleStyle.weight());
    if (this.next) {
      _.p.line(this.x, this.y, this.next.x, this.next.y);
    } else {
      _.p.point(this.x, this.y);
    }
    this.age++;
  }
  isInScreen() {
    var u = this.z.getX();
    var v = this.z.getY();
    return _.leftU <= u && u <= _.rightU && _.bottomV <= v && v <= _.topV;
  }
  /**
   * @returns {Particle}
   */
  createNext() {
    var direction = coperation.divByRealByXY.n(this.fz, this.fzSize);
    var z = coperation.add.n(this.z, direction);
    this.next = new Particle(z);
    return this.next;
  }
}
class Trail {
  /**
   * @param {ComplexNumber} z
   */
  constructor(z) {
    var particle = new Particle(z);
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
    this.particles.forEach((particle) => particle.draw());
    if (_.p.frameCount % 2 === 0) {
      this._updateIsNeeded();
    }
  }
  _updateIsNeeded() {
    this.isNeeded = false;
    for (var particle of this.particles) {
      if (particle.isInScreen()) this.isNeeded = true;
    }
  }
  getIsNeeded() {
    return this.isNeeded;
  }
}

/**@type {Trail[]} */
let trails = [];
export const setupTrails = () => {};
export const addRandomTrail = () => {
  var u = _.p.random(_.leftU, _.rightU);
  var v = _.p.random(_.bottomV, _.topV);
  addTrail(u, v);
};
export const addTrail = (u, v) => {
  /**@type {Trail}*/ const trail = new Trail(ComplexNumber.fromXY(u, v));
  trails.push(trail);
};
export const drawTrails = () => {
  _.p.push();
  trails.forEach((trail) => trail.draw());
  _.p.pop();
  trails = trails.filter((trail) => trail.getIsNeeded());
  _.props.onNumTrailsChange(trails.length);
  if (_.props.automaticallyCreateTrails) {
    for (let i = 0; i < _.props.numTrailsGoal - trails.length; i++) {
      addRandomTrail();
    }
  }
};
