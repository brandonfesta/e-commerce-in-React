import { useReducer, useRef } from "react";
import { nanoid } from "nanoid";

function reducer(state, action){
    switch(action.type){
        case "aggiungi": {
            return [
                {
                    text: action.input,
                    checked: false,
                    id: nanoid()
                },
                ...state
            ]
        }
        case "check": {
            console.log(action.id)
            return state.map(task => {
                if(task.id === action.id){
                    return {
                        ...task,
                        checked: !task.checked,
                    }
                } else{
                    return task
                }
            });
        }
        case "elimina": {
            return state.filter(task => task.id !== action.id)
        }
        default:
            throw new Error("errore")
    }
}

export default function UseReducer(){
    const initialState = []

    const inputValue = useRef()
    const [state, dispatch] = useReducer(reducer, initialState)

    let tasksLi = state.map((task) => <ListComponent task={task} dispatch={dispatch}></ListComponent>)

    return (
        <div>
            <h1>Prague itinerary</h1>
            <input type="text" ref={inputValue}/>
            <button onClick={() => dispatch({type: "aggiungi", input: inputValue.current.value})}>Add</button>
            <ul>
                {tasksLi}
            </ul>
        </div>
    )
}

function ListComponent({task, dispatch}){
    return (
        <li>
            <input type="checkbox" checked={task.checked} onChange={() => dispatch({type: "check", id: task.id})}/>
            {task.text}
            <button>Edit</button>
            <button onClick={() => dispatch({type: "elimina", id: task.id})}>Delete</button>
        </li>
    )
}