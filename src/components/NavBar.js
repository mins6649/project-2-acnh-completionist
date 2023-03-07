import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <header className="App-header"> 
                <h1>A Completionist Guide to the Museum</h1>
            </header>
        <nav>
            <Link className="link" to="/museum/fossils">
            Fossils
            </Link>
            <Link className="link" to="/museum/fish">
            Fish
            </Link>
            <Link className="link" to="/museum/sea_creatures">
            Sea Creatures
            </Link>
            <Link className="link" to="/museum/bugs">
            Bugs
            </Link>
        </nav>
        </div>
    )
}

export default NavBar;