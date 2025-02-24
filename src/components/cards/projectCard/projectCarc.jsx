import React from "react";
import './projectCard.scss';

const ProjectCard = (props) => {
    const {title, description, tech, image, link} = props;

    return(
        <article className="projectCard">
            <div className="info">
                <div className="description">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="tech">
                    <ul>
                        {tech.map((element, index) => {
                            return(
                                <li key={index} className="tech-item">{element}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="img-wrapper">
                <img src={image} alt="Shop.co"/>
            </div>
            
        </article>
    )
}

export default ProjectCard;