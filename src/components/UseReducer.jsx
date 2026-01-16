import { useEffect, useReducer, useRef } from "react";

let initialState = {checked: false}

function reducer(state, action){
    switch(action.type){
        case "check":
            return {
                ...state,
                checked: !state.checked
            }
        default:
            throw new Error(action.type)
    }
}

export default function UseReducer(){

    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("checkToggle")) || initialState)

    useEffect(() => {
        localStorage.setItem("checkToggle", JSON.stringify(state))
    }, [state])
    

    return (
        <div>
            <label className="switch">
                <input type="checkbox" onChange={() => dispatch({type: "check"})} checked={state.checked}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}