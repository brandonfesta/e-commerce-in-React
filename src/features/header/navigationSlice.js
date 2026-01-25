import { createSlice } from "@reduxjs/toolkit";

export const routerPaths = {
    news: "News",
    science: "Science",
    health: "Health",
    about: "About"

}

export const navigationSlice = createSlice({
    name: "navigation",
    initialState: {routerPath: "news"},
    reducers: {
        navigate: state => {

        }
    }
})

export const {navigate} = navigationSlice.actions

export default navigationSlice.reducer