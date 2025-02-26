import React, { useEffect, useState } from "react";
import ProjectCard from "../../cards/projectCard/projectCarc";
import './projects.scss';
import { fetchData } from "../../../utils/fetchData";
const Projects = () => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        async function getData(){
            try {
                const response = await fetchData('projects.json')
                setProject(response);
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