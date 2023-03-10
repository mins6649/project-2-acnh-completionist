import React, {useState} from "react";
import DropDownMenu from "./DropDownMenu";
import '../css/App.css';
import MagnifyingGlass from "../images/wmagglass.png"

function Filter({search, searchChange, categoryChange}){

    const [isSearch, setIsSearch] = useState(false)
    function handleClick(){
        setIsSearch(!isSearch)
    }

    return(
        <div className="filter">
            <button className="searchButton" onClick={handleClick}> <img className="magImg" src={MagnifyingGlass}/> </button>
            <div>
                {isSearch ? <DropDownMenu  search={search} searchChange={searchChange} categoryChange={categoryChange}/> : null} 
            </div>                
      </div>
    )
}

export default Filter;