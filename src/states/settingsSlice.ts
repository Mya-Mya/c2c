import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export const SETTING_VIEW_NAMES = {
  C2C_SAMPLE_SELECT: "C2C_SAMPLE_SELECT",
  LEVEL_RANGE: "LEVEL_RANGE",
  TRAILS_SETTING: "TRAILS_SETTING",
};

const initialState = {
  settingViewName: SETTING_VIEW_NAMES.C2C_SAMPLE_SELECT,
};
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettingViewName: (state, action) => {
      state.settingViewName = action.payload;
    },
  },
});

export const selectSettingsState = (state: RootState) => state.settings;

export const { setSettingViewName } = settingsSlice.actions;
export default settingsSlice.reducer;
export type SettingsState = typeof initialState;
