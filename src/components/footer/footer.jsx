import React from "react";
import ReactDOM from 'react-dom'
import './footer.scss'
import Logo from "../../assets/images/logo.png"
import { Link} from "react-router-dom"

const Footer = () =>{
    return(
        
        <div className="content">
            <div className="main">
                <footer className="footer">
                    <div className="dlogo">
                            <img src={Logo} />
                    </div>
                    <nav>
                        <div className="f-navigation">
                            <span className="span">Navigation</span>
                            <ul className="f-navbar">
                                <li>Home</li>
                                <li>Portfolio</li>
                                <li>Contato</li>
                            </ul>
                        </div>                        
                    </nav>
                    <div className="info">
                        <span className="span">E-mail</span>
                        <p>Jamzmarks@gmail.com</p>
                    </div>
                    <div className="socials">
                        <span className="span">Sociais</span>
                            <ul className="f-navbar">
                                <li><i class="fa-brands fa-linkedin"></i></li>
                                <li><i class="fa-brands fa-instagram"></i></li>
                                <li><i class="fa-brands fa-github"></i></li>
                            </ul>
                    </div> 
                    <div className="copy"> 
                        <p><span className="lower">Copyright © 2022. Todos direitos reservados.</span></p>
                    </div>                   
                </footer>
            </div>       
        </div>
    )
}

export default Footer