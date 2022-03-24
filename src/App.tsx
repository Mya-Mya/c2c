import React from "react";
import ReactDOM from "react-dom";
import { Container, Stack } from "@mui/material";
import WindPreviewView from "./components/WindPreviewView";
import SettingsView from "./components/SettingsView";
import { store } from "./states";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Stack spacing={1} pt={1}>
          <WindPreviewView />
          <SettingsView />
        </Stack>
      </Container>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
