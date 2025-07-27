import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h2 className="resume-title">📄 My Resume</h2>

      <div className="resume-image-wrapper animate-slide-in">
        <img
          src="/assets/resume.jpg"
          alt="Resume of Raja Esakki"
          className="resume-image"
        />
      </div>

      <div className="resume-buttons">
        
        <a href="/resume.pdf" download className="btn resume-btn download">
          Download
        </a>
      </div>
    </div>
  );
};

export default Resume;
