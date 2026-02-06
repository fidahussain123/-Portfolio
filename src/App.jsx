import { useState } from 'react'
import './styles/style.css'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <div id="top">
      <header className="header">
        <div className="header__content">
          <a className="header__logo-container" href="#top" onClick={handleNavClick}>
            <div className="header__logo-img-cont">
              <img
                src="/assets/png/linkedin.jpeg"
                alt="Fida Hussain profile"
                className="header__logo-img"
              />
            </div>
            <span className="header__logo-sub">Fida Hussain</span>
          </a>
          <div className="header__main">
            <ul className="header__links">
              {navLinks.map((link) => (
                <li className="header__link-wrapper" key={link.href}>
                  <a href={link.href} className="header__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div
              className="header__main-ham-menu-cont"
              role="button"
              tabIndex={0}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setMenuOpen((open) => !open)
                }
              }}
            >
              <img
                src="/assets/svg/ham-menu.svg"
                alt="hamburger menu"
                className={`header__main-ham-menu ${menuOpen ? 'd-none' : ''}`}
              />
              <img
                src="/assets/svg/ham-menu-close.svg"
                alt="hamburger menu close"
                className={`header__main-ham-menu-close ${menuOpen ? '' : 'd-none'}`}
              />
            </div>
          </div>
        </div>
        <div className={`header__sm-menu ${menuOpen ? 'header__sm-menu--active' : ''}`}>
          <div className="header__sm-menu-content">
            <ul className="header__sm-menu-links">
              {navLinks.map((link) => (
                <li className="header__sm-menu-link" key={`sm-${link.href}`}>
                  <a href={link.href} onClick={handleNavClick}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="heading-primary">Fida Hussain S P</h1>
          <div className="home-hero__info">
            <p className="text-primary">
              Full-Stack Engineer specializing in React-first experiences, scalable backend systems,
              and product-focused delivery.
            </p>
          </div>
          <div className="home-hero__cta">
            <a href="#projects" className="btn btn--bg">
              View Projects
            </a>
            <a href="#contact" className="btn btn--med btn--theme-inv" style={{ marginLeft: '1.5rem' }}>
              Contact
            </a>
          </div>
        </div>
        <div className="home-hero__socials">
          <div className="home-hero__social">
            <a href="https://linkedin.com/in/fidahussainsp" className="home-hero__social-icon-link">
              <img
                src="/assets/png/linkedin-ico.png"
                alt="LinkedIn icon"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a href="https://github.com/fidahussain123" className="home-hero__social-icon-link">
              <img src="/assets/png/github-ico.png" alt="GitHub icon" className="home-hero__social-icon" />
            </a>
          </div>
          <div className="home-hero__social">
            <a href="https://twitter.com/your-twitter" className="home-hero__social-icon-link">
              <img src="/assets/png/twitter-ico.png" alt="Twitter icon" className="home-hero__social-icon" />
            </a>
          </div>
          <div className="home-hero__social">
            <a
              href="https://www.instagram.com/fidahussainsp/"
              className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
            >
              <img src="/assets/png/insta-ico.png" alt="Instagram icon" className="home-hero__social-icon" />
            </a>
          </div>
        </div>
        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse"></div>
        </div>
      </section>

      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">About</span>
            <span className="heading-sec__sub">
              Computer Science student focused on full-stack engineering, crafting reliable backend
              services and polished front-end experiences.
            </span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <h3 className="about__content-title">Professional summary</h3>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  I am <strong>Fida Hussain S P</strong>, a full-stack developer based in Bengaluru,
                  pursuing a <strong>B.E. in Computer Science</strong> at REVA University. I build
                  scalable applications that blend strong architecture with high-quality UI.
                </p>
                <p className="about__content-details-para">
                  Recent work includes analytics platforms for offline marketing, gig-hiring systems,
                  and accessibility-focused learning apps. I enjoy collaborating on impactful
                  projects and continuously leveling up my engineering craft.
                </p>
              </div>
              <a href="#contact" className="btn btn--med btn--theme">
                Start a Project
              </a>
            </div>
            <div className="about__content-skills">
              <h3 className="about__content-title">Core skills</h3>
              <div className="skills">
                <div className="skills__skill">React</div>
                <div className="skills__skill">React Native</div>
                <div className="skills__skill">Node.js</div>
                <div className="skills__skill">Express.js</div>
                <div className="skills__skill">PostgreSQL</div>
                <div className="skills__skill">MySQL</div>
                <div className="skills__skill">REST APIs</div>
                <div className="skills__skill">AWS</div>
                <div className="skills__skill">Git & GitHub</div>
                <div className="skills__skill">Figma</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">Education</span>
            <span className="heading-sec__sub">Academic foundation in Computer Science.</span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <h3 className="about__content-title">REVA University, Bengaluru</h3>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  <strong>Bachelor of Engineering in Computer Science</strong>
                </p>
                <p className="about__content-details-para">
                  <strong>2022 – Present</strong>
                </p>
                <p className="about__content-details-para">
                  Focused on backend systems, distributed architectures, and building reliable
                  products with React-centric front ends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">Experience</span>
            <span className="heading-sec__sub">
              Professional experience delivering scalable platforms and data-driven products.
            </span>
          </h2>

          <div className="projects__content">
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src="/images/project-mockup-example (1).jpg"
                  alt="GoGig Platform - Offline campaign analytics"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Backend Developer, GoGig</h3>
                <p className="projects__row-content-desc">
                  <strong>Remote | Jan 2025 – Present</strong>
                  <br />
                  <br />
                  Building a SaaS platform to track and analyze offline marketing campaigns.
                  Designed API services, analytics pipelines, and reporting workflows that power
                  real-time dashboards and automated insights.
                </p>
              </div>
            </div>

            <div className="projects__row">
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Backend Developer, Krewsup</h3>
                <p className="projects__row-content-desc">
                  <strong>Remote | Nov 2024 – Present</strong>
                  <br />
                  <br />
                  Built a gig-hiring platform enabling efficient talent matching and messaging.
                  Focused on scalable Node.js services and real-time updates across the stack.
                </p>
              </div>
              <div className="projects__row-img-cont">
                <img
                  src="/images/Screenshot 2025-11-14 161855.png"
                  alt="Krewsup platform interface"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src="/assets/png/pic.jpeg"
                  alt="Eupheity App"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Full-Stack Developer, Eupheity</h3>
                <p className="projects__row-content-desc">
                  <strong>Remote | Nov 2023 – Jan 2024</strong>
                  <br />
                  <br />
                  Created an accessibility-focused mobile app using React Native, delivering
                  user-friendly learning tools and custom workflows for differently-abled students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">Projects</span>
            <span className="heading-sec__sub">Selected projects with measurable impact.</span>
          </h2>

          <div className="projects__content">
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src="/images/project-mockup-example (1).jpg"
                  alt="GoGig analytics platform"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">GoGig – Offline Campaign Tracking SaaS</h3>
                <p className="projects__row-content-desc">
                  Built analytics dashboards and automated reporting for offline campaigns, enabling
                  brands to track performance with the same clarity as digital marketing.
                  <br />
                  <br />
                  <strong>Tech stack:</strong> React, Node.js, Express.js, PostgreSQL
                </p>
              </div>
            </div>

            <div className="projects__row">
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Krewsup Platform</h3>
                <p className="projects__row-content-desc">
                  A talent marketplace for gig hiring with streamlined onboarding, posting, and
                  matching flows built for scale.
                  <br />
                  <br />
                  <strong>Tech stack:</strong> React, Node.js, Express.js
                </p>
              </div>
              <div className="projects__row-img-cont">
                <img
                  src="/assets/jpeg/project.png"
                  alt="Krewsup Platform"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="projects__row">
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Cheqmate – Offline Campaign Tracking</h3>
                <p className="projects__row-content-desc">
                  Comprehensive tracking suite for outdoor advertising with analytics, payments, and
                  campaign insights delivered through a React-first UI.
                  <br />
                  <br />
                  <strong>Tech stack:</strong> React, Node.js, Express.js, MySQL
                </p>
              </div>
              <div className="projects__row-img-cont">
                <img
                  src="/images/project-mockup-example.jpg"
                  alt="Cheqmate platform"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">Achievements</span>
            <span className="heading-sec__sub">Recognitions for technical excellence.</span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <div className="about__content-details">
                <p className="about__content-details-para">
                  <strong>1st Prize – MVJ National Hackathon</strong>
                  <br />
                  AI-based natural disaster prediction system with automated emergency alerts.
                </p>
                <p className="about__content-details-para">
                  <strong>Winner – Cyber Hackathon</strong>
                  <br />
                  Blockchain-based security solution with smart contracts and audit tooling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main heading-sec__main--lt">Contact</span>
            <span className="heading-sec__sub heading-sec__sub--lt">
              Let&apos;s connect at{' '}
              <a href="mailto:fidahussainsp123@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}>
                fidahussainsp123@gmail.com
              </a>{' '}
              or on{' '}
              <a
                href="https://linkedin.com/in/fidahussainsp"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#fff', textDecoration: 'underline' }}
              >
                LinkedIn
              </a>
              .
            </span>
          </h2>
          <div className="contact__form-container">
            <form action="#" className="contact__form">
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="name">
                  Name
                </label>
                <input
                  required
                  placeholder="Enter your name"
                  type="text"
                  className="contact__form-input"
                  name="name"
                  id="name"
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="email">
                  Email
                </label>
                <input
                  required
                  placeholder="Enter your email"
                  type="email"
                  className="contact__form-input"
                  name="email"
                  id="email"
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  required
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Tell me about your project"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn--theme contact__btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <div className="main-container">
          <div className="main-footer__upper">
            <div className="main-footer__row main-footer__row-1">
              <h2 className="heading heading-sm main-footer__heading-sm">
                <span>Social</span>
              </h2>
              <div className="main-footer__social-cont">
                <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/fidahussainsp">
                  <img className="main-footer__icon" src="/assets/png/linkedin-ico.png" alt="LinkedIn" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/fidahussain123">
                  <img className="main-footer__icon" src="/assets/png/github-ico.png" alt="GitHub" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/your-twitter">
                  <img className="main-footer__icon" src="/assets/png/twitter-ico.png" alt="Twitter" />
                </a>

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/fidahussainsp/">
                  <img
                    className="main-footer__icon main-footer__icon--mr-none"
                    src="/assets/png/insta-ico.png"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
            <div className="main-footer__row main-footer__row-2">
              <h4 className="heading heading-sm text-lt">Fida Hussain</h4>
              <p className="main-footer__short-desc">
                Full-Stack Engineer — Bengaluru, India
                <br />
                fidahussainsp123@gmail.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
