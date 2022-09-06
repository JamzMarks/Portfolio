import React from "react";

const Socials = () => {
    return(
        <div className="socials">
            <div className="s_container">
                <div className="divisoria">
                    <h2>Opções de Contato</h2>
                </div>
                
                <div className="s_cont">
                    <div className="s_row">
                        <div className="s_title">
                            <h3 >Telefone</h3>
                        </div>
                        <div className="s_info">
                            <p>+55 (11) 997960-292</p>
                        </div>
                    </div>
                </div>
                <div className="s_cont">
                    <div className="s_row">
                        <div className="s_title">
                            <h3 >E-mail</h3>
                        </div>
                        <div className="s_info">
                            <p>jamzmarks@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="s_cont">
                    <div className="s_row">
                        <div className="s_title">
                            <h3 >Social</h3>
                        </div>
                        <div className="s_info">
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/james-marques-48828422b/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/jamzmarks/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="https://github.com/JamzMarks" target='_blank'><i class="fa-brands fa-github"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials