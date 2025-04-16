import React from "react";
import "/src/Project.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Ganduri Shesha Sai</h4>
          <p>Full Stack Developer & Cloud Enthusiast</p>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-icons">
            <a
              href="https://github.com/seshu-sai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github">github</i>
            </a>
            <br></br>
            <a
              href="https://www.linkedin.com/in/shesha-sai-a19621140/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin">linkedin</i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Ganduri Shesha Sai. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
