import { createSlice } from "@reduxjs/toolkit";
import { characterInitialState } from "./initialState";

export const characterSlice = createSlice({
  name: "character",
  initialState: characterInitialState,
  reducers: {
    setCharacter(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.level = action.payload.level;
      state.class = action.payload.class;
    },
  },
});
