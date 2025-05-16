import { useState, useEffect } from 'react'
import '../css/studentpages.css'
import { useParams } from 'react-router-dom';

function Studentpages(){
    const {id} = useParams();
    const [student, setStudent] = useState([null]);

    useEffect(() => {
        fetch('/DESIGN341_Website/data/studentsData.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find((s) => s.id.toString() === id);
                setStudent(found);
            })
            .catch(err => console.error(err));
    }, [id]);

    if(!student){
        return <div>Loading Student...</div>
    }

    return(
        <div className='studentpage_wrapper'>
            <div className='studentpage_heading'>
                <div className='studentpage_title'>
                    <h1>{student.name}</h1>
                </div>
                <div className='studentpage_subheading'>
                    <h2>{student.role}</h2>
                </div>
                <div className='studentpage_image'>
                    <img src={student.image} />
                </div>
            </div>
            <div className='studentpage_desc'>
                <div className='studentpage_bio'>
                    <p>{student.biography}</p>
                </div>
                <div className='studentpage_pdesc'>
                    <p>{student.pdescription}</p>
                </div>
            </div>
        </div>
    )
}

export default Studentpages;