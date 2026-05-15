import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';
import concentrixLogo from '../concentrix.jpg';

const LOGOS = {
  oracle:     'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
  concentrix: concentrixLogo,
};

const ICONS = {
  html:       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  css:        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  figma:      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  java:       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  react:      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  jest:       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
  python:     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  langchain:  'https://avatars.githubusercontent.com/u/126733545',
  go:         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg',
  kubernetes: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
  bash:       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg',
  linux:      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
};

// ── Work Data ──────────────────────────────────────────────────────────────────
const workData = [
  {
    logo:     LOGOS.oracle,
    role:     'Member Technical Staff, Oracle',
    location: 'Bengaluru, Karnataka | Hybrid',
    duration: 'June 2024 – April 2026',
    points: [
      'Implemented an event-driven notifications pipeline across backend and frontend to notify users of Java runtime updates and security vulnerability findings. Used OCI Notifications Service (ONS) Pub/Sub to fan out events across target topics and leveraged OCI Streaming Service for real-time consumption by distributed components.',
      'Built and shipped production-grade UI from scratch for JMS Kubernetes support. Also built Java lifecycle management UI from scratch — added update functionality for Java runtimes across Managed Instances and applications, and built the Blackout Scheduler to restrict auto-updates around a pattern, schedule or timeline.',
      'Migrated 10–15% of total screens from React to the in-house OCI framework under a security mandate. Served on-call for 4 weeks. Cut delivery estimates by 2 weeks across features using Codex and Cline for Unit and Playwright tests.',
      'Designed and prototyped 33 Figma mockups. Presented before UX review boards and collaborated with PM and Tech Lead teams.',
      
    ],
    skills: [
      { name: 'React',      icon: ICONS.react,      pos: 'pos-5' },
      { name: 'TypeScript', icon: ICONS.typescript,  pos: 'pos-6' },
      { name: 'JavaScript', icon: ICONS.javascript,  pos: 'pos-8' },
      { name: 'Figma',      icon: ICONS.figma,       pos: 'pos-6' },
      { name: 'HTML',       icon: ICONS.html,        pos: 'pos-5' },
      { name: 'CSS',        icon: ICONS.css,         pos: 'pos-6' },
      { name: 'Jest',       icon: ICONS.jest,        pos: 'pos-9' },
      { name: 'Java',       icon: ICONS.java,        pos: 'pos-2' },
    ],
  },
  {
    logo:     LOGOS.concentrix,
    role:     'Software Engineer Intern, Concentrix',
    location: 'Gurugram, Haryana | Remote',
    duration: 'March 2024 – June 2024',
    points: [
      'Architected a context-aware RAG workflow using Python and LangChain to enable LLMs to sequentially invoke chained APIs (Spotify, Weather) based on user prompt. Delivered a security patch against HTML injection.',
    ],
    skills: [
      { name: 'Python',    icon: ICONS.python,    pos: 'pos-7' },
      { name: 'LangChain', icon: ICONS.langchain, pos: 'pos-8' },
    ],
  },
  {
    logo:     LOGOS.oracle,
    role:     'Server Technology Intern, Oracle',
    location: 'Noida, Uttar Pradesh | Remote',
    duration: 'May 2023 – July 2023',
    points: [
      'Developed a feature to retrieve Custom Resources (CR) of Verrazzano (VZ) using Golang and Kubernetes to assist in observability of installation configurations. Achieved unit test code coverage of 86.9%.',
    ],
    skills: [
      { name: 'Go',         icon: ICONS.go,         pos: 'pos-4' },
      { name: 'Kubernetes', icon: ICONS.kubernetes,  pos: 'pos-8' },
      { name: 'Bash',       icon: ICONS.bash,        pos: 'pos-1' },
      { name: 'Linux',      icon: ICONS.linux,       pos: 'pos-5' },
    ],
  },
];

// ── ExperienceCard ─────────────────────────────────────────────────────────────
const ExperienceCard = ({ item }) => {
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
    <div ref={cardRef} className={`timeline-item ${isVisible ? 'reveal' : ''}`}>
      <div className="timeline-dot" />
      <div className="experience-wrapper">

        <div className="left-panel">
          <div className="timeline-content">
            <div className="timeline-header">
              <img src={item.logo} alt="company logo" className="company-logo" />
              <h3>{item.role}</h3>
              <span className="duration">{item.duration}</span>
            </div>
            <div className="timeline-sub-header">
              <span className="location">{item.location}</span>
            </div>
            <ul className="points">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="skills-sidebar-mini">
          <div className="skills-cloud-mini">
            {item.skills.map((skill, i) => (
              <div className={`skill-hex ${skill.pos}`} key={i} title={skill.name}>
                <img src={skill.icon} alt={skill.name} className="icon-main" />
                <div className="skill-glow" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// ── Experience ─────────────────────────────────────────────────────────────────
const Experience = () => (
  <section className="experience" id="experience">
    <div className="container">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {workData.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
