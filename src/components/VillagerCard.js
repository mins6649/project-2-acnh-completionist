import React, {useState} from "react"
import '../css/App.css';

function VillagerCard({name, personality, birthday, species, hobby, catchPhrase, image}){

    const [isLiked, setIsLiked] = useState(false)
    function handleLike(event){
        event.stopPropagation()
        setIsLiked(!isLiked)
    }
    const front = <div> 
            <p class="villagerCardText">Species: {species}</p> 
            <p class="villagerCardText">Personality: {personality}</p> 
            <button class="favoriteButton" onClick={handleLike}> {isLiked ? "♥" : "♡"} </button> 
        </div>

    const back = <div> 
            <p class="villagerCardText">Birthday: {birthday}</p> 
            <p class="villagerCardText">Hobby: {hobby}</p> 
            <p class="villagerCardText">Catch-phrase: {catchPhrase}</p> 
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