import { createSlice } from "@reduxjs/toolkit";
import { armorInitialState } from "./initialState";

export const armorSlice = createSlice({
  name: "armor",
  initialState: armorInitialState,
  reducers: {
    setArmor(state, action) {
      state.slot1_name = action.payload.slot1_name;
      state.slot1_defense = action.payload.slot1_defense;
      state.slot1_penalty = action.payload.slot1_penalty;
      state.slot2_name = action.payload.slot2_name;
      state.slot2_defense = action.payload.slot2_defense;
      state.slot2_penalty = action.payload.slot2_penalty;
      state.use_attribute = action.payload.use_attribute;
      state.attribute = action.payload.attribute;
      state.others = action.payload.others;
    },
  },
});
