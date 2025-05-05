import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand + Description */}
        <div className="footer-brand">
          <h2 className="brand-title">
            <span className="dot blue"></span>
            <span className="dot blue"></span>
            <span className="dot blue"></span> Crypture
          </h2>
          <p>
            Track, analyze, and optimize your portfolio like a pro. Real-time data and smart tools
            give you control over every move. Experience the next generation of crypto analytics.
          </p>
          <p className="credit">
            Made with <span className="heart">❤️</span> by <strong>Piyush Raj</strong>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Features</li>
            <li>Analytics</li>
            <li>Live Dashboard</li>
            <li>Testimonials</li>
            <li>Pricing</li>
            <li>Latest News</li>
          </ul>
        </div>

        {/* Connect + Newsletter */}
        <div className="footer-social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1s-2 1-3.1 1.34A4.52 4.52 0 0016.5 0c-2.5 0-4.5 2.42-3.9 4.91A13 13 0 013 1.6a4.5 4.5 0 001.4 6A4.48 4.48 0 012 7.2v.06a4.52 4.52 0 003.6 4.42 4.52 4.52 0 01-2.02.07A4.53 4.53 0 006.29 17a9.05 9.05 0 01-5.62 1.94A9.93 9.93 0 004 20c8.83 0 13.67-7.29 13.67-13.61 0-.21 0-.42-.02-.63A9.92 9.92 0 0023 3z" />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.37 7.86 10.88.58.1.79-.25.79-.55v-2.06c-3.2.7-3.87-1.38-3.87-1.38-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.19-3.12-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.21 1.19a11.2 11.2 0 012.92-.39c.99 0 2 .13 2.92.39 2.23-1.5 3.2-1.19 3.2-1.19.63 1.57.24 2.73.12 3.02.74.82 1.18 1.86 1.18 3.12 0 4.43-2.71 5.41-5.29 5.69.42.37.8 1.1.8 2.22v3.29c0 .3.2.65.8.54A10.99 10.99 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
                <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5 2.5 2.5 0 000-5zM3 8.98h4v12H3zM9 8.98h3.6v1.7h.05c.5-.95 1.75-1.95 3.6-1.95 3.85 0 4.56 2.54 4.56 5.83v6.42h-4v-5.7c0-1.36-.02-3.1-1.88-3.1-1.9 0-2.2 1.48-2.2 3v5.8H9z" />
              </svg>
            </a>
            <a href="mailto:hello@example.com" aria-label="Email">
              <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4c-1.1 0-2-.9-2-2V6a2 2 0 012-2zm8 7L4.5 6h15L12 11z" />
              </svg>
            </a>
          </div>
          <div className="newsletter">
            Stay updated with our newsletter for the latest crypto insights and features.
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2024 CryptoVision. All rights reserved.</p>
        <div className="policies">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
