import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GridContextProvider from './context/GridContext.jsx'
import TerrainContextProvider from './context/TerrainContext.jsx'
import CellsContextProvider from './context/CellsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GridContextProvider>
      <TerrainContextProvider>
        <CellsContextProvider>
          <App />
        </CellsContextProvider>
      </TerrainContextProvider>
    </GridContextProvider>
  </StrictMode>,
)
