import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { themeState } from "./stateTypes";

const initialState: themeState = {
  buildInThemes: [],
  activeTheme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeEkle: (state, action: PayloadAction<any>) => {},
    themeSil: (state, action: PayloadAction<any>) => {},
    themeGuncelle: (state, action: PayloadAction<any>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { themeEkle, themeSil, themeGuncelle } = themeSlice.actions;

export default themeSlice.reducer;
