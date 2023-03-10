import React, {useState, useEffect} from "react";
import FossilFilter from "./FossilFilter";
import FossilList from "./FossilList";
import '../css/App.css';

function FossilContainer(){

    const [fossils, setFossils] = useState([]);
    useEffect(()=>{
        fetch("http://acnhapi.com/v1a/fossils")
        .then(res => res.json())
        .then(data => setFossils(data))
    }, [])


    //FILTER FOSSIL BY NAME
    const [category, setCategory] = useState("All");
    function categoryChange(e){
        setCategory(e.target.value);
    }
    const [search, setSearch] = useState("");
    function onSearchChange(e){
        setSearch(e.target.value)
    }

    let alphabeticalList = []
    if(category === "alphabetical"){
        alphabeticalList = fossils.sort((a,b)=>{
            if (a.name["name-USen"] > b.name["name-USen"]){
                return 1
            } else if (a.name["name-USen"] < b.name["name-USen"]){
                return -1
            } return 0
        })
    }else{
        alphabeticalList = fossils
    }

    const filter = fossils.filter((fossil)=>{
        if (search === "") return true;
        return fossil.name["name-USen"].toLowerCase().includes(search.toLowerCase()) || fossil["part-of"].toLowerCase().includes(search.toLowerCase())
    })

    return(
        <div>
            <h2 className="subtitle">
                Fossils
                <FossilFilter  search={search} onSearchChange={onSearchChange} categoryChange={categoryChange}/>
            </h2>
            <FossilList fossils={filter}/>
        </div>
    )
};

export default FossilContainer;