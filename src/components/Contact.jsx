import '../styles/style.css';

export default function Contact() {
    return (
        <section id="contact" className="section relative">
            <div className="container contact-container">

                <div className="contact-content text-center">
                    <h2 className="heading-secondary section-title justify-center">
                        <span className="text-gradient">04.</span> What's Next?
                    </h2>
                    <h2 className="heading-primary mt-2">Get In Touch</h2>

                    <p className="contact-desc text-lead mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question
                        or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-form-wrapper glass-panel mt-5 mx-auto">
                        <form action="#" className="contact-form">
                            <div className="form-group">
                                <input type="text" id="name" required placeholder="Name" className="form-input glass-input" />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" required placeholder="Email" className="form-input glass-input" />
                            </div>
                            <div className="form-group">
                                <textarea id="message" required rows="5" placeholder="Message" className="form-input glass-input"></textarea>
                            </div>
                            <button type="submit" className="btn btn--gradient w-full">Say Hello</button>
                        </form>
                    </div>

                    <div className="mt-5">
                        <p className="text-muted">Or reach out directly at:</p>
                        <a href="mailto:fidahussainsp123@gmail.com" className="contact-email text-gradient hover-glow">
                            fidahussainsp123@gmail.com
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
