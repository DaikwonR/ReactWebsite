import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function AnimatedBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: '#f8fafc' },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ['#7c3aed', '#f59e42', '#22d3ee', '#f43f5e', '#10b981'] },
          links: {
            color: '#7c3aed',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: false,
            speed: 2,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 60 },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 3, max: 7 } },
        },
        detectRetina: true,
      }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
    />
  );
}
