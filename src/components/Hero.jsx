export default function Hero() {
    return (
        <section id="top" className="hero-section">
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-main">
                        <div className="hero-meta">
                            <span className="hero-meta__dot" aria-hidden="true" />
                            <span>Available · Bengaluru, IN · 2026</span>
                        </div>

                        <h1 className="hero-headline">
                            <span className="hero-headline__row delay-1">
                                <span>Fida Hussain.</span>
                            </span>
                            <span className="hero-headline__row delay-2">
                                <span>
                                    A <em className="hero-headline__amp">full-stack</em>
                                </span>
                            </span>
                            <span className="hero-headline__row delay-3">
                                <span>
                                    <span className="hero-headline__rotator" aria-hidden="true">
                                        <span>engineer.</span>
                                        <span>coder.</span>
                                        <span>builder.</span>
                                        <span>shipper.</span>
                                        <span>engineer.</span>
                                    </span>
                                    <span className="visually-hidden">engineer and coder.</span>
                                </span>
                            </span>
                        </h1>

                        <p className="hero-tagline">
                            Full-stack engineer and coder shipping <em>web</em>, <em>mobile</em>,
                            and <em>cloud</em> products end-to-end — React, React Native, Node,
                            and modern serverless. Comfortable across the whole stack, from UI
                            polish to API design to deployment.
                        </p>

                        <div className="hero-cta">
                            <a href="#projects" className="btn btn--primary">Selected work</a>
                            <a href="#skills" className="btn btn--ghost">View capabilities</a>
                        </div>

                        <ul className="hero-stats" aria-label="At a glance">
                            <li>
                                <strong>3<sup style={{ fontSize: '0.5em' }}>+</sup></strong>
                                <span>Years building</span>
                            </li>
                            <li>
                                <strong>15<sup style={{ fontSize: '0.5em' }}>+</sup></strong>
                                <span>Shipped projects</span>
                            </li>
                            <li>
                                <strong>04</strong>
                                <span>Disciplines</span>
                            </li>
                        </ul>
                    </div>

                    <aside className="hero-portrait" aria-label="Portrait">
                        <div className="hero-portrait__frame">
                            <img
                                src="/assets/png/linkedin.jpeg"
                                alt="Fida Hussain S P"
                                loading="eager"
                                decoding="async"
                            />
                            <span className="hero-portrait__badge">FH · ’26</span>
                        </div>
                        <div className="hero-portrait__caption">
                            <span>Fida Hussain S P</span>
                            <em>Engineer</em>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
