import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./src/store/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
