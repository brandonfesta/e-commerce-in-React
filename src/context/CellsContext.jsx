import { createContext } from "react"

let gridObject = []

export const CellsContext = createContext(gridObject)

export default function CellsContextProvider({children}){
    return (
        <CellsContext.Provider value={gridObject}>
            {children}
        </CellsContext.Provider>
    )
}