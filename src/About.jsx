
import './about3d.css';
import { playBloop } from './soundUtils';

export default function About() {
  return (
    <div className="about-3d-fullpage">
      <button
        className="about-back-btn"
        onClick={e => { playBloop(); window.location.href = '/'; }}
        style={{ position: 'fixed', top: '32px', left: '32px', zIndex: 10, background: 'rgba(30,8,36,0.7)', color: '#fff', border: 'none', borderRadius: '2em', padding: '0.7em 2em', fontSize: '1.1em', fontWeight: 700, boxShadow: '0 2px 12px #a200ff55', cursor: 'pointer', transition: 'background 0.2s' }}
        onMouseOver={e => (e.currentTarget.style.background = 'rgba(162,0,255,0.85)')}
        onMouseOut={e => (e.currentTarget.style.background = 'rgba(30,8,36,0.7)')}
      >
         Back
      </button>
      <div className="about-3d-bg">
        <img src="/assets/Skateboard.png" alt="3D Skateboard" className="skateboard-3d-img" />
      </div>
      <div className="about-3d-content">
        <div className="gx-bubble-label">About</div>
        <div className="about-header-icons" style={{ marginBottom: '1.2rem' }}>
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
