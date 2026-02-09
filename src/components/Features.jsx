import { useEffect, useRef } from 'react';
import './Features.css';

export default function Features() {
  const features = [
    {
      id: 1,
      icon: '💳',
      title: 'Payment Gateway',
      description: 'Accept payments online with our powerful and flexible payment gateway.',
    },
    {
      id: 2,
      icon: '🏦',
      title: 'Banking Solutions',
      description: 'Modern banking infrastructure designed for the digital economy.',
    },
    {
      id: 3,
      icon: '👥',
      title: 'Payroll Management',
      description: 'Automate payroll processing and employee management effortlessly.',
    },
    {
      id: 4,
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Real-time insights into your transactions and business metrics.',
    },
    {
      id: 5,
      icon: '🔐',
      title: 'Security First',
      description: 'Enterprise-grade security with PCI DSS compliance and encryption.',
    },
    {
      id: 6,
      icon: '🚀',
      title: 'API Integration',
      description: 'Developer-friendly APIs for seamless integration with your systems.',
    },
  ];

  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="features" id="payments">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Payments made simple</h2>
          <p className="section-subtitle">
            Everything you need to accept payments and manage your business
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-card fade-in-up"
              ref={(el) => (elementsRef.current[index] = el)}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
