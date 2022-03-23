import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  automaticallyCreateState,
  numTrailsGoalState,
  numTrailsNowState,
} from "../../states/trailsStates";
import { minLevelState, maxLevelState } from "../../states/levelStates";
import _ from "./globals";
import { setupTrails, drawTrails, addTrail } from "./trails";

import ParticleStyle1 from "../../models/particlestyle/ParticleStyle1";
import { P5Instance, ReactP5Wrapper } from "react-p5-wrapper";
import Transformer from "../../models/Transformer";
import drawAxis from "./drawAxis";
import coperation from "../../models/complex/coperation";

/**
 * @typedef {object} WindPreviewViewProps
 * @property {boolean} automaticallyCreateTrails
 * @property {number} numTrailsGoal
 * @property {number} minLevel
 * @property {number} maxLevel
 * @property {(n:number)=>void} onNumTrailsChange
 */

/**
 *
 * @param {P5Instance} p
 */
const sketch = (p) => {
  _.p = p;
  _.transformer = new Transformer(0, 0, 300, 200, 10);
  _.particleStyle = new ParticleStyle1();
  _.func = (z) => coperation.exp.n(z);
  let grabbing = false;
  let grabbingU = 0;
  let grabbingV = 0;
  p.setup = () => {
    p.createCanvas(800, 400);
    p.frameRate(10);
    setupTrails();
  };
  /**
   *
   * @param {WindPreviewViewProps} props
   */
  p.updateWithProps = (props) => {
    _.props = props;
  };
  p.draw = () => {
    //Update globals
    _.leftU = _.transformer.u(0);
    _.rightU = _.transformer.u(p.width);
    _.topV = _.transformer.v(0);
    _.bottomV = _.transformer.v(p.height);
    if (grabbing) _.transformer.shift(grabbingU, grabbingV, p.mouseX, p.mouseY);
    p.background(240);
    drawAxis();
    drawTrails();
  };
  p.mousePressed = () => {
    if (
      0 <= p.mouseX &&
      p.mouseX <= p.width &&
      0 <= p.mouseY &&
      p.mouseY <= p.height
    ) {
      grabbing = true;
      grabbingU = _.transformer.u(p.mouseX);
      grabbingV = _.transformer.v(p.mouseY);
    }
  };
  p.mouseReleased = () => {
    grabbing = false;
  };
  p.mouseWheel = (event) => {
    _.transformer.multA(1 - event.delta / 1000, p.mouseX, p.mouseY);
  };
  p.keyPressed = () => {
    addTrail(_.transformer.u(p.mouseX), _.transformer.v(p.mouseY));
  };
};

export default () => {
  /**@type {WindPreviewViewProps} */
  const p = {
    automaticallyCreateTrails: useRecoilValue(automaticallyCreateState),
    onNumTrailsChange: useSetRecoilState(numTrailsNowState),
    minLevel: useRecoilValue(minLevelState),
    maxLevel: useRecoilValue(maxLevelState),
    numTrailsGoal: useRecoilValue(numTrailsGoalState),
  };
  return <ReactP5Wrapper sketch={sketch} {...p} />;
};
