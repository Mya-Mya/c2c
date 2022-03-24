import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

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

export const selectTrailsState = (state: RootState) => state.trails;
export const { setAutomaticallyCreate, setNumTrailsGoal, setNumTrailsNow } =
  trailsSlice.actions;
export default trailsSlice.reducer;
export type TrailsState = typeof initialState;
