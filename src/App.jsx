import React, { useState, useRef } from 'react';
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
  { label: 'Home', component: null },
  { label: 'Projects', component: <Projects /> },
  { label: 'Work Experience', component: <WorkExperience /> },
  { label: 'About', component: <About /> },
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
    setActiveTab(1); // Projects tab
    setActiveProjectPage(projectIdx);
  };

  const handleContactClick = () => {
    setActiveTab(-1); // Use -1 to indicate Contact page
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
        {activeTab === 1 && activeProjectPage === 0 && <Project1 />}
        {activeTab === 1 && activeProjectPage === 1 && <Project2 />}
        {activeTab === 1 && activeProjectPage === null && <Projects onProjectPageClick={handleProjectPageClick} />}
        {activeTab === 0 && <Home onContactClick={handleContactClick} />}
        {activeTab > 1 && TABS[activeTab].component}
        {activeTab === -1 && <Contact />}
      </main>
    </div>
  );
}
