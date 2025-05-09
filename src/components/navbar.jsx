import { useState } from 'react'
import '../css/navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar(){
  return(
      <div className='div_navbar'>
        <nav className='navbar'>
          <ul>
            <li><NavLink className="link_pages" to="/DESIGN341_Website">HOME</NavLink></li>
            <li><NavLink className="link_pages" to="cohort">STUDENT COHORT</NavLink></li> {/*this needs a search function */}
            <li><NavLink className="link_pages" to="portfolio">PORTFOLIO</NavLink></li> {/*this needs a video */}
            <li><NavLink className="link_pages" to="contacts">CONTACT</NavLink> </li>
          </ul>
        </nav>
      </div>
  )
}

export default Navbar
