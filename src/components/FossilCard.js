import React from "react";
import Bells from "../images/bells.png"
import "../css/App.css"

function FossilCard({name, price, image, partOf}){
    
    return(
        <div>
            <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            <img src={image} alt={name} />
            <div>Part Of: {partOf.charAt(0).toUpperCase() + partOf.slice(1)}</div>
            <div>Sell Price: {price} <img className="bellsImage" src={Bells}/> </div>
            <button>collected</button>
        </div>
    )
}

export default FossilCard;