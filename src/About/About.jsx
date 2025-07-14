import React from 'react';
import './About.css';

const skillCategories = [
  {
    label: 'Web Technologies',
    skills: [
      { name: 'HTML5', img: '/assets/html.jpg' },
      { name: 'CSS3', img: '/assets/css.jpg' },
    ],
  },
  {
    label: 'Languages',
    skills: [
      { name: 'C', img: '/assets/c.jpg' },
      { name: 'Java (Core & OOP)', img: '/assets/java.jpg' },
      { name: 'JavaScript (ES6+)', img: '/assets/js.jpg' },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'ReactJS', img: '/assets/reactjs.jpg' },
      { name: 'Tailwind CSS', img: '/assets/tailwindcss.jpg' },
      { name: 'Bootstrap', img: '/assets/bootstrap.jpg' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Spring Boot', img: '/assets/springbt.jpg' },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'MySQL', img: '/assets/mysql.jpg' },
      { name: 'PostgreSQL', img: '/assets/postgrensql.jpg' },
    ],
  },
  {
    label: 'Version Control',
    skills: [
      { name: 'GitHub', img: '/assets/github.jpg' },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'IntelliJ IDEA', img: '/assets/intelij.jpg' },
      { name: 'Postman', img: '/assets/postman.jpg' },
    ],
  },
];

function About() {
  return (
    <div id='About Me' className="about">
      {/* About Me Title */}
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      {/* About Content Section */}
      <div className="about-container">
        {/* Left: Profile Image */}
        <div className="about-left">
          <img src="/assets/profile1.jpg" alt="Profile" />
        </div>

        {/* Right: Text */}
        <div className="about-right">
          <p>
            I’m an aspiring <strong>Full Stack Software Engineer</strong> currently pursuing B.E. CSE at SCAD Engineering College.
            <br /><br />
            My skills include <strong>Java, JavaScript, C</strong> and frameworks like <strong>Spring Boot</strong> and <strong>ReactJS</strong>.
            I enjoy solving problems and building clean, efficient applications.
            <br /><br />
            I’ve developed academic projects in areas like <strong>fraud prevention</strong>, <strong>sustainable tech</strong>, and <strong>design thinking</strong>.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="about-skills">
        <h2>My Skills</h2>
        <div className="skills-categories">
          {skillCategories.map((category, idx) => (
            <div className="skill-category" key={category.label}>
              <h3 className="category-title">{category.label}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="skill-card animated-skill" style={{ animationDelay:` ${0.08 * index}` }}>
                    <img src={skill.img} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;