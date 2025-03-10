import React from "react";
import ABOUTME from "../../assets/ABOUTME.jpg";
import "./About.css"; // Importing the separate CSS file

const skills = [
  { name: "HTML & CSS", percentage: 90, className: "html-css" },
  { name: "React JS", percentage: 85, className: "react-js" },
  { name: "Node JS", percentage: 75, className: "node-js" },
  { name: "Express JS", percentage: 70, className: "express-js" },
];

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <img src={ABOUTME} alt="About Me" className="about-image" />
          <div className="about-text">
            <p>
            I’m Venkataraju, a passionate full-stack developer specializing in ReactJS, Node.js, Express.js, and MongoDB. I build and design web applications, including e-commerce platforms, booking apps, and AI-integrated SaaS projects. I prefer writing CSS separately and continuously improve my frontend skills. Currently, I’m exploring AI-based applications and working on innovative tech solutions.
            </p>
            <div className="skills">
              {skills.map((skill, index) => (
                <div key={index} className="skill">
                  <label>{skill.name} - {skill.percentage}%</label>
                  <div className="progress-bar">
                    <div 
                      className={`progress ${skill.className}`} 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="extra-info"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
