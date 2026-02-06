import { createContext, useState, useReducer, useEffect } from "react";

export const SavedContext = createContext()

const initialState =  JSON.parse(localStorage.getItem("saved")) || []

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

    useEffect(() => {
        localStorage.setItem("saved", JSON.stringify(savedArr))
    }, [savedArr])

    return(
        <SavedContext.Provider value={{savedArr: savedArr, dispatch: dispatch}}>
            {children}
        </SavedContext.Provider>
    )
}