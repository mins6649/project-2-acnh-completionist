import React, {useState} from "react";
import '../css/App.css';

function DropDownMenu({search, searchChange, categoryChange}){

    return(
        <div>
            <select className="filterDropDown" name="filter" onChange={categoryChange}>
                <option value="All">Month:</option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sept</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
            </select>
            
             <input className="searchBar" type="text" name="search" value={search} placeholder="Search By Name..." onChange={searchChange}/> 
        </div>
    )
}

 export default DropDownMenu;