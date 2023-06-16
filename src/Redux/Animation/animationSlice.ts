import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { animationState } from "./stateTypes";

const initialState: animationState = {};

export const animationSlice = createSlice({
    name: "animation",
    initialState,
    reducers: {
        setContentAnimation: (state, action: PayloadAction<Function>) => {
            state.contentAnimation = action.payload;
        },
        playContentAnimation: (state) => {
            state.contentAnimation?.();
        },
    },
});

// Action creators are generated for each case reducer function
export const { playContentAnimation, setContentAnimation } = animationSlice.actions;

export default animationSlice.reducer;
