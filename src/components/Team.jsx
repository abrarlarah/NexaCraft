import { Users, Globe, ExternalLink, Mail } from 'lucide-react';
import './Team.css';

const team = [
  {
    name: 'Abrar',
    role: 'Senior Developer',
    desc: 'Leads technical architecture and engineers scalable full-stack solutions with precision.',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    initials: 'AB',
  },
  {
    name: 'Zia',
    role: 'Frontend Developer',
    desc: 'Crafts high-performance interfaces with pixel-perfect attention to detail.',
    gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
    initials: 'ZA',
  },
  {
    name: 'Saheem',
    role: 'UI/UX Designer',
    desc: 'Designs intuitive digital experiences rooted in clarity and user insight.',
    gradient: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
    initials: 'SH',
  },
  {
    name: 'Ishtiyaq',
    role: 'Backend Engineer',
    desc: 'Builds robust server-side systems and APIs optimized for performance.',
    gradient: 'linear-gradient(135deg, #34d399, #10b981)',
    initials: 'IQ',
  },
];

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="team__container container">
        <div className="team__header">
          <span className="section-label">
            <Users size={14} />
            Our Team
          </span>
          <h2 className="section-title">A team built on expertise.</h2>
          <p className="section-subtitle">Focused on impact. Driven by passion for building exceptional software.</p>
        </div>

        <div className="team__grid">
          {team.map((member) => (
            <div className="team__card" key={member.name}>
              <div className="team__card-avatar" style={{ background: member.gradient }}>
                <span className="team__card-initials">{member.initials}</span>
              </div>
              <div className="team__card-info">
                <h3 className="team__card-name">{member.name}</h3>
                <span className="team__card-role">{member.role}</span>
                <p className="team__card-desc">{member.desc}</p>
              </div>
              <div className="team__card-social">
                <a href="#" className="team__social-link" aria-label="Website"><Globe size={16} /></a>
                <a href="#" className="team__social-link" aria-label="Portfolio"><ExternalLink size={16} /></a>
                <a href="#" className="team__social-link" aria-label="Email"><Mail size={16} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
