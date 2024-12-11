import React from "react";
import { Link } from "react-router-dom";

export default function Mains() {
    return (
   

            <div className="home" style={{backgroundColor: "000"}}>
                <h1 className="bv">Bem-vindo!</h1>

                <p>O melhor lugar para organização e acessso rápido da sua coleção musical.</p>

                <img src="/images/animation.png" alt="" />

                <Link to={'/cadastro'}><button className="btn-cadastro" > Cadastre-se
                </button></Link>

                <Link to={'/login'}><button className="btn-login">Login </button></Link>
                
            </div>

 

    )
}