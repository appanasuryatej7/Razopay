import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero({ onOpenModal }) {
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    if (heroTextRef.current) observer.observe(heroTextRef.current);
    if (heroImageRef.current) observer.observe(heroImageRef.current);

    return () => {
      if (heroTextRef.current) observer.unobserve(heroTextRef.current);
      if (heroImageRef.current) observer.unobserve(heroImageRef.current);
    };
  }, []);

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text fade-in-left" ref={heroTextRef}>
          <h1 className="hero-title">
            Payments Infrastructure for India
          </h1>
          <p className="hero-subtitle">
            Razorpay is a full-stack payments and banking platform built for businesses. Automate your payments, grow your revenue, and unlock new possibilities.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={onOpenModal}>
              Sign up
            </button>
            <button className="btn btn-secondary" onClick={onOpenModal}>
              Know more
            </button>
          </div>
        </div>
        <div className="hero-image fade-in-right" ref={heroImageRef}>
          <div className="hero-image-placeholder">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" fill="#f5f7fa" />
              <rect x="20" y="20" width="360" height="260" fill="#ffffff" stroke="#1f51ff" strokeWidth="2" rx="8" />
              <circle cx="200" cy="80" r="30" fill="#1f51ff" opacity="0.3" />
              <rect x="80" y="130" width="240" height="40" fill="#1f51ff" opacity="0.2" rx="4" />
              <rect x="80" y="180" width="240" height="40" fill="#1f51ff" opacity="0.15" rx="4" />
              <rect x="80" y="230" width="100" height="30" fill="#1f51ff" opacity="0.2" rx="4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
