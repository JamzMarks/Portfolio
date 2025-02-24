import React from "react";
import "./infos.scss";
import cv_en from "../../assets/documents/cvEn.pdf";
import cv_pt from "../../assets/documents/cvPt.pdf";
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
                <a href={cv_pt} className="downBtn">
                    <i className="fa-solid fa-file"></i>Curriculum PT
                </a>
                <a href={cv_en} className="downBtn">
                    <i className="fa-solid fa-file"></i>Curriculum EN
                </a>
                
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
              <a href="https://github.com/JamzMarks" target="_blank">
                <i className="fa-brands fa-reddit-alien"></i>
              </a>
            </li>
          </ul>
      </div>
    </section>
  );
};

export default Infos;
