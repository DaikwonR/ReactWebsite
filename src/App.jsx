import React, { useState } from 'react';
import { playBloop } from './soundUtils';

import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Project1 from './Project1';
import Project2 from './Project2';
import WorkExperience from './WorkExperience';
import AnimatedBackground from './AnimatedBackground';
import './App.css';

const TABS = [
  { label: 'Home' },
  { label: 'Projects' },
  { label: 'Work Experience' },
  { label: 'About' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeProjectPage, setActiveProjectPage] = useState(null);

  const handleTabClick = idx => {
    playBloop();
    setActiveTab(idx);
    setActiveProjectPage(null);
  };

  const handleProjectPageClick = (projectIdx) => {
    setActiveTab(1);
    setActiveProjectPage(projectIdx);
  };

  const handleContactClick = () => {
    setActiveTab(-1);
  };

  const handleHomeClick = () => {
    playBloop();
    setActiveTab(0);
    setActiveProjectPage(null);
  };

  const handleProjectsClick = () => {
    playBloop();
    setActiveTab(1);
    setActiveProjectPage(null);
  };

  return (
    <div className="tabbed-app">
      <AnimatedBackground />
      <nav className="tab-navbar">
        <ul className="tab-list">
          {TABS.map((tab, idx) => (
            <li
              key={tab.label}
              className={activeTab === idx ? 'active' : ''}
              onClick={() => handleTabClick(idx)}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </nav>
      <main className="tab-content">
        {activeTab === 0 && <Home onContactClick={handleContactClick} />}
        {activeTab === 1 && activeProjectPage === null && <Projects onProjectPageClick={handleProjectPageClick} onHomeClick={handleHomeClick} />}
        {activeTab === 1 && activeProjectPage === 0 && <Project1 onBackClick={handleProjectsClick} />}
        {activeTab === 1 && activeProjectPage === 1 && <Project2 onBackClick={handleProjectsClick} />}
        {activeTab === 2 && <WorkExperience onHomeClick={handleHomeClick} />}
        {activeTab === 3 && <About onHomeClick={handleHomeClick} />}
        {activeTab === -1 && <Contact onHomeClick={handleHomeClick} />}
      </main>
    </div>
  );
}
