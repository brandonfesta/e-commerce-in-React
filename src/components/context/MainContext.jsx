import { createContext } from "react";

const MainContext = createContext()

export default function MainContextProvider({children}){
    return (
        <MainContext.Provider>
            {children}
        </MainContext.Provider>
    )
}