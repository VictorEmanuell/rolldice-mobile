import { configureStore } from "@reduxjs/toolkit";

import { loadingSlice } from "./Loading/slice";
// import {  } from "./user/slice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice.reducer,
    //user: userSlice.reducer,
  },
});
