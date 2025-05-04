import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Supports weights 300-700
import '@fontsource-variable/space-grotesk';
import './css/index.css'
import Title from './components/title.jsx'
import Navbar from './components/navbar.jsx'
import Background from './components/background.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title /> 
    <Navbar /> 
  </StrictMode>,
)
