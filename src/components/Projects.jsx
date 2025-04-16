import React from "react";
import "/src/Project.css";

const Projects = () => {
  const projects = [
    {
      title: "Inventory Management System",
      description:
        "The Inventory Management System is a microservices-based full-stack application designed to manage the lifecycle of products, categories, orders, suppliers, and customers. It ensures secure access, real-time data flow, and role-based authorization using Spring Cloud Gateway, Spring Security, JWT, and Kafka.",
      technologies: [
        "Java 17",
        "Spring Boot",
        "Spring Cloud",
        "Spring Security",
        "OpenFeign",
      ],
      image: "/inventoryManagement.jpg",
      demoLink: "https://github.com/seshu-sai/Inventory_Order_Management",
    },
    {
      title: "Leave Management System",
      description:
        "The Leave Management System is a full-stack application designed to streamline employee leave requests, approvals, and tracking. The backend is built with Spring Boot and secured with Spring Security + JWT, while the frontend is developed using React. It supports role-based access for employees and admins, leave balance tracking, and history viewing. PostgreSQL is used as the database, and the system is containerized using Docker.",
      technologies: ["Spring Boot", "React", "PostgreSQL", "Docker", "EC2"],
      image: "/LMS.jpg",
      demoLink: "https://github.com/seshu-sai/JAVA-LeaveManagementApp",
    },
    {
      title: "Patient Management System",
      description:
        "The Patient Management System is a CRUD-based healthcare application designed to manage patient records efficiently. Developed using Spring Boot and Spring Data JPA, the system allows administrators to add, update, delete, and retrieve patient information. It ensures organized storage of patient data with RESTful API endpoints and integrates with a database for persistent storage.",
      technologies: ["Spring Boot", "Angular", "Maven", "Docker"],
      image: "/PMS3.jpg",
      demoLink: "https://github.com/seshu-sai/javaTrainingProject",
    },
  ];

  return (
    <div className="projects-container">
      <section className="projects-section">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-thumbnail"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-code"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
