import { createSlice } from "@reduxjs/toolkit";
import { attacksInitialState } from "./initialState";

export const attacksSlice = createSlice({
  name: "attacks",
  initialState: attacksInitialState,
  reducers: {
    setAttacks(state, action) {
      state = action.payload;
    },
  },
});
