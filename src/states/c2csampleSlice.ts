import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import c2csamples from "../models/c2csamples";
import { ids } from "../models/c2csamples";

const initialState = {
  isSelecting: true,
  selectingId: ids[0],
};

const c2csampleSlice = createSlice({
  name: "c2csampleStates",
  initialState,
  reducers: {
    setSelectingId(state, action) {
      state.isSelecting = true;
      state.selectingId = action.payload;
    },
    deselect(state) {
      state.isSelecting = false;
      state.selectingId = -1;
    },
  },
});

export const selectC2csampleState = (state: RootState) => state.c2csample;
export const selectSelectingC2cSample = createSelector(
  selectC2csampleState,
  /**
   * @param {C2CSampleState} state
   * @returns {C2CSample}
   * */
  (state) =>
    state.selectingId in c2csamples ? c2csamples[state.selectingId] : undefined
);
export const { setSelectingId, deselect } = c2csampleSlice.actions;
export default c2csampleSlice.reducer;
export type C2CSampleState = typeof initialState;
