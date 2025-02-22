import React, { useEffect, useState } from "react";
import JobCard from '../../cards/jobCard/jobCard'
import './home.scss'
import { fetchData } from "../../../utils/fetchData";


const Home = () => {  
    const [data, setData]  = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetchData('jobs.json');
            setData(response);
        }
        getData();
    }, [])

    const data2 = [
        {
            id: 1,
            job: "Full Stack Developer Intern",
            company: "Compass UOL",
            year: {
                init: 2023,
                end: "atual"
            },
            tech: [
                "JavaScript",
                "Node.js",
                "Nest.js",
                "PostgreSQL",
                "TypeScript"
            ],
            description: "Colaborando no desenvolvimento de soluções web e mobile utilizando tecnologias modernas. Foco em React,Node.js, e integração com APIs."
    
        },
        {
            id: 2,
            job: "SEO intern",
            company: "Yooper Digital Marketing",
            year: {
                init: 2022,
                end: 2023
            },
            tech: [
                "SEO",
                "Google Analytics",
                "HTML",
                "CSS",
                "WordPress"
            ],
            description: "Colaborando no desenvolvimento de soluções web e mobile utilizando tecnologias modernas. Foco em React,Node.js, e integração com APIs."
    
        }
    ]
    console.log(data2[0])
    return(
        <article className="about">
            <div className="aboutme">
                <p className="desc">
                    Sou estudante de Ciência da Computação na UNIP - Alphaville e desenvolvedor full stack, atualmente estagiando na Compass UOL. Tive a oportunidade de realizar um estágio em SEO, o que contribuiu para minha visão estratégica em desenvolvimento e otimização de sistemas. Além disso, tenho experiência prática em projetos acadêmicos, como o desenvolvimento de um jogo multiplayer 2D utilizando Unity e Photon, e um projeto com Arduino, no qual criei um carro autônomo seguidor de linha, integrando sensores como ultrassônico e RFID, com exibição de dados em um LCD 16x2.
                    Minha experiência técnica abrange o backend, com C#, Node.js, C++, APIs REST e bancos de dados SQL como MySQL e SQL Server, além do frontend, onde utilizo ReactJS, NextJs, SASS e TypeScript. Meus interesses estão voltados para Inteligência Artificial, Robótica e Desenvolvimento de Software, sempre buscando aprender e aplicar novos conhecimentos.
                </p>
            </div>
            <div className="tech">
                <h2 className="title">Tecnologias</h2>
                <p><i className="fa-solid fa-code"></i></p>
                <p><i className="fa-solid fa-box"></i></p>
                <p><i className="fa-solid fa-database"></i></p>
                <p><i className="fa-solid fa-screwdriver-wrench"></i></p>
            </div>
            {data2.forEach((element) => {
                <JobCard job={element} />
            })}
        </article>
    )
}

export default Home