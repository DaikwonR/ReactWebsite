
import './gxCard.css';
import React from 'react';

export default function Project1() {
  return (
    <div className="gx-home-bg">
      <div className="gx-card">
        <div className="gx-bubble-label">Project: Capstone</div>
        <div className="project-header-icons" style={{ marginBottom: '1.2rem' }}>
          <span className="project-icon">&lt;/&gt;</span>
          <span className="project-icon">🛹</span>
          <span className="project-icon">🐼</span>
        </div>
        <h1 className="project-title-redpurple">Capstone Project – 8</h1>
        <div className="project-underline-redpurple"></div>
        <video controls width="480" style={{ borderRadius: '1rem', margin: '1.2rem 0' }}>
          <source src="/assets/Media1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="project-text-redpurple" style={{ textAlign: 'left' }}>
          <p>
            <strong>Portfolio • 67% done</strong>
          </p>
          <ul style={{ marginLeft: '1.2em' }}>
            <li>I believe this showcases a very good majority of my skills and how I wanted to express myself through the game. From the NPC development, the world building, and overall gameplay.</li>
            <li>Could use better character movement (Character/NPC)</li>
            <li>Better main menu</li>
            <li>Background music</li>
            <li>Animations</li>
            <li>More world development</li>
            <li>Settings</li>
          </ul>
          <p style={{ marginTop: '1em' }}>
            <em>
              This project best represents my current skill level and interests because it shows a more complete system, technical complexity, and real-world application. Over time, I’ve improved from simple, incomplete concepts to more structured and functional projects with clearer goals. I plan to improve the Capstone Project and Restaurant Training Module first since they will have the biggest impact on my portfolio and are most relevant to my career goals.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
