import { createContext, useState, useReducer } from "react";

export const SavedContext = createContext()

const initialState = []

function reducer(state, action){
    switch(action.type){
        case "addItem":
            return [action.item, ...state]
        case "delete":
            // The API doesn't provide an id.
            // I will NOT use nanoid.
            return state.filter(item => item.content !== action.content)
        default:
            throw new Error()
    }
}

export default function SavedContextProvider({children}){
    const [savedArr, dispatch] = useReducer(reducer, initialState)

    return(
        <SavedContext.Provider value={{savedArr: savedArr, dispatch: dispatch}}>
            {children}
        </SavedContext.Provider>
    )
}