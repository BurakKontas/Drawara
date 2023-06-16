import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { modalState } from "./stateTypes";

const initialState: modalState = {
    open: false,
    link: "",
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state) => {
            state.open = true;
        },
        closeModal: (state) => {
            state.open = false;
        },
        setModalLink: (state, action: PayloadAction<string>) => {
            state.link = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { closeModal, openModal, setModalLink } = modalSlice.actions;

export default modalSlice.reducer;
