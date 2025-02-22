import React from "react";
import './header.scss'
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <header>
            <nav className="navigation">
                <ul className="links">
                    <Link className="link" to='/'>Sobre</Link>
                    <Link className="link" to='/portfolio'>Portfolio</Link>
                    <Link className="link" to='/contact'>Contato</Link>
                </ul> 
            </nav>
        </header>
    )
} 

export default Header;