import React, { useState } from 'react';

export default function Contact() {
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('general');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'How do I migrate my local configurations?',
      answer: 'Upon booting a sandbox, you can link your GitHub profile. Aetheria automatically pulls your global SSH keys, git config, dotfiles, and editor extensions in under 3 seconds.'
    },
    {
      question: 'Are my sandbox runtimes limited by hours?',
      answer: 'Our free Sandbox tier will sleep after 30 minutes of keyboard inactivity. Paid professional and enterprise tiers run on persistent edge nodes and remain active indefinitely.'
    },
    {
      question: 'Can we host Aetheria inside our own AWS / GCP VPC?',
      answer: 'Yes. The Enterprise Grid tier supports deployment via custom Helm charts onto your own private Kubernetes clusters, complying with strict air-gapped security guidelines.'
    },
    {
      question: 'What compiler versions are supported in the sandbox?',
      answer: 'We support all major languages (NodeJS, Python, Go, Rust, Ruby, Java, C++) and keep virtualization runtimes synchronized with the latest LTS versions out of the box.'
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Verification check
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('All system packet parameters are required.');
      return;
    }

    if (!email.includes('@')) {
      setErrorMsg('Invalid return routing address (email).');
      return;
    }

    setFormSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setSubject('general');

    // Reset success message after some seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="contact-page">
      {/* Title */}
      <section className="section-container" style={{ paddingBottom: '0px' }}>
        <div className="section-header">
          <span className="section-tag">Encrypted Uplink</span>
          <h2 className="section-title">Connect with Infrastructure</h2>
          <p className="section-subtitle">
            Need customized volume storage? Having workspace routing issues? Send a diagnostic packet to our team.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="section-container">
        <div className="contact-layout">
          {/* Form Card */}
          <div className="glass-card">
            {formSubmitted ? (
              <div className="form-success-banner">
                <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>⚡ Handshake Complete</h3>
                <p style={{ fontSize: '14px' }}>
                  Diagnostics packet uploaded. Our support routing nodes will contact you in under 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                {errorMsg && (
                  <div style={{ color: 'var(--accent-tertiary)', fontSize: '14px', marginBottom: '16px', fontWeight: '600' }}>
                    Error: {errorMsg}
                  </div>
                )}

                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name" className="form-label">Full Name</label>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="email"
                    placeholder=" "
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email" className="form-label">Routing Email</label>
                </div>

                <div className="form-group">
                  <select
                    id="subject"
                    className="form-input"
                    style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="general">General Support</option>
                    <option value="billing">Pricing & Billing</option>
                    <option value="enterprise">Self-Hosted Enterprise</option>
                    <option value="security">Security Vulnerability Report</option>
                  </select>
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    placeholder=" "
                    className="form-textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <label htmlFor="message" className="form-label">Transmission Message</label>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Transmit Diagnostics Packet
                </button>
              </form>
            )}
          </div>

          {/* Info Card */}
          <div className="contact-info-card" style={{ padding: '24px 0' }}>
            <div className="info-item">
              <div className="info-icon">🏢</div>
              <div>
                <h3 className="info-title">Headquarters</h3>
                <p className="info-text">Aetheria Labs, Node 4 Cluster City</p>
                <p className="info-text">840 Silicon Valley Gateway, Suite 100</p>
                <p className="info-text">San Jose, CA 94103</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3 className="info-title">Email Pipeline</h3>
                <p className="info-text">General support: support@aetheria.io</p>
                <p className="info-text">Press inquiry: updates@aetheria.io</p>
                <p className="info-text">Enterprise relations: grid@aetheria.io</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h3 className="info-title">Voice Link</h3>
                <p className="info-text">International: +1 (800) 555-AETH</p>
                <p className="info-text">Direct Dev Support: +1 (800) 555-9276</p>
                <p className="info-text">Operation hours: 24/7/365 Global Edge coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ section */}
      <section className="section-container faq-section" style={{ paddingTop: '0px' }}>
        <div className="section-header">
          <span className="section-tag">Answers Protocol</span>
          <h2 className="section-title">Frequently Answered Queries</h2>
          <p className="section-subtitle">Quick responses to standard architectural operations.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question" 
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <span className="faq-icon-toggle"></span>
                </button>
                <div 
                  className="faq-answer"
                  style={{ maxHeight: isOpen ? '200px' : '0' }}
                >
                  <div className="faq-answer-inner">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
