import React from "react";
import "./jobCard.scss";

const JobCard = (props) => {
    const {job, company, description, tech, year} = props;
    return (
        <article className="jobCard">
            <div className="year">
                <p>{toString(year.init)} - {toString(year.end)}</p>
            </div>
            <div className="info">
                <div className="title">
                    <h2 className="job">{job} <span></span>{company}</h2>
                    
                </div>
                <p>
                    {description}
                </p>
                <div className="technologies">
                    {tech.forEach(element => {
                        return(
                            <div className="tech">
                                <p>{element}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </article>
    )
}

export default JobCard;
