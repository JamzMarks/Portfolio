import React from "react";

const Form = () => {
  return (
    <form
      action="https://formspree.io/f/mnqrjvge"
      method="POST"
      className="contact-Form"
    >
        <h2 className="title">Send a message</h2>

        <div className="forms">
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input className="inputs" type="text" name="name" placeholder="Full name" required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input className="inputs" type="email" name="email" placeholder="E-mail..."required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="msg">Message</label>
          <textarea
            className="inputs"
            name="message"
            id="contact-msg"
            rows="7"
            placeholder="Type a message"
            required
          ></textarea>
        </div>
        <button className="btn" type="submit" value="Send">
            Enviar
        </button>
    </form>
  );
};

export default Form;
