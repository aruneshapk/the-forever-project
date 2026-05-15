import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    title:       'K8s 101: Kubernetes from Scratch',
    description: 'Technical blog on Kubernetes covering Architecture, Services, Ingress and more.',
    techStack:   ['Kubernetes'],
    githubLink:  null,
    liveLink:    'https://aruneshapk.hashnode.dev/k8s-101-kubernetes-from-scratch',
  },
  {
    title:       'Dumb Load Balancer',
    description: 'Web app to visualise client request getting routed to APIs via Load Balancer. Features a Go Reverse Proxy LB that can handle concurrent sessions.',
    techStack:   ['Go', 'Javascript', 'React/Canvas'],
    githubLink:  'https://github.com/aruneshapk/e2e-dumb-load-balancer',
    liveLink:    'https://e2e-dumb-load-balancer.vercel.app/',
  },
  {
    title:       'Restaurant Review Classification',
    description: 'NLP project to classify restaurant reviews from Kaggle into positive and negative sentiments using ML libraries.',
    techStack:   ['Python', 'Natural Language Processing'],
    githubLink:  'https://github.com/aruneshapk/Restaurant-Review-by-NLP',
    liveLink:    null,
  },
  
];

const ProjectCard = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`project-card ${isVisible ? 'reveal' : ''}`}>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tech-stack-tags">
          {project.techStack.map((tech, i) => (
            <span className="tech-tag" key={i}>{tech}</span>
          ))}
        </div>
      </div>
      <div className="project-links">
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn-outline">
            Code
          </a>
        )}
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-outline">
            Take me there
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="projects-container">
      <h2 className="section-title">Featured Work</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
