import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);
  const [devCount, setDevCount] = useState(10);

  // Dynamic pricing plans
  const plans = [
    {
      id: 'dev',
      tier: 'Sandbox Dev',
      priceMonthly: 0,
      priceAnnual: 0,
      description: 'Ideal for solo developers tinkering on personal prototypes.',
      features: [
        '1 Active Sandbox workspace',
        '512MB workspace RAM buffer',
        '2GB static disk storage',
        'WebSocket Hot-Sync reload',
        'Community forum support'
      ]
    },
    {
      id: 'pro',
      tier: 'Professional Team',
      priceMonthly: 24,
      priceAnnual: 19,
      description: 'Built for collaborative startup teams pushing rapid releases.',
      features: [
        '5 Concurrent Sandboxes',
        '2GB dedicated RAM per node',
        '15GB cluster disk storage',
        'Integrated AI Copilot Core',
        'Private Slack channel support'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      tier: 'Enterprise Grid',
      priceMonthly: 79,
      priceAnnual: 63,
      description: 'For corporate scale, premium regulatory security compliance.',
      features: [
        'Unlimited active sandboxes',
        '8GB dedicated RAM per node',
        '50GB shared storage volume',
        'SSO/SAML secure auth layers',
        'Dedicated SLA & 24/7 phone access'
      ]
    }
  ];

  // Dynamic cost estimates
  const getSimulatedSavings = () => {
    const hoursSavedPerDeveloper = 4.5;
    const avgDevRate = 65;
    const totalHours = devCount * hoursSavedPerDeveloper;
    const totalDollarSavings = Math.round(totalHours * avgDevRate * 4.3); // monthly savings
    
    // Cost calculation (Pro plan reference)
    const unitPrice = isAnnual ? 19 : 24;
    const platformCost = devCount * unitPrice;
    
    return {
      hours: Math.round(totalHours),
      dollars: totalDollarSavings.toLocaleString(),
      cost: platformCost.toLocaleString()
    };
  };

  const stats = getSimulatedSavings();

  return (
    <div className="services-page">
      {/* Page Title */}
      <section className="section-container" style={{ paddingBottom: '0px' }}>
        <div className="section-header">
          <span className="section-tag">Tiered Subscriptions</span>
          <h2 className="section-title">Transparent, Developer-Friendly Pricing</h2>
          <p className="section-subtitle">
            Deploy as many resources as you need. Start free, scale up instantly, cancel whenever you want.
          </p>
        </div>
      </section>

      {/* Monthly / Annual Selector Switch */}
      <div className="pricing-toggle-container">
        <span className={`pricing-toggle-label ${!isAnnual ? 'active' : ''}`}>Monthly</span>
        <button 
          className={`pricing-switch-btn ${isAnnual ? 'active' : ''}`}
          onClick={() => setIsAnnual(!isAnnual)}
          aria-label="Toggle Annual Billing Discount"
        >
          <div className="pricing-switch-handle"></div>
        </button>
        <span className={`pricing-toggle-label ${isAnnual ? 'active' : ''}`}>
          Annually <span style={{ color: 'var(--accent-primary)', fontSize: '12px', fontWeight: 'bold' }}>(Save ~20%)</span>
        </span>
      </div>

      {/* Pricing Cards Grid */}
      <section className="section-container" style={{ paddingTop: '0px' }}>
        <div className="pricing-cards">
          {plans.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div 
                key={plan.id} 
                className={`glass-card pricing-card ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && <div className="popular-badge">Highly Recommended</div>}
                
                <div className="pricing-header">
                  <h3 className="pricing-tier">{plan.tier}</h3>
                  <div className="pricing-price">
                    ${price}
                    <span className="pricing-period">/dev/month</span>
                  </div>
                  <p className="pricing-description">{plan.description}</p>
                </div>

                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="pricing-feature-item">
                      <span className="pricing-feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', marginTop: 'auto' }}
                  onClick={() => {
                    navigate('/contact');
                    window.scrollTo(0,0);
                  }}
                >
                  {plan.priceMonthly === 0 ? 'Deploy Free Sandbox' : 'Initiate Tier'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Savings / ROI Calculator */}
      <section className="section-container" style={{ paddingTop: '0px' }}>
        <div className="section-header">
          <span className="section-tag">Value Assessment</span>
          <h2 className="section-title">Simulate Your Workspace ROI</h2>
          <p className="section-subtitle">Slide to adjust your engineering headcount and view simulated platform savings.</p>
        </div>

        <div className="glass-card calculator-card">
          <div className="calc-slider-wrapper">
            <div className="calc-label">
              <span>Developer Engineering Team Size</span>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold', fontSize: '18px' }}>
                {devCount} Developers
              </span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="100" 
              value={devCount}
              className="calc-slider"
              onChange={(e) => setDevCount(parseInt(e.target.value))}
            />
          </div>

          <div className="calc-results">
            <div>
              <div className="calc-result-title">Monthly Aetheria Cost</div>
              <div className="calc-result-value">${stats.cost}</div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Estimated billing at pro rate.
              </p>
            </div>
            <div>
              <div className="calc-result-title">Est. Developer Efficiency Saved</div>
              <div className="calc-result-value" style={{ color: 'var(--accent-tertiary)' }}>~{stats.hours} hrs/week</div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Equivalent to <strong>${stats.dollars}</strong> of recovered engineering overhead/month.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
