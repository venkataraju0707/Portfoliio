import React from "react";
import "./Projects.css";  
import OSES from "../../assets/OSES.png";
import portfolioImage from "../../assets/portfolioImage.png";
import ecommerce from "../../assets/ecommerce.png";
import expensesTracker from "../../assets/expensestracker.png"; 
import articlesummariser from "../../assets/articleSummariser.jpg";

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
    technologies: "ReactJs, TailwindCss",
    github: "https://github.com/venkataraju0707/BLOGAPP/tree/main",
  },
  {
    id: 3,
    name: "PORTFOLIO",
    technologies: "ReactJS in Vite configuration",
    image: portfolioImage,
    github: "https://github.com/venkataraju0707/Portfoliio",
  },
  {
    id: 4,
    name: "Expenses Tracker",
    technologies: "ReactJs and Redux ToolKit in Vite Configuration",
    image: expensesTracker,  
    github: "https://github.com/venkataraju0707/ExpensesTracker",
  },
  {
    id: 5,
    name: "E-commerce",
    technologies: "ReactJS in Vite Configuration",
    image: ecommerce,
    github: "https://github.com/venkataraju0707/E-commerce",
  },
  {
    id: 6,
    name: "Article Summariser",
    technologies: "ReactJS and Rapid API in Vite Configuration",
    image: articlesummariser,
    github: "https://github.com/venkataraju0707/Article-Summarizer",
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
              {project.image ? (
                <img src={project.image} alt={project.name} className="project-image" />
              ) : (
                <div className="no-image">No Image Available</div>
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
