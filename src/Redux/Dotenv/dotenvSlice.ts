import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dotenvState } from "./stateTypes";

const initialState: dotenvState = {
  loginKey: "supersecretloginkeysupersecret12",
};

export const dotenvSlice = createSlice({
  name: "dotenv",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = dotenvSlice.actions;

export default dotenvSlice.reducer;
