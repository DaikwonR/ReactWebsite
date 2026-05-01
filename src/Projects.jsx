import React from 'react';
import { playBloop } from './soundUtils';

const projectCards = [
  {
    title: 'Capstone Project',
    icon: '🎮',
    description: 'This project showcases a majority of my skills and how I wanted to express myself through the game. It features NPC development, world building, and engaging gameplay.',
    accent: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
    onClickIdx: 0,
  },
  {
    title: 'Gym Tycoon',
    icon: '🏋️',
    description: 'Simple repetitive simulator. This project is about building a gym management game with a focus on core systems and gameplay loops.',
    accent: 'linear-gradient(135deg, #6366f1 0%, #0ea5e9 100%)',
    onClickIdx: 1,
  },
];

export default function Projects({ onProjectPageClick, onHomeClick }) {
  return (
    <div className="projects-cobalt-bg">
      <div className="projects-header">
        <h1 className="projects-title">Portfolio Projects</h1>
        <div className="projects-underline"></div>
      </div>
      <div className="projects-grid">
        {projectCards.map((proj) => (
          <div className="project-card" key={proj.title} style={{ borderImage: `${proj.accent} 1` }}>
            <div className="project-icon" style={{ background: proj.accent }}>{proj.icon}</div>
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <button
              className="project-link-btn"
              onClick={() => { playBloop(); onProjectPageClick && onProjectPageClick(proj.onClickIdx); }}
            >
              View {proj.title}
            </button>
          </div>
        ))}
      </div>
      {onHomeClick && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            className="project-link-btn"
            style={{ background: 'rgba(30,8,36,0.7)', border: '2px solid #0ea5e988' }}
            onClick={() => { playBloop(); onHomeClick(); }}
          >
            ← Home
          </button>
        </div>
      )}
    </div>
  );
}
