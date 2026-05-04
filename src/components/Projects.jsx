import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
    {
        index: '01',
        title: <>GLUGs &amp; <em>Robotics</em></>,
        category: 'Community Platform',
        desc: 'A dedicated space for the GLUGs and Robotics community — events, resources, member showcases.',
        tech: ['React', 'Node.js', 'Tailwind'],
        image: '/assets/jpeg/project.png',
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
        title: <>Cheqmate <em>Ads</em></>,
        category: 'Ads Analytics',
        desc: 'A tracking suite for outdoor advertising — analytics, payments, and campaign insights through a React-first UI.',
        tech: ['React', 'Node.js', 'MySQL', 'Express'],
        image: '/images/project-mockup-example.jpg',
    },
];

function ProjectCard({ project, index }) {
    const [ref, revealed] = useScrollReveal();
    return (
        <article
            ref={ref}
            className={`project-card reveal ${revealed ? 'is-revealed' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="project-card__media">
                <span className="project-card__index">№ {project.index}</span>
                <img src={project.image} alt="" loading="lazy" />
            </div>
            <span className="project-card__category">{project.category}</span>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__desc">{project.desc}</p>
            <ul className="project-card__tech">
                {project.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
        </article>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <header className="section-head">
                    <div className="section-head__top">
                        <span className="section-marker">§ 04 — Selected Work</span>
                    </div>
                </header>

                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.index} project={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
