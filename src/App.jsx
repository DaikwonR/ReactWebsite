import React, { useState, useRef } from 'react';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Project1 from './Project1';
import Project2 from './Project2';
import AnimatedBackground from './AnimatedBackground';
import './App.css';

const TABS = [
  { label: 'Home', component: <Home /> },
  { label: 'Projects', component: <Projects /> },
  { label: 'About', component: <About /> },
  { label: 'Contact', component: <Contact /> },
];

const PROJECTS_DROPDOWN = [
  { label: 'Project 1', component: <Project1 /> },
  { label: 'Project 2', component: <Project2 /> },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const dropdownTimeout = useRef(null);

  const handleTabClick = idx => {
    setActiveTab(idx);
    setActiveProject(null);
    if (TABS[idx].label === 'Projects') {
      setShowProjectsDropdown(true);
    } else {
      setShowProjectsDropdown(false);
    }
  };

  const handleProjectClick = pidx => {
    setActiveProject(pidx);
    setShowProjectsDropdown(true);
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    dropdownTimeout.current = setTimeout(() => {
      setShowProjectsDropdown(false);
    }, 2000);
  };

  // Show dropdown on hover/focus for Projects tab
  const handleProjectsMouseEnter = () => {
    setShowProjectsDropdown(true);
  };
  const handleProjectsMouseLeave = () => {
    if (activeProject === null) setShowProjectsDropdown(false);
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
              onMouseEnter={tab.label === 'Projects' ? handleProjectsMouseEnter : undefined}
              onMouseLeave={tab.label === 'Projects' ? handleProjectsMouseLeave : undefined}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              {tab.label}
              {tab.label === 'Projects' && showProjectsDropdown && activeTab === 1 && (
                <ul className="dropdown">
                  {PROJECTS_DROPDOWN.map((proj, pidx) => (
                    <li
                      key={proj.label}
                      onClick={e => { e.stopPropagation(); handleProjectClick(pidx); }}
                      className={activeProject === pidx ? 'active' : ''}
                      style={{ cursor: 'pointer' }}
                    >
                      {proj.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <main className="tab-content">
        {activeTab === 1 && activeProject !== null
          ? PROJECTS_DROPDOWN[activeProject].component
          : TABS[activeTab].component}
      </main>
    </div>
  );
}