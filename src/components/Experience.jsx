import useScrollReveal from '../hooks/useScrollReveal';

const experiences = [
    {
        date: '2025 — Now',
        role: 'Backend Engineer',
        company: 'GoGig',
        desc: 'Designing a SaaS platform that tracks and analyses offline marketing campaigns. Building API services, analytics pipelines, and reporting workflows that drive real-time dashboards.',
    },
    {
        date: '2024 — Now',
        role: 'Backend Engineer',
        company: 'Krewsup',
        desc: 'Building a gig-hiring platform with talent matching and real-time messaging. Focused on scalable Node services and event-driven updates across the stack.',
    },
    {
        date: '2023 — 2024',
        role: 'Full-stack Engineer',
        company: 'Krewsup Technologies',
        desc: 'Shipped an accessibility-first React Native app — learning tools and custom workflows for differently-abled students.',
    },
];

function ExperienceRow({ exp, index }) {
    const [ref, revealed] = useScrollReveal();
    return (
        <article
            ref={ref}
            className={`experience-row reveal ${revealed ? 'is-revealed' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="experience-row__date">{exp.date}</div>
            <div>
                <h3 className="experience-row__role">{exp.role}</h3>
                <span className="experience-row__company">{exp.company}</span>
            </div>
            <p className="experience-row__desc">{exp.desc}</p>
        </article>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <header className="section-head">
                    <div className="section-head__top">
                        <span className="section-marker">§ 03 — Experience</span>
                    </div>
                </header>

                <div className="experience-table">
                    {experiences.map((exp, i) => (
                        <ExperienceRow key={exp.company + exp.date} exp={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
