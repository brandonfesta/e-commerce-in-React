import { createContext } from "react";

let terrainType = ["dirt", "sand", "forest", "water"]

export const TerrainContext = createContext(terrainType)

export default function TerrainContextProvider({children}){
    return(
        <TerrainContext.Provider value={terrainType}>
            {children}
        </TerrainContext.Provider>
    )
}