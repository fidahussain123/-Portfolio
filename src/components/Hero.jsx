import '../styles/style.css';

export default function Hero() {
    return (
        <section id="top" className="hero-section">
            <div className="container hero-container animate-fade-in-up">

                <div className="hero-content">
                    <p className="hero-subtitle text-gradient animate-fade-in-up delay-1">
                        Hi, my name is
                    </p>
                    <h1 className="hero-title animate-fade-in-up delay-2">
                        Fida Hussain.
                    </h1>
                    <h2 className="hero-title second text-muted animate-fade-in-up delay-2">
                        I engineer modern systems.
                    </h2>

                    <p className="hero-description text-lead animate-fade-in-up delay-3">
                        I'm a full-stack engineer and computer science undergrad specializing in building scalable backend services and high-quality, product-focused front-end experiences. Currently focused on delivering data-driven solutions and robust architectures.
                    </p>

                    <div className="hero-cta animate-fade-in-up delay-3">
                        <a href="#projects" className="btn btn--gradient">
                            Explore Projects
                        </a>
                        <a href="#about" className="btn btn--outline">
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Abstract Glowing Orb Graphic for aesthetics */}
                <div className="hero-graphic desktop-only">
                    <div className="glow-orb primary"></div>
                    <div className="glow-orb secondary"></div>
                    <div className="glass-panel graphic-card">
                        <pre><code>
                            <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}
                            <br />  name: <span className="code-string">'Fida Hussain'</span>,
                            <br />  role: <span className="code-string">'Full Stack Engineer'</span>,
                            <br />  passion: <span className="code-string">'Building scalable products'</span>,
                            <br />{'}'};
                        </code></pre>
                    </div>
                </div>

            </div>
        </section>
    );
}
