import Image from "next/image";
import { marqueeSkills } from "@/data/skills";

export default function Skills() {
  const row1Skills = [...marqueeSkills[0], ...marqueeSkills[0]];
  const row2Skills = [...marqueeSkills[1], ...marqueeSkills[1]];

  return (
    <section className="skills-section section-slide" id="skills">
      <div className="floating-object anim-drift-slow" style={{ top: "10%", left: "5%", width: "220px", opacity: 0.12 }}>
        <Image src="/assets/chrome/4.png" alt="" width={220} height={220} style={{ width: "100%", height: "auto" }} aria-hidden="true" />
      </div>

      <div className="skills-content container">
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

        <div className="skills-orbit-container">
          <div className="skills-marquee-row marquee-left">
            {row1Skills.map((skill, idx) => (
              <div className="skill-card" key={`r1-${idx}`}>
                <span className="skill-icon"></span>
                <span>{skill}</span>
              </div>
            ))}
          </div>

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
