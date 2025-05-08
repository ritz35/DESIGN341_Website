import { useEffect, useState } from "react";
import '../css/searchbar.css'

function SearchBar(){
    const [query, setQuery] = useState("");
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("data/studentsData.json")
        .then((res) => res.json())
        .then((data) => setStudents(data));
    }, []);

    const filtered = students.filter((s) =>
        s.name.toLowerCase().includes(query.toLowerCase())
    );

    return(
        <div>
            <input className="searchbar" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <ul>
                {/*filtered.map((s,i) => 
                <li key={i}>{s}</li>)*/}
            </ul>
        </div>
    )
}

export default SearchBar;