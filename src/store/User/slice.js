import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "./initialState";
import { pullUser } from "./thunks";

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    resetUser: () => userInitialState,
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
  extraReducers: (builder) => {
    builder
      .addCase(pullUser.fulfilled, (state, action) => {
        
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.characters = action.payload.characters;
        // state.loading = { active: false, label: "" };
        // console.log(state)

        // console.log(state.user);
      })
      .addCase(pullUser.pending, (state, action) => {
        // state.loading = { active: true, label: "Carregando..." };
      })
      .addCase(pullUser.rejected, (state, action) => {
        console.log("error");
        // state.loading = { active: false, label: "" };
      });
  },
});
