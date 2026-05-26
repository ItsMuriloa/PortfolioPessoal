"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectsSection() {
  const containerRef = useRef(null);

  // Monitora o progresso de rolagem apenas desta seção (de 0 a 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* 
    RANGES DE ANIMAÇÃO APROVADOS PELO USUÁRIO
    
    0.00 a 0.20: Card 1 ativo, inteiro e em destaque.
    0.20 a 0.35: Card 1 sobe, reduz levemente e trava na stack.
    0.35 a 0.55: Card 2 entra como card principal.
    0.55 a 0.70: Card 2 sobe, reduz levemente e trava na stack.
    0.70 a 0.90: Card 3 entra como card principal.
    0.90 a 1.00: Pilha final estabiliza.
  */

  // --- LÓGICA DE ESTADOS ESTRITOS (ABSOLUTE STACKING) ---
  // Active position: y = "28vh" (Card principal em destaque legível)
  // Stacked Tab 1 (Card 01): y = "18vh", scale = 0.94
  // Stacked Tab 2 (Card 02): y = "23vh", scale = 0.97
  // Hidden position: y = "100vh"
  
  // --- CARD 01 ---
  // 0% a 20%: Ativo (y: "28vh", scale: 1)
  // 20% a 35%: Transiciona para Stacked (y: "18vh", scale: 0.94)
  // 35% a 100%: Mantém Stacked (y: "18vh", scale: 0.94)
  const scale1 = useTransform(scrollYProgress, [0, 0.2, 0.35, 1], [1, 1, 0.94, 0.94]);
  const y1 = useTransform(scrollYProgress, [0, 0.2, 0.35, 1], ["28vh", "28vh", "18vh", "18vh"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 1], [0, 1, 1]);

  // --- CARD 02 ---
  // 0% a 35%: Escondido abaixo (y: "100vh", opacity: 0)
  // 35% a 55%: Entra e fica Ativo (y: "28vh", scale: 1, opacity: 1)
  // 55% a 70%: Transiciona para Stacked (y: "23vh", scale: 0.97)
  // 70% a 100%: Mantém Stacked (y: "23vh", scale: 0.97)
  const scale2 = useTransform(scrollYProgress, [0, 0.35, 0.55, 0.7, 1], [1, 1, 1, 0.97, 0.97]);
  const y2 = useTransform(scrollYProgress, [0, 0.35, 0.55, 0.7, 1], ["100vh", "100vh", "28vh", "23vh", "23vh"]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.34, 0.35, 1], [0, 0, 1, 1]);
  
  // --- CARD 03 ---
  // 0% a 70%: Escondido abaixo (y: "100vh", opacity: 0)
  // 70% a 90%: Entra e fica Ativo (y: "28vh", scale: 1, opacity: 1)
  // 90% a 100%: Mantém Ativo (y: "28vh", scale: 1)
  const scale3 = useTransform(scrollYProgress, [0, 0.7, 0.9, 1], [1, 1, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0, 0.7, 0.9, 1], ["100vh", "100vh", "28vh", "28vh"]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.69, 0.7, 1], [0, 0, 1, 1]);

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
          top: 0, 
          height: "100dvh", 
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
          <img src="/Img/ObjTrasparentes/6.png" alt="Chrome Ribbon" style={{ width: "100%", height: "auto" }} />
        </div>
        <div className="floating-object anim-drift-slow" style={{ position: "absolute", bottom: "12%", right: "-6%", width: "240px", opacity: 0.12, pointerEvents: "none" }}>
          <img src="/Img/ObjTrasparentes/9.png" alt="Chrome Anchor" style={{ width: "100%", height: "auto" }} />
        </div>

        <div className="container" style={{ position: "relative", height: "100%", width: "100%", maxWidth: "1200px" }}>
          
          {/* TÍTULO DA SEÇÃO */}
          <div className="section-title-container" style={{ position: "absolute", top: "8vh", left: "0", zIndex: 50 }}>
            <span className="section-tag">02 / TRABALHOS SELECIONADOS</span>
            <h2 className="section-title font-editorial">PROJETOS &amp; SOLUÇÕES</h2>
          </div>

          {/* PALCO ABSOLUTO DE TELA INTEIRA PARA CARDS */}
          <div className="framer-cards-container" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
            
            {/* CARD 01 */}
            <motion.div 
              className="card-wrapper-framer" 
              style={{ position: "absolute", top: 0, left: 0, width: "100%", scale: scale1, y: y1, opacity: opacity1, zIndex: 10, transformOrigin: "top center", pointerEvents: "auto" }}
            >
              <div className="project-card card-1-framer">
                <div className="project-info">
                  <div className="project-header">
                    <span className="project-number">01</span>
                    <h3 className="project-title font-editorial">Async Studio</h3>
                    <p className="project-desc">
                      Landing page e identidade digital de alta performance desenvolvida para a apresentação elegante de serviços de desenvolvimento de software.
                    </p>
                    <div className="project-tags">
                      <span className="project-tag">React</span>
                      <span className="project-tag">Tailwind</span>
                      <span className="project-tag">Vercel</span>
                    </div>
                  </div>
                  <div className="project-actions">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-project-primary">
                      Ver projeto <span className="project-arrow">—&gt;</span>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-project-secondary">
                      Ver código
                    </a>
                  </div>
                </div>
                <div className="project-media">
                  <img
                    className="project-img"
                    src="/Img/pc.png"
                    alt="Async Studio Mockup"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
              </div>
            </motion.div>

            {/* CARD 02 */}
            <motion.div 
              className="card-wrapper-framer" 
              style={{ position: "absolute", top: 0, left: 0, width: "100%", scale: scale2, y: y2, opacity: opacity2, zIndex: 20, transformOrigin: "top center", pointerEvents: "auto" }}
            >
              <div className="project-card card-2-framer">
                <div className="project-info">
                  <div className="project-header">
                    <span className="project-number">02</span>
                    <h3 className="project-title font-editorial">Sistema Jurídico / ERP</h3>
                    <p className="project-desc">
                      Sistema web completo e sob medida voltado para a gestão interna de processos jurídicos, clientes, andamentos processuais, relatórios automatizados e módulos administrativos integrados.
                    </p>
                    <div className="project-tags">
                      <span className="project-tag">PHP</span>
                      <span className="project-tag">MySQL</span>
                      <span className="project-tag">Laravel</span>
                    </div>
                  </div>
                  <div className="project-actions">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-project-primary">
                      Ver projeto <span className="project-arrow">—&gt;</span>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-project-secondary">
                      Ver código
                    </a>
                  </div>
                </div>
                <div className="project-media">
                  <img
                    className="project-img"
                    src="/Img/software.png"
                    alt="Sistema Jurídico Mockup"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
              </div>
            </motion.div>

            {/* CARD 03 */}
            <motion.div 
              className="card-wrapper-framer" 
              style={{ position: "absolute", top: 0, left: 0, width: "100%", scale: scale3, y: y3, opacity: opacity3, zIndex: 30, transformOrigin: "top center", pointerEvents: "auto" }}
            >
              <div className="project-card card-3-framer">
                <div className="project-info">
                  <div className="project-header">
                    <span className="project-number">03</span>
                    <h3 className="project-title font-editorial">Automações com n8n</h3>
                    <p className="project-desc">
                      Desenvolvimento de fluxos inteligentes e automatizados de dados conectando APIs externas, Google Drive, planilhas inteligentes, gateways e modelos avançados de Inteligência Artificial.
                    </p>
                    <div className="project-tags">
                      <span className="project-tag">n8n</span>
                      <span className="project-tag">APIs</span>
                      <span className="project-tag">Docker</span>
                      <span className="project-tag">IA</span>
                    </div>
                  </div>
                  <div className="project-actions">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-project-primary">
                      Ver projeto <span className="project-arrow">—&gt;</span>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-project-secondary">
                      Ver código
                    </a>
                  </div>
                </div>
                <div className="project-media">
                  <img
                    className="project-img"
                    src="/Img/automacao.png"
                    alt="Automação n8n Mockup"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
