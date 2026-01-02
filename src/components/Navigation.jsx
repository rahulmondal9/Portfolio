import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'ai-tools', label: 'AI Tools', icon: 'fas fa-robot' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-folder-open' },
    { id: 'achievements', label: 'Achievements', icon: 'fas fa-trophy' },
    { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Find active section
      const scrollPosition = window.scrollY + 150;
      const current = sections
        .map(section => {
          const element = document.getElementById(section.id);
          if (element) {
            return {
              id: section.id,
              top: element.offsetTop,
              bottom: element.offsetTop + element.offsetHeight
            };
          }
          return null;
        })
        .filter(Boolean)
        .find(section => scrollPosition >= section.top && scrollPosition < section.bottom);

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for sticky nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu after clicking a link
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <span>Rahul Mondal</span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          {/* Profile Section */}
          <div className="nav-profile-section">
            <div className="nav-profile-image-container">
              <img
                src="/images/profileimage/profile-pic.jpeg"
                alt="Rahul Mondal"
                className="nav-profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="nav-profile-fallback" style={{ display: 'none' }}>
                <i className="fas fa-user"></i>
              </div>
            </div>
            <h3 className="nav-profile-name">Rahul Mondal</h3>
            <p className="nav-profile-role">Data Analyst</p>
          </div>

          {sections.map(section => (
            <li key={section.id}>
              <button
                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
              >
                <i className={section.icon}></i>
                <span>{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
