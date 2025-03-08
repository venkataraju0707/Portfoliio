import React from "react";
import "./Navbar.css"; // Importing the external CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">VENKATARAJU</div>
        <div className="navbar-links">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#about" className="navbar-link">About Me</a>
          <a href="#service" className="navbar-link">Services</a>
          <a href="#project" className="navbar-link">Projects</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </div>
        <a href="https://www.linkedin.com/in/venkatarajuch">
          <button className="connect-button">Connect Me</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
