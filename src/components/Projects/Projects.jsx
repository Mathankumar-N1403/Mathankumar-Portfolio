import React, { useState } from 'react';
import { FiExternalLink, FiGithub, FiChevronRight } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiMysql, SiExpress } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { FaJs } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'The CraveCart',
    subtitle: 'Food Delivery Web Application',
    description:
      'A full-stack food delivery platform built with React.js and REST APIs. Features secure user authentication, dynamic food listings, cart management, and complete order lifecycle management.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Food delivery app preview',
    tech: [
      { name: 'React.js',   icon: <SiReact />,    color: '#61DAFB' },
      { name: 'Node.js',    icon: <SiNodedotjs />, color: '#539E43' },
      { name: 'Express.js', icon: <SiExpress />,   color: '#808080' },
      { name: 'REST API',   icon: <TbApi />,       color: '#6366F1' },
      { name: 'MySQL',      icon: <SiMysql />,     color: '#00758F' },
    ],
    highlights: [
      'User authentication with login & signup',
      'Food listing with cart management',
      'Order placement and order history',
      'Axios-powered API calls with error handling',
      'Fully responsive across all devices',
    ],
    reverse: false,
  },
  {
    id: 2,
    number: '02',
    title: 'ExpenseIQ',
    subtitle: 'Personal Expense Management App',
    description:
      'A comprehensive personal finance tracker with dynamic dashboards, income and expense management, and interactive data visualizations. Built to simulate full-stack operations with structured data flow.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Expense management dashboard',
    tech: [
      { name: 'React.js', icon: <SiReact />,  color: '#61DAFB' },
      { name: 'JavaScript', icon: <FaJs />,   color: '#F7DF1E' },
      { name: 'REST API',  icon: <TbApi />,   color: '#6366F1' },
      { name: 'MySQL',     icon: <SiMysql />, color: '#00758F' },
    ],
    highlights: [
      'Add, update & delete income/expense records',
      'Interactive charts for financial visualization',
      'Search and category-based filtering',
      'Structured data flow and state management',
      'Simulated backend with local/API data',
    ],
    reverse: true,
  },
];

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`project-card ${project.reverse ? 'reverse' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={project.imageAlt}
          className={`project-img ${hovered ? 'zoomed' : ''}`}
          loading="lazy"
        />
        <div className="project-img-overlay">
          <span className="project-number-big">{project.number}</span>
        </div>
      </div>

      <div className="project-content">
        <div>
          <span className="project-num-label">Project {project.number}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-desc">{project.description}</p>
        </div>

        <ul className="project-highlights">
          {project.highlights.map((h) => (
            <li key={h} className="highlight-item">
              <FiChevronRight className="highlight-icon" />
              {h}
            </li>
          ))}
        </ul>

        <div className="project-tech">
          {project.tech.map(({ name, icon, color }) => (
            <span className="proj-tech-badge" key={name}>
              <span style={{ color }}>{icon}</span>
              {name}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href="#projects"
            className="proj-btn-outline"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <FiGithub /> Source Code
          </a>
          <a
            href="#projects"
            className="proj-btn-solid"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">Projects I've Built</h2>
          <p className="section-desc">
            Real-world applications developed to solve everyday problems — combining
            clean UI with functional backend logic.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
