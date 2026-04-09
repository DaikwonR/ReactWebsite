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
        <source src="/assets/2025-03-13 20-57-27 (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
