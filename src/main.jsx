import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Supports weights 300-700
import '@fontsource-variable/space-grotesk';
import './css/index.css'
import Title from './components/title.jsx'
import Navbar from './components/navbar.jsx'
import Background from './components/background.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/homepage.jsx'
import Cohort from './pages/cohortpage.jsx'
import Portfolio from './pages/portfoliopage.jsx'
import Contacts from './pages/contactspage.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Title /> 
    <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cohort' element={<Cohort />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
