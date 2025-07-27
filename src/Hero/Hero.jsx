import { useNavigate } from "react-router-dom";
import React from "react";
import './Hero.css';

function Hero() {
  const navigate = useNavigate();

  // Smooth scroll to Contact section on the page
  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="Home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="image-wrapper col-md-5 text-center left-side">
            <img
              src="/assets/profile1.jpg"
              alt="Raja Esakki"
              className="hero-img rounded-circle"
            />
          </div>
          <div className="col-md-7 right-side text-center text-md-start">
            <h1 className="hero-name">Hi, I'm Raja Esakki</h1>
            <p className="hero-role">
              <span className="highlight">
                I’m a Full Stack Developer passionate about building beautiful and functional web applications.
                Currently pursuing B.E. CSE at SCAD Engineering College.
              </span>{" "}
              based in Tamil Nadu, India 🇮🇳
            </p>

            <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <button className="hero-button" onClick={scrollToContact}>
                🤝 Connect with Me
              </button>

              <button
                className="hero-button"
                onClick={() => navigate("/resume")}
              >
                📄 My Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
