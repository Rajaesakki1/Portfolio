import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="Home"className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          
          {/* Left: Profile Image */}
          <div className=" image-wrapper movie-wrapper col-md-5 text-center left-side">
            <img
              src="/assets/profile1.jpg"
              alt="Raja Esakki"
              className="hero-img rounded-circle"
            />
          </div>

          {/* Right: Text Content */}
          <div className="col-md-7 right-side text-center text-md-start">
            <h1 className="hero-name">Hi, I'm Raja Esakki</h1>
            <p className="hero-role">
               <span className="highlight">
  I’m a Full Stack Developer passionate about building beautiful and functional web applications.  
  Currently pursuing B.E. CSE at SCAD Engineering College.  
  I love turning ideas into elegant digital experiences.
</span> based in Tamil Nadu, India 🇮🇳
            </p>
            <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <button className="hero-button">🤝 Connect with Me</button>
              
              <button className="hero-button">📄 My Resume</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;