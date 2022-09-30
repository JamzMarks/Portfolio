import React from "react";
import '../home.scss'
import Card from "./card/Card";

const Tech = () =>{
    return(
        <div className="t_container">
            <div className="divisoria">
                <h2 className="lines">Tecnologias</h2>
            </div>
            <div className="t_cards">
                <Card
                    type="brands"
                    icon="react" 
                    title="React" 
                    text="Utilizando HTML5, SASS e JS(ES6+).">
                </Card>
                <Card 
                    type="brands"
                    icon="python" 
                    title="Python" 
                    text="Linguagem usada nesse semestre em minha faculdade.">
                </Card>
                <Card
                    type="solid"
                    icon="database" 
                    title="SQL" 
                    text="Desenvolvimento de banco de dados com MySQL.">
                </Card>
                <Card 
                    type="brands"
                    icon="aws" 
                    title="AWS" 
                    text="Iniciando desenvolvimento de site próprio com Amazon Web Server.">
                </Card>
                
            </div>
        </div>
    )
}

export default Tech