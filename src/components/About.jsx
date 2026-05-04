import useScrollReveal from '../hooks/useScrollReveal';

const facts = [
    ['Based',     'Bengaluru, IN'],
    ['Studying',  'B.E. CS · REVA University'],
    ['Working',   'Full-stack engineer & coder'],
    ['Stack',     'React · Node · Cloud · DBs'],
    ['Open to',   'Engineering roles & contracts'],
];

export default function About() {
    const [ref, revealed] = useScrollReveal();

    return (
        <section id="about" className="section">
            <div className="container">
                <header className="section-head">
                    <div className="section-head__top">
                        <span className="section-marker">§ 01 — About</span>
                    </div>
                </header>

                <div ref={ref} className={`about-grid reveal ${revealed ? 'is-revealed' : ''}`}>
                    <aside className="about-aside">
                        <span className="about-aside__label">— Index</span>
                        <ul className="about-aside__list">
                            {facts.map(([k, v]) => (
                                <li key={k}>
                                    <span>{k}</span>
                                    <span>{v}</span>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <div className="about-prose">
                        <p className="dropcap">
                            I am <strong>Fida Hussain S P</strong> — a <em>full-stack engineer
                            and coder</em> based in Bengaluru, pursuing a B.E. in Computer Science
                            at REVA University. I love building things that live on the
                            internet, end-to-end: from the UI a user touches to the API that
                            serves it to the cloud it runs on.
                        </p>
                        <p>
                            My day-to-day is the full stack — <strong>React</strong> and
                            <strong> React Native</strong> on the front, <strong>Node</strong>,
                            <strong> Express</strong>, and PostgreSQL on the back, deployed
                            on <strong>AWS</strong>, <strong>Cloudflare</strong>, and the
                            usual modern serverless rails. I also have a <em>working
                            knowledge</em> of AI tooling — Claude Code, basic LLM APIs, and
                            MCP — which I use to ship faster, but the craft I&apos;m
                            strongest at is solid full-stack engineering.
                        </p>
                        <p>
                            Recent work spans an analytics platform for offline marketing,
                            a gig-hiring marketplace, and an accessibility-first React Native
                            learning app. I care about clean architecture, sharp feedback
                            loops, and shipping features that <em>feel</em> reliable — not
                            just impressive in a demo.
                        </p>

                        <div className="about-cta">
                            <a href="#skills" className="btn btn--ghost">Explore skills</a>
                            <a href="#contact" className="btn btn--primary">Start a project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
