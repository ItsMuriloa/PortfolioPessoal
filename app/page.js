"use client";

import { useState, useEffect, useRef } from "react";
import { achievements } from "@/data/achievements";

import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  const [activeModal, setActiveModal] = useState(null); // 'contact' | 'achievements' | 'links' | null
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado do menu mobile
  const [activeSection, setActiveSection] = useState("home"); // Estado da seção visível no scroll
  const projectsRef = useRef(null);

  // Fechar no Esc e travar/destravar scroll do body
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    
    if (activeModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  // Scrollspy robusto baseado em posições absolutas com offset para compensar a navbar fixa
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // 180px de offset (ajuste fino ideal para antecipar a seção ativa na leitura)
      
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
    // Executa imediatamente e após renderização completa do layout
    handleScroll();
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* 1. NAVEGAÇÃO EDITORIAL (BARRA SUPERIOR PREMIUM COM HAMBURGUER) */}
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
            onClick={() => {
              setIsMenuOpen(false);
              setActiveModal("contact");
            }}
          >
            Contato
          </button>
        </div>
      </nav>

      {/* 2. SEÇÃO HERO PRINCIPAL */}
      <section className="hero section-slide" id="home">
        {/* Elementos Cromados Decorativos de Fundo */}
        <div className="floating-object anim-float-slow" style={{ top: "15%", left: "-6%", width: "240px", opacity: 0.25 }}>
          <img src="/Img/ObjTrasparentes/1.png" alt="Chrome Orb" style={{ width: "100%", height: "auto" }} />
        </div>
        <div className="floating-object anim-rotate-slow" style={{ top: "50%", right: "-8%", width: "300px", opacity: 0.18 }}>
          <img src="/Img/ObjTrasparentes/3.png" alt="Chrome Ring" style={{ width: "100%", height: "auto" }} />
        </div>
        <div className="floating-object anim-drift-slow" style={{ bottom: "10%", left: "32%", width: "160px", opacity: 0.15 }}>
          <img src="/Img/ObjTrasparentes/5.png" alt="Chrome Fluid" style={{ width: "100%", height: "auto" }} />
        </div>

        <div className="hero-content container">
          
          {/* TEXTO MONUMENTAL DE FUNDO */}
          <div className="hero-title-container">
            
            {/* Texto auxiliar superior desalinhado */}
            <span className="hero-subtitle-top mono">
              I AM
            </span>
            
            {/* Título Monumental Gigante */}
            <h1 className="hero-title">
              MURILO ALVES
            </h1>
            
            {/* Texto auxiliar inferior desalinhado à direita */}
            <span className="hero-subtitle-bottom mono">
              FULL STACK DEVELOPER
            </span>
            
          </div>

          {/* DESCRIÇÃO E BOTÕES (SEGUNDA DOBRA / APOIO) */}
          <div className="hero-footer">
            <p className="hero-desc">
              Desenvolvo sistemas, automações e experiências digitais com foco em clareza, performance e valor real.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Ver projetos
              </a>
              <a href="#about" className="btn btn-secondary">
                Sobre mim
              </a>
            </div>
          </div>
          
        </div>

        {/* METADADOS E SOCIAIS LATERAIS (ESTILO REVISTA) */}
        
        {/* Redes Sociais no canto inferior esquerdo */}
        <div className="hero-side-socials mono">
          <a href="https://github.com/ItsMuriloa" target="_blank" rel="noopener noreferrer">
            GH
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LI
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            IN
          </a>
        </div>

        {/* Indicador de Scroll vertical no canto inferior direito */}
        <div className="hero-scroll-indicator mono">
          SCROLL —&gt;
        </div>
      </section>

      {/* 3. SEÇÃO SOBRE MIM (BENTO GRID PREMIUM) */}
      <section className="about-section section-slide" id="about">
        {/* Elemento Cromado Decorativo de Fundo */}
        <div className="floating-object anim-float-slow" style={{ top: "8%", right: "8%", width: "260px", opacity: 0.12, filter: "blur(2px) drop-shadow(0 20px 50px rgba(0,0,0,0.5))" }}>
          <img src="/Img/ObjTrasparentes/8.png" alt="Chrome Node" style={{ width: "100%", height: "auto" }} />
        </div>

        <div className="container">
          
          {/* TÍTULO DA SEÇÃO */}
          <div className="section-title-container">
            <span className="section-tag">01 / SOBRE MIM</span>
            <h2 className="section-title font-editorial">CONCEITO &amp; PROPÓSITO</h2>
          </div>
          
          {/* BENTO GRID ASSIMÉTRICO */}
          <div className="bento-grid">
            
            {/* Card 1 - Mindset (span 2 no Desktop) */}
            <div className="bento-card bento-col-2">
              <span className="bento-label">MINDSET</span>
              <p className="bento-text">
                Construo mais do que software. Antes de codar, busco entender o <span className="bento-text-highlight">problema real</span> para desenhar a melhor solução.
              </p>
            </div>

            {/* Card 2 - Foto Central Tall (span 2 rows no Desktop) */}
            <div className="bento-card bento-photo-card bento-row-2">
              <img
                className="bento-photo-img"
                src="/Img/ImagemEu.jpg"
                alt="Murilo Alves"
                onError={(e) => {
                  // Fallback elegante se a imagem não carregar localmente
                  e.target.style.display = "none";
                }}
              />
              <div className="bento-photo-overlay">
                <span className="bento-label" style={{ color: "var(--accent-gold)" }}>CREATIVE FULL STACK</span>
                <h3 className="bento-text" style={{ fontSize: "1.3rem", fontWeight: "900", lineHeight: "1.1" }}>MURILO ALVES</h3>
              </div>
            </div>

            {/* Card 3 - Craft (span 1) */}
            <div className="bento-card">
              <span className="bento-label">CRAFT</span>
              <p className="bento-text">
                Crio sistemas robustos, landing pages, automações inteligentes e soluções digitais com foco em <span className="bento-text-highlight">uso real</span>.
              </p>
            </div>

            {/* Card 4 - Forma de Trabalho (span 1) */}
            <div className="bento-card">
              <span className="bento-label">PROCESSO</span>
              <p className="bento-text">
                Trabalho guiado por <span className="bento-text-highlight">clareza</span>, organização metódica, evolução constante e entrega consistente de valor real.
              </p>
            </div>

            {/* Card 5 - Stack (span 2 no Desktop) */}
            <div className="bento-card bento-col-2">
              <div>
                <span className="bento-label">ESTRUTURA TÉCNICA</span>
                <p className="bento-text" style={{ fontSize: "1.1rem" }}>
                  Meu ecossistema é otimizado para escalabilidade, performance e automação inteligente de processos.
                </p>
              </div>
              <div className="bento-stack-grid">
                <div className="bento-stack-item">PHP / LARAVEL</div>
                <div className="bento-stack-item">REACT / NEXT.JS</div>
                <div className="bento-stack-item">MYSQL / POSTGRES</div>
                <div className="bento-stack-item">DOCKER / DEVOP</div>
                <div className="bento-stack-item">N8N / AUTOMATION</div>
                <div className="bento-stack-item">INTEGRAÇÕES IA</div>
              </div>
            </div>

            {/* Card 6 - Localização com imagem do mapa */}
            <div className="bento-card bento-map-card">
              <img
                className="bento-map-img"
                src="/Img/mapa.webp"
                alt="Rio Grande do Sul, Brasil"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="bento-map-overlay">
                <span className="bento-label">LOCALIZAÇÃO</span>
                <div>
                  <h4 className="bento-text" style={{ fontSize: "1.25rem" }}>RIO GRANDE DO SUL</h4>
                  <p className="mono" style={{ fontSize: "0.7rem", marginTop: "0.2rem", color: "var(--accent-gold)" }}>
                    BRASIL • 30.0346° S, 51.2177° W
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* 3. SEÇÃO PROJETOS (FRAMER MOTION SCROLL) */}
      <ProjectsSection />

      {/* 4. SEÇÃO SKILLS (3D METALLIC ORBIT BELTS) */}
      <section className="skills-section section-slide" id="skills">
        {/* Elemento Cromado Decorativo de Fundo */}
        <div className="floating-object anim-drift-slow" style={{ top: "10%", left: "5%", width: "220px", opacity: 0.12 }}>
          <img src="/Img/ObjTrasparentes/4.png" alt="Chrome Spline" style={{ width: "100%", height: "auto" }} />
        </div>

        <div className="skills-content container">
          {/* Bloco Central de Texto */}
          <div className="skills-central-card">
            <span className="section-tag" style={{ color: "var(--accent-gold)", marginBottom: "0.5rem", display: "inline-block" }}>
              03 / TECNOLOGIAS &amp; STACK
            </span>
            <h2 className="skills-main-text">
              Ferramentas que uso para transformar ideias em sistemas reais.
            </h2>
            <p className="skills-subtext">
              Minha stack combina desenvolvimento web, automação, banco de dados, infraestrutura e inteligência artificial.
            </p>
          </div>

          {/* Container de Órbita 3D */}
          <div className="skills-orbit-container">
            
            {/* Linha 1: Scrolling Left */}
            <div className="skills-marquee-row marquee-left">
              {[
                "React", "Next.js", "JavaScript", "PHP", "Laravel", "MySQL", "PostgreSQL", "Figma",
                "React", "Next.js", "JavaScript", "PHP", "Laravel", "MySQL", "PostgreSQL", "Figma"
              ].map((skill, idx) => (
                <div className="skill-card" key={`r1-${idx}`}>
                  <span className="skill-icon"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            {/* Linha 2: Scrolling Right */}
            <div className="skills-marquee-row marquee-right">
              {[
                "n8n", "APIs", "IA", "ChatGPT", "Docker", "Nginx", "GitHub Actions", "Figma",
                "n8n", "APIs", "IA", "ChatGPT", "Docker", "Nginx", "GitHub Actions", "Figma"
              ].map((skill, idx) => (
                <div className="skill-card" key={`r2-${idx}`}>
                  <span className="skill-icon"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      {/* 6. SEÇÃO MAIS PARA EXPLORAR (OUTROS COM MODAIS) */}
      <section className="explore-section section-slide" id="explore">
        {/* Elemento Cromado Decorativo de Fundo */}
        <div className="floating-object anim-float-slow" style={{ top: "20%", right: "12%", width: "220px", opacity: 0.08 }}>
          <img src="/Img/ObjTrasparentes/2.png" alt="Chrome Helix" style={{ width: "100%", height: "auto" }} />
        </div>

        <div className="container">
          {/* TÍTULO DA SEÇÃO */}
          <div className="section-title-container" style={{ marginBottom: "var(--space-md)", textAlign: "left" }}>
            <span className="section-tag">04 / RECURSOS E CONEXÕES</span>
            <h2 className="section-title font-editorial">MAIS PARA EXPLORAR</h2>
            <p className="explore-subtitle" style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginTop: "0.5rem", maxWidth: "600px" }}>
              Descubra canais diretos de comunicação, minha trajetória e links úteis pela web.
            </p>
          </div>

          {/* GRID DE EXPLORAÇÃO */}
          <div className="explore-grid">
            {/* Card 01 - Contate-me */}
            <div className="explore-card" onClick={() => setActiveModal("contact")}>
              <div className="explore-card-header">
                <span className="explore-card-number font-editorial">01</span>
                <span className="explore-card-tag mono">CONTATO</span>
              </div>
              <div className="explore-card-body">
                <h3 className="explore-card-title font-editorial">Contate-me</h3>
                <p className="explore-card-desc">
                  Marque uma reunião ou envie uma mensagem para conversarmos sobre uma ideia, projeto ou oportunidade.
                </p>
              </div>
              <div className="explore-card-footer">
                <span className="explore-card-action mono">[ ABRIR FORMULÁRIO ]</span>
              </div>
            </div>

            {/* Card 02 - Conquistas */}
            <div className="explore-card" onClick={() => setActiveModal("achievements")}>
              <div className="explore-card-header">
                <span className="explore-card-number font-editorial">02</span>
                <span className="explore-card-tag mono">CARREIRA</span>
              </div>
              <div className="explore-card-body">
                <h3 className="explore-card-title font-editorial">Conquistas</h3>
                <p className="explore-card-desc">
                  Certificados, marcos, aprendizados constantes e evolução profissional na engenharia de software.
                </p>
              </div>
              <div className="explore-card-footer">
                <span className="explore-card-action mono">[ VER TRAJETÓRIA ]</span>
              </div>
            </div>

            {/* Card 03 - Links */}
            <div className="explore-card" onClick={() => setActiveModal("links")}>
              <div className="explore-card-header">
                <span className="explore-card-number font-editorial">03</span>
                <span className="explore-card-tag mono">CONEXÕES</span>
              </div>
              <div className="explore-card-body">
                <h3 className="explore-card-title font-editorial">Links Úteis</h3>
                <p className="explore-card-desc">
                  Me encontre pela web: GitHub, LinkedIn, Instagram, WhatsApp corporativo e outras plataformas.
                </p>
              </div>
              <div className="explore-card-footer">
                <span className="explore-card-action mono">[ EXPLORAR LINKS ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RENDERIZAÇÃO DOS MODAIS INTERATIVOS */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn mono" onClick={() => setActiveModal(null)}>
              FECHAR [×]
            </button>

            {/* MODAL 01: CONTATE-ME */}
            {activeModal === "contact" && (
              <div className="modal-inner">
                <span className="modal-tag mono">01 / CANAL DIRETO</span>
                <h3 className="modal-title font-editorial">Vamos conversar?</h3>
                <p className="modal-desc">
                  Escolha a melhor forma de contato para falarmos sobre projetos, ideias ou oportunidades.
                </p>

                <div className="contact-options-grid">
                  {/* Opção 01: Marcar Reunião */}
                  <div className="contact-option-card">
                    <div className="contact-option-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <h4 className="contact-option-title font-editorial">Marcar reunião</h4>
                    <p className="contact-option-desc">
                      Agende um horário para conversarmos com calma sobre sua ideia ou projeto.
                    </p>
                    <a href="https://calendly.com/seu-link" target="_blank" rel="noopener noreferrer" className="btn btn-primary contact-btn">
                      Marcar reunião
                    </a>
                  </div>

                  {/* Opção 02: Enviar E-mail */}
                  <div className="contact-option-card">
                    <div className="contact-option-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <h4 className="contact-option-title font-editorial">Enviar e-mail</h4>
                    <p className="contact-option-desc">
                      Prefere explicar sua ideia por escrito? Me envie uma mensagem por e-mail.
                    </p>
                    <a href="mailto:seuemail@email.com" className="btn btn-secondary contact-btn" style={{ width: "100%" }}>
                      Enviar e-mail
                    </a>
                  </div>
                </div>

                <div className="contact-whatsapp-footer">
                  <span className="mono">Ou se preferir mensagem rápida:</span>
                  <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-link mono">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "6px" }}>
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            )}

            {/* MODAL 02: CONQUISTAS */}
            {activeModal === "achievements" && (
              <div className="modal-inner">
                <span className="modal-tag mono">02 / EVOLUÇÃO CONTINUA</span>
                <h3 className="modal-title font-editorial">Conquistas</h3>
                <p className="modal-desc">
                  Alguns marcos da minha evolução técnica como desenvolvedor de software.
                </p>

                <div className="achievements-list">
                  {achievements.map((achievement) => (
                    <div className="achievement-item-card" key={achievement.id}>
                      <div className="achievement-item-header">
                        <span className="achievement-category-tag mono">{achievement.type}</span>
                        <span className="achievement-date mono">{achievement.date}</span>
                      </div>
                      
                      <div className="achievement-item-body">
                        <h4 className="achievement-item-title font-editorial">{achievement.title}</h4>
                        <span className="achievement-platform mono">{achievement.platform}</span>
                        <p className="achievement-item-desc">{achievement.description}</p>
                      </div>

                      <div className="achievement-item-footer">
                        {achievement.link ? (
                          <a 
                            href={achievement.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="achievement-btn mono"
                          >
                            VER CERTIFICADO —&gt;
                          </a>
                        ) : (
                          <span className="achievement-btn-disabled mono">
                            [ EM BREVE ]
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MODAL 03: LINKS */}
            {activeModal === "links" && (
              <div className="modal-inner">
                <span className="modal-tag mono">03 / ECOSSISTEMA DIGITAL</span>
                <h3 className="modal-title font-editorial">Meus Links</h3>
                <p className="modal-desc">
                  Me encontre pela web e acompanhe meus projetos.
                </p>

                <div className="links-tree">
                  {/* GitHub */}
                  <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="links-tree-item">
                    <div className="links-item-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                    <div className="links-item-text">
                      <span className="links-item-title font-editorial">GitHub</span>
                      <span className="links-item-desc">Projetos, estudos e códigos.</span>
                    </div>
                    <span className="links-item-arrow">—&gt;</span>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="links-tree-item">
                    <div className="links-item-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div className="links-item-text">
                      <span className="links-item-title font-editorial">LinkedIn</span>
                      <span className="links-item-desc">Perfil profissional e conexões.</span>
                    </div>
                    <span className="links-item-arrow">—&gt;</span>
                  </a>

                  {/* Instagram / Async Studio */}
                  <a href="https://instagram.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="links-tree-item">
                    <div className="links-item-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <div className="links-item-text">
                      <span className="links-item-title font-editorial">Instagram / Async Studio</span>
                      <span className="links-item-desc">Conteúdos, identidade e projetos digitais.</span>
                    </div>
                    <span className="links-item-arrow">—&gt;</span>
                  </a>

                  {/* WhatsApp */}
                  <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="links-tree-item">
                    <div className="links-item-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </div>
                    <div className="links-item-text">
                      <span className="links-item-title font-editorial">WhatsApp</span>
                      <span className="links-item-desc">Contato rápido para conversas e oportunidades.</span>
                    </div>
                    <span className="links-item-arrow">—&gt;</span>
                  </a>

                  {/* E-mail */}
                  <a href="mailto:seuemail@email.com" className="links-tree-item">
                    <div className="links-item-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="links-item-text">
                      <span className="links-item-title font-editorial">E-mail</span>
                      <span className="links-item-desc">Envie uma mensagem diretamente.</span>
                    </div>
                    <span className="links-item-arrow">—&gt;</span>
                  </a>

                  {/* Portfólio */}
                  <a href="https://seudominio.com" target="_blank" rel="noopener noreferrer" className="links-tree-item">
                    <div className="links-item-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </div>
                    <div className="links-item-text">
                      <span className="links-item-title font-editorial">Portfólio</span>
                      <span className="links-item-desc">Página principal e projetos selecionados.</span>
                    </div>
                    <span className="links-item-arrow">—&gt;</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
