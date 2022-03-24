import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {object}LevelState
 * @property {number} min
 * @property {number} max
 */

/**@type {LevelState} */
const initialState = {
  min: -3,
  max: 3,
};
const levelSlice = createSlice({
  name: "level",
  initialState,
  reducers: {
    setMin(state, action) {
      state.min = action.payload < -10 ? -10 : action.payload;
    },
    setMax(state, action) {
      state.max = action.payload > 10 ? 10 : action.payload;
    },
  },
});

/**
 * @returns {LevelState}
 */
export const selectLevelState = (state) => state.level;
export const { setMin, setMax } = levelSlice.actions;
export default levelSlice.reducer;
