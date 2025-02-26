import React from "react";
import Form from "./Concomp/form";
import './contact.scss'
import Socials from './Concomp/socials'

const Contact = () => {
    return(
        <section className="contact-Section">
            <Socials></Socials>
            
            <Form></Form>
        </section>
        
    )
}

export default Contact