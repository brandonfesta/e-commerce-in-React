import { useContext, useEffect, useState } from "react"
import { GridContext } from "../context/GridContext"
import { TerrainContext } from "../context/TerrainContext"
import { nanoid } from "nanoid"
import Row from "./Row"
import { CellsContext } from "../context/CellsContext"

export default function Grid(){
    const gridDimensions = useContext(GridContext)
    const terrainVariations = useContext(TerrainContext)
    const gridData = useContext(CellsContext)
    const [grid, setGrid] = useState(gridData)
    
    useEffect(() => {
        const newGrid = []

        for(let y = 0; y < gridDimensions.height; y++){
            const row = []
            for(let x = 0; x < gridDimensions.width; x++){
                let terrainSelection = Math.floor(Math.random() * terrainVariations.length)
                row.push({ terrain: terrainVariations[terrainSelection], id: nanoid() })
            }
            newGrid.push(row)
        }

        setGrid(newGrid)
    }, [gridData])
    let output = grid.map((row) => <Row rowArray={row}></Row>)

    return (
        <div>
            {output}
        </div>
    )
}