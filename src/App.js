import React from "react";
import ReactDOM from "react-dom";
import { Container, Grid, Stack } from "@mui/material";
import { RecoilRoot } from "recoil";
import WindPreviewView from "./components/WindPreviewView";
import TrailsSettingView from "./components/TrailsSettingView";
import LevelRangeView from "./components/LevelRangeView";
const App = () => {
  return (
    <RecoilRoot>
      <Container>
        <Stack spacing={1} pt={1}>
          <WindPreviewView />
          <Grid container spacing={1}>
            <Grid item sm={6}>
              <TrailsSettingView />
            </Grid>
            <Grid item sm={6}>
              <LevelRangeView />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </RecoilRoot>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
