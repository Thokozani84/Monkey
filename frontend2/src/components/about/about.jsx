import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">Welcome to Imahalalento!</h1>
        <p className="about-description">
          where paid entertainment is absolutely free. If you encounter any issues, just
          click the <span className="highlight">Facebook icon</span> at the top 
          of the home screen for assistance.
        </p>
      </div>
    </div>
  );
};

export default About;
