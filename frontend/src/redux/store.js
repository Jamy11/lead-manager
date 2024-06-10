import { configureStore } from "@reduxjs/toolkit";
import leadReducer from "./features/lead-slice";
import authReducer from "./features/auth-slice";

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // posts: postReducer,
    lead: leadReducer,
    auth: authReducer,
  },
});
