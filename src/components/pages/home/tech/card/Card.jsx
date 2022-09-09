import React from "react";
import '../../home.scss'

const Card = (props) =>{
    return(
        <div className="card">
            <div className="card_part card_face">
                <div className=" card_content ">
                     <div className="card_icon">
                        <i class={`fa-${props.type} fa-${props.icon}`}></i>
                    </div>
                </div>
            </div>
            <div className="card_part card_info ">
                <div className="desc">
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>

            </div>
        </div>
    )
}

export default Card