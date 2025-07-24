import React from 'react';
import './footer.css';
import { Twitter } from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

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

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Market</li>
            <li>Converter</li>
            <li>Portfolio</li>
            <li>News</li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github/>
            </a>
            <Linkedin/>
            <a href="mailto:hello@example.com" aria-label="Email">
              <Mail/>
            </a>
          </div>
          <div className="newsletter">
            Stay updated with our newsletter for the latest crypto insights and features.
          </div>
        </div>
      </div>


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
