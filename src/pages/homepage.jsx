import { useState } from "react";
import '../css/homepage.css'

function Homepage(){
    return(
        <div className="homepage_wrapper">
            <div className="div_cohort">
                <h1>STUDENT COHORT</h1>
            </div>
            <div className="div_port">
                <h1>PORTFOLIO</h1>
            </div>
            <div className="div_contact">
                <h1>CONTACT</h1>
            </div>
        </div>
    )
}

export default Homepage