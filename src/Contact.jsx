

import './gxCard.css';
import React from 'react';

export default function Contact() {
  return (
    <div className="gx-home-bg">
      <div className="gx-card">
        <div className="gx-bubble-label">Contact</div>
        <div className="contact-header-icons" style={{ marginBottom: '1.2rem' }}>
          <span className="contact-icon">📧</span>
          <span className="contact-icon">🛹</span>
          <span className="contact-icon">🐼</span>
          <span className="contact-icon">&lt;/&gt;</span>
        </div>
        <h1 className="contact-title-redpurple">Contact</h1>
        <div className="contact-underline-redpurple"></div>
        <ul className="contact-list-redpurple">
          <li><span className="contact-list-icon">📧</span> Email: <a href="mailto:daikwon.raney@gmail.com">daikwon.raney@gmail.com</a></li>
          <li><span className="contact-list-icon">💼</span> LinkedIn: <a href="https://www.linkedin.com/in/daikwon-raney-2a15a8294/" target="_blank" rel="noopener noreferrer">Daikwon Raney</a></li>
          <li><span className="contact-list-icon">📱</span> Phone: 832-870-2176</li>
          <li><span className="contact-list-icon">📄</span> <a href="https://docs.google.com/document/d/1qhN85cQEBavsygj26kzAuwFBilKxqsr5jaPIQuDNeSI/edit?tab=t.0#heading=h.kgica5kc1frw" target="_blank" rel="noopener noreferrer">View My Resume</a></li>
        </ul>
      </div>
    </div>
  );
}
