import React from "react";
import CatchThemAllCard from "./CatchThemAllCard";
import '../css/App.css';

function CatchThemAllList({arr, isNorth}){

    const renderList = arr.map((x) =>{
        // const [id, name, availability, shadow, price, image_uri ] = x
        return <CatchThemAllCard 
                key={x.id}
                name={x.name["name-USen"]}
                location={x.availability.location}
                rarity={x.availability.rarity}
                price={x.price}
                image={x.icon_uri}
                shadow={x.shadow}
                
                isAllDay={x.availability.isAllDay}
                time={x.availability.time}

                isAllYear={x.availability.isAllYear}
                nothernMonth={x.availability["month-northern"]}
                southernMonth={x.availability["month-southern"]}

                isNorth={isNorth}
                />
    })
    return(
        <div>
            {renderList}
        </div>
    )
}

export default CatchThemAllList;