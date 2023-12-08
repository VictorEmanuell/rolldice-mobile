import {configureStore} from "@reduxjs/toolkit";

import {loadingSlice} from "./Loading/slice";
import {userSlice} from "./User/slice";
import {characterSlice} from "./Character/slice";
import {rollingDice} from "./RollingDice/slice";

export const store = configureStore({
    reducer: {
        loading: loadingSlice.reducer,
        user: userSlice.reducer,
        character: characterSlice.reducer,
        rollingDice: rollingDice.reducer,
    },
});
