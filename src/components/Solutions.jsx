import { TrendingUp, Shield, Zap, CheckCircle2 } from 'lucide-react';
import './Solutions.css';

const features = [
  'Scalable architecture for growing businesses',
  'Enterprise-grade security standards',
  'Performance optimized for speed',
  'Continuous delivery and deployment',
  'Real-time monitoring and analytics',
  'Cross-platform compatibility',
];

const stats = [
  { value: '99.9%', label: 'Uptime Guarantee', icon: Shield },
  { value: '3x', label: 'Faster Delivery', icon: Zap },
  { value: '40%', label: 'Cost Reduction', icon: TrendingUp },
];

export default function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions__container container">
        <div className="solutions__content">
          <span className="section-label" style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.9)' }}>
            <Zap size={14} />
            Our Solutions
          </span>
          <h2 className="solutions__title">
            Strategic software solutions designed to evolve with your business.
          </h2>
          <p className="solutions__desc">
            Whether you are launching a new product or scaling an existing platform, we engineer systems that combine performance, flexibility, and durability to meet real-world demands.
          </p>

          <ul className="solutions__features">
            {features.map((f) => (
              <li key={f} className="solutions__feature">
                <CheckCircle2 size={18} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="solutions__stats">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div className="solutions__stat-card" key={stat.label}>
                <div className="solutions__stat-icon">
                  <Icon size={24} />
                </div>
                <div className="solutions__stat-value">{stat.value}</div>
                <div className="solutions__stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
