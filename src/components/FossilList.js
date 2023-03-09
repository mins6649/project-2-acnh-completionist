import React from "react";
import FossilCard from "./FossilCard";
import '../css/App.css';

function FossilList({fossils}){

    const renderFossils = fossils.map((fossil) => {
        return <FossilCard 
                key={fossil["file-name"]}
                name={fossil.name["name-USen"]} 
                price={fossil.price}
                image={fossil["image_uri"]}
                partOf={fossil["part-of"]} 
                />
    })      

    return(
        <div>
            <div>
                {renderFossils}
            </div>
        </div>
    )
};

export default FossilList;