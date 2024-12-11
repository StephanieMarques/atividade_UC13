import React from "react";
import Header from "./HeaderMain";
import '../pages/Card.css';
import Home from "./Home.jsx";
import Mains from "./Mains.jsx";


function Card ({children}) {
    return (
    
        <>

        <div className="card"> 
            {children}
        </div>

        </>
    )
}

export default Card;