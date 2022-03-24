import { createSelector, createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {object}TrailsState
 * @property {boolean} automaticallyCreate
 * @property {number} numTrailsGoal
 * @property {number} numTrailsNow
 */

const initialState = {
  automaticallyCreate: true,
  numTrailsGoal: 100,
  numTrailsNow: 0,
};

const trailsSlice = createSlice({
  name: "trailsStates",
  initialState,
  reducers: {
    setAutomaticallyCreate(state, action) {
      state.automaticallyCreate = action.payload;
    },
    setNumTrailsGoal(state, action) {
      state.numTrailsGoal = action.payload;
    },
    setNumTrailsNow(state, action) {
      state.numTrailsNow = action.payload;
    },
  },
});

/**
 *
 * @returns {TrailsState}
 */
export const selectTrailsState = (state) => state.trails;
export const { setAutomaticallyCreate, setNumTrailsGoal, setNumTrailsNow } =
  trailsSlice.actions;
export default trailsSlice.reducer;
