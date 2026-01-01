import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const Contact = () => {
  const { personalInfo } = portfolioData;

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionTitle title="Let's Connect" />
        <p>Ready for data analysis, visualization, and statistics? Let's start something great together!</p>

        <div className="contact-links">
          <a href={`mailto:${personalInfo.email}`} className="contact-link">
            <i className="fas fa-envelope"></i>
            <span>Email Me</span>
          </a>
          <a href="https://github.com/rahulmondal9" className="contact-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/rahul-mondal-038130274" className="contact-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/rahul.mondal9" className="contact-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>
          <a href="https://www.facebook.com/share/1Cye1vMWKu/" className="contact-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
            <span>Facebook</span>
          </a>
        </div>

        <div className="contact-info" style={{ marginTop: '30px', color: 'rgba(255,255,255,0.8)' }}>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>{personalInfo.phone[0]}</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;