import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import './Hero.css';

const rotatingWords = ['Reliable', 'Scalable', 'Innovative', 'Modern', 'Secure', 'Robust'];
const wordColors = ['#6366f1', '#f472b6', '#22d3ee', '#a78bfa', '#34d399', '#fbbf24'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* Background decoration */}
      <div className="hero__bg">
        <div className="hero__bg-gradient"></div>
        <div className="hero__bg-shape hero__bg-shape--1" style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}></div>
        <div className="hero__bg-shape hero__bg-shape--2" style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}></div>
        <div className="hero__bg-shape hero__bg-shape--3" style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}></div>
        <div className="hero__bg-shape hero__bg-shape--4" style={{ transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)` }}></div>
        <div className="hero__bg-shape hero__bg-shape--5" style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }}></div>
        <div className="hero__bg-grid"></div>

        {/* Floating decorative elements */}
        <div className="hero__float hero__float--1">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" opacity="0.3"/></svg>
        </div>
        <div className="hero__float hero__float--2">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none"><rect x="5" y="5" width="20" height="20" rx="4" stroke="#f472b6" strokeWidth="2" opacity="0.25" transform="rotate(15 15 15)"/></svg>
        </div>
        <div className="hero__float hero__float--3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polygon points="12,2 22,22 2,22" stroke="#22d3ee" strokeWidth="2" opacity="0.2"/></svg>
        </div>
        <div className="hero__float hero__float--4">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 2C18 2 34 18 18 34C2 18 18 2 18 2Z" stroke="#a78bfa" strokeWidth="2" opacity="0.2"/></svg>
        </div>
      </div>

      <div className="hero__container container">
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          <Sparkles size={14} />
          <span>Crafting exceptional digital experiences</span>
        </div>

        <h1 className="hero__title">
          <span
            className={`hero__rotating-word ${isAnimating ? 'hero__rotating-word--exit' : 'hero__rotating-word--enter'}`}
            style={{ '--word-color': wordColors[wordIndex] }}
          >
            {rotatingWords[wordIndex]}
          </span>
          <br />
          <span className="hero__title-static">software solutions for</span>
          <br />
          <span className="hero__title-gradient">ambitious organizations</span>
        </h1>

        <p className="hero__description">
          We build enterprise-grade, scalable software solutions designed for
          long-term reliability and growth. From concept to deployment, we craft
          digital products that make an impact.
        </p>

        <div className="hero__actions">
          <a href="#services" className="hero__btn hero__btn--primary" onClick={handleClick}>
            <span>Explore Services</span>
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary" onClick={handleContactClick}>
            <div className="hero__btn-play">
              <Play size={14} fill="currentColor" />
            </div>
            <span>Get in Touch</span>
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">50<span className="hero__stat-plus">+</span></span>
            <span className="hero__stat-label">Projects Delivered</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">98<span className="hero__stat-plus">%</span></span>
            <span className="hero__stat-label">Client Satisfaction</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">5<span className="hero__stat-plus">+</span></span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">24<span className="hero__stat-plus">/7</span></span>
            <span className="hero__stat-label">Support Available</span>
          </div>
        </div>

        {/* Trusted by strip - scrolling marquee */}
        <div className="hero__trusted">
          <div className="hero__trusted-track">
            <div className="hero__trusted-slide">
              <span className="hero__trusted-logo"><span className="hero__trusted-dot"></span>Platehero</span>
              <span className="hero__trusted-logo"><span className="hero__trusted-dot"></span>Prospace</span>
              <span className="hero__trusted-logo"><span className="hero__trusted-dot"></span>Acorn</span>
              <span className="hero__trusted-logo"><span className="hero__trusted-dot"></span>Signalise</span>
              <span className="hero__trusted-logo"><span className="hero__trusted-dot"></span>Second:fit</span>
              <span className="hero__trusted-logo"><span className="hero__trusted-dot"></span>ad:personam</span>
            </div>
            <div className="hero__trusted-slide" aria-hidden="true">
              <span className="hero__trusted-logo"><span className="hero__trusted-dot"></span>Platehero</span>
              <span className="hero__trusted-logo"><span className="hero__trusted-dot"></span>Prospace</span>
              <span className="hero__trusted-logo"><span className="hero__trusted-dot"></span>Acorn</span>
              <span className="hero__trusted-logo"><span className="hero__trusted-dot"></span>Signalise</span>
              <span className="hero__trusted-logo"><span className="hero__trusted-dot"></span>Second:fit</span>
              <span className="hero__trusted-logo"><span className="hero__trusted-dot"></span>ad:personam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
