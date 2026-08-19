const stack = ['React', 'React Native', 'Node.js', 'AWS', 'Cloudflare', 'PostgreSQL'];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        {/* Body — intro + portrait */}
        <div className="hero-body">
          <div className="hero-intro">
            <div className="hero-intro__eyebrow eyebrow">Full-stack Engineer &amp; Coder</div>
            <p className="hero-intro__lead">
              I build <em>web, mobile &amp; cloud</em> products end-to-end — from
              the UI a user touches to the API that serves it.
            </p>
            <p className="hero-intro__sub">
              React, React Native, Node, and modern serverless. Based in
              Bengaluru, shipping reliable software across the whole stack.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn--primary">Selected work</a>
              <a href="#contact" className="btn btn--ghost">Get in touch</a>
            </div>
          </div>

          <aside className="hero-portrait" aria-label="Portrait">
            <img
              src="/assets/png/linkedin.jpeg"
              alt="Fida Hussain S P"
              loading="eager"
              decoding="async"
            />
            <div className="hero-portrait__badge">
              <span>Fida Hussain S P</span>
              <em>’26</em>
            </div>
          </aside>
        </div>

        {/* Giant name */}
        <div className="hero-name-wrap">
          <h1 className="hero-name">Fida Hussain<span className="dot">.</span></h1>
        </div>

        {/* Tech strip */}
        <div className="hero-strip">
          <span className="hero-strip__label">Daily stack</span>
          <div className="hero-strip__items">
            {stack.map((s) => <span key={s}>{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
