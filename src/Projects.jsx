
import React from 'react';

const softwareLogos = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'Java' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', alt: 'Unity' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg', alt: 'Unreal' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', alt: 'Angular' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', alt: 'C#' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg', alt: '.NET' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', alt: 'C++' },
];

export default function Projects({ onProjectPageClick }) {
  return (
    <div className="projects-container">
      <div className="animated-bg">
        {softwareLogos.map((logo, idx) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="bg-logo"
            style={{ animationDelay: `${idx * 2}s` }}
          />
        ))}
      </div>
      <h1>Portfolio Projects</h1>
      <div className="project">
        <h2>Capstone Project</h2>
        <p><strong>Description:</strong> This project showcases a majority of my skills and how I wanted to express myself through the game. It features NPC development, world building, and engaging gameplay.</p>
        <button className="project-link-btn" onClick={() => onProjectPageClick && onProjectPageClick(0)}>
          View Capstone Project
        </button>
      </div>
      <div className="project">
        <h2>Gym Tycoon</h2>
        <p><strong>Description:</strong> Simple repetitive simulator. This project is about building a gym management game with a focus on core systems and gameplay loops.</p>
        <button className="project-link-btn" onClick={() => onProjectPageClick && onProjectPageClick(1)}>
          View Gym Tycoon
        </button>
      </div>
    </div>
  );
}
