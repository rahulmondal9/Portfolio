import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const Achievements = () => {
    const { achievements } = portfolioData;

    return (
        <section id="achievements" className="achievements">
            <div className="container">
                <SectionTitle title="Achievements & Certifications" />
                <p className="section-subtitle">
                    Recognition and certifications that showcase my commitment to excellence
                </p>

                <div className="achievements-grid">
                    {achievements.map((achievement) => (
                        <div key={achievement.id} className="achievement-card">
                            <div className="achievement-icon-wrapper">
                                <div className="achievement-icon">
                                    <span className="icon-emoji">{achievement.icon}</span>
                                </div>
                            </div>

                            <div className="achievement-content">
                                <h3>{achievement.title}</h3>
                                <p className="achievement-subtitle">{achievement.subtitle}</p>
                                <p className="achievement-description">{achievement.description}</p>

                                <div className="achievement-meta">
                                    <span className={`achievement-badge ${achievement.type.toLowerCase()}`}>
                                        {achievement.type}
                                    </span>
                                    <span className="achievement-date">{achievement.date}</span>
                                </div>

                                {achievement.certificateUrl && (
                                    <button
                                        className="view-certificate-btn"
                                        onClick={() => {
                                            window.open(achievement.certificateUrl, '_blank', 'noopener,noreferrer');
                                        }}
                                    >
                                        <i className="fas fa-certificate"></i>
                                        <span>View Certificate</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
