import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import WorkShowcase from './components/WorkShowcase';
import Projects from './components/Projects';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/tailwind.css';
import './styles/style.css';
import './styles/components.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <WorkShowcase />
        <Projects />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
