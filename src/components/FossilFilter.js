import React, {useState} from "react";
import '../css/App.css';

function FossilFilter({search, onSearchChange}){
    const [isSearch, setIsSearch] = useState(false)
    function handleClick(){
        setIsSearch(!isSearch)
    }

    return(
        <div className="filter">
            <button onClick={handleClick}>Search</button>
            {isSearch ? <input type="text" name="search" value={search} placeholder="Search Fossils By Name or Part-Of Collection..." onChange={onSearchChange}/> : null} 
      </div>
    )
}

export default FossilFilter;