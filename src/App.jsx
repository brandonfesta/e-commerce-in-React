import { useContext } from "react"

function App() {
  let gridData = useContext(CellsContext)

  function changeTerrain(id){
    
  }

  return (
    <div>
      <Grid changeTerrain={changeTerrain}></Grid>
    </div>
  )
}

export default App
