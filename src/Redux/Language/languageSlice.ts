import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { languageState } from "./stateTypes";
import { Language } from "@/Types/Language";

const initialState: languageState = {
  languageCode: "tr-TR",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    updateLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateLanguage } = languageSlice.actions;

export default languageSlice.reducer;
