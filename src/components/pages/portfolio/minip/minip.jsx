import React from "react";
import Closecard from "../projectcard/closecard";

const Minip = () => {
    return(
        <div className="minip">
            <div className="p_title">
                <div className="divisoria">
                    <h2 >Mini Projects</h2>
                </div>
                <div>
                    <p>Meus Mini-Projetos são exercicios de cursos e testes que realizo.</p>
                </div>
            </div>
            <div className="proj_content">
                <Closecard
                    git=""
                    url=""
                    name="Calculadora"
                    status="Concluído">
                </Closecard>
                <Closecard
                    git=""
                    url=""
                    name="Sem Projeto"
                    status="Não Iniciado">
                </Closecard>
                <Closecard
                    git=""
                    url=""
                    name="Sem Projeto"
                    status="Não Iniciado">
                </Closecard>
            </div>
           
        </div>
    )
}

export default Minip