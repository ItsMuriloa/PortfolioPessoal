"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  const containerRef = useRef(null);

  // Monitora o progresso de rolagem apenas desta seção (de 0 a 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* 
    RANGES DE ANIMAÇÃO
    
    0.00 a 0.20: Card 1 ativo, inteiro e em destaque.
    0.20 a 0.35: Card 1 sobe, reduz levemente e trava na stack.
    0.35 a 0.55: Card 2 entra como card principal.
    0.55 a 0.70: Card 2 sobe, reduz levemente e trava na stack.
    0.70 a 0.90: Card 3 entra como card principal.
    0.90 a 1.00: Pilha final estabiliza.
  */

  // --- CARD 01 (Índice 0) ---
  const scale1 = useTransform(scrollYProgress, [0, 0.2, 0.35, 1], [1, 1, 0.94, 0.94]);
  const y1 = useTransform(scrollYProgress, [0, 0.2, 0.35, 1], ["28vh", "28vh", "18vh", "18vh"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 1], [0, 1, 1]);

  // --- CARD 02 (Índice 1) ---
  const scale2 = useTransform(scrollYProgress, [0, 0.35, 0.55, 0.7, 1], [1, 1, 1, 0.97, 0.97]);
  const y2 = useTransform(scrollYProgress, [0, 0.35, 0.55, 0.7, 1], ["100vh", "100vh", "28vh", "23vh", "23vh"]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.34, 0.35, 1], [0, 0, 1, 1]);
  
  // --- CARD 03 (Índice 2) ---
  const scale3 = useTransform(scrollYProgress, [0, 0.7, 0.9, 1], [1, 1, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0, 0.7, 0.9, 1], ["100vh", "100vh", "28vh", "28vh"]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.69, 0.7, 1], [0, 0, 1, 1]);

  // Agrupamos os transforms em vetores para mapear facilmente
  const cardTransforms = [
    { scale: scale1, y: y1, opacity: opacity1, zIndex: 10 },
    { scale: scale2, y: y2, opacity: opacity2, zIndex: 20 },
    { scale: scale3, y: y3, opacity: opacity3, zIndex: 30 }
  ];

  return (
    <section 
      ref={containerRef}
      className="projects-section-framer" 
      id="projects"
      style={{ height: "400vh", position: "relative" }}
    >
      {/* Container Sticky que prende o bloco visual na tela */}
      <div 
        className="projects-sticky-framer"
        style={{ 
          position: "sticky", 
          top: "80px", 
          height: "calc(100dvh - 80px)", 
          width: "100%", 
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* Elementos Cromados Decorativos de Fundo */}
        <div className="floating-object anim-rotate-slow" style={{ position: "absolute", top: "20%", left: "-10%", width: "320px", opacity: 0.1, pointerEvents: "none" }}>
          <img src="/assets/chrome/6.png" alt="Chrome Ribbon" style={{ width: "100%", height: "auto" }} />
        </div>
        <div className="floating-object anim-drift-slow" style={{ position: "absolute", bottom: "12%", right: "-6%", width: "240px", opacity: 0.12, pointerEvents: "none" }}>
          <img src="/assets/chrome/9.png" alt="Chrome Anchor" style={{ width: "100%", height: "auto" }} />
        </div>

        <div className="container projects-container-framer" style={{ position: "relative", height: "100%", width: "100%" }}>
          
          {/* TÍTULO DA SEÇÃO */}
          <div className="section-title-container projects-title-framer" style={{ position: "absolute", top: "8vh", zIndex: 50 }}>
            <span className="section-tag">02 / TRABALHOS SELECIONADOS</span>
            <h2 className="section-title font-editorial">PROJETOS &amp; SOLUÇÕES</h2>
          </div>

          {/* PALCO ABSOLUTO DE TELA INTEIRA PARA CARDS */}
          <div className="framer-cards-container" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
            
            {projects.map((project, index) => {
              const transform = cardTransforms[index] || cardTransforms[0];
              return (
                <motion.div 
                  key={project.id}
                  className="card-wrapper-framer" 
                  style={{ 
                    position: "absolute", 
                    top: 0, 
                    left: 0, 
                    width: "100%", 
                    scale: transform.scale, 
                    y: transform.y, 
                    opacity: transform.opacity, 
                    zIndex: transform.zIndex, 
                    transformOrigin: "top center", 
                    pointerEvents: "auto" 
                  }}
                >
                  <div className={`project-card ${project.cardClass}`}>
                    <div className="project-info">
                      <div className="project-header">
                        <span className="project-number">{project.number}</span>
                        <h3 className="project-title font-editorial">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-tags">
                          {project.tags.map((tag) => (
                            <span className="project-tag" key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="project-actions">
                        {project.isComingSoon ? (
                          <span className="mono" style={{ fontSize: "0.8rem", letterSpacing: "0.15em", color: "var(--accent-gold)", opacity: 0.8 }}>
                            [ EM DESENVOLVIMENTO ]
                          </span>
                        ) : (
                          <>
                            <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="btn-project-primary">
                              Ver projeto <span className="project-arrow">—&gt;</span>
                            </a>
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-project-secondary">
                              Ver código
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="project-media">
                      <img
                        className="project-img"
                        src={project.image}
                        alt={`${project.title} Mockup`}
                        onError={(e) => { e.target.style.display = "none"; }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
