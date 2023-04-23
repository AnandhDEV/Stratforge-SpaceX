import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import home from "../slice/homeSlice";
import launches from "../slice/launchSlice";
// reducer

export const store = configureStore({
  reducer: {
    // reducers goes here
    home,
    launches,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
