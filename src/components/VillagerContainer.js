import React, {useState, useEffect} from "react";
import VillagerList from "./VillagerList";
import VillagerFilter from "./VillagerFilter";
import '../css/App.css';
import VillagerForm from "./VillagerForm";

function VillagerContainer(){

    const [villagers, setVillagers] = useState([]);
    const [villagersArr, setVillagersArr] = useState([]);
    useEffect(()=>{
        fetch("http://acnhapi.com/v1a/villagers")
        .then(res => res.json())
        .then(data => setVillagers(data))

        fetch("http://localhost:3001/villagers")
        .then(res => res.json())
        .then(data => setVillagersArr(data))
    }, [])
    const updatedVillagers = villagers.concat(villagersArr)
    console.log(updatedVillagers)

    //FILTER VILLAGERS BY NAME, PERSONALITY, SPECIES
    const [search, setSearch] = useState("");
    function onSearchChange(e){
        setSearch(e.target.value)
    }
    const filter = updatedVillagers.filter((villager)=>{
        if (search === "") return true;
        return villager.name["name-USen"].toLowerCase().includes(search.toLowerCase()) || villager.species.toLowerCase().includes(search.toLowerCase()) || villager.personality.toLowerCase().includes(search.toLowerCase())
    })

    //FORM:

    const [showForm, setShowForm] = useState(false);
    function handleClick() {
      setShowForm((showForm) => !showForm);
    }

    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [personality, setPersonality] = useState("");
    const [birthday, setBirthday] = useState("");
    const [hobby, setHobby] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [image, setImage] = useState("");

    function handleName(e){
        setName(e.target.value)
    }
    function handleSpecies(e){
        setSpecies(e.target.value)
        
    }
    function handlePersonailty(e){
        setPersonality(e.target.value)

    }
    function handleBirthday(e){
        setBirthday(e.target.value)

    }
    function handleHobby(e){
        setHobby(e.target.value)

    }
    function handleCatchPhrase(e){
        setCatchPhrase(e.target.value)

    }
    function handleImage(e){
        setImage(e.target.value)

    }
    function handleSubmit(e){
        e.preventDefault();
        const newVillager = {name: {"name-USen": name}, species, personality, ["birthday-string"]: birthday, hobby, ["catch-phrase"]: catchPhrase, ["icon_uri"]: image}
        const newVillagerData = [...villagersArr, newVillager]

        fetch("http://localhost:3001/villagers",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newVillager),
        })
        .then(res => res.json())
        .then(() => setVillagersArr(newVillagerData))
    }

    return(
        <div>
            <h2 className="subtitle">
                Villagers
                <VillagerFilter 
                    search={search}
                    onSearchChange={onSearchChange}
                />
                <button onClick={handleClick}>Add a New Villager</button>
                <br/>
                {showForm ? 
                <VillagerForm 
                    handleSubmit={handleSubmit} 
                    handleName={handleName} 
                    handleSpecies={handleSpecies} 
                    handlePersonailty={handlePersonailty}
                    handleBirthday={handleBirthday} 
                    handleHobby={handleHobby}
                    handleCatchPhrase={handleCatchPhrase}
                    handleImage={handleImage}
                    /> : null }
            </h2>
            <VillagerList villagers={filter}/>
        </div>
    );
}

export default VillagerContainer;