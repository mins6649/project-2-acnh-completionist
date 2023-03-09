import React from "react";
import VillagerCard from "./VillagerCard";
import '../css/App.css';

function VillagerList({villagers}){

    const renderVillagers = villagers.map((villager)=>{
        return <VillagerCard 
                key={villager.id} 
                name={villager.name["name-USen"]} 
                personality={villager.personality} 
                birthday={villager["birthday-string"]} 
                species={villager.species} 
                // gender={villager.gender} 
                hobby={villager.hobby}
                catchPhrase={villager["catch-phrase"]}
                image={villager["icon_uri"]}
                />
    })

    return(
        <div className="listOfVillagers">
            {renderVillagers}
        </div>
    )
}

export default VillagerList;