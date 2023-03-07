import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Fossils from "./FossilsList";
import FossilCard from "./FossilCard";
import FossilsList from "./FossilsList";

function Museum(){

    return(
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Museum;
