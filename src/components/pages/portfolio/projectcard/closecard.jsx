import React from "react";
import "../portfolio.scss"

const Closecard = (props) => {
    return(
        <div className="p_card">
            <div className="card_img">
                <img src={props.img} alt="" />
                <p>teste</p>
            </div>
            <div className="card_title">
                <h3>{props.name}</h3>
                <div className="status">
                    <span>{props.status}</span>
                </div>
            </div>
        </div>
    )
}

export default Closecard