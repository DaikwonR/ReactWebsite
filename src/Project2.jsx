import './project3d.css';
import React from 'react';
import { playBloop } from './soundUtils';

export default function Project2({ onBackClick }) {
  return (
    <div className="project3d-fullpage">
      <video className="project3d-bg-video" autoPlay loop muted playsInline>
        <source src="/assets/gym-tycoon.mp4" type="video/mp4" />
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
          <div className="project3d-bubble-label">Project: Gym Tycoon</div>
          <div className="project3d-header-icons">
            <span className="project-icon">&lt;/&gt;</span>
            <span className="project-icon">🛹</span>
            <span className="project-icon">🐼</span>
          </div>
          <h1 className="project3d-title">Gym Tycoon – 6</h1>
          <div className="project3d-underline"></div>
          <div className="project3d-text" style={{ textAlign: 'left' }}>
            <p><strong>Portfolio • 70% done</strong></p>
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
    </div>
  );
}
