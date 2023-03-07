import React from 'react';
import '../css/App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Villagers from './Villagers';
import Error from './Error';
import Museum from './Museum';
import FossilsList from "./FossilsList";

function App() {
  return (
    <div className="App">
       
      <header className="App-header"> 
        <h1>ANCH: A Completionist Guide</h1>
      </header>

      <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/villagers">
          Villagers
        </Link>
        <Link className="link" to="/museum">
          Museum
        </Link>
      </nav>

      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/villagers" element={<Villagers />}>

        </Route>
        <Route path="/museum" element={<Museum />}>
          <Route path="fossils" element={<FossilsList />} />
          <Route path="fossils" element={<FossilsList />} />
          <Route path="fossils" element={<FossilsList />} />
          
        </Route>
            
        <Route path="*" element={<Error />}></Route>             
      </Routes>

    </div>
  );
}

export default App;
