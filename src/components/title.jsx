import { useState } from 'react'
import titleLogoWhite from '../assets/title_white.svg'
import bottombar from '../assets/bottombar_blue.svg'
import blue_globe from '../assets/blue_globe.svg'
import '../css/title.css'

function Title(){
    return(
        <div className='title_wrapper'>
            <div className='title'>
                <div className='title_inner'>
                    <img src={blue_globe} className='asset_blueglobe'/>
                    <img src={titleLogoWhite} className='title_name'/>
                </div>
            </div>
            <div className='asset_bottombar'>
                <img src={bottombar} />
            </div>
        </div>
    )
}

export default Title