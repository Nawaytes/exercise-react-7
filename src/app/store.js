import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlicer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
