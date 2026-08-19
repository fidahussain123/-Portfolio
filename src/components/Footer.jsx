const socials = [
  { label: 'GitHub', href: 'https://github.com/fidahussain123' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/fidahussainsp' },
  { label: 'Twitter', href: 'https://twitter.com/your-twitter' },
  { label: 'Instagram', href: 'https://www.instagram.com/fidahussainsp/' },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-brand__mark">
              <span className="nav-brand__sigil">FH</span>
              Fida Hussain
            </span>
            <p className="footer-brand__tagline">
              Full-stack engineer building web, mobile &amp; cloud products.
              Always open to well-defined problems.
            </p>
            <a href="#contact" className="btn btn--primary footer-brand__cta">Get in touch</a>
          </div>

          <div className="footer-col">
            <div className="footer-col__title">Navigation</div>
            <div className="footer-col__links">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href}>{l.label}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col__title">Social</div>
            <div className="footer-col__links">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label} ↗</a>
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
