import '../styles/style.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">

                    <div className="footer-socials">
                        <a href="https://github.com/fidahussain123" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                            <img src="/assets/png/github-ico.png" alt="GitHub" className="social-icon" />
                        </a>
                        <a href="https://linkedin.com/in/fidahussainsp" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                            <img src="/assets/png/linkedin-ico.png" alt="LinkedIn" className="social-icon" />
                        </a>
                        <a href="https://twitter.com/your-twitter" target="_blank" rel="noreferrer" className="social-link" aria-label="Twitter">
                            <img src="/assets/png/twitter-ico.png" alt="Twitter" className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/fidahussainsp/" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                            <img src="/assets/png/insta-ico.png" alt="Instagram" className="social-icon" />
                        </a>
                    </div>

                    <div className="footer-credits">
                        <a href="https://github.com/iamj3/portfolio" className="text-muted hover-glow">
                            Inspired by iamJ3
                        </a>
                        <p className="text-muted mt-2">
                            Designed & Built by Fida Hussain S P
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
