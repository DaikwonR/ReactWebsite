import './gxCard.css';
import './workxp3d.css';
import React, { useState } from 'react';
import { playBloop } from './soundUtils';

const internships = [
  {
    label: 'Motorola',
    emoji: '📡',
    title: 'Software Engineering Intern',
    company: 'Motorola Solutions',
    date: 'Mar 2026 – May 2026',
    location: 'Remote',
    bullets: [
      'Developed web-based features and tools to support internal and customer-facing applications.',
      'Built and maintained data integration pipelines to ensure accurate and efficient data flow between systems.',
      'Collaborated with engineers to debug issues, optimize performance, and improve system reliability.',
      'Contributed to code reviews and followed best practices for clean, maintainable, and scalable code.',
    ],
    stack: null,
  },
  {
    label: 'Kairos Water',
    emoji: '💧',
    title: 'Full Stack Software Engineer',
    company: 'Kairos Water',
    date: 'Jan 2026 – Mar 2026',
    location: 'Hybrid (Salt Lake City, UT)',
    bullets: [
      'Restructured legacy backend codebase to enhance maintainability, scalability, and performance.',
      'Implemented secure and efficient backend-to-database connections for reliable data handling.',
      'Conducted comprehensive backend-to-frontend integration testing to ensure seamless functionality and reduce defects.',
    ],
    stack: 'AWS (RDS, S3, API Gateway, Lambda), CloudFormation (YAML), JavaScript (React + Vite), PostgreSQL',
  },
  {
    label: 'FullBay',
    emoji: '🔧',
    title: 'Software Developer in Test / QA',
    company: 'FullBay',
    date: 'Oct 2025 – Dec 2025',
    location: 'Salt Lake City, Utah',
    bullets: [
      'Honed software development and QA skills in a production environment focused on heavy-duty repair shop management software.',
      'Managed GitHub repositories and task workflows to streamline team collaboration, issue tracking, and deployment processes.',
      'Improved multi-language code efficiency through testing and optimization across multiple platforms.',
    ],
    stack: 'Java, Playwright, AWS',
  },
];

export default function WorkExperience({ onHomeClick }) {
  const [selected, setSelected] = useState(0);
  const job = internships[selected];

  return (
    <div className="workxp-3d-fullpage">
      <div className="workxp-3d-bg">
        <img src="/assets/RedPanda.png" alt="3D Red Panda" className="redpanda-3d-img" />
      </div>

      {onHomeClick && (
        <button
          className="workxp-back-btn"
          onClick={() => { playBloop(); onHomeClick(); }}
        >
          ← Home
        </button>
      )}

      <div className="workxp-3d-content">
        <div className="gx-bubble-label">Work Experience</div>
        <div className="workxp-header-icons" style={{ marginBottom: '1.2rem', marginTop: '1rem' }}>
          <span className="workxp-icon">💻</span>
          <span className="workxp-icon">🛠️</span>
          <span className="workxp-icon">☁️</span>
        </div>
        <h1 className="workxp-title-redpink">Work Experience</h1>
        <div className="workxp-underline-redpink"></div>

        <div className="workxp-btn-row">
          {internships.map((item, idx) => (
            <button
              key={item.label}
              className={`workxp-tab-btn${selected === idx ? ' active' : ''}`}
              onClick={() => { playBloop(); setSelected(idx); }}
            >
              <span className="workxp-tab-emoji">{item.emoji}</span>
              {item.label}
            </button>
          ))}
        </div>

        <section className="workxp-detail-panel">
          <div className="workxp-job-header">
            <span className="workxp-job-emoji">{job.emoji}</span>
            <div>
              <h2 className="workxp-job-title">{job.title}</h2>
              <div className="workxp-job-company">{job.company}</div>
            </div>
          </div>
          <div className="workxp-job-meta">
            <span>📅 {job.date}</span>
            <span>📍 {job.location}</span>
          </div>
          <ul className="workxp-job-bullets">
            {job.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {job.stack && (
            <div className="workxp-stack">
              <strong>Tech Stack:</strong> {job.stack}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
