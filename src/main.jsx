import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AsciiConvrter from './apps/AsciiConvrter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsciiConvrter></AsciiConvrter>
  </StrictMode>,
)
