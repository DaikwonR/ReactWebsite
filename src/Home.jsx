import React from 'react';

export default function Home() {
  return (
    <div className="homepage-container">
      <header className="homepage-hero">
        <h1>Welcome to My Portfolio</h1>
        <img 
          src="/assets/Me.jpg" 
          alt="Daikwon Raney" 
          className="profile-photo"
          style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', margin: '1.5rem auto', display: 'block', boxShadow: '0 4px 24px rgba(124,58,237,0.12)' }}
        />
        <p>Hello! My name is Daikwon Raney and I'm a Motivated Software Developer and Quality Assurance professional
            with hands-on experience in full-stack development, 
            backend refactoring, automated testing, 
            game engine projects, and QA processes.. 
            Welcome to my professional portfolio website.
        </p>
      </header>
    </div>
  );
}
