import './Pricing.css';

export default function Pricing({ onOpenModal }) {
  const plans = [
    {
      id: 1,
      name: 'Starter',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        'Payment processing',
        'Basic analytics',
        'Email support',
        'Up to 100 transactions/month',
        'Standard settlement',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      id: 2,
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'For growing businesses',
      features: [
        'Everything in Starter',
        'Advanced analytics',
        'Priority support',
        'Unlimited transactions',
        'Fast settlement (1 day)',
        'Dedicated account manager',
        'Custom branding',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large scale operations',
      features: [
        'Everything in Professional',
        'Custom solutions',
        '24/7 phone support',
        'Dedicated infrastructure',
        'Custom integrations',
        'SLA guarantee',
        'API rate priority',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that works best for your business
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              
              <div className="plan-price">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>

              <button
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                onClick={onOpenModal}
              >
                {plan.cta}
              </button>

              <div className="features-list">
                <p className="features-label">Includes:</p>
                {plan.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="checkmark">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
