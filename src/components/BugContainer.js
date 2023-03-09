import React, {useEffect, useState} from "react";
import CatchThemAllList from "./CatchThemAllList";
import Filter from "./Filter";
import '../css/App.css';

function BugContainer(){

    const [bugs, setBugs] = useState([]);
    useEffect(()=>{        
        fetch("http://acnhapi.com/v1a/bugs")
        .then(res => res.json())
        .then(data => setBugs(data))
    }, [])

    //Hemisphere
    const [isNorth, setIsNorth] = useState(true);
    function handleHemisphere(){
        setIsNorth(!isNorth)
    }

    //Filter:
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    function searchChange(e){
        setSearch(e.target.value)
    }
    function categoryChange(e) {
        setCategory(e.target.value);
        }
    const bugCategory = bugs.filter((bug)=>{
        if(category === "All"){
            return true;
        }else if (isNorth){
                return bug.availability.isAllYear || bug.availability["month-array-northern"].includes(parseInt(category))
        }else if(!isNorth){
                return bug.availability.isAllYear || bug.availability["month-array-southern"].includes(parseInt(category))
        }
    })
    const bugsList = bugCategory.filter((fish)=>{
        if (search === "") return true;
        return fish.name["name-USen"].toLowerCase().includes(search.toLowerCase()) 
    })

    return(
        <div> 
            <h2 className="subtitle">Bugs</h2>
            <button onClick={handleHemisphere}>{isNorth ? "Northern Hemisphere" : "Southern Hemisphere"}</button>
            <Filter search={search} searchChange={searchChange} categoryChange={categoryChange} />
            <CatchThemAllList arr={bugsList} isNorth={isNorth}/>

        </div>
    )
}

export default BugContainer;