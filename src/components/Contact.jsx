import useScrollReveal from '../hooks/useScrollReveal';

const details = [
    ['Email',     'fidahussainsp123@gmail.com'],
    ['Location',  'Bengaluru, IN'],
    ['Open to',   'Engineering roles · contracts'],
    ['Response',  'Within 24 hours'],
];

export default function Contact() {
    const [ref, revealed] = useScrollReveal();

    return (
        <section id="contact" className="section">
            <div className="container">
                <header className="section-head">
                    <div className="section-head__top">
                        <span className="section-marker">§ 05 — Contact</span>
                    </div>
                </header>

                <div ref={ref} className={`contact-grid reveal ${revealed ? 'is-revealed' : ''}`}>
                    <div className="contact-prose">
                        <h2 className="contact-prose__title">
                            Let&apos;s build <em>something</em> together.
                        </h2>
                        <p className="contact-prose__lead">
                            I&apos;m available for full-stack engineering roles and
                            selected contract work — web, mobile, or cloud projects.
                            Drop a line and I&apos;ll get back within a day.
                        </p>

                        <div>
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
                        <div className="form-field">
                            <label className="form-label" htmlFor="c-name">— Name</label>
                            <input id="c-name" className="form-input" type="text" placeholder="Your name" required />
                        </div>
                        <div className="form-field">
                            <label className="form-label" htmlFor="c-email">— Email</label>
                            <input id="c-email" className="form-input" type="email" placeholder="you@studio.com" required />
                        </div>
                        <div className="form-field">
                            <label className="form-label" htmlFor="c-msg">— Message</label>
                            <textarea id="c-msg" className="form-input" rows="4" placeholder="Tell me about it..." required />
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
