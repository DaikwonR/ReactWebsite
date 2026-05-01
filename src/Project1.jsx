import './project3d.css';
import React from 'react';
import { playBloop } from './soundUtils';

export default function Project1({ onBackClick }) {
  return (
    <div className="project3d-fullpage">
      <video className="project3d-bg-video" autoPlay loop muted playsInline>
        <source src="/assets/Media1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="project3d-content">
        <button
          className="project3d-back-btn"
          onClick={() => { playBloop(); onBackClick && onBackClick(); }}
          onMouseOver={e => (e.currentTarget.style.background = 'rgba(162,0,255,0.85)')}
          onMouseOut={e => (e.currentTarget.style.background = 'rgba(30,8,36,0.7)')}
        >
          ← Back
        </button>
        <div className="project3d-card">
          <div className="project3d-bubble-label">Project: Capstone</div>
          <div className="project3d-header-icons">
            <span className="project-icon">&lt;/&gt;</span>
            <span className="project-icon">🛹</span>
            <span className="project-icon">🐼</span>
          </div>
          <h1 className="project3d-title">Capstone Project – 8</h1>
          <div className="project3d-underline"></div>
          <div className="project3d-text" style={{ textAlign: 'left' }}>
            <p><strong>Portfolio • 67% done</strong></p>
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
                This project best represents my current skill level and interests because it shows a more complete system, technical complexity, and real-world application. Over time, I've improved from simple, incomplete concepts to more structured and functional projects with clearer goals.
              </em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
