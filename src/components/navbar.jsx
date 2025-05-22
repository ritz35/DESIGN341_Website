import { useState } from 'react'
import '../css/navbar.css'
import {NavLink} from 'react-router-dom'
import img_sidebar from '../assets/sidebar.svg'

function Navbar(){
  return(
        <div className="navbar_wrapper">
          <img className='nav_image' src={img_sidebar}></img>
          <div className='div_navbar'>
            <nav className='navbar'>
              <ul>
                <li className='nav_item'><NavLink className="link_pages" to="/DESIGN341_Website/home">HOME</NavLink></li>
                <li className='nav_item'><NavLink className="link_pages" to="/DESIGN341_Website/cohort">STUDENTS</NavLink></li> {/*this needs a search function */}
                <li className='nav_item'><NavLink className="link_pages" to="/DESIGN341_Website/portfolio">PORTFOLIO</NavLink></li> {/*this needs a video */}
                <li className='nav_item'><NavLink className="link_pages" to="/DESIGN341_Website/contacts">CONTACT</NavLink> </li>
              </ul>
            </nav>
          </div>
      </div>
  )

}

export default Navbar
