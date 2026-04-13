import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const linksRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sliding underline indicator
  useEffect(() => {
    if (!linksRef.current) return;
    const activeLink = linksRef.current.querySelector('.navbar__link--active');
    if (activeLink) {
      const containerRect = linksRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setIndicatorStyle({
        width: `${linkRect.width - 16}px`,
        left: `${linkRect.left - containerRect.left + 8}px`,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
        <div className="navbar__container container">
          {/* Logo - Left Side */}
          <div className="navbar__brand">
            <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
              <span className="navbar__logo-icon">N</span>
              <span className="navbar__logo-text">NexaCraft<span className="navbar__logo-dot">.</span></span>
            </a>
          </div>

          {/* Nav Links - Center Strip */}
          <nav className="navbar__nav">
            <ul className="navbar__links" ref={linksRef}>
              <li className="navbar__underline" style={indicatorStyle}></li>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`navbar__link ${activeSection === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA - Right Side */}
          <div className="navbar__actions">
            <a href="#contact" className="navbar__cta" onClick={(e) => handleNavClick(e, '#contact')}>
              Let's Talk <ArrowUpRight size={14} />
            </a>
          </div>
          
          {/* Mobile toggle */}
          <button
            className="navbar__mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-header">
          <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
            <span className="navbar__logo-icon">N</span>
            <span className="navbar__logo-text">NexaCraft<span className="navbar__logo-dot">.</span></span>
          </a>
          <button className="navbar__mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>
        <ul className="navbar__mobile-links">
          {navLinks.map((link, i) => (
            <li key={link.label} style={{ '--delay': `${i * 0.05}s` }}>
              <a
                href={link.href}
                className={`navbar__mobile-link ${activeSection === link.href.replace('#', '') ? 'navbar__mobile-link--active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span className="navbar__mobile-num">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-bottom">
          <a href="#contact" className="navbar__mobile-cta" onClick={(e) => handleNavClick(e, '#contact')}>
            Start a Project <ArrowUpRight size={16} />
          </a>
          <span className="navbar__mobile-email">hello@nexacraft.dev</span>
        </div>
      </div>
    </>
  );
}
