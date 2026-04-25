import React from 'react';

export default function About() {
  return (
    <div className="about-bg-redpurple">
      <div className="about-card-redpurple">
        <div className="about-header-icons">
          <span className="about-icon">🛹</span>
          <span className="about-icon">🐼</span>
          <span className="about-icon">&lt;/&gt;</span>
        </div>
        <h1 className="about-title-redpurple">About Me</h1>
        <div className="about-underline-redpurple"></div>
        <section>
          <h2>Professional Skills</h2>
          <ul>
            <li>Communication, Networking, Creative Thinking, Leadership — Demonstrated through student coaching, team collaboration, and process improvements at Neumont and prior roles.</li>
          </ul>
        </section>
        <section>
          <h2>Programming Languages</h2>
          <ul>
            <li>C# — Applied in game engine development and full-scale product projects at Neumont.</li>
            <li>Java — Utilized in software development and testing workflows.</li>
            <li>JavaScript — Employed for full-stack integration and frontend-backend testing at Kairos Water.</li>
            <li>C++ — Incorporated in advanced programming tasks and game-related development.</li>
          </ul>
        </section>
        <section>
          <h2>Frameworks & Specialized Areas</h2>
          <ul>
            <li>.NET — Used to support backend code restructuring and application development.</li>
            <li>Git/GitHub — Managed repositories, task tracking, and workflows as GitHub task manager at FullBay.</li>
            <li>Full-Stack Development — Contributed to backend-to-frontend testing and integration at Kairos Water.</li>
            <li>AI Development — Integrated into mid-level programming projects and exploratory development.</li>
          </ul>
        </section>
        <section>
          <h2>Areas of Interest</h2>
          <ul>
            <li>Game making, playing, and designing</li>
            <li>Skateboarding</li>
            <li>Reading</li>
            <li>Cooking</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
