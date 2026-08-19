import { useEffect, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const stats = [
  { value: 3, suffix: '+', label: 'Years building' },
  { value: 15, suffix: '+', label: 'Projects shipped' },
  { value: 4, suffix: '', pad: true, label: 'Core disciplines' },
  { value: 24, suffix: 'h', label: 'Avg. reply time' },
];

/* Numbers count up once the section reveals — skipped for reduced motion. */
function StatNum({ value, suffix, pad, revealed }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!revealed) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value);
      return;
    }
    let raf;
    const t0 = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const u = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - u, 3);
      setN(Math.round(eased * value));
      if (u < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [revealed, value]);

  const shown = pad ? String(n).padStart(2, '0') : String(n);
  return (
    <span className="about-stat__num">
      {shown}
      {suffix && <em>{suffix}</em>}
    </span>
  );
}

export default function About() {
  const [ref, revealed] = useScrollReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">§ 01 — About</span>
        </div>

        <div ref={ref} className={`about-grid reveal ${revealed ? 'is-revealed' : ''}`}>
          <div className="about-copy">
            <h2 className="about-copy__title">
              Building digital products that <em>actually ship</em> — not just
              demo well.
            </h2>
            <p>
              I&apos;m <strong>Fida Hussain S P</strong>, a full-stack engineer based
              in Bengaluru, pursuing a B.E. in Computer Science at REVA University.
              I build things that live on the internet, end-to-end: the UI a user
              touches, the API that serves it, and the cloud it runs on.
            </p>
            <p>
              My day-to-day is <strong>React</strong> and <strong>React Native</strong> on
              the front, <strong>Node</strong>, <strong>Express</strong>, and Postgres on
              the back, deployed on <strong>AWS</strong> and <strong>Cloudflare</strong>.
              I care about clean architecture, sharp feedback loops, and software that
              feels reliable.
            </p>

            <div className="about-copy__actions">
              <a href="#skills" className="btn btn--ghost">Explore skills</a>
              <a href="#contact" className="btn btn--primary">Start a project</a>
            </div>
          </div>

          <div className="about-side">
            <div className="about-stats">
              {stats.map((s, i) => (
                <div className="about-stat" key={s.label} style={{ transitionDelay: `${i * 60}ms` }}>
                  <StatNum value={s.value} suffix={s.suffix} pad={s.pad} revealed={revealed} />
                  <span className="about-stat__label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="about-now">
              <span className="about-now__dot" aria-hidden="true" />
              <div className="about-now__body">
                <span className="about-now__kicker">Currently</span>
                <p>
                  Building <strong>Krewsup 3.0</strong> &amp; <strong>Zapfolio</strong> —
                  open to freelance and product work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
