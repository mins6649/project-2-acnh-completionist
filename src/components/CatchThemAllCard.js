import React, {useState} from "react";
import Bells from "../images/bells.png"
import "../css/App.css"

function CatchThemAllCard(props){

    const {name, location, rarity, price, image, shadow, isAllDay, time, isAllYear, nothernMonth, southernMonth, isNorth} = props

    //Displays Card Info Based on Click:
    const [isClicked, setIsClicked] = useState(true)

    const front = <div> <div>AVAILABILITY</div> {location&&<div>Location: {location}</div>} {<div>Months: {showAvailableMonths()}</div>}{isAllDay ? <div>Time: All Day</div> : <div>time: {time}</div>}</div>
    const back = <div> {shadow&&<div>Shadow Size: {shadow}</div>} {rarity&&<div>Rarity: {rarity}</div>} <p>Sell Price: {price} <img className="bellsImage" src={Bells}/></p> </div>

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
    function handleCollection(){
        setIsCollected(!isCollected)
    }
   
    return(
        <div >
            <div onClick={displayInfo}>
                <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                <img src={image} alt={name}/>
                {isClicked ? front  : back }
            </div>
            <button onClick={handleCollection}>{isCollected ? "Already Donated!" : "Donated to Museum"}</button>
            
        </div>
    )
}

export default CatchThemAllCard;