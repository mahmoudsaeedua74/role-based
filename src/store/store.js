import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./sliceAuth/authSlice";
//here put all slice
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
