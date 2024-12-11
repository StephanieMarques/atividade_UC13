import React from "react";
import "./Input_c.css";

function Input_c () {
     return (
        <>
        <h1 className="input_c ">Oi!</h1>

        <p className="intro_c">Crie uma conta.</p>

        <input type="nome" name="nome" id="nome" placeholder="Nome"/>

        <input type="email" name="E-mail" id="imail" placeholder="E-mail"/>

        <input type="senha" name="Senha" id="senha" placeholder="Senha"/>

        <button className="btn-input">Cadastrar</button>

        
        </>
        
     )
}

export default Input_c;