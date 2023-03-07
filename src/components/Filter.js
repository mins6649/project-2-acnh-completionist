import React, {useState} from "react";

function Filter({search, onSearchChange}){
    const [isSearch, setIsSearch] = useState(false)
    function handleClick(){
        setIsSearch(!isSearch)
    }

    return(
        <div className="Filter">
            <button onClick={handleClick}>Search</button>
            {isSearch ? <input type="text" name="search" value={search} placeholder="Search Villagers by Name, Species or Personalities..." onChange={onSearchChange}/> : null} 
      </div>
    )
}

export default Filter;