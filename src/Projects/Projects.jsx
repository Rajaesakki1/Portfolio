import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: "Instagram Clone",
    image: "/assets/project1.jpg",
    description: "This Instagram clone replicates the core UI of the original platform, focusing on layout, styling, and interactivity. It includes:📸 Post cards with images and captions ❤ Like button with animation🧑‍🤝‍🧑 Story bubbles and top bar🔧 Built using pure HTML, CSS (with Bootstrap), and JavaScript.",
  },
  {
    title: "Sustainable Food App",
    image: "/assets/sustain.jpg",
    description: "An app promoting eco-friendly dining using ReactJS and PostgreSQL.",
  },
  {
    title: "Design Thinking Dashboard",
    image: "/assets/design.jpg",
    description: "A visual interface for managing innovation using design thinking principles.",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div id='Portfolio' className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index} onClick={() => setActiveProject(project)}>
            <img src={project.image} alt={project.title} />
            <h4>{project.title}</h4>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="project-modal" onClick={() => setActiveProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeProject.image} alt={activeProject.title} />
            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
            <button onClick={() => setActiveProject(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;