export default function Skills() {
  const row1Skills = [
    "React", "Next.js", "JavaScript", "PHP", "Laravel", "MySQL", "PostgreSQL", "Figma", "Inglês - Básico", 
    "React", "Next.js", "JavaScript", "PHP", "Laravel", "MySQL", "PostgreSQL", "Figma", "Inglês - Básico"
  ];

  const row2Skills = [
    "Automações low-code", "APIs", "IA", "ChatGPT", "Claude", "Docker", "Nginx", "GitHub Actions", "Figma", "Espanhol - Básico",
    "Automações low-code", "APIs", "IA", "ChatGPT", "Claude", "Docker", "Nginx", "GitHub Actions", "Figma", "Espanhol - Básico"
  ];

  return (
    <section className="skills-section section-slide" id="skills">
      {/* Elemento Cromado Decorativo de Fundo */}
      <div className="floating-object anim-drift-slow" style={{ top: "10%", left: "5%", width: "220px", opacity: 0.12 }}>
        <img src="/assets/chrome/4.png" alt="Chrome Spline" style={{ width: "100%", height: "auto" }} />
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
            {row1Skills.map((skill, idx) => (
              <div className="skill-card" key={`r1-${idx}`}>
                <span className="skill-icon"></span>
                <span>{skill}</span>
              </div>
            ))}
          </div>

          {/* Linha 2: Scrolling Right */}
          <div className="skills-marquee-row marquee-right">
            {row2Skills.map((skill, idx) => (
              <div className="skill-card" key={`r2-${idx}`}>
                <span className="skill-icon"></span>
                <span>{skill}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
