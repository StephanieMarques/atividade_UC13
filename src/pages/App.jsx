import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import "./Home.css";
import Login from "./Login.jsx";
import Cadastro from "./Cadastro.jsx";
import Generos from "./Generos.jsx";
import Trap from "./Trap.jsx";

function App (){
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/cadastro' element={<Cadastro />}/>
      <Route path='/generos' element={<Generos />}/>
      <Route path='/generos/trap' element={<Trap />}/>
      
    </Routes>
    </BrowserRouter>

  ) 
}

export default App