import React, { useEffect, useState } from "react";
import JobCard from '../../cards/jobCard/jobCard'
import './home.scss'
import { fetchData } from "../../../utils/fetchData";


const Home = () => {  
    const [data, setData]  = useState([]);

    useEffect(() => {
            async function getData(){
                const response = await fetchData('jobs.json')
                setData(response);
            }
            getData();
        }, [])
    return(
        <article className="about">
            <div className="aboutme">
                <p className="desc">
                Hi, my name is James Marques, and I am a Computer Science student and a Full Stack Developer at Compass UOL.
                My interests are focused on Artificial Intelligence, Robotics, and Software Development, always seeking to learn and apply new knowledge.
                </p>
            </div>
            <div className="tech">
                <h2 className="title">Technologies</h2>
                <div className="tech-wrapper">
                    <p><i className="fa-solid fa-code"></i></p>
                    <ul className="tech-list">
                        <li className="tech-item">JavaScript</li>
                        <li className="tech-item">TypeScript</li>
                        <li className="tech-item">C#</li>
                        <li className="tech-item">C++</li>
                        <li className="tech-item">Python</li>
                    </ul>
                </div>
                <div className="tech-wrapper">
                    <p><i className="fa-solid fa-box"></i></p>
                    <ul className="tech-list">
                        <li className="tech-item">Docker</li>
                        <li className="tech-item">Kubernets</li>
                    </ul>
                </div>
                <div className="tech-wrapper">
                    <p><i className="fa-solid fa-database"></i></p>
                    <ul className="tech-list">
                        <li className="tech-item">MySQL</li>
                        <li className="tech-item">SQLServer</li>
                        <li className="tech-item">PostgreSQL</li>
                        <li className="tech-item">OracleDB</li>
                    </ul>
                </div>
                <div className="tech-wrapper">
                    <p><i className="fa-solid fa-screwdriver-wrench"></i></p>
                    <ul className="tech-list">
                        <li className="tech-item">React</li>
                        <li className="tech-item">Nest.js</li>
                        <li className="tech-item">Node.js</li>
                        <li className="tech-item">Next.js</li>
                        <li className="tech-item">Jest</li>
                    </ul>
                </div>
            </div>
            <div className="jobs">
                <h2 className="title">Experience</h2>
                {data.map((element, index) => {
                    return (
                        <JobCard
                            key={index}
                            {...element}
                        />
                    )
                })}
            </div>
        </article>
    )
}

export default Home