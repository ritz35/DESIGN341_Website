import { useState } from 'react'
import '../css/navbar.css'

function Navbar(){
  return(
      <div className='div_navbar'>
        <nav className='navbar'>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">STUDENT COHORT</a></li> {/*this needs a search function */}
            <li><a href="#">PORTFOLIO</a></li> {/*this needs a video */}
            <li><a href="#">CONTACT</a></li>
          </ul>
        </nav>
      </div>
  )
}

export default Navbar
