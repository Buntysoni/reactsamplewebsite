import React, { useState } from 'react';

export default function About() {
  const [activeBio, setActiveBio] = useState(null);

  const team = [
    {
      id: 'elena',
      name: 'Dr. Elena Rostova',
      role: 'Founder & Chief Executive Officer',
      avatar: '👩‍💻',
      bio: 'Elena holds a PhD in Distributed Systems from Stanford. Prior to Aetheria, she led infrastructure divisions at AWS and pioneered sub-millisecond container orchestration patterns.',
      skills: ['Distributed Systems', 'Cloud Strategy', 'Venture Growth'],
      favoriteTool: 'Rust Compilers'
    },
    {
      id: 'silas',
      name: 'Silas Vance',
      role: 'Chief Technology Officer',
      avatar: '👨‍💻',
      bio: 'Silas is a compiler engineer at heart and a former core contributor to the Rust project. He oversees Aetheria\'s proprietary virtualization engine and low-latency code hot-sync compiler.',
      skills: ['WASM Virtualization', 'Low-level Compilation', 'Go/C++'],
      favoriteTool: 'LLVM / Clang'
    },
    {
      id: 'jin',
      name: 'Jin-Woo Park',
      role: 'Head of Product Design',
      avatar: '🎨',
      bio: 'Jin-Woo is obsessed with human-computer interaction patterns. He believes developer tooling should be as aesthetically pristine as high-end hardware, styling every margin with extreme intent.',
      skills: ['UX / Visual Design', 'Interactive Prototypes', 'Design Systems'],
      favoriteTool: 'Figma & HSL Palettes'
    }
  ];

  return (
    <div className="about-page">
      {/* Page Title */}
      <section className="section-container" style={{ paddingBottom: '0px' }}>
        <div className="section-header">
          <span className="section-tag">About Our Mission</span>
          <h2 className="section-title">The Engineering Behind The Speed</h2>
          <p className="section-subtitle">
            Aetheria was founded to solve a single developer frustration: waiting for compilation loops, staging environments, and sync delays.
          </p>
        </div>
      </section>

      {/* Story & Stats */}
      <section className="section-container">
        <div className="story-layout">
          <div className="story-content">
            <h2 style={{ fontSize: '32px' }}>Redefining the developer environment.</h2>
            <p>
              Traditional dev environments are tethered to localized machines, plagued by "works on my machine" inconsistencies. We conceptualized a containerized sandbox ecosystem that operates globally on edge computing.
            </p>
            <p>
              By utilizing WASM-level virtualization and microsecond snapshots, we stream active code environments directly to any terminal on Earth.
            </p>
          </div>

          <div className="stats-grid">
            <div className="glass-card stat-item">
              <div className="stat-number">1.5M+</div>
              <div className="stat-label">Sandboxes Spun</div>
            </div>
            <div className="glass-card stat-item">
              <div className="stat-number">&lt;15ms</div>
              <div className="stat-label">Sync Latency</div>
            </div>
            <div className="glass-card stat-item">
              <div className="stat-number">99.99%</div>
              <div className="stat-label">Cluster Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-container timeline-section" style={{ paddingTop: '0px' }}>
        <div className="section-header">
          <span className="section-tag">Our History</span>
          <h2 className="section-title">Evolution of the Engine</h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-year">2024</div>
            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Project Genesis</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Aetheria started as an academic experiment mapping sub-container synchronization over WebSockets. Developed inside a garage by Elena Rostova.
            </p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-year">2025</div>
            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Re-architecting Compilation</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Silas Vance joins as co-founder. Rebuilt compiling pipelines in Rust, launching beta services to 12,000 developers. Secured $12M Series A.
            </p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-year">2026</div>
            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Scaling the Edge</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Propagated edge node clusters into 18 global regions. Integrated AI automated sandbox operations, serving 1.5 million active workspaces.
            </p>
          </div>
        </div>
      </section>

      {/* Team Directory (Interactive Profile) */}
      <section className="section-container" style={{ paddingTop: '0px' }}>
        <div className="section-header">
          <span className="section-tag">The Innovators</span>
          <h2 className="section-title">Meet the Core Team</h2>
          <p className="section-subtitle">Click on a team member card to reveal their complete technical portfolio bio.</p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <div 
              key={member.id} 
              className={`glass-card team-card ${activeBio?.id === member.id ? 'active' : ''}`}
              onClick={() => setActiveBio(activeBio?.id === member.id ? null : member)}
              style={{ cursor: 'pointer', border: activeBio?.id === member.id ? '1px solid var(--accent-primary)' : '1px solid var(--glass-border)' }}
            >
              <div className="team-avatar-wrapper">
                <div className="team-avatar-placeholder">
                  {member.avatar}
                </div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Click for details {activeBio?.id === member.id ? '▲' : '▼'}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Bio Modal Overlay Simulation */}
        {activeBio && (
          <div className="glass-card" style={{ marginTop: '40px', textAlign: 'left', border: '1px solid var(--accent-primary)', position: 'relative', animation: 'fadeIn 0.3s ease-out' }}>
            <button 
              onClick={() => setActiveBio(null)} 
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '18px' }}
              title="Close Profile"
            >
              ✕
            </button>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ fontSize: '48px' }}>{activeBio.avatar}</div>
              <div>
                <h3 style={{ fontSize: '24px', color: 'var(--text-primary)' }}>{activeBio.name}</h3>
                <p style={{ color: 'var(--accent-secondary)', fontSize: '14px', fontWeight: '600' }}>{activeBio.role}</p>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '15px' }}>{activeBio.bio}</p>
            <div>
              <h4 style={{ fontSize: '14px', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '0.05em' }}>Key Competencies</h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                {activeBio.skills.map((skill, idx) => (
                  <span key={idx} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {skill}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Favorite Workspace Tool: <code style={{ color: 'var(--accent-primary)', background: 'rgba(0, 242, 254, 0.05)' }}>{activeBio.favoriteTool}</code>
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
