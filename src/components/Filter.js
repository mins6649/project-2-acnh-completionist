import React, {useState} from "react";
import DropDownMenu from "./DropDownMenu";
import '../css/App.css';

function Filter({search, searchChange, categoryChange}){

    const [isSearch, setIsSearch] = useState(false)
    function handleClick(){
        setIsSearch(!isSearch)
    }

    return(
        <div className="filter">
            <div>
                <button onClick={handleClick}>Search</button>
                <div>
                    {isSearch ? <DropDownMenu  search={search} searchChange={searchChange} categoryChange={categoryChange}/> : null} 
                </div>
                
            </div>
      </div>
    )
}

export default Filter;