import '../styles/style.css';

const projects = [
    {
        title: "Krewsup Platform",
        category: "Marketplace",
        desc: "A talent marketplace for gig hiring with streamlined onboarding, posting, and matching flows built for scale.",
        tech: ["React", "Node.js", "Express"],
        image: "/assets/jpeg/project.png"
    },
    {
        title: "Cheqmate",
        category: "Ads Platform",
        desc: "Comprehensive tracking suite for outdoor advertising with analytics, payments, and campaign insights delivered through a React-first UI.",
        tech: ["React", "Node.js", "MySQL", "Express"],
        image: "/images/project-mockup-example.jpg"
    },
    {
        title: "Eupheity App",
        category: "Mobile Learning",
        desc: "An accessibility-focused mobile app using React Native, delivering user-friendly learning tools and custom workflows for differently-abled students.",
        tech: ["React Native", "Node.js", "Express", "AWS"],
        image: "/assets/png/pic.jpeg"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section relative">
            <div className="container">
                <h2 className="heading-secondary section-title">
                    <span className="text-gradient">03.</span> Some Things I've Built
                </h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass-panel hover-glow-border">
                            <div className="project-img-wrapper">
                                <img src={project.image} alt={project.title} loading="lazy" />
                                <div className="project-img-overlay"></div>
                            </div>
                            <div className="project-info">
                                <span className="project-category text-gradient">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-desc-panel glass-panel">
                                    <p>{project.desc}</p>
                                </div>
                                <ul className="project-tech-list">
                                    {project.tech.map((t, i) => (
                                        <li key={i}>{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
