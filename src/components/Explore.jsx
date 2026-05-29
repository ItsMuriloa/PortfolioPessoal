import Image from "next/image";

export default function Explore({ onOpenModal }) {
  return (
    <section className="explore-section section-slide" id="explore">
      <div className="floating-object anim-float-slow" style={{ top: "20%", right: "12%", width: "220px", opacity: 0.08 }}>
        <Image src="/assets/chrome/2.png" alt="" width={220} height={220} style={{ width: "100%", height: "auto" }} aria-hidden="true" />
      </div>

      <div className="container">
        <div className="section-title-container" style={{ marginBottom: "var(--space-md)", textAlign: "left" }}>
          <span className="section-tag">04 / RECURSOS E CONEXOES</span>
          <h2 className="section-title font-editorial">MAIS PARA EXPLORAR</h2>
          <p className="explore-subtitle" style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginTop: "0.5rem", maxWidth: "600px" }}>
            Descubra canais diretos de comunicacao, minhas competencias e links uteis pela web.
          </p>
        </div>

        <div className="explore-grid">
          <button type="button" className="explore-card" onClick={(event) => onOpenModal("contact", event.currentTarget)}>
            <div className="explore-card-header">
              <span className="explore-card-number font-editorial">01</span>
              <span className="explore-card-tag mono">CONTATO</span>
            </div>
            <div className="explore-card-body">
              <h3 className="explore-card-title font-editorial">Contate-me</h3>
              <p className="explore-card-desc">
                Marque uma reuniao ou envie uma mensagem para conversarmos sobre uma ideia, projeto ou oportunidade.
              </p>
            </div>
            <div className="explore-card-footer">
              <span className="explore-card-action mono">[ ABRIR FORMULARIO ]</span>
            </div>
          </button>

          <button type="button" className="explore-card" onClick={(event) => onOpenModal("certificatesSkills", event.currentTarget)}>
            <div className="explore-card-header">
              <span className="explore-card-number font-editorial">02</span>
              <span className="explore-card-tag mono">STACK</span>
            </div>
            <div className="explore-card-body">
              <h3 className="explore-card-title font-editorial">Certificados e Skills</h3>
              <p className="explore-card-desc">
                Habilidades, tecnologias, estudos e certificados organizados por contexto de uso.
              </p>
            </div>
            <div className="explore-card-footer">
              <span className="explore-card-action mono">[ VER STACK ]</span>
            </div>
          </button>

          <button type="button" className="explore-card" onClick={(event) => onOpenModal("links", event.currentTarget)}>
            <div className="explore-card-header">
              <span className="explore-card-number font-editorial">03</span>
              <span className="explore-card-tag mono">CONEXOES</span>
            </div>
            <div className="explore-card-body">
              <h3 className="explore-card-title font-editorial">Links Uteis</h3>
              <p className="explore-card-desc">
                Me encontre pela web: GitHub, LinkedIn, Instagram, WhatsApp corporativo e outras plataformas.
              </p>
            </div>
            <div className="explore-card-footer">
              <span className="explore-card-action mono">[ EXPLORAR LINKS ]</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
