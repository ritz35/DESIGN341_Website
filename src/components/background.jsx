import { useState } from 'react'
import '../css/background.css'
import globe from '../assets/blue_globe.svg'

function Background(){
    return(
        <div className='background-div'>
            <img src={globe} alt='blue globe'/>
        </div>
    )
}

export default Background