import { useEffect, useRef } from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CEO, TechStart',
      image: '👩‍💼',
      text: 'Razorpay transformed our payment infrastructure. Processing is now 10x faster and our customers love the experience.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Founder, E-Commerce Plus',
      image: '👨‍💼',
      text: 'The API integration was seamless. Support team is incredibly responsive. Highly recommend for any growing business.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Priya Singh',
      role: 'CFO, Finance Co',
      image: '👩‍💻',
      text: 'Best payment gateway in India. The settlement speed and reliability are unmatched. Game changer for us.',
      rating: 5,
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
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Loved by businesses worldwide</h2>
          <p className="section-subtitle">
            Join thousands of companies that trust Razorpay
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card fade-in-up"
              ref={(el) => (elementsRef.current[index] = el)}
            >
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.image}</div>
                <div className="author-info">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
