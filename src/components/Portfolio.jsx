import React from "react";
import "/src/portfolio.css"; // Make sure this path is correct
import { saveAs } from "file-saver";

const Portfolio = () => {
  const handleDownloadResume = () => {
    fetch("/Resume.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "Ganduri_Shesha_Sai_Resume.pdf");
      })
      .catch((error) => {
        console.error("Download failed:", error);
        window.open("/Resume.pdf", "_blank");
      });
  };

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>
            HI, I'm <span className="highlight">Ganduri Shesha Sai</span>
          </h1>
          <h2>Software Developer</h2>
          <p className="hero-description">
            I build exceptional digital experiences with modern technologies.
            Focused on creating clean, efficient, and scalable solutions.
          </p>
        </div>
      </section>
      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image-container">
              <div className="about-image">
                <img src="/profile.jpeg"></img>
              </div>
              <button
                className="download-resume-btn"
                onClick={handleDownloadResume}
              >
                Download Resume
              </button>
            </div>

            {/* Right: Bio */}
            <div className="about-text">
              <h3>Senior Full-Stack Engineer & Cloud Specialist</h3>
              <p>
                I'm a Toronto-based software engineer with{" "}
                <strong>6+ years</strong> of experience building
                enterprise-grade applications. My passion lies in architecting{" "}
                <strong>scalable systems</strong> that solve real business
                problems, whether through elegant code or robust infrastructure.
              </p>
              <p>
                My expertise spans the full stack — from crafting{" "}
                <strong>high-performance Java microservices</strong> to building
                intuitive <strong>React/Angular interfaces</strong>. I thrive in
                complex environments where <strong>Spring Boot</strong>,{" "}
                <strong>Kubernetes</strong>, and <strong>AWS</strong> come
                together to create resilient systems.
              </p>
              <ul className="about-details">
                <li>
                  <strong>Name:</strong> Ganduri Shesha Sai
                </li>
                <li>
                  <strong>Email:</strong> seshusai71@example.com
                </li>
                <li>
                  <strong>From:</strong> India
                </li>
                <li>
                  <strong>Experience:</strong> 6+ Years
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
