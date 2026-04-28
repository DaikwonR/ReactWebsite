
import './gxCard.css';
import React from 'react';

export default function Project2() {
  return (
    <div className="gx-home-bg">
      <div className="gx-card">
        <div className="gx-bubble-label">Project: Gym Tycoon</div>
        <div className="project-header-icons" style={{ marginBottom: '1.2rem' }}>
          <span className="project-icon">&lt;/&gt;</span>
          <span className="project-icon">🛹</span>
          <span className="project-icon">🐼</span>
        </div>
        <h1 className="project-title-redpurple">Gym Tycoon – 6</h1>
        <div className="project-underline-redpurple"></div>
        <video controls width="480" style={{ borderRadius: '1rem', margin: '1.2rem 0' }}>
          <source src="/assets/gym-tycoon.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="project-text-redpurple" style={{ textAlign: 'left' }}>
          <p>
            <strong>Portfolio • 70% done</strong>
          </p>
          <ul style={{ marginLeft: '1.2em' }}>
            <li>Simple repetitive simulator.</li>
            <li>Better animations</li>
            <li>Could use better character movement (Character/NPC)</li>
            <li>World Building</li>
            <li>Loop</li>
            <li>Interface</li>
          </ul>
          <p style={{ marginTop: '1em' }}>
            <em>
              This project represents my growth in building more structured and functional projects. My strengths are in building core ideas and systems, but I am working to improve polish, such as animations and UI. Gym Tycoon is a step toward more complete, real-world applications.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
