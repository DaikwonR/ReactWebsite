
import React from 'react';

export default function Home() {
  return (
    <div className="homepage-cobalt-bg">
      {/* Angular/cobalt geometric overlay */}
      <div className="cobalt-angles"></div>
      <div className="homepage-card">
        <div className="profile-photo-glow">
          <img 
            src="/assets/Me.jpg" 
            alt="Daikwon Raney" 
            className="profile-photo"
          />
        </div>
        <h1 className="home-title">
          <span className="code-bracket">&#123;</span>
          Daikwon Raney
          <span className="skate-icon" role="img" aria-label="skateboard">🛹</span>
          <span className="code-bracket">&#125;</span>
        </h1>
        <h2 className="home-subtitle">Software Developer & QA | Skateboarder</h2>
        <p className="home-intro">
          <span className="code-icon">&lt;/&gt;</span> Motivated full-stack developer and QA pro with a passion for clean code, creative problem-solving, and skateboarding. <br/>
          <span className="skate-phrase">Always pushing the limits—on the board and in the code.</span>
        </p>
        <div className="home-tags">
          <span className="tag">#React</span>
          <span className="tag">#Vite</span>
          <span className="tag">#GameDev</span>
          <span className="tag">#SkateLife</span>
          <span className="tag">#Automation</span>
        </div>
      </div>
      {/* Animated code/skate background */}
      <div className="skate-coding-bg"></div>
    </div>
  );
}
