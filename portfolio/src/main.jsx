import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageRoutes from './PageRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageRoutes />
  </StrictMode>,
)
