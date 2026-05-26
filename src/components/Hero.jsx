export default function Hero() {
  return (
    <section className="hero section-slide" id="home">
      {/* Elementos Cromados Decorativos de Fundo */}
      <div className="floating-object anim-float-slow" style={{ top: "15%", left: "-6%", width: "240px", opacity: 0.25 }}>
        <img src="/assets/chrome/1.png" alt="Chrome Orb" style={{ width: "100%", height: "auto" }} />
      </div>
      <div className="floating-object anim-rotate-slow" style={{ top: "50%", right: "-8%", width: "300px", opacity: 0.18 }}>
        <img src="/assets/chrome/3.png" alt="Chrome Ring" style={{ width: "100%", height: "auto" }} />
      </div>
      <div className="floating-object anim-drift-slow" style={{ bottom: "10%", left: "32%", width: "160px", opacity: 0.15 }}>
        <img src="/assets/chrome/5.png" alt="Chrome Fluid" style={{ width: "100%", height: "auto" }} />
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
  );
}
