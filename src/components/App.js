import React, {useState, useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import '../css/App.css';
import MainSign from "../images/ACNHSign.png"

import Home from './Home';
import VillagerContainer from './VillagerContainer';
import FossilContainer from "./FossilContainer"
import FishContainer from './FishContainer';
import SeaCreatureContainer from './SeaCreatureContainer';
import BugContainer from "./BugContainer";
import Error from './Error';


function App() {


  return (
    <div className="App">
             
      <header className="App-header">
        <img className='mainSign' src={MainSign}/>

        <div className='header'>
          <h1 className='title'> The Complete Encyclopedia</h1>
          <nav className='navBar'>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/villagers">Villagers</Link>
            <Link className="link" to="/fossils">Fossils</Link>
            <Link className="link" to="/fish">Fish</Link>
            <Link className="link" to="/sea_creatures">Sea Creatures</Link>
            <Link className="link" to="/bugs">Bugs</Link>
          </nav>
        </div>

      </header>

      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/villagers" element={<VillagerContainer />} />
        <Route path="/fossils" element={<FossilContainer />} />
        <Route path="/fish" element={<FishContainer />} />
        <Route path="/sea_creatures" element={<SeaCreatureContainer />} />
        <Route path="/bugs" element={<BugContainer />} />
        <Route path="*" element={<Error />} />             
      </Routes>

    </div>
  );
}

export default App;
