import { useContext } from "react"
import { GridContext } from "../context/GridContext"
import { TerrainContext } from "../context/TerrainContext"
import Cell from "./Cell"

export default function Grid(){
    const gridDimensions = useContext(GridContext)
    const terrainVariations = useContext(TerrainContext)
    let gridObject = []
    return (
        <div>
            <Cell></Cell>
        </div>
    )
}