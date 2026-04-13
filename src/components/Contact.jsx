import { useState } from 'react';
import { Send, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container container">
        <div className="contact__wrapper">
          <div className="contact__info">
            <span className="section-label" style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.9)' }}>
              <Mail size={14} />
              Get In Touch
            </span>
            <h2 className="contact__title">
              If you like what you see, let's work together.
            </h2>
            <p className="contact__desc">
              We bring rapid solutions to make the life of our clients easier.
              Have any questions? Reach out to us and we will get back to you shortly.
            </p>

            <div className="contact__details">
              <a href="mailto:hello@nexacraft.dev" className="contact__detail">
                <div className="contact__detail-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="contact__detail-label">Email Us</span>
                  <span className="contact__detail-value">hello@nexacraft.dev</span>
                </div>
                <ArrowUpRight size={16} className="contact__detail-arrow" />
              </a>
              <a href="tel:+1234567890" className="contact__detail">
                <div className="contact__detail-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="contact__detail-label">Call Us</span>
                  <span className="contact__detail-value">00 (123) 456 78 90</span>
                </div>
                <ArrowUpRight size={16} className="contact__detail-arrow" />
              </a>
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="contact__detail-label">Location</span>
                  <span className="contact__detail-value">Remote-first, Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="contact__form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Discussion"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={`contact__submit ${submitted ? 'contact__submit--success' : ''}`}>
              {submitted ? (
                <>Sent Successfully!</>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
