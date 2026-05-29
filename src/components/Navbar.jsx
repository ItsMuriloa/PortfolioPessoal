"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "Sobre" },
  { href: "#projects", id: "projects", label: "Projetos" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#explore", id: "explore", label: "Outros" },
];

export default function Navbar({ onOpenContact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = "home";

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = item.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav className="nav-bar">
      <a href="#home" className="logo" onClick={() => setIsMenuOpen(false)}>
        MA.
      </a>

      <button
        className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen((current) => !current)}
        aria-label="Abrir menu de navegação"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div id="primary-navigation" className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            href={item.href}
            className={`nav-link ${activeSection === item.id ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
            key={item.id}
          >
            {item.label}
          </a>
        ))}
        <button
          className="nav-link-btn"
          onClick={(event) => {
            setIsMenuOpen(false);
            onOpenContact(event.currentTarget);
          }}
        >
          Contato
        </button>
      </div>
    </nav>
  );
}
