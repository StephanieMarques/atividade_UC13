import React from "react";
import Header from "./HeaderMain";
import "../pages/Lista.css";
import { Link } from "react-router-dom";

function Lista () {
    return(
    <>

    <div className="lista">
        <div className="lista_card cor01" >FUNK</div>

        <div className="lista_card cor02">SERTANEJO</div>

        <div className="lista_card cor02">KPOP</div>

    <div className="lista_card cor01">PISEIRO</div>

    <div className="lista_card cor01">ROCK</div>

    <Link to={'./trap'}><div className="lista_card cor02">TRAP</div></Link>

    <div className="lista_card cor02">PAGODE</div>

    <div className="lista_card cor01">POP</div>
    </div>
    
    </>
    )
}

export default Lista;