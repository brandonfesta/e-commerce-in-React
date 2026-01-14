import { useContext } from "react"
import { GridContext } from "./context/GridContext"
import Grid from "./components/Grid"

function App() {
  const gridData = useContext(GridContext)

  return (
    <div>
      <Grid></Grid>
    </div>
  )
}

export default App
