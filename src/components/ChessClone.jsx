import ChessBoard from "./comps/ChessBoard"
import BoardContextProvider from "./context/BoardContext"

export default function ChessClone(){
    return (
        <div>
            <BoardContextProvider>
                <ChessBoard></ChessBoard>
            </BoardContextProvider>
        </div>
    )
}