import React, { useEffect, useState } from "react";
import ProjectCard from "../../cards/projectCard/projectCarc";
import './projects.scss';
import { fetchData } from "../../../utils/fetchData";
const Projects = () => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        async function getData(){
            const response = await fetchData('projects.json')
            setProject(response);
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