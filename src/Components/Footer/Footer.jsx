import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css"; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">VENKATARAJU</h3>
            <p className="footer-description">
              Full-Stack Developer based in INDIA, specializing in web and software
              development.
            </p>
          </div>
          <div className="footer-subscribe">
            <form className="subscribe-form">
              <input type="email" placeholder="Your email" className="subscribe-input" />
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
            <a href="#" className="social-icon"><FaGithub /></a>
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
