import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: "Instagram Clone",
    image: "/assets/instapro.png",
    description: "This Instagram clone replicates the core UI of the original platform, focusing on layout, styling, and interactivity. It includes:📸 Post cards with images and captions ❤ Like button with animation🧑‍🤝‍🧑 Story bubbles and top bar🔧 Built using pure HTML, CSS (with Bootstrap), and JavaScript.",
  },
 
  {
    title: "You Tube Clone",
    image: "/assets/youtubepro.png",
    description: "I built a YouTube clone using ⚛ ReactJS, 🎨 CSS, and 📡 YouTube Data API.It lets users 🔍 search, 📺 watch videos, and 📜 browse categories with a responsive 📱💻 design.This project improved my skills in 🪝 React hooks, 🔗 API integration, and 💡 modern UI design.",
  }, {
    title: "SkySence",
    image: "/assets/NM output1.png",
    description: "⚠️ Disclaimer 🌦️ The SkySence Live Weather Dashboard is a personal project developed using React and live weather APIs.💻 It’s designed to be user-friendly, interactive, and a fun learning experience.📡 Weather data is fetched from third-party sources, so accuracy may vary.📊 The app is meant for educational and informational purposes only.🚫 Do not rely solely on this dashboard for critical weather decisions.🧭 The developer does not guarantee the completeness or reliability of data.🎨 All visuals and features are part of the project’s design showcase.🛠️ This project highlights skills in API integration and React development.",
    link:"https://rajaesakki1.github.io/NM-live-weather-dashboard/"
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
            <img src={project.image}  onclick ={()=>window.open(project.link,"_blank")}alt={project.title} />
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