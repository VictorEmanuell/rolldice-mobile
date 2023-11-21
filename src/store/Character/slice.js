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
      state.strength = action.payload.strength;
      state.dexterity = action.payload.dexterity;
      state.constitution = action.payload.constitution;
      state.intelligence = action.payload.intelligence;
      state.wisdom = action.payload.wisdom;
      state.charisma = action.payload.charisma;
    },
  },
});
