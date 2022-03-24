import { configureStore } from "@reduxjs/toolkit";
import trailsReducer from "./trailsSlice";
import levelReducer from "./levelSlice";
export const store = configureStore({
  reducer: {
    trails: trailsReducer,
    level: levelReducer,
  },
});
