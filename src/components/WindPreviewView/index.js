import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  automaticallyCreateState,
  numTrailsGoalState,
  numTrailsNowState,
} from "../../states/trailsStates";
import { minLevelState, maxLevelState } from "../../states/levelStates";
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
