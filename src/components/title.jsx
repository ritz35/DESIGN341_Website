import { useState } from 'react'
import titleLogoWhite from '../assets/title_white.svg'
import bottombar from '../assets/bottombar_blue.svg'
import blue_globe from '../assets/blue_globe.svg'
import title_hollow from '../assets/hollowed_v2.svg'
import '../css/title.css'

function Title(){
    return(
        <div className='title_wrapper'>
            <div className='title'>
                <div className='title_inner'>
                    <img src={blue_globe} className='asset_blueglobe'/>
                    <img src={titleLogoWhite} className='asset_title'/>
                    <img src={title_hollow} className='asset_title_hollow'/>
                </div>
            </div>
            <div className='asset_bottombar'>
                <img src={bottombar} />
            </div>
        </div>
    )
}

export default Title