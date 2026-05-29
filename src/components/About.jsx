import Image from "next/image";

export default function About() {
  return (
    <section className="about-section section-slide" id="about">
      <div className="floating-object anim-float-slow" style={{ top: "8%", right: "8%", width: "260px", opacity: 0.12, filter: "blur(2px) drop-shadow(0 20px 50px rgba(0,0,0,0.5))" }}>
        <Image src="/assets/chrome/8.png" alt="" width={260} height={260} style={{ width: "100%", height: "auto" }} aria-hidden="true" />
      </div>

      <div className="container">
        <div className="section-title-container">
          <span className="section-tag">01 / SOBRE MIM</span>
          <h2 className="section-title font-editorial">CONCEITO &amp; PROPOSITO</h2>
        </div>

        <div className="bento-grid">
          <div className="bento-card bento-col-2">
            <span className="bento-label">MINDSET</span>
            <p className="bento-text">
              Construo mais do que software. Antes de codar, busco entender o <span className="bento-text-highlight">problema real</span> para desenhar a melhor solucao.
            </p>
          </div>

          <div className="bento-card bento-photo-card bento-row-2">
            <Image
              className="bento-photo-img"
              src="/assets/images/ImagemEu.jpg"
              alt="Murilo Alves"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="bento-photo-overlay">
              <span className="bento-label" style={{ color: "var(--accent-gold)" }}>CREATIVE FULL STACK</span>
              <h3 className="bento-text" style={{ fontSize: "1.3rem", fontWeight: "900", lineHeight: "1.1" }}>MURILO ALVES</h3>
            </div>
          </div>

          <div className="bento-card">
            <span className="bento-label">CRAFT</span>
            <p className="bento-text">
              Crio sistemas robustos, landing pages, automações inteligentes e soluções digitais com foco em <span className="bento-text-highlight">uso real</span>.
            </p>
          </div>

          <div className="bento-card">
            <span className="bento-label">PROCESSO</span>
            <p className="bento-text">
              Trabalho guiado por <span className="bento-text-highlight">clareza</span>, organizacao metodica, evolucao constante e entrega consistente de valor real.
            </p>
          </div>

          <div className="bento-card bento-col-2">
            <div>
              <span className="bento-label">ESTRUTURA TECNICA</span>
              <p className="bento-text" style={{ fontSize: "1.1rem" }}>
                Meu ecossistema é otimizado para escalabilidade, performance e automação inteligente de processos.
              </p>
            </div>
            <div className="bento-stack-grid">
              <div className="bento-stack-item">PHP / LARAVEL</div>
              <div className="bento-stack-item">AUTOMAÇÃO COM IA / DEVOPS</div>
            </div>
          </div>

          <div className="bento-card bento-map-card">
            <Image
              className="bento-map-img"
              src="/assets/images/mapa.webp"
              alt="Rio Grande do Sul, Brasil"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="bento-map-overlay">
              <span className="bento-label">LOCALIZACAO</span>
              <div>
                <h4 className="bento-text" style={{ fontSize: "1.25rem" }}>RIO GRANDE DO SUL</h4>
                <p className="mono" style={{ fontSize: "0.7rem", marginTop: "0.2rem", color: "var(--accent-gold)" }}>
                  BRASIL - 30.0346 S, 51.2177 W
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
