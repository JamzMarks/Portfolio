import React from "react";
import Projects from "./projects/projects";
import Minip from "./minip/minip";
import './portfolio.scss'


const Portfolio = () => {
    return(
        <div>
            <Projects></Projects>
            <Minip></Minip>
        </div>
    )
}

export default Portfolio