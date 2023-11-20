import { createSlice } from "@reduxjs/toolkit";
import { loadingInitialState } from "./initialState";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: loadingInitialState,
  reducers: {
    setLoading(state, action) {
      state.active = action.payload.active;
      state.label = action.payload.label;
    },
  },
});
