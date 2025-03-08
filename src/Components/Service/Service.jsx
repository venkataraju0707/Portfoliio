import React from "react";
import "./Service.css"; // Importing external CSS

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
];

const Service = () => {
  return (
    <div className="service-section" id="service">
      <div className="service-container">
        <h2 className="service-title">My Services</h2>
        <div className="service-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-id">{service.id}</div>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
