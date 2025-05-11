import { useEffect, useState } from "react";
import Searchbar from "../components/seachbar"
import '../css/cohort.css'

function Cohort(){
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('/DESIGN341_Website/data/studentsData.json')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error("error in cohort page loading the students data: ", error));
    }, []);

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
                    <div className="student_card" key={student.id}>
                        <img src={student.image} alt={student.name} className="student_image" />
                        <h2>{student.name}</h2>
                        <h3>{student.role}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cohort