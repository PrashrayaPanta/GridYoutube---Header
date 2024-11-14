//configuting the store

import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
const store = configureStore({
  //   user: userReducer,
  reducer: {
    user: userReducer,
  },
});

export default store;
