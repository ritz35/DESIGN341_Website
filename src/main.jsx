import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Supports weights 300-700
import '@fontsource-variable/space-grotesk';
import './css/index.css'
import App from './components/App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
