import React, {useState} from "react"
import '../css/App.css';

function VillagerCard({name, personality, birthday, species, hobby, catchPhrase, image}){

    const [isLiked, setIsLiked] = useState(false)
    function handleLike(event){
        event.stopPropagation()
        setIsLiked(!isLiked)
    }
    const front = <div> 
            <p className="villagerCardText">Species: {species}</p> 
            <p className="villagerCardText">Personality: {personality}</p> 
            <button className="favoriteButton" onClick={handleLike}> {isLiked ? "♥" : "♡"} </button> 
        </div>

    const back = <div> 
            <p className="villagerCardText">Birthday: {birthday}</p> 
            <p className="villagerCardText">Hobby: {hobby}</p> 
            <p className="villagerCardText">Catch-phrase: {catchPhrase}</p> 
        </div> 

    const [isClicked, setIsClicked] = useState(true)
    function handleClick(){
        setIsClicked(!isClicked)
    }


    return(
        <div className="villagerCard">
            <div  >
                <div onClick={handleClick}>
                    <h3>{name}</h3>
                    <img src={image} alt={name}/>
                    {isClicked ? front  : back }
                </div>
            </div>
        </div>
    )
};  

export default VillagerCard;