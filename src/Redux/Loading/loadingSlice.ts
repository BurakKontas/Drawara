import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadingState } from "./stateTypes";

const initialState: loadingState = {
    isLoading: false,
    text: "",
    loadingPercent: 0,
};

export const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        startLoading: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
            state.text = action.payload;
            state.loadingPercent = 0;
        },
        endLoading: (state) => {
            setTimeout(() => {
                state.isLoading = false;
            }, 1000);
            state.text = "";
            state.loadingPercent = 100;
        },
        addLoadingPercent: (state, action: PayloadAction<number>) => {
            state.loadingPercent = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { startLoading, endLoading, addLoadingPercent } = loadingSlice.actions;

export default loadingSlice.reducer;
