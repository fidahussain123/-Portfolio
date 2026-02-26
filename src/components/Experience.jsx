import '../styles/style.css';

const experiences = [
    {
        role: "Backend Developer",
        company: "GoGig",
        date: "Jan 2025 – Present",
        desc: "Building a SaaS platform to track and analyze offline marketing campaigns. Designed API services, analytics pipelines, and reporting workflows that power real-time dashboards."
    },
    {
        role: "Backend Developer",
        company: "Krewsup",
        date: "Nov 2024 – Present",
        desc: "Built a gig-hiring platform enabling efficient talent matching and messaging. Focused on scalable Node.js services and real-time updates across the stack."
    },
    {
        role: "Full-Stack Developer",
        company: "Eupheity",
        date: "Nov 2023 – Jan 2024",
        desc: "Created an accessibility-focused mobile app using React Native, delivering user-friendly learning tools and custom workflows for differently-abled students."
    }
];

export default function Experience() {
    return (
        <section id="experience" className="section relative">
            <div className="container">
                <h2 className="heading-secondary section-title">
                    <span className="text-gradient">02.</span> Where I've Worked
                </h2>

                <div className="timeline-container">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content glass-panel hover-glow">
                                <h3 className="timeline-role">{exp.role}</h3>
                                <h4 className="timeline-company text-gradient">{exp.company}</h4>
                                <p className="timeline-date text-muted">{exp.date}</p>
                                <p className="timeline-desc">{exp.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
