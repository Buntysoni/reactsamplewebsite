import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [consoleLines, setConsoleLines] = useState([]);
  const [isRunning, setIsRunning] = useState(true);
  const consoleEndRef = useRef(null);

  const initialDiagnostics = [
    { type: 'info', text: 'Initializing Aetheria cloud terminal v1.0.8...' },
    { type: 'info', text: 'Allocating sandbox memory nodes... [1024MB | OK]' },
    { type: 'prompt', text: 'npm run build:prod' },
    { type: 'info', text: '✓ Fetching code dependencies (24 files)...' },
    { type: 'info', text: '⚡ Compiling components (Vite/React)...' },
    { type: 'success', text: '✓ Production bundle generated: main.js (24.6 kB)' },
    { type: 'prompt', text: 'aetheria deploy --edge' },
    { type: 'info', text: 'Uploading static assets to Global Edge nodes (18 regions)...' },
    { type: 'success', text: '✓ Propagation complete. SSL Certificate verified.' },
    { type: 'success', text: '✓ Platform Status: ONLINE. Endpoint: https://workspace-8219.aetheria.app' }
  ];

  // Self-cleaning diagnostics interval controller
  useEffect(() => {
    let interval;
    if (isRunning) {
      setConsoleLines([]);
      let lineIdx = 0;
      interval = setInterval(() => {
        if (lineIdx < initialDiagnostics.length) {
          setConsoleLines((prev) => [...prev, initialDiagnostics[lineIdx]]);
          lineIdx++;
        } else {
          setIsRunning(false);
        }
      }, 700);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [consoleLines]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <span className="section-tag">Introducing Aetheria Cloud</span>
          <h1 className="hero-title">
            Build at the <span className="text-gradient">Speed of Thought</span>
          </h1>
          <p className="hero-desc">
            Assemble, debug, compile, and deploy modern applications in a unified, AI-native cloud workspace. Zero local configuration required.
          </p>
          <div className="hero-actions">
            <button 
              className="btn btn-primary" 
              onClick={() => {
                navigate('/contact');
                window.scrollTo(0,0);
              }}
            >
              Get Started Free ➜
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => {
                navigate('/services');
                window.scrollTo(0,0);
              }}
            >
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <div className="section-header">
          <span className="section-tag">Core Capabilities</span>
          <h2 className="section-title">Engineered for High-Performance Teams</h2>
          <p className="section-subtitle">
            Aetheria bypasses traditional local setups, streaming a containerized developer workspace straight to your browser.
          </p>
        </div>

        <div className="features-grid">
          {/* Feature 1 */}
          <div className="glass-card feature-card">
            <div className="feature-icon-wrapper">🚀</div>
            <h3 className="feature-title">Instant Hot Module Reload</h3>
            <p className="feature-desc">
              Direct sub-millisecond source-to-browser updates using our optimized edge build pipeline. Feel the breeze.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass-card feature-card">
            <div className="feature-icon-wrapper">🤖</div>
            <h3 className="feature-title">AI Copilot Core</h3>
            <p className="feature-desc">
              Context-aware helper models baked directly into the filesystem layer. Auto-generates, runs, and updates unit tests on commit.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-card feature-card">
            <div className="feature-icon-wrapper">🔒</div>
            <h3 className="feature-title">Quantum Isolation</h3>
            <p className="feature-desc">
              Every sandbox runs inside a cryptographically secure kernel, preventing dependency contamination and runtime leaks.
            </p>
          </div>
        </div>

        {/* Live Simulation Terminal Console */}
        <div className="dashboard-simulation">
          <div className="console-mock">
            <div className="console-header">
              <div className="console-dots">
                <div className="console-dot red"></div>
                <div className="console-dot yellow"></div>
                <div className="console-dot green"></div>
              </div>
              <div className="console-tab">aetheria-terminal@edge-session</div>
              <button 
                className="btn btn-secondary btn-sm" 
                style={{ padding: '4px 10px', fontSize: '11px' }}
                onClick={() => setIsRunning(true)}
                disabled={isRunning}
              >
                {isRunning ? 'Running Diagnostics...' : 'Trigger Re-Build'}
              </button>
            </div>
            <div className="console-body">
              {consoleLines.filter(Boolean).map((line, idx) => (
                <div key={idx} className="console-line">
                  {line.type === 'prompt' && <span className="console-prompt">$</span>}
                  <span className={`console-text ${line.type === 'success' ? 'console-success' : ''}`}>
                    {line.text}
                  </span>
                </div>
              ))}
              <div ref={consoleEndRef} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote / Banner */}
      <section className="section-container" style={{ paddingTop: '0px', paddingBottom: '80px' }}>
        <div className="glass-card" style={{ textAlign: 'center', background: 'radial-gradient(ellipse at center, rgba(0, 242, 254, 0.05) 0%, rgba(0, 0, 0, 0) 80%)' }}>
          <p style={{ fontSize: '24px', fontStyle: 'italic', fontFamily: 'var(--font-display)', marginBottom: '16px', fontWeight: '500' }}>
            "Aetheria allowed our development cycles to drop from hours to seconds. The integrated sandbox environment is truly game-changing."
          </p>
          <p style={{ fontWeight: '600', color: 'var(--accent-primary)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            — Marcus Vance, Chief Architect at CloudVibe
          </p>
        </div>
      </section>
    </div>
  );
}
