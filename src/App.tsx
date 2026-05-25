import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Craft } from './components/Craft';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  // Scroll & Nav states
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');

  // Sync theme to DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle scroll events for progress bar and active section
  useEffect(() => {
    const handleScroll = () => {
      // Progress bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.pageYOffset / totalScroll) * 100);
      }

      // Active section detection
      const sections = ['inicio', 'sobre', 'craft', 'projetos', 'skills', 'contato'];
      const scrollPosition = window.pageYOffset + 180;

      // Check if at bottom of page
      const isAtBottom =
        window.innerHeight + window.pageYOffset >=
        document.documentElement.scrollHeight - 30;
      if (isAtBottom) {
        setActiveSection('contato');
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Header */}
      <Header
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Craft />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
