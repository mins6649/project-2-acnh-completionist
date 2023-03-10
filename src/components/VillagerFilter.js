import React, {useState} from "react";
import DDM from "./DDM";
import '../css/App.css';
import MagnifyingGlass from "../images/wmagglass.png"

function VillagerFilter({search, onSearchChange, categoryChange}){

    const [isSearch, setIsSearch] = useState(false)
    function handleClick(){
        setIsSearch(!isSearch)
    }

    return(
        <div className="filter">
            <button className="searchButton" onClick={handleClick}> <img className="magImg" src={MagnifyingGlass}/> </button>
            {isSearch ? <DDM search={search} searchChange={onSearchChange} categoryChange={categoryChange} placeholder="Search by Name, Species or Personalities..."/> : null} 
      </div>
    )
}

export default VillagerFilter;