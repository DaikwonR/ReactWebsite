
import './gxHome.css';
import React from 'react';
import { playBloop } from './soundUtils';

export default function Home({ onContactClick }) {
  return (
    <div className="gx-home-bg">
      <div className="gx-angles-bg"></div>
      {/* Bubble Letter Animated Words */}
      <div className="gx-bubble-words gx-bubble-left">
        <div className="gx-bubble-letters-vertical">
          {"WELCOME".split("").map((l, i) => (
            <span className="gx-bubble-letter" key={i}>{l}</span>
          ))}
        </div>
      </div>
      <div className="gx-bubble-words gx-bubble-top">
        <span className="gx-bubble-text">To</span>
      </div>
      <div className="gx-bubble-words gx-bubble-right">
        <span className="gx-bubble-text">My</span>
      </div>
      <div className="gx-bubble-words gx-bubble-bottom">
        <div className="gx-bubble-letters-horizontal">
          {"PORTFOLIO".split("").map((l, i) => (
            <span className="gx-bubble-letter" key={i}>{l}</span>
          ))}
        </div>
      </div>
      <div className="gx-center-card">
        <div className="gx-profile-glow">
          <img 
            src="/assets/Me.jpg" 
            alt="Daikwon Raney" 
            className="gx-profile-photo"
          />
        </div>
        <h1 className="gx-title">
          <span className="gx-title-main">Daikwon</span>
          <br />
          <span className="gx-title-main">Raney</span>
          <span className="gx-skate-icon" role="img" aria-label="skateboard">🛹</span>
        </h1>
        <h2 className="gx-subtitle">Software Dev <span className="gx-dot">|</span> QA <span className="gx-dot">|</span> Game Dev</h2>
        <p className="gx-intro">
          <span className="gx-code-icon">&lt;/&gt;</span> Motivated full-stack developer and QA pro with a passion for clean code, creative problem-solving, and skateboarding.<br/>
          <span className="gx-skate-phrase">Always pushing the limits—on the board and in the code.</span>
        </p>
        <div className="gx-tags">
          <span className="gx-tag">#React</span>
          <span className="gx-tag">#Vite</span>
          <span className="gx-tag">#GameDev</span>
          <span className="gx-tag">#SkateLife</span>
          <span className="gx-tag">#Automation</span>
        </div>
        <div className="gx-buttons">
          <a href="/assets/MyResume.pdf" className="gx-btn gx-btn-primary" download>Download Resume</a>
          <button className="gx-btn gx-btn-secondary" onClick={e => { playBloop(); onContactClick && onContactClick(e); }}>Contact Me</button>
        </div>
      </div>
    </div>
  );
}

