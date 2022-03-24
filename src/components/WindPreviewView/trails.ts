import { Complex } from "complex.js";
import _ from "./globals";
import { store } from "../../states";
import { selectSelectingC2cSample } from "../../states/c2csampleSlice";
import { selectTrailsState, setNumTrailsNow } from "../../states/trailsSlice";
import { selectLevelState } from "../../states/levelSlice";
import createComplex from "./createComplex";
class Particle {
  private age: number;
  private z: Complex;
  private x: number;
  private y: number;
  private fz: Complex;
  private fzSize: number;
  private level: number;
  private next: Particle;
  constructor(z: Complex) {
    this.age = 0;
    this.z = z;
    const f = selectSelectingC2cSample(store.getState()).func;
    this.fz = f(z);
    this.fzSize = this.fz.abs();
    this.level = Math.log10(this.fzSize);
    this.next = undefined;
    this.updateXY();
  }
  updateXY() {
    this.x = _.transformer.x(this.z.re);
    this.y = _.transformer.y(this.z.im);
  }

  draw() {
    this.updateXY();
    const minLevel = selectLevelState(store.getState()).min;
    const maxLevel = selectLevelState(store.getState()).max;
    _.particleStyle.set(
      /*_.props.*/ minLevel,
      this.level,
      /*_.props.*/ maxLevel,
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
    var u = this.z.re;
    var v = this.z.im;
    return _.leftU <= u && u <= _.rightU && _.bottomV <= v && v <= _.topV;
  }
  /**
   * @returns {Particle}
   */
  createNext() {
    var direction = this.fz.div(this.fzSize);
    var z = this.z.add(direction);
    this.next = new Particle(z);
    return this.next;
  }
}
class Trail {
  private particles: Particle[];
  private maxLength: number;
  private isNeeded: boolean;
  constructor(z: Complex) {
    var particle = new Particle(z);
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

let trails: Trail[] = [];
export const setupTrails = () => {};
export const addRandomTrail = () => {
  var u = _.p.random(_.leftU, _.rightU);
  var v = _.p.random(_.bottomV, _.topV);
  addTrail(u, v);
};
export const addTrail = (u: number, v: number) => {
  const trail = new Trail(createComplex(u, v));
  trails.push(trail);
};
export const removeAllTrials = () => {
  trails = [];
};
export const drawTrails = () => {
  _.p.push();
  trails.forEach((trail) => trail.draw());
  _.p.pop();
  trails = trails.filter((trail) => trail.getIsNeeded());
  store.dispatch(setNumTrailsNow(trails.length));
  const automaticallyCreateTrails = selectTrailsState(
    store.getState()
  ).automaticallyCreate;
  if (automaticallyCreateTrails) {
    const numTrailsGoal = selectTrailsState(store.getState()).numTrailsGoal;
    for (let i = 0; i < numTrailsGoal - trails.length; i++) {
      addRandomTrail();
    }
  }
};
