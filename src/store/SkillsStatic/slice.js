import { createSlice } from "@reduxjs/toolkit";
import { pullSkills } from "./thunks";

export const skillsSlice = createSlice({
  name: "skills",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(pullSkills.fulfilled, (state, action) => {
      // console.log('opa', action.payload)
      //state = action.payload;

      if (state.length > 0) {
        while (state.length > 0) {
          state.pop();
        }

        action.payload.forEach((skill) => {
          state.push(skill);
        });
      } else {
        action.payload.forEach((skill) => {
          state.push(skill);
        });
      }
    });
  },
});
