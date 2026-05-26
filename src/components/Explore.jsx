export default function Explore({ onOpenModal }) {
  return (
    <section className="explore-section section-slide" id="explore">
      {/* Elemento Cromado Decorativo de Fundo */}
      <div className="floating-object anim-float-slow" style={{ top: "20%", right: "12%", width: "220px", opacity: 0.08 }}>
        <img src="/assets/chrome/2.png" alt="Chrome Helix" style={{ width: "100%", height: "auto" }} />
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
          <div className="explore-card" onClick={() => onOpenModal("contact")}>
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
          <div className="explore-card" onClick={() => onOpenModal("achievements")}>
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
          <div className="explore-card" onClick={() => onOpenModal("links")}>
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
  );
}
