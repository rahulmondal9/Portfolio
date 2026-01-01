import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const AITools = () => {
  const { aiAgents } = portfolioData;

  return (
    <section id="ai-tools" className="ai-tools">
      <div className="container">
        <SectionTitle title="AI Tools & Agents I Work With" />
        <p className="section-subtitle">
          Leveraging cutting-edge AI platforms to build intelligent solutions and enhance productivity
        </p>
        
        <div className="ai-grid">
          {aiAgents.map((agent, index) => (
            <div 
              key={index} 
              className="ai-card"
              style={{ '--agent-color': agent.color }}
            >
              <div className="ai-card-inner">
                <div className="ai-icon">{agent.icon}</div>
                <div className="ai-name">{agent.name}</div>
                <div className="ai-glow"></div>
                <div className="ai-particles">
                  {[...Array(6)].map((_, i) => (
                    <span key={i} className="particle"></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITools;

