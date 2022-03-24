import { createSlice } from "@reduxjs/toolkit";

export const SETTING_VIEW_NAMES = {
  C2C_SAMPLE_SELECT: "C2C_SAMPLE_SELECT",
  LEVEL_RANGE: "LEVEL_RANGE",
  TRAILS_SETTING: "TRAILS_SETTING",
};
/**
 * @typedef {object} SettingsState
 * @property {string} settingViewName
 */

/**@type {SettingsState} */
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

/**
 * @returns {SettingsState}
 */
export const selectSettingsState = (state) => state.settings;

export const { setSettingViewName } = settingsSlice.actions;
export default settingsSlice.reducer;
