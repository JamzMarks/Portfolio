import React, { useState } from "react";
import Button from "../../../utils/button/button";
import { emailValidator } from "../../../../utils/validator/email-validator";

const Form = () => {
  const [validEmail, setValidEmail] = useState('');

  const handleEmailChange = (event) => {
    setValidEmail(event.target.value);
  };
  function handleEmailSubmit(event){

    if (emailValidator(validEmail)) {
      alert('Um link de confirmação foi enviado para o seu e-mail. Por favor, verifique sua caixa de entrada.');
    } else {
      event.preventDefault();
        alert('Insira um e-mail válido!');
    }
  }

  return (
    <form
      action="https://formspree.io/f/mnqrjvge"
      method="POST"
      className="contact-Form"
      onSubmit={handleEmailSubmit}
    >
        <h2 className="title">Send Me a Message</h2>
        <div className="forms">

          <div className="group">
            <input 
              required 
              type="text" 
              className="input" 
              id="name"
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="name">Name</label>
          </div>

          <div className="group">
            <input 
              required 
              type="text" 
              className="input" 
              id="email"
              value={validEmail}
              onChange={handleEmailChange}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="email">Email</label>
          </div>

          <div className="group" id="textAreaGroup">
            <textarea
              className="input"
              name="message"
              id="contact-msg"
              rows="3"
              maxLength="400"
              required
            ></textarea>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="contact-msg">Message</label>
          </div>
        </div>

        <Button
          className="teste"
          text="Enviar"
          type="submit"
          icon='fas fa-paper-plane'
        />
    </form>
  );
};

export default Form;
