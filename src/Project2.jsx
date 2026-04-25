import React from 'react';

export default function Project2() {
  return (
    <div className="project-bg-redpurple">
      <div className="project-card-redpurple">
        <div className="project-header-icons">
          <span className="project-icon">&lt;/&gt;</span>
          <span className="project-icon">🛹</span>
          <span className="project-icon">🐼</span>
        </div>
        <h1 className="project-title-redpurple">Project 2</h1>
        <div className="project-underline-redpurple"></div>
        <p className="project-text-redpurple">This is a description of Project 2. It highlights my experience with creative UI and animation.</p>
      </div>
    </div>
  );
}
import React from 'react';

export default function Project2() {
  return (
    <div className="project-detail">
      <h1>Gym Tycoon</h1>
      <div className="project-meta">
        <span className="project-status">Portfolio • 70% done</span>
      </div>
      <p className="project-description">
        <strong>Description:</strong> Simple repetitive simulator. This project is about building a gym management game with a focus on core systems and gameplay loops.
      </p>
      <div className="project-tags">
        <span>Needs:</span>
        <span className="tag">Better animations</span>
        <span className="tag">Better character movement (Character/NPC)</span>
        <span className="tag">World Building</span>
        <span className="tag">Loop</span>
        <span className="tag">Interface</span>
      </div>
      <p className="project-tech">
        <strong>Technologies:</strong> Unity, C#, Game Design, Animation, UI/UX
      </p>
      <video controls width="480" style={{ borderRadius: '8px', margin: '1rem 0' }}>
        <source src="/assets/gym-tycoon.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
