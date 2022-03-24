import React from "react";
import { Container, Tabs, Tab } from "@mui/material";
import C2cSampleSelectView from "./C2cSampleSelectView";
import TrailsSettingView from "./TrailsSettingView";
import LevelRangeView from "./LevelRangeView";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSettingsState,
  setSettingViewName,
  SETTING_VIEW_NAMES,
} from "../states/settingsSlice";
const SettingView = ({ openingSettingViewName }) => {
  switch (openingSettingViewName) {
    case SETTING_VIEW_NAMES.C2C_SAMPLE_SELECT:
      return <C2cSampleSelectView />;
    case SETTING_VIEW_NAMES.LEVEL_RANGE:
      return <LevelRangeView />;
    case SETTING_VIEW_NAMES.TRAILS_SETTING:
      return <TrailsSettingView />;
    default:
      return <C2cSampleSelectView />;
  }
};

export default () => {
  const dispatch = useDispatch();
  const openingSettingViewName =
    useSelector(selectSettingsState).settingViewName;
  return (
    <Container>
      <Tabs
        value={openingSettingViewName}
        onChange={(_, v) => dispatch(setSettingViewName(v))}
      >
        <Tab label="C2C Sample" value={SETTING_VIEW_NAMES.C2C_SAMPLE_SELECT} />
        <Tab label="Trails Setting" value={SETTING_VIEW_NAMES.TRAILS_SETTING} />
        <Tab label="Level Range" value={SETTING_VIEW_NAMES.LEVEL_RANGE} />
      </Tabs>
      <SettingView openingSettingViewName={openingSettingViewName} />
    </Container>
  );
};
