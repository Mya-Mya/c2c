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
import {
  automaticallyCreateState,
  numTrailsGoalState,
  numTrailsNowState,
} from "../states/trailsStates";
export default () => {
  const [automaticallyCreate, setAutomaticallyCreate] = useRecoilState(
    automaticallyCreateState
  );
  const [numTrailsGoal, setNumTrailsGoal] = useRecoilState(numTrailsGoalState);
  const numTrailsNow = useRecoilValue(numTrailsNowState);
  return (
    <Paper>
      <Stack p={2} spacing={1}>
        <Typography variant="h4">Trails</Typography>
        <FormControlLabel
          control={
            <Switch
              checked={automaticallyCreate}
              onChange={(e) => setAutomaticallyCreate(e.target.checked)}
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
              onChange={(e, value) => setNumTrailsGoal(value)}
              value={numTrailsGoal}
            />
          }
          label="Number Goal"
          labelPlacement="start"
        />
        <Typography variant="body1" sx={{ textAlign: "right" }}>
          {numTrailsNow} / {numTrailsGoal}
        </Typography>
      </Stack>
    </Paper>
  );
};
