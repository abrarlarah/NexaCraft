import {
  Globe, Palette, Smartphone, ShoppingCart, Server, Plug,
  PuzzleIcon, CreditCard, Link2, Workflow, BrainCircuit, Headphones
} from 'lucide-react';
import './Services.css';

const services = [
  { icon: Globe, title: 'Web Applications', desc: 'Full-stack web apps built with modern frameworks for speed and scalability.', color: '#6366f1' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces designed with user-first approach.', color: '#f472b6' },
  { icon: Smartphone, title: 'Mobile Applications', desc: 'Cross-platform mobile apps delivering native-like experiences.', color: '#22d3ee' },
  { icon: ShoppingCart, title: 'E-Commerce', desc: 'Complete e-commerce solutions with secure payment processing.', color: '#34d399' },
  { icon: Server, title: 'Backend Engineering', desc: 'Robust server-side architecture built for performance at scale.', color: '#fbbf24' },
  { icon: Plug, title: 'API Development', desc: 'RESTful and GraphQL APIs designed for seamless integration.', color: '#fb7185' },
  { icon: PuzzleIcon, title: 'Plugin Development', desc: 'Custom plugins and extensions that enhance platform capabilities.', color: '#a78bfa' },
  { icon: CreditCard, title: 'Payment Integration', desc: 'Secure payment gateways with multi-currency support.', color: '#f97316' },
  { icon: Link2, title: 'Third-Party Integrations', desc: 'Seamless integration with existing tools and services.', color: '#14b8a6' },
  { icon: Workflow, title: 'Workflow Automation', desc: 'Streamline operations with intelligent process automation.', color: '#8b5cf6' },
  { icon: BrainCircuit, title: 'AI Integration', desc: 'Smart AI-powered features that enhance user experience.', color: '#ec4899' },
  { icon: Headphones, title: 'Maintenance & Support', desc: 'Ongoing support ensuring your software runs smoothly.', color: '#0ea5e9' },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container container">
        <div className="services__header">
          <span className="section-label">
            <Plug size={14} />
            What We Offer
          </span>
          <h2 className="section-title">End-to-End Software Services</h2>
          <p className="section-subtitle">
            Our software services combine clean architecture and modern frameworks to create lasting value for your business.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                className="services__card"
                key={service.title}
                style={{ '--accent': service.color, '--delay': `${index * 0.05}s` }}
              >
                <div className="services__card-icon">
                  <Icon size={24} />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-desc">{service.desc}</p>
                <div className="services__card-shine"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
