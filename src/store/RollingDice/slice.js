import { createSlice } from "@reduxjs/toolkit";

export const rollingDice = createSlice({
    name: "rollingDice",
    initialState: {
        rolling: false,
        payload: ''
    },
    reducers: {
        setRolling(state, action) {
            state.rolling = action.payload.rolling;
            state.payload = action.payload.payload;
        },
    },
});
