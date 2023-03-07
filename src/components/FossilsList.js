import React, {useState, useEffect} from "react";
import FossilCard from "./FossilCard";

function FossilsList(){

    //FOSSILS:
    const [fossils, setFossils] = useState([]);
    useEffect(()=>{
        fetch("http://acnhapi.com/v1a/fossils")
        .then(res => res.json())
        .then(data => setFossils(data))
    }, [])

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

export default FossilsList;