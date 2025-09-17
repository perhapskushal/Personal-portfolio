import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Kushal Shrestha</h1>
            <div className="tagline">AI Engineer & Data Science Student</div>
            <p>
              Ambitious Computer Science student specializing in Artificial Intelligence and Data Science. 
              Experienced in LLM training, data annotation, and passionate about leveraging technology 
              to create innovative AI solutions.
            </p>
            <a href="#contact" className="cta-button">Get In Touch</a>
          </div>
          <div className="hero-image">
            <img src="/kushal-photo.png" alt="Kushal Shrestha - Professional Photo" className="hero-profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;