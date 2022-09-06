import React from "react";

const Form = () => {
    return(
        <div id="contact">    
            <form action="" className="form">
                <div className="t">
                    <div className="title">
                        <h2>Envie uma mensagem</h2>
                    </div>
                    <div className="forms">
                        <div className="form-group">
                                <label htmlFor="name">Nome Completo</label>
                                <input className="inputs" type="text" name="name"/>
                        </div>
                        <div className="form-group">
                                <label htmlFor="email">E-mail</label>
                                <input className="inputs" type="email" name="email"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="msg">Mensagem</label>
                        <textarea className="inputs" name="msg" id="" rows="7"></textarea>
                    </div>
                    <div>
                    <button className="btn" type="submit">Enviar</button>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default Form