import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionTitle title="Experiences" />
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <span className="date">{exp.company} — {exp.location} ({exp.period})</span>
                <p>{exp.description}</p>

                {/* Technology Tags */}
                {exp.tags && exp.tags.length > 0 && (
                  <div className="experience-tags">
                    {exp.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="experience-tag">{tag}</span>
                    ))}
                  </div>
                )}

                {/* Certificate Buttons */}
                {exp.certificates && exp.certificates.length > 0 && (
                  <div className="certificate-buttons">
                    {exp.certificates.map((cert, certIndex) => (
                      <button
                        key={certIndex}
                        className="certificate-btn"
                        onClick={() => {
                          window.open(cert.url, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <i className="fas fa-file-certificate"></i>
                        <span>{cert.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
