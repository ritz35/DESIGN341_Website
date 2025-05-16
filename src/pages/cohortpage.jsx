import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/seachbar"
import '../css/cohort.css'
import exitbutton from "../assets/exit_button.svg"

function Cohort(){
    const [students, setStudents] = useState([]);
    /*This is for a module that opens up whenever a student is hovered*/
    const [hoveredStudent, setHoveredStudent] = useState(null)
    /*this hover logic makes sure the pop up stays*/
    const [hoverTimeout, setHoverTimeout] = useState(null);


    useEffect(() => {
        fetch('/DESIGN341_Website/data/studentsData.json')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error("error in cohort page loading the students data: ", error));
    }, []);

    const handleMouseEnter = (student) => {
      //clearTimeout(hoverTimeout); // Cancel any pending hide
      setHoveredStudent(student);
    };

    const handleMouseLeave = () => {
      const timeout = setTimeout(() => setHoveredStudent(null), 200);
      setHoverTimeout(timeout);
    };


    return(
        <div className="cohort_wrapper">
            <div className="cohort_heading">
                <h1 className="cohort_title">STUDENT COHORT</h1>
                <div className="div_searchbar">
                    <h2>Search:</h2>
                    <Searchbar />
                </div>
            </div>

            <div className="cohort_grid">
                {students.map((student) =>(
                    <div 
                        className="student_card"
                        key={student.id}
                        onMouseEnter={() => handleMouseEnter(student)}
                        >
                        <img src={student.image} alt={student.name} className="student_image" />
                        <h2>{student.name}</h2>
                        <h3>{student.role}</h3>
                    </div>
                ))}
            </div>

            {hoveredStudent && (
                <div className="student_popup"
                    onMouseEnter={() => handleMouseEnter(student)}
                    onMouseLeave={handleMouseLeave}>
                        
                    <button className="popup_close_button" onClick={() => setHoveredStudent(null)}>
                        X
                    </button>

                    <div className="popup_content">
                        <img src={hoveredStudent.image} alt={hoveredStudent.name} className="popup_image"/>
                        <h1>{hoveredStudent.name}</h1>
                        <h2>{hoveredStudent.role}</h2>
                        <p>{hoveredStudent.biography}</p>

                        <Link to={`/DESIGN341_Website/student/${hoveredStudent.id}`} className="view_profile_button">
                            View Full Profile →
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cohort