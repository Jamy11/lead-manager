import { configureStore } from "@reduxjs/toolkit";
import leadReducer from "./features/lead-slice";

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // posts: postReducer,
    lead: leadReducer,
  },
});
