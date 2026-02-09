import { useState, useEffect, useRef } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Please enter a valid email');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setMessage('✓ Subscribed successfully! Check your inbox.');
      setEmail('');

      setTimeout(() => {
        setMessage('');
        setIsSuccess(false);
      }, 4000);
    }, 1200);
  };

  return (
    <section className="newsletter fade-in-up" ref={elementRef}>
      <div className="container newsletter-content">
        <div className="newsletter-text">
          <h2 className="newsletter-title">Stay updated with our latest news</h2>
          <p className="newsletter-subtitle">
            Get insights on payments, banking, and fintech trends delivered to your inbox.
          </p>
        </div>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (message) setMessage('');
              }}
              disabled={isLoading}
              className={`newsletter-input ${isSuccess ? 'success' : ''}`}
            />
            <button
              type="submit"
              className="btn btn-primary newsletter-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner-small"></span>
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
          {message && (
            <p className={`form-message ${isSuccess ? 'success' : 'error'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
