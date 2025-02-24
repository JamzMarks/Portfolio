import React from "react";
import "./footer.scss";
import { getYear } from "../../utils/getYear";

const Footer = () => {
  return (
    <footer className="container">
      <div className="content">
        <div className="copyright">
          <p>Created by Jamzmarks © {getYear()}</p>
          <p>Coded in Visual Studio Code. Built with React.js and Sass, deployed with Vercel.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
