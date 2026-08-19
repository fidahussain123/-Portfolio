import { useEffect, useState } from 'react';

const navLinks = [
  { num: '01', href: '#about', label: 'About' },
  { num: '02', href: '#skills', label: 'Skills' },
  { num: '03', href: '#experience', label: 'Experience' },
  { num: '04', href: '#projects', label: 'Work' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      document.documentElement.style.setProperty('--scroll', `${pct}%`);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span className="scroll-progress__bar" />
      </div>

      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <a href="#top" className="nav-brand" onClick={() => setMenuOpen(false)}>
              <span className="nav-brand__sigil">FH</span>
              <span className="nav-brand__name">Fida Hussain</span>
              <span className="nav-brand__role" aria-hidden="true">— Engineer</span>
            </a>

            <nav className="nav-links" aria-label="Primary">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  <span className="nav-link__num">{link.num}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>

            <a href="#contact" className="nav-cta">Get in touch</a>

            <button
              className="nav-burger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span className={menuOpen ? 'open' : ''} />
              <span className={menuOpen ? 'open' : ''} />
              <span className={menuOpen ? 'open' : ''} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map((link) => (
          <a
            key={`mob-${link.href}`}
            href={link.href}
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            <span className="mobile-nav-link__num">{link.num}</span>
            <span>{link.label}</span>
          </a>
        ))}
        <a href="#contact" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
          <span className="mobile-nav-link__num">05</span>
          <span>Contact</span>
        </a>
      </div>
    </>
  );
}
