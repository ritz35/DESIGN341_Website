import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/seachbar"
import '../css/cohort.css'
import exitbutton from "../assets/exit_button.svg"

function Cohort(){
    const [students, setStudents] = useState([]);
    /*This is for a module that opens up whenever a student is hovered*/
    const [hoveredStudent, setHoveredStudent] = useState(null)
    /*search query*/
    const [searchQuery, setSearchQuery] = useState("");
    /*loading bar */
    const [isLoading, setIsLoading] = useState(false);
    /* the selected card */
    const [selectedCard, setSelectedCard] = useState(null);
    const [cardRect, setCardRect] = useState(null);
    //setting the number of the loading bar
    const [loadingProgress, setLoadingProgress] = useState(0);
    //resetting the fill animation
    const [loadingAnimKey, setLoadingAnimKey] = useState(0);
    //To store the delay timer
    const hoverDelayTimeout = useRef(null);
    const loadingInterval = useRef(null);
    const popupTimeout = useRef(null);


    useEffect(() => {
      if (isLoading) {
        setLoadingAnimKey(prev => prev + 1); // triggers animation restart
      }
    }, [isLoading]);

    //the method getting the information from the json data file
    useEffect(() => {
        fetch('/DESIGN341_Website/data/studentsData.json')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error("error in cohort page loading the students data: ", error));
    }, []);


const handleMouseEnter = (student, event) => {
    if (isLoading) return;

    if (hoverDelayTimeout.current) {
      clearTimeout(hoverDelayTimeout.current);
    }
    if (loadingInterval.current) {
      clearInterval(loadingInterval.current);
      loadingInterval.current = null;
    }
    if (popupTimeout.current) {
      clearTimeout(popupTimeout.current);
      popupTimeout.current = null;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    setCardRect(rect);
    setSelectedCard({ student, rect: rect });

    hoverDelayTimeout.current = setTimeout(() => {
      setIsLoading(true);
      setLoadingProgress(0);

      setTimeout(() => {
        let progress = 0;
        loadingInterval.current = setInterval(() => {
          progress += 1;
          setLoadingProgress(progress);
          if (progress >= 99) {
            clearInterval(loadingInterval.current);
            loadingInterval.current = null;
          }
        }); // Add interval delay (e.g., 30ms)
      }, 600);

      popupTimeout.current = setTimeout(() => {
        setHoveredStudent(student);
        setIsLoading(false);
        loadingInterval.current && clearInterval(loadingInterval.current);
        loadingInterval.current = null;
        popupTimeout.current = null;
      }, 3000);
    }, 2000);
};  

    /*when the mouse leaves the pop up, or on close, it will close the pop up */
    const handleMouseLeave = () => {
        // Clear delay timer if mouse leaves early
        if (hoverDelayTimeout.current) {
          clearTimeout(hoverDelayTimeout.current);
          hoverDelayTimeout.current = null;
        }
        if (loadingInterval.current) {
          clearInterval(loadingInterval.current);
          loadingInterval.current = null;
        }
        if (popupTimeout.current) {
          clearTimeout(popupTimeout.current);
          popupTimeout.current = null;
        }
        setIsLoading(false);
        setHoveredStudent(null);
    };

    /*handling search query */
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    //only render 1 thing
    const shouldRenderGhostCard = isLoading && selectedCard && !hoveredStudent;

    return(
        <div className="cohort_wrapper">
            <div className="cohort_heading">
                <h1 className="cohort_title">STUDENT COHORT</h1>
                <div className="div_searchbar">
                    <h2>Search:</h2>
                    <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </div>
            </div>

            <div className="cohort_grid">
                {filteredStudents.map((student) =>{
                    // Hide card if popup for that student is open
                    const isPopupOpen = hoveredStudent?.id === student.id;

                    if(isPopupOpen){
                        // Render placeholder to keep grid layout or null to hide completely
                        return (
                            <div
                              key={student.id}
                              className="student_card closing_placeholder"
                            />
                          );
                    }
                    
                    //makes sure everthing else stays still, but only the selected card moves
                    const isClosing = selectedCard?.student?.id === student.id && isLoading;

                    //empty placeholder
                    if(isClosing)
                        return (
                          <div 
                            key={student.id}
                            className="student_card closing_placeholder"
                          />
                        );
                    return(
                        <div 
                            className={`student_card ${isClosing ? "closing" : ""}`}
                            key={student.id}
                            onMouseEnter={(e) => handleMouseEnter(student, e)}
                            onMouseLeave={handleMouseLeave}
                            >
                            <img src={student.image} alt={student.name} className="student_image" />
                            <h2>{student.name}</h2>
                            <h3>{student.role}</h3>
                        </div>
                    )
                })}
            </div>

            {hoveredStudent && (
                <div className="student_popup"
                    onMouseEnter={() => handleMouseEnter(hoveredStudent)}
                    onMouseLeave={handleMouseLeave}>

                    <button className="popup_close_button" onClick={() => setHoveredStudent(null)}>
                        x
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
            
            {isLoading && selectedCard && cardRect && !hoveredStudent &&(
                <div className="loadingbar_wrapper">
                    <div className="loadingbar" key={(loadingAnimKey)}>
                        <div className="loading_fill" style={{ width: `${loadingProgress}%` }} />
                            <span className="loading_number" style={{ left: `${loadingProgress}%` }}>
                                {loadingProgress}%
                            </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cohort