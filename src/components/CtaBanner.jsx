import useScrollReveal from '../hooks/useScrollReveal';

export default function CtaBanner() {
  const [ref, revealed] = useScrollReveal();

  return (
    <section className="cta">
      <div className="container">
        <div ref={ref} className={`cta-inner reveal ${revealed ? 'is-revealed' : ''}`}>
          <span className="eyebrow">Let&apos;s work together</span>
          <h2 className="cta-title">
            Have a project in mind? <em>Let&apos;s build it.</em>
          </h2>
          <p className="cta-sub">
            Available for full-stack engineering roles and selected contract work —
            web, mobile, or cloud. I reply within a day.
          </p>
          <div className="cta-actions">
            <a href="#contact" className="btn btn--primary">Start a project</a>
            <a href="mailto:fidahussainsp123@gmail.com" className="btn btn--light">Email me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
