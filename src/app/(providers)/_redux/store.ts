import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./reducers/profileSlice";

export const store = configureStore({
  reducer: {
    profile: profileSlice,
  },
});
