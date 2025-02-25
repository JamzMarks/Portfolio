import React from "react";
import './button.scss'

const Button = (props) => {
    const {text, type, icon} = props
    return(
        <button 
            type={type}
            className="button"
        >
           <span><i className={icon}></i> </span>
            {text}
        </button>
    )
}

export default Button;