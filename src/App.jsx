import React, { useState, useRef } from 'react';

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
  { label: 'Home', component: <Home /> },
  { label: 'Projects', component: <Projects /> },
  { label: 'Work Experience', component: <WorkExperience /> },
  { label: 'About', component: <About /> },
  { label: 'Contact', component: <Contact /> },
];

export default function App() {

  const [activeTab, setActiveTab] = useState(0);
  const [activeProjectPage, setActiveProjectPage] = useState(null);

  const handleTabClick = idx => {
    setActiveTab(idx);
    setActiveProjectPage(null);
  };

  const handleProjectPageClick = (projectIdx) => {
    setActiveTab(1); // Projects tab
    setActiveProjectPage(projectIdx);
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
        {activeTab !== 1 && TABS[activeTab].component}
      </main>
    </div>
  );
}