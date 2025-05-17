import { useState, useEffect } from 'react'
import '../css/studentpages.css'
import { useNavigate, useParams } from 'react-router-dom';

function Studentpages(){
    const {id} = useParams();
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/DESIGN341_Website/data/studentsData.json')
            .then(res => res.json())
            .then(data => setStudents(data))
            .catch(err => console.error(err));
    }, []);

    if(students.length === 0){
        return <div>Loading Student...</div>
    }

    const currIndex = students.findIndex(s => String(s.id) === id);
    const currStudent = students[currIndex];

    if(!currStudent){
        return <div>Student not found</div>
    }

    /*navigation handlers (for the bottom buttons) */
    const goBacktoCohort = () => {
        navigate('/DESIGN341_Website/cohort');
    }

    const goPrev = () => {
        if(currIndex > 0){
            navigate(`/DESIGN341_Website/student/${students[currIndex - 1].id}`);
        }
    }

    const goNext = () => {
        if(currIndex < students.length - 1){
            navigate(`/DESIGN341_Website/student/${students[currIndex + 1].id}`);
        }
    }

    return(
        <div className='studentpage_wrapper'>
            <div className='studentpage_heading'>
                <div className='studentpage_title'>
                    <h1>{currStudent.name}</h1>
                </div>
                <div className='studentpage_subheading'>
                    <h2>{currStudent.role}</h2>
                </div>
                <div className='studentpage_image'>
                    <img src={currStudent.image} />
                </div>
            </div>
            <div className='studentpage_desc'>
                <div className='studentpage_bio'>
                    <p>{currStudent.biography}</p>
                </div>
                <div className='studentpage_pdesc'>
                    <p>{currStudent.pdescription}</p>
                </div>
            </div>

            <div className='button_wrapper'>
                <button className='button_cohort' onClick={goBacktoCohort}>
                    Back to Cohort Page ←←
                </button>
                <button className='button_prev' onClick={goPrev}>
                    Previous Student ←
                </button>
                <button className='button_next' onClick={goNext}>
                    Next Student →
                </button>
            </div>
        </div>
    )
}

export default Studentpages;