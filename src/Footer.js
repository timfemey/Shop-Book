import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <a
                href="https://femiport.web.app"
                className="social-logo"
                target="_blank"
              >
                Ishola Obafemi
              </a>
            </div>
            <small className="website-right">&#169; 2022</small>
            <div className="social-icons">
              <a
                rel="noreferrer"
                className="social-icon-link github"
                href="https://github.com/timfemey"
                target="_blank"
                aria-label="Github"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                rel="noreferrer"
                className="social-icon-link linkedin"
                href="https://www.linkedin.com/in/obafemi-ishola-43920a221/"
                target="_blank"
                aria-label="Linkeldin"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                rel="noreferrer"
                className="social-icon-link codepen"
                href="https://www.instagram.com/tim_femey/"
                target="_blank"
                aria-label="Codepen"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
