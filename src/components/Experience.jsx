import React from 'react';
import './Experience.css';

// Company Logos
import oracleLogo from '../oracle.jpg';
import concentrixLogo from '../concentrix.jpg';

// Tech Stack Icons
import htmlIcon from '../html.jpg';
import cssIcon from '../css.jpg';
import figmaIcon from '../figma.jpg';
import jsIcon from '../javascript.jpg';
import tsIcon from '../typescript.jpg';
import reactIcon from '../react.jpg';
import jestIcon from '../jest.jpg';

import pythonIcon from '../python.jpg';
import langchainIcon from '../langchain.jpg';

import goIcon from '../go.jpg';
import k8sIcon from '../kubernetes.jpg';
import bashIcon from '../bash.jpg';
import linuxIcon from '../linux.jpg';

const Experience = () => {
  const workData = [
    {
      logo: oracleLogo,
      role: "Member Technical Staff, Oracle",
      location: "Bengaluru, Karnataka | Hybrid",
      duration: "June 2024 - Present",
      points: [
        "Designed, prototyped and implemented Kubernetes support UI for JMS end to end. Wrote Unit tests with code coverage > 80%.",
        "Integrated OCI services like messages, streaming service with Java Management Service for Hardened Java PoC, nominated for Spot award.",
        "Designed and developed UI for Autonomous JDK Lifecycle Management (LCM).",
        "Served On-call for 2 weeks, supporting 99.5% SLA and resolving Sev-2/Sev-3 tickets."
      ],
      skills: [
        { name: "React", icon: reactIcon, pos: "pos-5" },
        { name: "TS", icon: tsIcon, pos: "pos-6" },
        { name: "JS", icon: jsIcon, pos: "pos-8" },
        { name: "Figma", icon: figmaIcon, pos: "pos-6" },
        { name: "HTML", icon: htmlIcon, pos: "pos-5" },
        { name: "CSS", icon: cssIcon, pos: "pos-6" },
        { name: "Jest", icon: jestIcon, pos: "pos-9" }
      ]
    },
    {
      logo: concentrixLogo,
      role: "Software Engineer Intern, Concentrix",
      location: "Gurugram, Haryana | Remote",
      duration: "March 2024 - June 2024",
      points: [
        "Designed context-aware logic for GenAI Chatbots to sequentially invoke APIs using OpenAPI standards and Azure LLMs.",
        "Worked on minor bug-fixes and UI refinements."
      ],
      skills: [
        { name: "Python", icon: pythonIcon, pos: "pos-7" },
        { name: "LangChain", icon: langchainIcon, pos: "pos-8" }
      ]
    },
    {
      logo: oracleLogo,
      role: "Project Intern, Oracle",
      location: "Noida, Uttar Pradesh | Remote",
      duration: "May 2023 - July 2023",
      points: [
        "Developed features to retrieve Custom Resources (CR) for Verrazzano (VZ) container platform.",
        "Achieved 86.9% Unit Test coverage."
      ],
      skills: [
        { name: "Go", icon: goIcon, pos: "pos-4" },
        { name: "Kubernetes", icon: k8sIcon, pos: "pos-6" },
        { name: "Bash", icon: bashIcon, pos: "pos-9"},
        { name: "Linux", icon: linuxIcon, pos: "pos-6"}
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience & Tech Stack</h2>
        <div className="timeline">
          {workData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              
              <div className="experience-wrapper">
                {/* LEFT: Work History Details */}
                <div className="left-panel">
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div className="title-with-logo">
                        <img src={item.logo} alt="company-logo" className="company-logo" />
                      </div>
                      <h3>{item.role}</h3>
                      <span className="duration">{item.duration}</span>
                    </div>
                    <div className="timeline-sub-header">
                      <span className="location">{item.location}</span>
                    </div>
                    <ul className="points">
                      {item.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* RIGHT: Parallel Scattered Icons for this specific card */}
                <div className="skills-sidebar-mini">
                  <div className="skills-cloud-mini">
                    {item.skills.map((skill, i) => (
                      <div className={`skill-hex ${skill.pos}`} key={i} title={skill.name}>
                        <div className="skill-inner">
                          <img src={skill.icon} alt={skill.name} className="icon-main" />
                        </div>
                        {/* Subtle glow effect behind the icon */}
                        <div className="skill-glow"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;