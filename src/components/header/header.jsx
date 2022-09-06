import React from "react";
import './header.scss'
import Logo from "../../assets/images/logo.png"
import AppRoutes from "../../main/AppRoutes";

const Header = () =>{
    return(
        <div className="container">
            <header className="header">
                
                <nav className="navbar">
                    <div className="dlogo">
                        <img src={Logo} />
                    </div>
                    <ul className="navigation">
                            <a href='/'><li>Home</li></a>
                            <a href='portfolio'><li>Portfolio</li></a>
                            <a href='/contact'><li>Contato</li></a>
                    </ul> 
                    {/* <div>
                        <p>+55 (11) 997960292</p>
                    </div> */}
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