"use client";

import { useState, useEffect } from "react";

export default function Navbar({ onOpenContact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scrollspy robusto baseado em posições absolutas com offset para compensar a navbar fixa
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // 180px de offset
      const sectionIds = ["home", "about", "projects", "skills", "explore"];
      let currentSection = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = id;
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
      <a href="#home" className="logo">
        MA.
      </a>

      {/* Botão Hambúrguer Mobile */}
      <button 
        className={`nav-toggle ${isMenuOpen ? "active" : ""}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir Menu de Navegação"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Links de Navegação */}
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a 
          href="#home" 
          className={`nav-link ${activeSection === "home" ? "active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={`nav-link ${activeSection === "about" ? "active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Sobre
        </a>
        <a 
          href="#projects" 
          className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Projetos
        </a>
        <a 
          href="#skills" 
          className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </a>
        <a 
          href="#explore" 
          className={`nav-link ${activeSection === "explore" ? "active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Outros
        </a>
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
