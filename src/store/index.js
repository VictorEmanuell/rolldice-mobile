import { configureStore } from "@reduxjs/toolkit";

import { loadingSlice } from "./Loading/slice";
import { userSlice } from "./user/slice";
import { characterSlice } from "./character/slice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice.reducer,
    user: userSlice.reducer,
    character: characterSlice.reducer,
  },
});
