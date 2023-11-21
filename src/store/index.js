import { configureStore } from "@reduxjs/toolkit";

import { loadingSlice } from "./Loading/slice";
import { userSlice } from "./User/slice";
import { characterSlice } from "./Character/slice";
import { armorSlice } from "./Armor/slice";
import { attacksSlice } from "./Attacks/slice";
import { skillsSlice } from "./Skills/slice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice.reducer,
    user: userSlice.reducer,
    character: characterSlice.reducer,
    armor: armorSlice.reducer,
    attacks: attacksSlice.reducer,
    skills: skillsSlice.reducer,
  },
});
