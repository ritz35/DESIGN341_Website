import { useState } from 'react'
import titleLogoWhite from '../assets/title_white.svg'
import '../css/title.css'

function Title(){
    return(
        <div className='title'>
            <img src={titleLogoWhite} className='title_name'/>
        </div>
    )
}

export default Title