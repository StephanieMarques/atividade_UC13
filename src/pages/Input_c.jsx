import React from "react";
import "./Input_c.css";
import { Link } from "react-router-dom";

function Input_c () {
     return (
        <>
        <h1 className="input_c ">Oi!</h1>

        <p className="intro_c">Crie uma conta.</p>

        <input type="nome" name="nome" id="nome" placeholder="Nome"/>

        <input type="email" name="E-mail" id="imail" placeholder="E-mail"/>

        <input type="senha" name="Senha" id="senha" placeholder="Senha"/>

        <Link to='/generos'><button className="btn-input">Cadastrar</button></Link>

        
        </>
        
     )
}

export default Input_c;