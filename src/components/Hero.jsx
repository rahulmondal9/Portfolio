import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personalInfo } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-profile">
            <div className="profile-image-container">
              {!imageError ? (
                <img
                  src="/images/profileimage/profile-pic.jpeg"
                  alt={personalInfo.name}
                  className="profile-image"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="profile-image-fallback">
                  <i className="fas fa-user"></i>
                </div>
              )}
              <div className="profile-image-border"></div>
            </div>
          </div>
          <h1>{personalInfo.name}</h1>
          <p className="subtitle">{personalInfo.title}</p>
          <p>{personalInfo.description}</p>

          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>{personalInfo.email}</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>{personalInfo.phone[0]}</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Resume Button */}
          <div className="resume-button-container">
            <a
              href="/certificates/RAHULMONDAL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              <i className="fas fa-file-alt"></i>
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
