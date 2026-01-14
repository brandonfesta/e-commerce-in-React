import Cell from "./Cell"

export default function Row({rowArray}){
    let rowCells = rowArray.map((cell) => <Cell parameters={cell}></Cell>)
    return (
        <div>{rowCells}</div>
    )
}