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
    const [search, setSearch] = useState("");
    function onSearchChange(e){
        setSearch(e.target.value)
    }
    const filter = fossils.filter((fossil)=>{
        if (search === "") return true;
        return fossil.name["name-USen"].toLowerCase().includes(search.toLowerCase()) || fossil["part-of"].toLowerCase().includes(search.toLowerCase())
    })

    return(
        <div>
            <h2 className="subtitle">Fossils</h2>
            <FossilFilter  search={search} onSearchChange={onSearchChange}/>
            <FossilList fossils={filter}/>
        </div>
    )
};

export default FossilContainer;