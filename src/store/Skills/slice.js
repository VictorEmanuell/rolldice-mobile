import { createSlice } from "@reduxjs/toolkit";
import { skillsInitialState } from "./initialState";

export const skillsSlice = createSlice({
  name: "skills",
  initialState: skillsInitialState,
  reducers: {
    setSkills(state, action) {
      state = action.payload;
    },
  },
});
