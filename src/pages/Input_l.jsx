import React from "react";
import "./Input_l.css";

function Input_l () {
     return (
        <>
        <h1 className="input">Bem-vindo!</h1>

        <p className="intro">Faça login para continuar.</p>

        <input type="email" name="E-mail" id="email" placeholder="E-mail"/>

        <input type="senha" name="Senha" id="senha" placeholder="Senha"/>

        <button className="btn-input">Login</button>

        
        </>
        
     )
}

export default Input_l;