import React from "react";

const Socials = () => {
    return(
        <section className="socials">
                <div className="s_cont">
                    <div className="s_row">
                        <div className="s_title">
                            <h3 ><i className="fa-solid fa-phone"></i>Telefone</h3>
                        </div>
                        <div className="s_info">
                            <p>+55 (11) 997960-292</p>
                        </div>
                    </div>
                </div>
                <div className="s_cont">
                    <div className="s_row">
                        <div className="s_title">
                            <h3> <i className="fa-solid fa-envelope"></i> E-mail</h3>
                        </div>
                        <div className="s_info">
                            <p>jamzmarks@gmail.com</p>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Socials