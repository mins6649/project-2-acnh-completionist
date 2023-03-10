import React from "react";
import '../css/App.css';
import YoutubeEmbed from "./YoutubeEmbed";

function Home(){

    return(
        <div className="videoHome">
             <YoutubeEmbed embedId="_3YNL0OWio0" />
        </div>
    )
};

export default Home;