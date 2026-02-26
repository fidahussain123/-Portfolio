import '../styles/style.css';

export default function About() {
    const skills = [
        'React', 'React Native', 'Node.js', 'Express.js',
        'PostgreSQL', 'MySQL', 'REST APIs', 'AWS', 'Git',
        'Supabase', 'Turso DB', 'Appwrite', 'Cloudflare Workers', 'R2'
    ];

    return (
        <section id="about" className="section relative">
            <div className="container">

                <h2 className="heading-secondary section-title">
                    <span className="text-gradient">01.</span> About Me
                </h2>

                <div className="about-grid">
                    <div className="about-text glass-panel">
                        <p>
                            I am <strong>Fida Hussain S P</strong>, a full-stack developer based in Bengaluru,
                            pursuing a <strong>B.E. in Computer Science</strong> at REVA University.
                            I enjoy creating things that live on the internet, whether that be websites,
                            applications, or anything in between.
                        </p>
                        <p>
                            My focus these days is building accessible, inclusive products and digital experiences
                            for a variety of clients. Recent work includes analytics platforms for offline marketing,
                            gig-hiring systems, and accessibility-focused learning apps.
                        </p>
                        <div className="mt-4">
                            <a href="#contact" className="btn btn--primary">
                                Start a Project
                            </a>
                        </div>
                    </div>

                    <div className="about-skills">
                        <h3 className="skills-title">Technologies I've been working with recently:</h3>
                        <ul className="skills-list">
                            {skills.map((skill, index) => (
                                <li key={index} className="skill-item glass-panel hover-glow">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
