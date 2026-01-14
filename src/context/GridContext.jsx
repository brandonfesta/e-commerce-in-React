import { createContext } from "react";

let gridBaseData = {
    width: 5,
    height: 5,
}

export const GridContext = createContext(gridBaseData)

export default function GridContextProvider({children}){
    return(
        <GridContext.Provider value={gridBaseData}>
            {children}
        </GridContext.Provider>
    )
}