import { useState } from 'react'
import '../css/navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
  return(
      <div className='div_navbar'>
        <nav className='navbar'>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="cohort">STUDENT COHORT</Link></li> {/*this needs a search function */}
            <li><Link to="portfolio">PORTFOLIO</Link></li> {/*this needs a video */}
            <li><Link to="contacts">CONTACT</Link> </li>
          </ul>
        </nav>
      </div>
  )
}

export default Navbar
