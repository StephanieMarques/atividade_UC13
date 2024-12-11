import React from "react";
import Header from "./HeaderMain.jsx";
import Card from "./Card.jsx"
import "./Home.css";
import "./Card.css";
import Mains from "./Mains.jsx";


function Home() {
    return (
        <>
            <Header />
            <Card>
            <Mains/>
            </Card>
    
        </>
    )
}

export default Home;