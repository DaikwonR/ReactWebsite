import React from 'react';

const softwareLogos = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'Java' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', alt: 'Unity' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg', alt: 'Unreal' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', alt: 'Angular' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', alt: 'C#' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg', alt: '.NET' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', alt: 'C++' },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="animated-bg">
        {softwareLogos.map((logo, idx) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="bg-logo"
            style={{ animationDelay: `${idx * 2}s` }}
          />
        ))}
      </div>
      <h1>Portfolio / Projects</h1>
      <div className="project">
        <h2>Full Stack Software Engineer, Kairos Water</h2>
        <p><strong>January 2026 - March 2026</strong> &mdash; Hybrid (Salt Lake City, UT)</p>
        <ul>
          <li>Restructured legacy backend codebase to enhance maintainability, scalability, and performance.</li>
          <li>Implemented secure and efficient backend-to-database connections for reliable data handling.</li>
          <li>Conducted comprehensive backend-to-frontend integration testing to ensure seamless functionality and reduce defects.</li>
        </ul>
        <p><strong>Tech Stack:</strong> [AWS (RDS, S3, API Gateway, Lambda) • CloudFormation (YAML) • JavaScript (React + Vite) • PostgreSQL]</p>
      </div>
      <div className="project">
        <h2>Software Developer in Test/Quality Assurance, FullBay</h2>
        <p><strong>October 2025 - December 2025</strong> &mdash; Salt Lake City, Utah</p>
        <ul>
          <li>Honed software development and QA skills in a production environment focused on heavy-duty repair shop management software.</li>
          <li>Managed GitHub repositories and task workflows to streamline team collaboration, issue tracking, and deployment processes.</li>
          <li>Improved multi-language code efficiency through testing and optimization across multiple platforms.</li>
        </ul>
        <p><strong>Tech Stack:</strong> [Java, Playwright, AWS]</p>
      </div>
    </div>
  );
}
