import "./index.css";
import { useState } from "react";
var React = require("react");

function App(){
    
    let newTime = new Date().toLocaleTimeString();
    const [cTime , changeTime] = useState(newTime);

    function GetTime(){
        newTime = new Date().toLocaleTimeString();
        changeTime(newTime);
    };

    return(
        <>
            <h1 className="heading">{cTime}</h1>
            <button className="btn" onClick={GetTime}>GET TIME</button>
        </>
    )
};

export default App;