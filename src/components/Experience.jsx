import useScrollReveal from '../hooks/useScrollReveal';

const experiences = [
  {
    date: '2025 — Now',
    current: true,
    role: 'Backend Engineer',
    company: 'GoGig',
    desc: 'Designing a SaaS platform that tracks and analyses offline marketing campaigns — API services, analytics pipelines, and real-time reporting dashboards.',
    tags: ['Node.js', 'Analytics pipelines', 'SaaS'],
  },
  {
    date: '2024 — Now',
    current: true,
    role: 'Backend Engineer',
    company: 'Krewsup',
    desc: 'Building a gig-hiring platform with talent matching and real-time messaging. Focused on scalable Node services and event-driven updates.',
    tags: ['Node.js', 'Realtime', 'Marketplace'],
  },
  {
    date: '2023 — 2024',
    role: 'Full-stack Engineer',
    company: 'Krewsup Technologies',
    desc: 'Shipped an accessibility-first React Native app — learning tools and custom workflows for differently-abled students.',
    tags: ['React Native', 'Accessibility', 'Education'],
  },
];

export default function Experience() {
  const [ref, revealed] = useScrollReveal();

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">§ 03 — Experience</span>
          <h2 className="sec-title">Where I&apos;ve <em>shipped.</em></h2>
        </div>

        <div ref={ref} className={`exp-flow ${revealed ? 'is-revealed' : ''}`}>
          {experiences.map((exp, i) => (
            <article
              key={exp.company + exp.date}
              className={`exp-item${exp.current ? ' exp-item--now' : ''}`}
              style={{ '--i': i }}
            >
              <span className="exp-item__date">
                {exp.date}
                {exp.current && <i className="exp-item__live" aria-label="ongoing" />}
              </span>
              <h3 className="exp-item__role">{exp.role}</h3>
              <span className="exp-item__company">@ {exp.company}</span>
              <p className="exp-item__desc">{exp.desc}</p>
              <ul className="exp-item__tags">
                {exp.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
