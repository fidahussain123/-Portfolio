import useScrollReveal from '../hooks/useScrollReveal';

const details = [
  ['Email', 'fidahussainsp123@gmail.com'],
  ['Location', 'Bengaluru, IN'],
  ['Open to', 'Engineering roles · contracts'],
  ['Response', 'Within 24 hours'],
];

export default function Contact() {
  const [ref, revealed] = useScrollReveal();

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">§ 05 — Contact</span>
        </div>

        <div ref={ref} className={`contact-grid reveal ${revealed ? 'is-revealed' : ''}`}>
          <div className="contact-copy">
            <h2 className="contact-copy__title">
              Let&apos;s build <em>something</em> together.
            </h2>
            <p className="contact-copy__lead">
              I&apos;m available for full-stack engineering roles and selected
              contract work — web, mobile, or cloud projects. Drop a line and
              I&apos;ll get back within a day.
            </p>

            <div className="contact-details">
              {details.map(([k, v]) => (
                <div className="contact-detail" key={k}>
                  <span>{k}</span>
                  <span>
                    {k === 'Email' ? (
                      <a href={`mailto:${v}`} className="link-edit">{v}</a>
                    ) : v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form action="#" className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" type="text" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="field">
              <label htmlFor="c-msg">Message</label>
              <textarea id="c-msg" rows="4" placeholder="Tell me about it..." required />
            </div>
            <button type="submit" className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
