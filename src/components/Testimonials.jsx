import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    text: "Development with the team was amazing, from planning phase to execution and delivery. They are willing to give in extra time in order to meet all the deadlines and product requirements, while working extremely fast. Definitely a go-to development partner.",
    name: 'Jan Kalasnikov',
    company: 'Platehero',
    rating: 5,
    color: '#6366f1',
  },
  {
    text: "I've used the team for setting up my marketplace. They were very responsive and able to solve problems quickly. As the requirements changed throughout the development they were able to adapt and provide exactly what we wanted. Communication was very good.",
    name: 'Ciro Scognamiglio',
    company: 'ad:personam GmbH',
    rating: 5,
    color: '#f472b6',
  },
  {
    text: "Working with them was such a fresh breath of air after dealing with a couple of incompetent developers. Very professional & a five star company. I sure will recommend them confidently & plan to work with them again for my other businesses!",
    name: 'Nikki Connors',
    company: 'Acorn',
    rating: 5,
    color: '#22d3ee',
  },
  {
    text: "Abrar is an absolute pleasure to deal with! He is very knowledgeable in his field and always very creative in solving problems. His communication skills are amazing and also happens to be a very nice and honest person. Highly recommended!",
    name: 'James Koutsy',
    company: 'Prospace',
    rating: 5,
    color: '#a78bfa',
  },
  {
    text: "We have some complex processes and the team has been able to step in for the more complex parts of development, listen, advise and create new solutions. Great to work with — very patient, understanding and clear. A pleasure to collaborate with.",
    name: 'Jen Smith',
    company: 'Signalise Coop',
    rating: 5,
    color: '#34d399',
  },
  {
    text: "They have been amazing support throughout the whole journey. If you are searching for a partner that is reliable and efficient then search no further. They have met all of our requirements and gave great insight on how to best manage our platform.",
    name: 'Jelena Mura',
    company: 'Second:fit Sport',
    rating: 5,
    color: '#fbbf24',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container container">
        <div className="testimonials__header">
          <span className="section-label">
            <MessageSquare size={14} />
            Happy Clients
          </span>
          <h2 className="section-title">Don't take our word for it.</h2>
          <p className="section-subtitle">See what our clients are saying about us.</p>
        </div>

        <div className="testimonials__single">
          <div className="testimonials__card-inner" key={current} style={{ '--card-accent': t.color }}>
            <div className="testimonials__card-top">
              <div className="testimonials__card-quote">
                <Quote size={32} />
              </div>
              <div className="testimonials__card-stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
            </div>
            <p className="testimonials__card-text">"{t.text}"</p>
            <div className="testimonials__card-author">
              <div className="testimonials__card-avatar" style={{ background: t.color }}>
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="testimonials__card-name">{t.name}</div>
                <div className="testimonials__card-company">{t.company}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials__controls">
          <button className="testimonials__btn" onClick={prev} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button className="testimonials__btn" onClick={next} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
