import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  automaticallyCreateState,
  numTrailsGoalState,
  numTrailsNowState,
} from "../../states/trailsStates";
import { minLevelState, maxLevelState } from "../../states/levelStates";
import _ from "./globals";
import { P5Instance, ReactP5Wrapper } from "react-p5-wrapper";
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
  p.setup = () => {
    p.createCanvas(600, 400);
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
