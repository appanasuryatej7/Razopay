import { useEffect, useRef } from 'react';
import './CTABanner.css';

export default function CTABanner({ onOpenModal }) {
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <section className="cta-banner fade-in" ref={bannerRef}>
      <div className="cta-content">
        <h2 className="cta-title">Ready to grow your business?</h2>
        <p className="cta-subtitle">
          Join the fastest growing payment platform. Get started in minutes.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-white" onClick={onOpenModal}>
            Get Started Free
          </button>
          <button className="btn btn-secondary" onClick={onOpenModal}>
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}
