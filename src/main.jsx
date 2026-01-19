import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainContextProvider from './components/context/MainContext.jsx'
import ChessClone from './components/ChessClone.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App></App> */}
    <MainContextProvider>
      <ChessClone></ChessClone>
    </MainContextProvider>
  </StrictMode>,
)
