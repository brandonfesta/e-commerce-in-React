import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseReducer from './components/useReducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App></App> */}
    <UseReducer></UseReducer>
  </StrictMode>,
)
