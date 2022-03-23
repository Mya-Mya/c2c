import { atom } from "recoil";

export const automaticallyCreateState = atom({
  key: "trailsStates.automaticallyCreateState",
  default: false,
});

export const numTrailsGoalState = atom({
  key: "trailsStates.numTrailsGoalState",
  default: 100,
});

export const numTrailsNowState = atom({
  key: "trailsStates.numTrailsNowState",
  default: 0,
});
