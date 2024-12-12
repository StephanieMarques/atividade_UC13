import React from "react";
import "./HeaderMain.css"
import { Link } from "react-router-dom";

function Header () {
    return (
        <>
            
        
        <header>
            <img src="/images/cd_logo.png" alt="" /> <h1>CDMaster</h1>
         <Link to='/'><img src="/images/menu.svg" alt="" className="img-menu"/></Link>
        </header>

        </>
    )}

        export default Header;