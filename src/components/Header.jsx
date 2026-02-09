import { useState, useEffect } from 'react';
import './Header.css';

export default function Header({ onOpenModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: 'Payments', href: '#payments' },
    { label: 'Banking', href: '#banking' },
    { label: 'Payroll', href: '#payroll' },
    { label: 'Partners', href: '#partners' },
    { label: 'Resources', href: '#resources' },
    { label: 'Support', href: '#support' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <span className="logo-text">Razorpay</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="header-actions-desktop">
          <button className="btn btn-secondary" onClick={onOpenModal}>
            Sign up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="nav-link-mobile"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <button className="btn btn-primary" onClick={() => { onOpenModal(); closeMenu(); }}>
          Sign up
        </button>
      </nav>
    </header>
  );
}
