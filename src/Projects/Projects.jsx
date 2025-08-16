import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: "Instagram Clone",
    image: "/assets/project11.jpg",
    description: "This Instagram clone replicates the core UI of the original platform, focusing on layout, styling, and interactivity. It includes:📸 Post cards with images and captions ❤ Like button with animation🧑‍🤝‍🧑 Story bubbles and top bar🔧 Built using pure HTML, CSS (with Bootstrap), and JavaScript.",
  },
  {
    title: "Portfolio",
    image: "/assets/project2.jpg",
    description: "Welcome to my personal space on the web! 💻✨This app showcases who I am, my skills, 💡 projects, 🎯 and the tools I love using. From frontend magic with React & CSS to backend basics and cool tools like VS Code & Postman, it's all here! You can even download my resume, check out my work, and get to know the tech stack I’m passionate about. 💼💻Built with 💖 using React.js",
  },
  {
    title: "You Tube Clone",
    image: "/assets/youtube.png",
    description: "I built a YouTube clone using ⚛ ReactJS, 🎨 CSS, and 📡 YouTube Data API.It lets users 🔍 search, 📺 watch videos, and 📜 browse categories with a responsive 📱💻 design.This project improved my skills in 🪝 React hooks, 🔗 API integration, and 💡 modern UI design.",
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