import { useEffect, useState } from "react";
import '../css/homepage.css'
import {Link} from 'react-router-dom'
import fb_city from '../assets/city.svg'
import fb_galaxy from '../assets/galaxy.svg'
import fb_planet from '../assets/planet.svg'
import rocket_asset from '../assets/Rocket.png'
import satel_asset from '../assets/Satellite.png'
import ship_asset from '../assets/Ship.png'
import astro from '/video/Astro.webm'
import bg_skyline from '/video/Skyline.mp4'
import bg_planet from '/video/Earth.mp4'
import bg_galaxy from '/video/Galaxy.mp4'



function Homepage(){
    const [infoData, setInfoData] = useState([]);

    useEffect(() => {
        fetch('/DESIGN341_Website/data/homepage_information.json')
            .then(res => res.json())
            .then(data => setInfoData(data))
            .catch(err => console.error(err));
    }, []);


    return(
        <div className="homepage_wrapper">
            <div className="intro_wrapper">
                {infoData.map(item => (
                    <h2 key={item.id} className="hp_para">{item.info}</h2>
                ))}
                <div className="div_astronaut">
                    <video autoPlay muted loop playsInline className="astro_video">
                    <source src={astro} type="video/mp4"/> 
                            your browser does not support the video tag
                    </video>
                </div>
            </div>

            <div>
                <Link className="link_pages" to="/DESIGN341_Website/cohort">
                <div className="div_cohort">
                    <video autoPlay muted loop playsInline poster={fb_city} className="background_video">
                        <source src={bg_skyline} type="video/mp4"/> 
                        your browser does not support the video tag
                    </video>

                    <div className="content_overlay">
                        <h1>STUDENT COHORT</h1>
                    </div>

                    <div className="div_hoverimg">
                        <img src={rocket_asset} className="hover_image_rocket" />
                    </div>
                </div>
                </Link>
                <Link className="link_pages" to="/DESIGN341_Website/portfolio">
                    <div className="div_port">
                        <video autoPlay muted loop playsInline poster={fb_planet} className="background_video">
                            <source src={bg_planet} type="video/mp4"/>
                            your browser does not support the video tag
                        </video>

                        <div className="content_overlay">
                            <h1>PORTFOLIO</h1>
                        </div>

                        <div className="div_hoverimg">
                            <img src={satel_asset} className="hover_image_satel" />
                        </div>
                    </div>
                </Link>
                <Link className="link_pages" to="/DESIGN341_Website/contacts">
                    <div className="div_contact">
                        <video autoPlay muted loop playsInline poster={fb_galaxy} className="background_video">
                            <source src={bg_galaxy} type="video/mp4"/>
                            your browser does not support the video tag
                        </video>
                        <div className="content_overlay">
                            <h1>CONTACTS</h1>
                        </div>
                        <div className="div_hoverimg">
                            <img src={ship_asset} className="hover_image_ship" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Homepage