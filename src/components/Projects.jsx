import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const { projects } = portfolioData;

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionTitle title="My Projects" />
        
        {/* Interactive Filter Buttons */}
        <div className="project-filters">
          <button 
            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={filter === 'ongoing' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('ongoing')}
          >
            Ongoing
          </button>
          <button 
            className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>

        <div className="project-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = (e) => {
    // Don't trigger if clicking on read more button or tags
    if (e.target.classList.contains('read-more-btn') || 
        e.target.closest('.read-more-btn') ||
        e.target.classList.contains('project-tag') ||
        e.target.closest('.project-tags')) {
      return;
    }
    
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="project-card clickable"
      onClick={handleCardClick}
      title={project.githubUrl ? "Click to view on GitHub" : ""}
    >
      {project.image && (
        <div className="project-image">
          <img 
            src={project.image} 
            alt={project.title}
            onError={(e) => {
              e.target.parentElement.style.display = 'none';
            }}
            loading="lazy"
          />
          <div className="project-image-overlay"></div>
        </div>
      )}
      <div className="project-content">
        <div className="project-header">
          <h3>{project.title}</h3>
          <span className={`project-status ${project.status}`}>
            {project.status}
          </span>
        </div>
        
        <p className={expanded ? 'expanded' : 'collapsed'}>
          {project.description}
        </p>
        
        {project.description.length > 150 && (
          <button 
            className="read-more-btn"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}

        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>

        {project.githubUrl && (
          <div 
            className="project-github-link"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
            }}
          >
            <i className="fab fa-github"></i>
            <span>View on GitHub</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;