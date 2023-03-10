import React, {useState} from "react";
import '../css/App.css';
import MagnifyingGlass from "../images/wmagglass.png"

function FossilFilter({search, onSearchChange}){
    const [isSearch, setIsSearch] = useState(false)
    function handleClick(){
        setIsSearch(!isSearch)
    }

    return(
        <div className="filter">
            <button onClick={handleClick} className="searchButton" ><img className="magImg" src={MagnifyingGlass}/></button>
            {isSearch ? <input className="searchBar" type="text" name="search" value={search} placeholder="Search Fossils By Name or Part-Of Collection..." onChange={onSearchChange}/> : null} 
      </div>
    )
}

export default FossilFilter;