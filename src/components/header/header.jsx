import React from "react";
import './header.scss'
import Logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <div className="container">
            <header className="header">
                
                <nav className="navbar">
                    <div className="dlogo">
                        <img src={Logo} />
                    </div>
                    <ul className="navigation">
                        <Link className="links" to='/'>Home</Link>
                        <Link className="links" to='/portfolio'>Portfolio</Link>
                        <Link className="links" to='/contact'>Contato</Link>
                    </ul> 
                </nav>
                <div className="h_infos">
                    <div className="h_content">
                        <div className="h_title">
                            <h2>Marques</h2>
                            <h2><span> James</span></h2>
                        </div>
                        <div className="h_btn">
                            <button className="btn">Entre em contato</button>
                        </div>
                    </div>
                    
                </div>
                    
            </header>
        </div>
    )
} 

export default Header