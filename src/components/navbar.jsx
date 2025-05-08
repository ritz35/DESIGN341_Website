import { useState } from 'react'
import '../css/navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
  return(
      <div className='div_navbar'>
        <nav className='navbar'>
          <ul>
            <li><Link className="link_pages" to="/">HOME</Link></li>
            <li><Link className="link_pages" to="cohort">STUDENT COHORT</Link></li> {/*this needs a search function */}
            <li><Link className="link_pages" to="portfolio">PORTFOLIO</Link></li> {/*this needs a video */}
            <li><Link className="link_pages" to="contacts">CONTACT</Link> </li>
          </ul>
        </nav>
      </div>
  )
}

export default Navbar
