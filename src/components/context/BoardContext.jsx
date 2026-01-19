import { createContext } from "react";

const cellColor = ["black", "white"]
const xReferences = ["a", "b", "c", "d", "e", "f", "g", "h"]
const yReferences = [1, 2, 3, 4, 5, 6, 7, 8]

const initialBoard = {
    cellColor: cellColor,
    xReferences: xReferences,
    yReferences: yReferences,
}

const BoardContext = createContext(initialBoard)

export default function BoardContextProvider({children}){
    return (
        <BoardContext.Provider value={initialBoard}>
            {children}
        </BoardContext.Provider>
    )
}