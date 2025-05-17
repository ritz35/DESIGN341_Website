import { useEffect, useState } from "react";
import '../css/searchbar.css'

function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <input
        className="searchbar"
        type="text"
        placeholder="Search students by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
}


export default SearchBar;