import React from "react";
import Closecard from "../projectcard/closecard";

const Projects = () => {
    return(
        <div className="projects">
            <div className="p_title">
                <div className="divisoria">
                    <h2 >Projects</h2>
                </div>
                <div>
                    <p>Meus Projetos em andamento.</p>
                </div>
            </div>
            <div className="proj_content">
                <Closecard
                    url=""
                    git="https://github.com/JamzMarks/eClose"
                    name="eClose"
                    status="Em andamento">
                </Closecard>
                <Closecard
                    url=""
                    git=""
                    name="Soma 0"
                    status="Iniciando">
                </Closecard>
                <Closecard
                    url=""
                    git="https://github.com/JamzMarks/Portfolio"
                    name="Portfolio"
                    status="Em andamento">
                </Closecard>
            </div>
            
        </div>
    )
}

export default Projects