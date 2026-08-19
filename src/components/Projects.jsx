import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
  {
    index: '01',
    title: <>Zap<em>folio</em></>,
    category: 'SaaS · Portfolio Builder',
    desc: 'Turns a LinkedIn profile into a polished portfolio website in two clicks — themes, analytics, and 7000+ portfolios built.',
    tech: ['React', 'Node.js', 'LinkedIn API'],
    image: '/images/zapfolio-cover.svg',
  },
  {
    index: '02',
    title: <>Krewsup <em>Marketplace</em></>,
    category: 'Talent Marketplace',
    desc: 'A gig-hiring marketplace with streamlined onboarding, posting, and matching flows built for scale.',
    tech: ['React', 'Node.js', 'Express'],
    image: '/images/Screenshot 2025-11-14 161855.png',
  },
  {
    index: '03',
    title: <>GLUGs &amp; <em>Robotics</em></>,
    category: 'Community Platform',
    desc: 'A dedicated space for the GLUGs and Robotics community — events, resources, member showcases.',
    tech: ['React', 'Node.js', 'Tailwind'],
    image: '/assets/jpeg/project.png',
  },
  {
    index: '04',
    title: <>Cheqmate <em>Ads</em></>,
    category: 'Ads Analytics',
    desc: 'A tracking suite for outdoor advertising — analytics, payments, and campaign insights through a React-first UI.',
    tech: ['React', 'Node.js', 'MySQL', 'Express'],
    image: '/images/project-mockup-example.jpg',
  },
  {
    index: '05',
    title: <>Pulse <em>Console</em></>,
    category: 'AI Analytics',
    desc: 'An applied-LLM analytics console — live dashboards, conversational querying, and agentic report generation.',
    tech: ['React', 'Claude API', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    index: '06',
    title: <>Fleetline <em>Ops</em></>,
    category: 'Logistics Platform',
    desc: 'Realtime fleet operations — dispatch, tracking, and driver settlements unified in a single ops surface.',
    tech: ['React Native', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  },
];

function ProjectCard({ project, index }) {
  const [ref, revealed] = useScrollReveal();
  return (
    <article
      ref={ref}
      className={`work-card reveal ${revealed ? 'is-revealed' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="work-card__media">
        <span className="work-card__index">№ {project.index}</span>
        <img src={project.image} alt="" loading="lazy" />
      </div>
      <div className="work-card__body">
        <span className="work-card__cat">{project.category}</span>
        <h3 className="work-card__title">{project.title}</h3>
        <p className="work-card__desc">{project.desc}</p>
        <ul className="work-card__tech">
          {project.tech.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">§ 04 — Selected Work</span>
          <h2 className="sec-title">Projects that <em>shipped.</em></h2>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.index} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
