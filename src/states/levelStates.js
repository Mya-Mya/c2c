import { atom } from "recoil";

export const minLevelState = atom({
  key: "levelStates.minLevelState",
  default: -3,
});
export const maxLevelState = atom({
  key: "levelStates.maxLevelState",
  default: 3,
});
