import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Theme/themeSlice";
import dotenvReducer from "./Dotenv/dotenvSlice";
import loadingReducer from "./Loading/loadingSlice";
import languageReducer from "./Language/languageSlice";
import animationReducer from "./Animation/animationSlice";
import modalReducer from "./Modal/modalSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        dotenv: dotenvReducer,
        loading: loadingReducer,
        language: languageReducer,
        animation: animationReducer,
        modal: modalReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
