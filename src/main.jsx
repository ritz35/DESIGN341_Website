import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Supports weights 300-700
import '@fontsource-variable/space-grotesk';
import './css/index.css'
import Title from './components/title.jsx'
import Navbar from './components/navbar.jsx'
import Background from './components/background.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/homepage.jsx'
import Cohort from './pages/cohortpage.jsx'
import Portfolio from './pages/portfoliopage.jsx'
import Contacts from './pages/contactspage.jsx'
import Studentpages from './pages/studentpages.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Background />
    <Title /> 
    <Navbar /> 
      <Routes>
        <Route path='/DESIGN341_Website/' element={<Home/>} />
        <Route path='/DESIGN341_Website/home' element={<Home />} />
        <Route path='/DESIGN341_Website/cohort' element={<Cohort />} />
        <Route path="/DESIGN341_Website/student/:id" element={<Studentpages />} />
        <Route path='/DESIGN341_Website/portfolio' element={<Portfolio />} />
        <Route path='/DESIGN341_Website/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
