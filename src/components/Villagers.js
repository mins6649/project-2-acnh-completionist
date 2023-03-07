import React, {useState, useEffect} from "react";
import VillagerList from "./VillagerList";
import Filter from "./Filter";

function Villagers(){
    const [villagers, setVillagers] = useState([])
    useEffect(()=>{
        fetch("http://acnhapi.com/v1a/villagers")
        .then(res => res.json())
        .then(data => setVillagers(data))
    }, [])

    //FILTER:
    const [search, setSearch] = useState("");
    // const [category, setCategory] = useState("All");

    function onSearchChange(e){
        setSearch(e.target.value)
    }

    const filter = villagers.filter((villager)=>{
        if (search === "") return true;
        return villager.name["name-USen"].toLowerCase().includes(search.toLowerCase()) || villager.species.toLowerCase().includes(search.toLowerCase()) || villager.personality.toLowerCase().includes(search.toLowerCase())
    })

    return(
        <div>
            <h2>Villager Wiki</h2>
            <Filter 
                search={search}
                onSearchChange={onSearchChange}
                />
            <VillagerList villagers={filter}/>
        </div>
    );
}

export default Villagers;