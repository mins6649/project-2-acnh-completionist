import React, {useState} from "react"
import "../css/Villagers.css"

function VillagerCard({name, personality, birthday, species, gender, hobby, catchPhrase, image}){
    
    const [isClicked, setIsClicked] = useState(true)
    function handleClick(){
        setIsClicked(!isClicked)
    }
    const front = <div> <img src={image} alt={name}/> <p>{name}</p> <p>{species}</p> <p>{personality}</p> </div>
    const back = <div> <p>{birthday}</p> <p>{hobby}</p> <p>{catchPhrase}</p> </div> 
     
    return(
        <div>
            <div className="villagerCard" onClick={handleClick}>
                <button>☆</button>
                {isClicked ? front  : back }
                 {/* GENDER!!!!!!! */}
                 
            </div>
           
        </div>
    )
};  

export default VillagerCard;