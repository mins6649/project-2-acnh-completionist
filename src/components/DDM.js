import React, {useState} from "react";
import '../css/App.css';

function DDM({search, searchChange, categoryChange, placeholder}){

    return(
        <div>
            <select className="filterDropDown" name="filter" onChange={categoryChange}>
                <option value="All">All:</option>
                <option value="alphabetical">A-Z</option>
                {/* <option value="2">Favorites</option> */}
            </select>

            <input className="searchBar" 
                    type="text" name="search" 
                    value={search} 
                    placeholder={placeholder}
                    onChange={searchChange}
            />
        </div>
    )
}

 export default DDM;