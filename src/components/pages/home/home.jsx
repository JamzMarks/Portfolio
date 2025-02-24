import React, { useEffect, useState } from "react";
import JobCard from '../../cards/jobCard/jobCard'
import './home.scss'
// import { fetchData } from "../../../utils/fetchData";


const Home = () => {  
    const [data, setData]  = useState([]);

    useEffect(() => {
            async function getData(){
                try {
                    const response = await fetch('public/data/jobs.json')
                    if(!response.ok){
                        throw new Error("Erro ao buscar os dados");
                    }
                    const jsonData = await response.json();
                    setData(jsonData);
                } catch (error) {
                    console.error("Erro ao carregar os dados:", error);
                }
            }
            getData();
        }, [])
    return(
        <article className="about">
            <div className="aboutme">
                <p className="desc">
                    Hi, my name is James Marques and i am a computer science student and Full Stack Developer at Compass UOL. 
                    Meus interesses estão voltados para Inteligência Artificial, Robótica e Desenvolvimento de Software, sempre buscando aprender e aplicar novos conhecimentos.
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