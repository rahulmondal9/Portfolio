import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Rahul Mondal</h3>
            <p>Computer Science Student | Data Analyst Enthusiast</p>
            <p className="footer-quote">"Always looking to learn, solve problems, and bring value through clear, data-driven thinking.."</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/rahulmondal9" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/rahul-mondal-038130274" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/rahul.mondal9" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/share/1Cye1vMWKu/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Rahul Mondal. All rights reserved.</p>
          <p>Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

