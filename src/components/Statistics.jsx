import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const Statistics = () => {
  const { projects, experience, aiAgents } = portfolioData;
  const [counters, setCounters] = useState({
    projects: 0,
    completed: 0,
    ongoing: 0,
    aiTools: 0,
    experience: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      label: 'Total Projects',
      value: projects.length,
      icon: 'fas fa-project-diagram',
      color: '#00D1FF'
    },
    {
      label: 'Completed',
      value: projects.filter(p => p.status === 'completed').length,
      icon: 'fas fa-check-circle',
      color: '#00ff88'
    },
    {
      label: 'Ongoing',
      value: projects.filter(p => p.status === 'ongoing').length,
      icon: 'fas fa-code-branch',
      color: '#ffc107'
    },
    {
      label: 'AI Tools',
      value: aiAgents.length,
      icon: 'fas fa-robot',
      color: '#6366f1'
    },
    {
      label: 'Experience',
      value: experience.length,
      icon: 'fas fa-briefcase',
      color: '#ff6b6b'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      const key = stat.label.toLowerCase().replace(/ /g, '_');

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCounters(prev => ({
            ...prev,
            [key]: stat.value
          }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }
      }, duration / steps);
    });
  };

  return (
    <section id="statistics" className="statistics" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="Portfolio Statistics" />
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon" style={{ color: stat.color }}>
                <i className={stat.icon}></i>
              </div>
              <div className="stat-content">
                <div className="stat-value" style={{ color: stat.color }}>
                  {hasAnimated ? (counters[stat.label.toLowerCase().replace(/ /g, '_')] || stat.value) : 0}
                  {stat.label === 'AI Tools' && '+'}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

