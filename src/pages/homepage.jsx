import { useState } from "react";
import '../css/homepage.css'
import {Link} from 'react-router-dom'

function Homepage(){
    return(
        <div className="homepage_wrapper">
            <Link className="link_pages" to="cohort">
            <div className="div_cohort">
                <video autoPlay muted loop playsInline className="background_video">
                    <source src="video/test_video.mp4" type="video/mp4"/>
                    your browser does not support the video tag
                </video>

                <div className="content_overlay">
                    <h1>STUDENT COHORT</h1>
                </div>
            </div>
            </Link>

            <Link className="link_pages" to="portfolio">
                <div className="div_port">
                <video autoPlay muted loop playsInline className="background_video">
                    <source src="video/test_video2.mp4" type="video/mp4"/>
                    your browser does not support the video tag
                </video>

                    <div className="content_overlay">
                        <h1>PORTFOLIO</h1>
                    </div>
                </div>
            </Link>
            <Link className="link_pages" to="contacts">
                <div className="div_contact">
                    <video autoPlay muted loop playsInline className="background_video">
                        <source src="video/test_video3.mp4" type="video/mp4"/>
                        your browser does not support the video tag
                    </video>

                    <div className="content_overlay">
                        <h1>CONTACTS</h1>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Homepage