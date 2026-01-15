import { useReducer, useState } from "react";

function reducer(state, action){
    switch(action.type){
        case "input-change": {
            return {
                ...state,
                input: action.eventValue
            }
        }
        case "increment": {
            return {
                ...state,
                age: state.age + 1
            }
        }
    }
}

export default function UseReducer(){
    const [state, dispatch] = useReducer(reducer, {input: "", age: 42})

    return (
        <div>
            <input type="text" onChange={(event) => dispatch({type: "input-change", eventValue: event.target.value})}/><br />
            <button onClick={() => dispatch({type: "increment"})}>increment age</button>
            <h1>Hello, {state.input}. You are {state.age}</h1>
        </div>
    )
}