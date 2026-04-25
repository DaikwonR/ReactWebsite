import React from 'react';

export default function Project1() {
  return (
    <div className="project-bg-redpurple">
      <div className="project-card-redpurple">
        <div className="project-header-icons">
          <span className="project-icon">&lt;/&gt;</span>
          <span className="project-icon">🛹</span>
          <span className="project-icon">🐼</span>
        </div>
        <h1 className="project-title-redpurple">Project 1</h1>
        <div className="project-underline-redpurple"></div>
        <p className="project-text-redpurple">This is a description of Project 1. It showcases my skills in React and modern web development.</p>
      </div>
    </div>
  );
}
import React from 'react';

export default function Project1() {
  return (
    <div className="project-detail">
      <h1>Capstone Project</h1>
      <div className="project-meta">
        <span className="project-status">Portfolio • 67% done</span>
      </div>
      <p className="project-description">
        <strong>Description:</strong> This project showcases a majority of my skills and how I wanted to express myself through the game. It features NPC development, world building, and engaging gameplay.
      </p>
      <div className="project-tags">
        <span>Needs:</span>
        <span className="tag">Better character movement (Character/NPC)</span>
        <span className="tag">Better main menu</span>
        <span className="tag">Background music</span>
        <span className="tag">Animations</span>
        <span className="tag">More world development</span>
        <span className="tag">Settings</span>
      </div>
      <p className="project-tech">
        <strong>Technologies:</strong> Unity, C#, Game Design, Animation, Audio, UI/UX
      </p>
      <video controls width="480" style={{ borderRadius: '8px', margin: '1rem 0' }}>
        <source src="/assets/Media1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
