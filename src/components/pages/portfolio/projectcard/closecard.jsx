import React from "react";
import "../portfolio.scss"

import Img from "./teste.jpg"



const Closecard = (props) => {
    return(
        <div className="p_card">
            <div className="card_img card__image--project">
            </div>
            <div className="card_title"> 
                <div className="status">
                    <h3>{props.name}</h3>
                    <span>{props.status}</span>
                </div>
                <div className="card_btns">
                    
                        <a href={props.git}>
                                Code <i class="fa-brands fa-github"></i>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Closecard