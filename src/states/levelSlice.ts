import { RootState } from ".";
import { createSlice } from "@reduxjs/toolkit";

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

export const selectLevelState = (state: RootState) => state.level;
export const { setMin, setMax } = levelSlice.actions;
export default levelSlice.reducer;
export type LevelState = typeof initialState;
