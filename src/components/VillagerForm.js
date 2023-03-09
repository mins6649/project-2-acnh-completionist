import React from "react";
import '../css/App.css';

function VillagerForm({handleSubmit, handleName, handleSpecies, handlePersonailty, handleBirthday, handleHobby, handleCatchPhrase, handleImage}){

    return(
        <div className="container">
            <form className="addVillagers" onSubmit={handleSubmit}>
                <h3>Add a New Villager!</h3>
                <input
                type="text"
                name="name"
                placeholder="Villager's name..."
                className="input-text"
                onChange={handleName}
                />
                <br/>
                <input
                type="text"
                name="species"
                placeholder="Species..."
                className="input-text"
                onChange={handleSpecies}
                />
                <br/>
                <input
                type="text"
                name="personality"
                placeholder="Personality..."
                className="input-text"
                onChange={handlePersonailty}
                />
                <br/>
                <input
                type="text"
                name="birthday"
                placeholder="Birthday (ex May 2nd)..."
                className="input-text"
                onChange={handleBirthday}
                />
                <br/> 
                <input
                type="text"
                name="hobby"
                placeholder="Hobby..."
                className="input-text"
                onChange={handleHobby}
                />
                <br/>
                <input
                type="text"
                name="catchPhrase"
                placeholder="Catch Phrase..."
                className="input-text"
                onChange={handleCatchPhrase}
                />
                <br/>
                <input
                type="text"
                name="image"
                placeholder="Villager's icon URL..."
                className="input-text"
                onChange={handleImage}
                />
                <br/>
                <input
                type="submit"
                name="submit"
                value="Create New Villager"
                className="submit"
                />
            </form>
        </div>
    )
}

export default VillagerForm;
