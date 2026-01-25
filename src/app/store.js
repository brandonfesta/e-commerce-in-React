import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../features/header/navigationSlice"

export default configureStore({
    reducer: {
        navigation: navigationReducer
    }
})