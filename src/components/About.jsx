import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const About = () => {
  const { skills, education } = portfolioData;
  const [hoveredInterest, setHoveredInterest] = useState(null);

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle title="About Me" />
        <div className="about-content">
          <div className="about-text">
            <h3>Data Analyst & Visualysation</h3>
            <p>I am a Computer Science student at NSHM Knowledge Campus, Durgapur; focusing on Data Analysis & Visualisation, Machine Learning, Deep Learning, and Intelligent Agent Systems.</p>
            <p>My work involves visualising, preprocessing and manupulating vasst amount of data, while exploring how different pattern understanding and decision-making.</p>
            <p>Focused on data analysis, visualization, and statistics, with hands-on experience in tools like Python, SQL, Excel, Power BI, and Tableau.</p>
            <p>I excel at handling complex datasets, uncovering patterns, and transforming raw data into meaningful insights. Comfortable working across data pipelines from cleaning and analysis to visual storytelling.</p>
            <p style={{ fontStyle: 'italic', color: 'var(--secondary)', marginTop: '15px' }}>I'm a passionate Data Analyst and dashboard building specializing in machine learning and data visualization</p>

            <div className="skills">
              <div className="skill-category">
                <h4>Programming</h4>
                <div className="skill-tags">
                  {skills.programming.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Machine Learning & AI</h4>
                <div className="skill-tags">
                  {skills.ml.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Deep Learning Frameworks</h4>
                <div className="skill-tags">
                  {skills.deepLearning.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Interested In</h4>
                <div className="skill-tags">
                  {skills.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="skill-tag interest-tag"
                      onMouseEnter={() => setHoveredInterest(index)}
                      onMouseLeave={() => setHoveredInterest(null)}
                    >
                      {interest.name}
                      {hoveredInterest === index && (
                        <div className="tooltip">
                          {interest.tooltip}
                        </div>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Data Analysis</h4>
                <div className="skill-tags">
                  {skills.cloud.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h3>Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <h3>{edu.institution}</h3>
                    <span className="date">{edu.period}</span>
                    <p>{edu.Board}</p>
                    <p>{edu.degree}</p>

                    {/* Certificate Button for Education */}
                    {edu.certificateUrl && (
                      <div className="certificate-buttons">
                        <button
                          className="certificate-btn"
                          onClick={() => {
                            window.open(edu.certificateUrl, '_blank', 'noopener,noreferrer');
                          }}
                        >
                          <i className="fas fa-file-certificate"></i>
                          <span>{edu.institution.includes('Secondary') ? 'HS Result' : 'Result'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;