

import React from 'react';

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
    <div className="work-bg-redpurple">
      <div className="work-card-redpurple">
        <div className="work-header-icons">
          <span className="work-icon">💻</span>
          <span className="work-icon">🛠️</span>
          <span className="work-icon">☁️</span>
        </div>
        <h1 className="work-title-redpurple">Work Experience</h1>
        <div className="work-underline-redpurple"></div>
        <div className="work-logos-bg">
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
        <div className="work-project-card">
          <h2>Full Stack Software Engineer, Kairos Water</h2>
          <p><strong>Jan 2026 - Mar 2026</strong> &mdash; Hybrid (Salt Lake City, UT)</p>
          <ul>
            <li>Restructured legacy backend codebase to enhance maintainability, scalability, and performance.</li>
            <li>Implemented secure and efficient backend-to-database connections for reliable data handling.</li>
            <li>Conducted comprehensive backend-to-frontend integration testing to ensure seamless functionality and reduce defects.</li>
          </ul>
          <p><strong>Tech Stack:</strong> AWS (RDS, S3, API Gateway, Lambda), CloudFormation (YAML), JavaScript (React + Vite), PostgreSQL</p>
        </div>
        <div className="work-project-card">
          <h2>Software Developer in Test/Quality Assurance, FullBay</h2>
          <p><strong>Oct 2025 - Dec 2025</strong> &mdash; Salt Lake City, Utah</p>
          <ul>
            <li>Honed software development and QA skills in a production environment focused on heavy-duty repair shop management software.</li>
            <li>Managed GitHub repositories and task workflows to streamline team collaboration, issue tracking, and deployment processes.</li>
            <li>Improved multi-language code efficiency through testing and optimization across multiple platforms.</li>
          </ul>
          <p><strong>Tech Stack:</strong> Java, Playwright, AWS</p>
        </div>
        <div className="work-project-card">
          <h2>Software Engineering Intern, Motorola Solutions</h2>
          <p><strong>May 2024 – Aug 2024</strong> &mdash; Remote</p>
          <ul>
            <li>Developed web-based features and tools to support internal and customer-facing applications.</li>
            <li>Built and maintained data integration pipelines to ensure accurate and efficient data flow between systems.</li>
            <li>Collaborated with engineers to debug issues, optimize performance, and improve system reliability.</li>
            <li>Contributed to code reviews and followed best practices for clean, maintainable, and scalable code.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
