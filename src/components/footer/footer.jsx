import React from "react";
import './footer.scss'
import Logo from "../../assets/images/logo.png"
import {Link} from 'react-router-dom';


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
                                <Link className="flinks" to='/'>Home</Link>
                                <Link className="flinks" to='/portfolio'>Portfolio</Link>
                                <Link className="flinks" to='/contact'>Contato</Link>
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
                                <li><a href="https://www.linkedin.com/in/james-marques-48828422b/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/jamzmarks/" target='_blank'><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href="https://github.com/JamzMarks" target='_blank'><i class="fa-brands fa-github"></i></a></li>
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
