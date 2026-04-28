



import './gxCard.css';
import './workxp3d.css';
import React from 'react';
import { playBloop } from './soundUtils';

const gameDevTechLogos = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', alt: 'Unity' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg', alt: 'Unreal Engine' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', alt: 'C#' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg', alt: 'AWS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png', alt: 'Google' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Xbox_one_logo.svg', alt: 'Xbox' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Valve_logo.svg', alt: 'Valve' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Epic_Games_logo.svg', alt: 'Epic Games' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/PlayStation_logo.svg', alt: 'PlayStation' },
];


export default function WorkExperience() {
  return (
    <div className="workxp-3d-fullpage">
      <button
        className="workxp-back-btn"
        onClick={e => { playBloop(); window.location.href = '/'; }}
        style={{ position: 'fixed', top: '32px', left: '32px', zIndex: 10, background: 'rgba(30,8,36,0.7)', color: '#fff', border: 'none', borderRadius: '2em', padding: '0.7em 2em', fontSize: '1.1em', fontWeight: 700, boxShadow: '0 2px 12px #ff006a55', cursor: 'pointer', transition: 'background 0.2s' }}
        onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,0,106,0.85)')}
        onMouseOut={e => (e.currentTarget.style.background = 'rgba(30,8,36,0.7)')}
      >
         Back
      </button>
      <div className="workxp-3d-bg">
        <img src="/assets/redpanda.png" alt="3D Red Panda" className="redpanda-3d-img" />
      </div>
      <div className="workxp-3d-content">
        <div className="gx-bubble-label">Work Experience</div>
        <div className="workxp-header-icons" style={{ marginBottom: '1.2rem' }}>
          <span className="workxp-icon">💻</span>
          <span className="workxp-icon">🛠️</span>
          <span className="workxp-icon">☁️</span>
        </div>
        <h1 className="workxp-title-redpink">Work Experience</h1>
        <div className="workxp-underline-redpink"></div>
        <section>
          <h2>Technologies & Platforms</h2>
          <div className="work-logos-bg" style={{ marginBottom: '1.5rem' }}>
            {gameDevTechLogos.map((logo, idx) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="bg-logo"
                style={{ animationDelay: `${idx * 2}s` }}
              />
            ))}
          </div>
        </section>
        <section>
          <h2><span style={{ color: '#fff' }}>Software Engineering Intern, Motorola Solutions</span></h2>
          <p><strong>Mar 2026 – May 2026</strong> &mdash; Remote</p>
          <ul>
            <li>Developed web-based features and tools to support internal and customer-facing applications.</li>
            <li>Built and maintained data integration pipelines to ensure accurate and efficient data flow between systems.</li>
            <li>Collaborated with engineers to debug issues, optimize performance, and improve system reliability.</li>
            <li>Contributed to code reviews and followed best practices for clean, maintainable, and scalable code.</li>
          </ul>
        </section>
        <section>
          <h2><span style={{ color: '#fff' }}>Full Stack Software Engineer, Kairos Water</span></h2>
          <p><strong>Jan 2026 - Mar 2026</strong> &mdash; Hybrid (Salt Lake City, UT)</p>
          <ul>
            <li>Restructured legacy backend codebase to enhance maintainability, scalability, and performance.</li>
            <li>Implemented secure and efficient backend-to-database connections for reliable data handling.</li>
            <li>Conducted comprehensive backend-to-frontend integration testing to ensure seamless functionality and reduce defects.</li>
          </ul>
          <p><strong>Tech Stack:</strong> AWS (RDS, S3, API Gateway, Lambda), CloudFormation (YAML), JavaScript (React + Vite), PostgreSQL</p>
        </section>
        <section>
          <h2><span style={{ color: '#fff' }}>Software Developer in Test/Quality Assurance, FullBay</span></h2>
          <p><strong>Oct 2025 - Dec 2025</strong> &mdash; Salt Lake City, Utah</p>
          <ul>
            <li>Honed software development and QA skills in a production environment focused on heavy-duty repair shop management software.</li>
            <li>Managed GitHub repositories and task workflows to streamline team collaboration, issue tracking, and deployment processes.</li>
            <li>Improved multi-language code efficiency through testing and optimization across multiple platforms.</li>
          </ul>
          <p><strong>Tech Stack:</strong> Java, Playwright, AWS</p>
        </section>
      </div>
    </div>
  );
}
