import { useState, useEffect } from "react";
import '../css/portfolio.css';

function Portfolio() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('/DESIGN341_Website/data/studentsData.json')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error("Error loading student data:", error));
    }, []);

    return (
        <div className="portfolio_wrapper">
            <div className="portfolio_header">
                <h1>PORTFOLIO</h1>
            </div>

            <div className="portfolio_grid">
                {students.map((student) => (
                    <div className="portfolio_card" key={student.id}>
                        <div className="card_media">
                            <video className="student_video" controls>
                                <source src={student.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
