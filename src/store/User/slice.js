import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "./initialState";

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.characters = action.payload.characters;
    },
    setUserCharacterSelected(state, action) {
      state.characterSelected = action.payload;
    },
  },
});
