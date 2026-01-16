import { useReducer, useRef } from "react";

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
    const [state, dispatch] = useReducer(reducer, {checked: false})

    return (
        <div>
            <label className="switch">
                <input type="checkbox" onChange={() => dispatch({type: "check"})} checked={state.checked}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}