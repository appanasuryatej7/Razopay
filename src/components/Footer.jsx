import './Footer.css';

export default function Footer() {
  const footerLinks = {
    Products: ['Payments', 'Banking', 'Payroll', 'Invoicing', 'Settlement'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
    Resources: ['Docs', 'API Reference', 'Support', 'Status', 'Community'],
    Support: ['Help Center', 'Contact Us', 'Report Security', 'Terms', 'Privacy'],
  };

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏' },
    { name: 'LinkedIn', icon: 'in' },
    { name: 'GitHub', icon: '⚙' },
    { name: 'Facebook', icon: 'f' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column footer-brand">
              <h4 className="footer-title">Razorpay</h4>
              <p className="footer-description">
                Payments infrastructure for India. Accept, process, and settle payments natively in Indian rupees.
              </p>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a key={social.name} href="#" className="social-link" title={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-column">
                <h5 className="footer-heading">{category}</h5>
                <ul className="footer-links">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer-link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p className="footer-copyright">
            &copy; 2024 Razorpay. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
