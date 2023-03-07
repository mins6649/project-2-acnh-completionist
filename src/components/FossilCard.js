import React from "react";

function FossilCard({name, price, image, partOf}){
    
    return(
        <div>
            <img src={image} alt={name} />
            <span>{name}</span>
            <span>Part Of: {partOf}</span>
            <span>Price: {price}</span>
        </div>
    )
}

export default FossilCard;