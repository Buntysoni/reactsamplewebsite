import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Info */}
        <div>
          <div className="logo" onClick={() => handleLinkClick('/')}>
            <div className="logo-dot"></div>
            AETHERIA
          </div>
          <p className="footer-desc">
            Building the next generation of cloud workspace environments powered by autonomous machine learning. Devs assemble.
          </p>
          <div className="footer-socials">
            <span className="social-icon" title="Twitter/X">𝕏</span>
            <span className="social-icon" title="GitHub">📂</span>
            <span className="social-icon" title="Discord">💬</span>
          </div>
        </div>

        {/* Column 2: Platform Links */}
        <div>
          <h4 className="footer-heading">Platform</h4>
          <ul className="footer-links">
            <li className="footer-link" onClick={() => handleLinkClick('/')}>Core Dashboard</li>
            <li className="footer-link" onClick={() => handleLinkClick('/services')}>Solutions & pricing</li>
            <li className="footer-link" onClick={() => handleLinkClick('/about')}>Platform Security</li>
            <li className="footer-link" onClick={() => handleLinkClick('/services')}>Enterprise Scale</li>
          </ul>
        </div>

        {/* Column 3: Company Links */}
        <div>
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li className="footer-link" onClick={() => handleLinkClick('/about')}>About Aetheria</li>
            <li className="footer-link" onClick={() => handleLinkClick('/contact')}>Careers (Hiring)</li>
            <li className="footer-link" onClick={() => handleLinkClick('/contact')}>Contact Relations</li>
            <li className="footer-link" onClick={() => handleLinkClick('/about')}>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="footer-heading">Stay Updated</h4>
          <p className="footer-desc" style={{ marginTop: 0, marginBottom: '16px' }}>
            Get the latest platform releases and security advisories directly in your inbox.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder="developer@domain.com"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-sm">
              {subscribed ? 'Subscribed ✓' : 'Subscribe'}
            </button>
          </form>
          {subscribed && (
            <p style={{ color: '#4ade80', fontSize: '13px', marginTop: '8px', fontWeight: '500' }}>
              Successfully subscribed to our newsletter pipeline.
            </p>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 Aetheria Technologies, Inc. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <span style={{ cursor: 'pointer' }}>Terms of Service</span>
          <span style={{ cursor: 'pointer' }}>Security Status</span>
        </div>
      </div>
    </footer>
  );
}
