import React from "react";
import { Slider, Stack, Typography } from "@mui/material";
import { selectLevelState, setMax, setMin } from "../states/levelSlice";
import { useDispatch, useSelector } from "react-redux";
export default () => {
  const dispatch = useDispatch();
  const maxLevel = useSelector(selectLevelState).max;
  const minLevel = useSelector(selectLevelState).min;
  const minLevelSpace = 1;
  const handleChange = (_: any, newValue: number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) return;
    let newMinLevel: number, newMaxLevel: number;
    if (newValue[1] - newValue[0] < minLevelSpace) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 10 - minLevelSpace);
        newMinLevel = clamped;
        newMaxLevel = clamped + minLevelSpace;
      } else {
        const clamped = Math.max(newValue[1], -10 + minLevelSpace);
        newMinLevel = clamped - minLevelSpace;
        newMaxLevel = clamped;
      }
    } else {
      newMinLevel = newValue[0];
      newMaxLevel = newValue[1];
    }
    dispatch(setMin(newMinLevel));
    dispatch(setMax(newMaxLevel));
  };
  return (
    <Stack p={2} spacing={1}>
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
  );
};
