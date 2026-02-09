import { useEffect, useRef } from 'react';
import './Stats.css';

export default function Stats() {
  const stats = [
    { label: 'Transactions Processed', value: '500M+', icon: '💰' },
    { label: 'Active Merchants', value: '200K+', icon: '🏢' },
    { label: 'Countries Served', value: '50+', icon: '🌍' },
    { label: 'Uptime Guarantee', value: '99.9%', icon: '⚡' },
  ];

  const elementsRef = useRef([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          elementsRef.current.forEach((el, index) => {
            if (el) {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 150);
            }
          });
        }
      });
    }, { threshold: 0.3 });

    if (elementsRef.current[0]) {
      observer.observe(elementsRef.current[0]);
    }

    return () => {
      if (elementsRef.current[0]) {
        observer.unobserve(elementsRef.current[0]);
      }
    };
  }, []);

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card fade-in-scale"
              ref={(el) => (elementsRef.current[index] = el)}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
