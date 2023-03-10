import React, {useState} from "react";
import '../css/App.css';
import MagnifyingGlass from "../images/wmagglass.png"
import DDM from "./DDM";

function FossilFilter({search, onSearchChange, categoryChange}){
    const [isSearch, setIsSearch] = useState(false)
    function handleClick(){
        setIsSearch(!isSearch)
    }

    return(
        <div className="filter">
            <button onClick={handleClick} className="searchButton" ><img className="magImg" src={MagnifyingGlass}/></button>
            {isSearch ? <DDM search={search} searchChange={onSearchChange} categoryChange={categoryChange} placeholder="Search by Name, Species or Personalities..."/> : null} 
      </div>
    )
}

export default FossilFilter;