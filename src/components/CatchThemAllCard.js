import React, {useState} from "react";
import Bells from "../images/bells.png"
import "../css/App.css"

function CatchThemAllCard(props){

    const {name, location, rarity, price, image, shadow, isAllDay, time, isAllYear, nothernMonth, southernMonth, isNorth} = props

    //Displays Card Info Based on Click:
    const [isClicked, setIsClicked] = useState(true)

    const front = <div> <div>AVAILABILITY</div> {location&&<div>Location: {location}</div>} {<div>Months: {showAvailableMonths()}</div>}{isAllDay ? <div>Time: All Day</div> : <div>time: {time}</div>}</div>
    const back = <div> {shadow&&<div>Shadow Size: {shadow}</div>} {rarity&&<div>Rarity: {rarity}</div>} <div>Sell Price: {price} <img className="bellsImage" src={Bells}/></div> </div>

    function displayInfo(){
        setIsClicked(!isClicked)
    }
    
    //Displays Months based on Hemisphere
    function showAvailableMonths(){
        if (isAllYear) return "All Year Long"
        if(isNorth) return nothernMonth
        return southernMonth
    }

    //Collection:
    const [isCollected, setIsCollected] = useState(false)
    function handleCollection(e){
        e.stopPropagation()
        setIsCollected(!isCollected)
    }
   
    return(
        <div className="museumCard" onClick={displayInfo}>
            <div>
                <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                <img src={image} alt={name}/>
                {isClicked ? front  : back }
            </div>
            <button className={isCollected?"donationButton donatedButton":"donationButton"} onClick={handleCollection} >{isCollected ? "Already Donated!" : "Donate to Museum"}</button>
            
        </div>
    )
}

export default CatchThemAllCard;