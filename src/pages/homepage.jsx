import { useEffect, useState } from "react";
import '../css/homepage.css'
import {Link} from 'react-router-dom'
import fb_city from '../assets/city.svg'
import fb_galaxy from '../assets/galaxy.svg'
import fb_planet from '../assets/planet.svg'


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
                    <h4 key={item.id} className="hp_para">{item.info}</h4>
                ))}
            </div>
            <div>
                <Link className="link_pages" to="/DESIGN341_Website/cohort">
                <div className="div_cohort">
                    <video autoPlay muted loop playsInline poster={fb_city} className="background_video">
                        {/* <source src="/DESIGN341_Website/video/test_video.mp4" type="video/mp4"/> */}
                        your browser does not support the video tag
                    </video>

                    <div className="content_overlay">
                        <h1>STUDENT COHORT</h1>
                    </div>
                </div>
                </Link>
                <Link className="link_pages" to="/DESIGN341_Website/portfolio">
                    <div className="div_port">
                    <video autoPlay muted loop playsInline poster={fb_planet} className="background_video">
                        {/* <source src="/DESIGN341_Website/video/test_video2.mp4" type="video/mp4"/> */}
                        your browser does not support the video tag
                    </video>

                        <div className="content_overlay">
                            <h1>PORTFOLIO</h1>
                        </div>
                    </div>
                </Link>
                <Link className="link_pages" to="/DESIGN341_Website/contacts">
                    <div className="div_contact">
                        <video autoPlay muted loop playsInline poster={fb_galaxy} className="background_video">
                            {/* <source src="/DESIGN341_Website/video/test_video3.mp4" type="video/mp4"/> */}
                            your browser does not support the video tag
                        </video>

                        <div className="content_overlay">
                            <h1>CONTACTS</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Homepage