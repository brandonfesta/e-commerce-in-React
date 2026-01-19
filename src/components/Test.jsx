import { useReducer } from "react";

const initialState = {
    units: 32,
    suppression: 0,
    fatalities: 0,
    missionStatus: "READY",
    morale: 100,
    reports: []
}

function reducer(state, action){
    switch(action.type){
        default:
            throw new Error(action.type + " non esiste")
    }
}

export default function Test(){
    const [divisionState, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            Mappa operativa:
        </div>
    )
}
