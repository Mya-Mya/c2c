import { configureStore } from "@reduxjs/toolkit";
import trailsReducer from "./trailsSlice";
import levelReducer from "./levelSlice";
import c2csampleReducer from "./c2csampleSlice";
export const store = configureStore({
  reducer: {
    trails: trailsReducer,
    level: levelReducer,
    c2csample: c2csampleReducer,
  },
});
