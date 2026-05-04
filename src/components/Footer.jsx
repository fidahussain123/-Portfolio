const socials = [
    { label: 'GitHub',    href: 'https://github.com/fidahussain123' },
    { label: 'LinkedIn',  href: 'https://linkedin.com/in/fidahussainsp' },
    { label: 'Twitter',   href: 'https://twitter.com/your-twitter' },
    { label: 'Instagram', href: 'https://www.instagram.com/fidahussainsp/' },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <h2 className="footer-mark">
                        Building quietly,
                        <br />shipping loudly.
                    </h2>

                    <div>
                        <p className="footer-tagline">
                            Always open to new ideas, collaborations, and well-defined problems.
                        </p>
                        <div className="footer-socials">
                            {socials.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                                    <span>{s.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {year} · Fida Hussain S P</span>
                    <span>Designed &amp; Engineered in Bengaluru</span>
                </div>
            </div>
        </footer>
    );
}
