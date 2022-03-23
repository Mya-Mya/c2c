import React from "react";
import {
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Paper,
  Slider,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { minLevelState, maxLevelState } from "../states/levelStates";
export default () => {
  const [minLevel, setMinLevel] = useRecoilState(minLevelState);
  const [maxLevel, setMaxLevel] = useRecoilState(maxLevelState);
  const minLevelSpace = 1;
  const handleChange = (e, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;
    if (newValue[1] - newValue[0] < minLevelSpace) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 10 - minLevelSpace);
        setMinLevel(clamped);
        setMaxLevel(clamped + minLevelSpace);
      } else {
        const clamped = Math.max(newValue[1], -10 + minLevelSpace);
        setMinLevel(clamped - minLevelSpace);
        setMaxLevel(clamped);
      }
    } else {
      setMinLevel(newValue[0]);
      setMaxLevel(newValue[1]);
    }
  };
  return (
    <Paper>
      <Stack p={2} spacing={1}>
        <Typography variant="h4">Level Range</Typography>
        <Slider
          value={[minLevel, maxLevel]}
          onChange={handleChange}
          valueLabelDisplay="auto"
          disableSwap
          min={-10}
          max={10}
          step={0.01}
        />
        <Typography variant="body1" sx={{ textAlign: "right" }}>
          {minLevel} ~ {maxLevel}
        </Typography>
      </Stack>
    </Paper>
  );
};
