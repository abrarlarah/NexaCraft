import { Heart } from 'lucide-react';
import './Footer.css';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo" onClick={(e) => handleClick(e, '#home')}>
              <span className="footer__logo-icon">N</span>
              <span className="footer__logo-text">NexaCraft<span className="footer__logo-dot">.</span></span>
            </a>
            <p className="footer__tagline">
              Crafting enterprise-grade software solutions designed for ambitious organizations.
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Quick Links</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact-info">
            <h4 className="footer__links-title">Contact</h4>
            <ul>
              <li><a href="mailto:hello@nexacraft.dev">hello@nexacraft.dev</a></li>
              <li><a href="tel:+1234567890">00 (123) 456 78 90</a></li>
              <li>Remote-first, Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} NexaCraft. All rights reserved. Made with <Heart size={14} fill="#f472b6" color="#f472b6" /> by NexaCraft
          </p>
        </div>
      </div>
    </footer>
  );
}
