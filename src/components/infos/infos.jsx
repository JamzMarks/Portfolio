import React from "react";
import "./infos.scss";
import { Link } from "react-router-dom";

const Infos = () => {
  return (
    <section className="infos">
      <div className="info-wrapper">
        <div className="details">
            <div className="details-wrapper">
                <h1>James Marques</h1>
                <h2>Full Stack Developer</h2>
                <div>
                  <p>Computer Science underdegree.</p>
                  <p>Brazil - Sao Paulo</p>
                </div>
                
            </div>
        
            <nav className="navigation">
                <ul className="links">
                    <li><Link className="link" to='/'>About</Link></li>
                    <li><Link className="link" to='/projects'>Projects</Link></li>
                    <li><Link className="link" to='/contact'>Contact</Link></li>
                </ul> 
            </nav>
            <div className="curriculo">
                <h3>Curriculum Download</h3>
                <div className="downloadBtns">
                  <a href="/documents/James Souza Marques - PT.pdf" className="downBtn"  rel="noopener noreferrer" target="_blank">
                      <i className="fa-solid fa-file"></i> PT-BR
                  </a>
                  <a href="/documents/cvEn.pdf" className="downBtn"  rel="noopener noreferrer" target="_blank">
                      <i className="fa-solid fa-file"></i> EN-US
                  </a>
                </div>
                
                
            </div>
        </div>
        
          <ul className="socials">
            <li className="social">
              <a
                href="https://www.linkedin.com/in/james-marques-48828422b/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="social">
              <a href="https://www.instagram.com/jamzmarks/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="social">
              <a href="https://github.com/JamzMarks" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="social">
              <a href="https://www.reddit.com/user/Secret-Description72/" target="_blank">
                <i className="fa-brands fa-reddit-alien"></i>
              </a>
            </li>
          </ul>
      </div>
    </section>
  );
};

export default Infos;
