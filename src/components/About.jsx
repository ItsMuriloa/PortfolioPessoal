export default function About() {
  return (
    <section className="about-section section-slide" id="about">
      {/* Elemento Cromado Decorativo de Fundo */}
      <div className="floating-object anim-float-slow" style={{ top: "8%", right: "8%", width: "260px", opacity: 0.12, filter: "blur(2px) drop-shadow(0 20px 50px rgba(0,0,0,0.5))" }}>
        <img src="/assets/chrome/8.png" alt="Chrome Node" style={{ width: "100%", height: "auto" }} />
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
              src="/assets/images/ImagemEu.jpg"
              alt="Murilo Alves"
              onError={(e) => {
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
              <div className="bento-stack-item">AUTOMAÇÃO COM IA / DEVOPS</div>
            </div>
          </div>

          {/* Card 6 - Localização com imagem do mapa */}
          <div className="bento-card bento-map-card">
            <img
              className="bento-map-img"
              src="/assets/images/mapa.webp"
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
  );
}
