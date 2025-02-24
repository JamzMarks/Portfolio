import React, { useEffect, useState } from "react";
import ProjectCard from "../../cards/projectCard/projectCarc";
import './projects.scss';

const Projects = () => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        async function getData(){
            try {
                const response = await fetch('public/data/projects.json')
                if(!response.ok){
                    throw new Error("Erro ao buscar os dados");
                }
                const jsonData = await response.json();
                setProject(jsonData);
            } catch (error) {
                console.error("Erro ao carregar os dados:", error);
            }
        }
        getData();
    }, [])

    return(
        <section className="projects">
            {project.map((element, index) => {
                return (
                    <ProjectCard 
                        key={index}
                        {...element}
                    />
                )  
            })}
        </section>
    )
}

export default Projects;