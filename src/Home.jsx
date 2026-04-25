
import React from 'react';

export default function Home() {
  return (
    <div className="homepage-redpurple-bg">
      {/* Silhouette background */}
      <img src="/assets/Me.jpg" alt="Silhouette" className="home-silhouette-bg" />
      <div className="angles-redpurple"></div>
      <div className="homepage-card-redpurple">
        <div className="profile-photo-glow-redpurple">
          <img 
            src="/assets/Me.jpg" 
            alt="Daikwon Raney" 
            className="profile-photo"
          />
        </div>
        <h1 className="home-title-redpurple">
          <span className="code-bracket-red">&#123;</span>
          Daikwon Raney
          <span className="skate-icon" role="img" aria-label="skateboard">🛹</span>
          <span className="code-bracket-red">&#125;</span>
        </h1>
        <h2 className="home-subtitle-redpurple">Software Developer & QA | Skateboarder</h2>
        <p className="home-intro-redpurple">
          <span className="code-icon-red">&lt;/&gt;</span> Motivated full-stack developer and QA pro with a passion for clean code, creative problem-solving, and skateboarding. <br/>
          <span className="skate-phrase-red">Always pushing the limits—on the board and in the code.</span>
        </p>
        <div className="home-tags-redpurple">
          <span className="tag-red">#React</span>
          <span className="tag-red">#Vite</span>
          <span className="tag-red">#GameDev</span>
          <span className="tag-red">#SkateLife</span>
          <span className="tag-red">#Automation</span>
        </div>
      </div>
      <div className="skate-coding-bg"></div>
    </div>
  );
}
