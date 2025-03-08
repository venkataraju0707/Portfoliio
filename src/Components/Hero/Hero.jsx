import React from "react";
import ABOUTME from "../../assets/ABOUTME.jpg";
import "./Hero.css"; // Importing the external CSS file

const Hero = () => {
  return (
    <div className="hero-section">
      <img src={ABOUTME} alt="Profile" className="hero-image" />
      <h1 className="hero-title">
        I'm{" "}
        <span className="gradient-text">VENKATA RAJU CH</span>, Full-Stack Developer
      </h1>
      <p className="hero-description">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="hero-buttons">
        <a href="#contact" target="_blank" rel="noopener noreferrer">
          <button className="contact-button">Contact With Me</button>
        </a>
        <a
          href="https://drive.google.com/file/d/11tYrsa2eOgR_xZbvYbfd0rKpvwMhmSdi/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="resume-button">Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
