import React from "react";
import ReactDOM from "react-dom";
import { Container, Grid, Stack } from "@mui/material";
import WindPreviewView from "./components/WindPreviewView";
import TrailsSettingView from "./components/TrailsSettingView";
import LevelRangeView from "./components/LevelRangeView";
import { store } from "./states";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
