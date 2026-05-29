import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="hero section-slide" id="home">
      <div className="floating-object anim-float-slow" style={{ top: "15%", left: "-6%", width: "240px", opacity: 0.18 }}>
        <Image src="/assets/chrome/1.png" alt="" width={240} height={240} style={{ width: "100%", height: "auto" }} aria-hidden="true" />
      </div>
      <div className="floating-object anim-rotate-slow" style={{ top: "50%", right: "-8%", width: "300px", opacity: 0.12 }}>
        <Image src="/assets/chrome/3.png" alt="" width={300} height={300} style={{ width: "100%", height: "auto" }} aria-hidden="true" />
      </div>
      <div className="floating-object anim-drift-slow" style={{ bottom: "10%", left: "32%", width: "160px", opacity: 0.1 }}>
        <Image src="/assets/chrome/5.png" alt="" width={160} height={160} style={{ width: "100%", height: "auto" }} aria-hidden="true" />
      </div>

      <div className="hero-content container">
        <div className="hero-title-container">
          <span className="hero-kicker mono">Portfolio / Desenvolvimento Web</span>
          <h1 className="hero-title">{profile.name}</h1>
          <span className="hero-subtitle-bottom mono">{profile.role}</span>
        </div>

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

      <div className="hero-side-socials mono">
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
          GH
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
          LI
        </a>
        <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer">
          IG
        </a>
      </div>

      <div className="hero-scroll-indicator mono">
        Scroll
      </div>
    </section>
  );
}
