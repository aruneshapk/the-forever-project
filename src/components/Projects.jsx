import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

// This sub-component handles the "reveal" logic for each card
const ProjectCard = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Only animate once
        }
      },
      { threshold: 0.1 }, // Triggers when 10% of the card is visible
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`project-card ${isVisible ? "reveal" : ""}`}>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tech-stack-tags">
          {project.techStack.map((tech, i) => (
            <span className="tech-tag" key={i}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="project-links">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            Code
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            Take me there
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: "K8s 101: Kubernetes from scratch",
      description:
        "Technical Blog on Kubernetes covering Architecture, Service, Ingress etc.",
      techStack: ["Kubernetes"],
      githubLink: null,
      liveLink:
        "https://aruneshapk.hashnode.dev/k8s-101-kubernetes-from-scratch",
    },
    {
      title: "Restaurant review classification",
      description:
        "NLP Project to analyze the restaurant review data from Kaggle into positive and negative using ML libraries.",
      techStack: ["Python", "Natural Language Processing"],
      githubLink: "https://github.com/aruneshapk/Restaurant-Review-by-NLP",
      liveLink: null,
    },
    {
      title: "Bookshelf App",
      description:
        "Basic book app that queries Open Library Search API to fetch publish year, language & thumbnail.",
      techStack: ["React", "Javascript", "CSS"],
      githubLink: "https://github.com/aruneshapk/boring-books",
      liveLink: "https://bookshelf-kappa-jet.vercel.app/",
    },
  ];

  return (
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
};

export default Projects;
