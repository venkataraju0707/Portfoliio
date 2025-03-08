import React from "react";
import "./Projects.css"; // Importing external CSS
import OSES from "../../assets/OSES.png";
import portfolioImage from "../../assets/portfolioImage.png";

const projects = [
  {
    id: 1,
    name: "ONLINE STUDENT EXAMINATION SYSTEM",
    technologies: "HTML, CSS, JavaScript, PHP, SQL",
    image: OSES,
    github: "https://github.com/venkataraju0707/online-student-examination-system",
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "Frontend Development",
    github: "https://github.com/venkataraju0707/BLOGAPP/tree/main",
  },
  {
    id: 3,
    name: "PORTFOLIO",
    technologies: "Frontend in Vite Configuration",
    image: portfolioImage,
    github: "https://github.com/venkataraju0707/portfolio",
  },
  {
    id: 4,
    name: "Expenses-Tracker",
    technologies: "Frontend in Vite Configuration",
    github: "https://github.com/venkataraju0707/EXPENSETRACKER",
  },
  {
    id: 5,
    name: "E-commerce",
    technologies: "Frontend in Vite Configuration",
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="project">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.image && (
                <img src={project.image} alt={project.name} className="project-image" />
              )}
              <h3 className="project-name">{project.name}</h3>
              <p className="project-tech">{project.technologies}</p>
              {project.github && (
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
