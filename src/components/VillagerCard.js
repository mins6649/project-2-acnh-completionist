import React, {useState} from "react"
import '../css/App.css';

function VillagerCard({name, personality, birthday, species, hobby, catchPhrase, image}){

    const front = <div> <p>Species: {species}</p> <p>Personality: {personality}</p> </div>
    const back = <div> <p>Birthday: {birthday}</p> <p>Hobby: {hobby}</p> <p>Catch-phrase: {catchPhrase}</p> </div> 
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

                <button>Favorite</button>
                <button>My Villager</button>
                 
            </div>
           
        </div>
    )
};  

export default VillagerCard;