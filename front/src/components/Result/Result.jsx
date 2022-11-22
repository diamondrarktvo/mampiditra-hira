import React from "react";
import './Result.css';

function Result({titre, source, urlVideo}){
    return(
        <div className="container_result">
            <h4>{titre}</h4>
            <p>Source: YouTube • Channel:{source}: 192 kbps</p>
            <div className="bouttons">
                <button>Download</button>
                <button>Play</button>
            </div>
        </div>
    )
}

export default Result;