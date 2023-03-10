import React, {useState} from "react";
import Bells from "../images/bells.png"
import "../css/App.css"

function FossilCard({name, price, image, partOf}){
    
    //Collection:
    const [isCollected, setIsCollected] = useState(false)
    function handleCollection(){
        setIsCollected(!isCollected)
    }

    return(
        <div className="villagerCard">
            <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            <img src={image} alt={name} />
            <div>Part Of: {partOf.charAt(0).toUpperCase() + partOf.slice(1)}</div>
            <div>Sell Price: {price} <img className="bellsImage" src={Bells}/> </div>
            <button className={isCollected?"donationButton donatedButton":"donationButton"} onClick={handleCollection} >{isCollected ? "Already Donated!" : "Donate to Museum"}</button>
        </div>
    )
}

export default FossilCard;