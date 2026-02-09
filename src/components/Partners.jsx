import { useEffect, useRef } from 'react';
import './Partners.css';

export default function Partners() {
  const partners = [
    { id: 1, name: 'Tech Company A', logo: 'TCA' },
    { id: 2, name: 'Global Finance B', logo: 'GFB' },
    { id: 3, name: 'Innovation Labs C', logo: 'ILC' },
    { id: 4, name: 'Digital Platform D', logo: 'DPD' },
    { id: 5, name: 'Enterprise Solutions E', logo: 'ESE' },
    { id: 6, name: 'Future Systems F', logo: 'FSF' },
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
    <section className="partners" id="partners">
      <div className="container">
        <h2 className="partners-title">Trusted by leading companies</h2>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="partner-logo fade-in-up"
              ref={(el) => (elementsRef.current[index] = el)}
            >
              <div className="logo-placeholder">{partner.logo}</div>
              <p className="partner-name">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
