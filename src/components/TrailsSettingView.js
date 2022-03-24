import React from "react";
import {
  Button,
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
import { useDispatch, useSelector } from "react-redux";
import {
  selectTrailsState,
  setAutomaticallyCreate,
  setNumTrailsGoal,
} from "../states/trailsSlice";
import { removeAllTrials } from "./WindPreviewView/trails";
export default () => {
  const dispatch = useDispatch();
  const automaticallyCreate = useSelector(
    (s) => selectTrailsState(s).automaticallyCreate
  );
  const numTrailsGoal = useSelector((s) => selectTrailsState(s).numTrailsGoal);
  const numTrailsNow = useSelector((s) => selectTrailsState(s).numTrailsNow);
  return (
    <Stack p={2} spacing={1}>
      <FormControlLabel
        control={
          <Switch
            checked={automaticallyCreate}
            onChange={(e) => dispatch(setAutomaticallyCreate(e.target.checked))}
          />
        }
        label="Automatically Create"
        labelPlacement="start"
      />
      <FormControlLabel
        control={
          <Slider
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={300}
            onChange={(e, value) => dispatch(setNumTrailsGoal(value))}
            value={numTrailsGoal}
          />
        }
        label="Number Goal"
        labelPlacement="start"
      />
      <Typography variant="body1" sx={{ textAlign: "right" }}>
        {numTrailsNow} / {numTrailsGoal}
      </Typography>
      <Button variant="outlined" onClick={removeAllTrials}>
        Remove All
      </Button>
    </Stack>
  );
};
