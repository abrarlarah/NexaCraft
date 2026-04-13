import { Lightbulb, PenTool, Rocket } from 'lucide-react';
import './Process.css';

const steps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Collect Ideas',
    desc: 'Understanding your vision and business goals. We dive deep into your requirements to build a solid foundation.',
    color: '#6366f1',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'System Design',
    desc: 'Transforming insights into structured technical plans. We architect scalable solutions with clean code practices.',
    color: '#f472b6',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Finalize Product',
    desc: 'Delivering a polished and production-ready solution. Rigorous testing ensures quality before deployment.',
    color: '#22d3ee',
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process__container container">
        <div className="process__header">
          <span className="section-label">
            <PenTool size={14} />
            How We Work
          </span>
          <h2 className="section-title">Our Working Process</h2>
          <p className="section-subtitle">
            Discover how we transform ideas into scalable, high-performance software through a structured and transparent approach.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="process__step" key={step.number} style={{ '--accent': step.color }}>
                <div className="process__step-number">{step.number}</div>
                <div className="process__step-icon">
                  <Icon size={28} />
                </div>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.desc}</p>
                {index < steps.length - 1 && <div className="process__step-connector"></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
