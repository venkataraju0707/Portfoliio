import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import "./Contact.css"; // Import the separate CSS file

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "aedb0090-0d68-4dd1-ad3f-0ee80ef3d256");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while sending the message.");
    }
  };

  return (
    <div className="contact-section" id="contact">
      <div className="container">
        <h2 className="title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-heading">Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnerships.</p>
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <a href="mailto:venkatraju695@gmail.com" className="contact-link">
                venkatraju695@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <FaPhone className="icon" />
              <span>+91 9014813438</span>
            </div>
            <div className="contact-item">
              <FaMapMarkedAlt className="icon" />
              <span>Visakhapatnam, Andhra Pradesh, India</span>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" placeholder="Enter Your Name" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter Your Email" required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" rows="5" placeholder="Enter Your Message" required />
              </div>
              <button type="submit" className="submit-button">Send</button>
            </form>
            <span className="result-message">{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
