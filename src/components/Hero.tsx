import { ArrowRight, Mail } from 'lucide-react';
import { portfolioConfig } from '../config';

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <span className="hero__bg-text" aria-hidden="true">DEVELOPER</span>

      <div className="container hero__content">
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>{portfolioConfig.eyebrow}</span>
          </div>

          <h1 className="hero__name">
            Murilo<br />
            <span>Alves</span>
          </h1>

          <p className="hero__role">
            {portfolioConfig.heroSubtitle}
          </p>

          <div className="hero__actions">
            <a href="#projetos" className="btn btn--primary">
              Ver Projetos
              <ArrowRight size={16} />
            </a>
            <a href="#contato" className="btn btn--secondary">
              <Mail size={16} />
              Contato
            </a>
          </div>
        </div>

        <div className="hero__image-wrapper">
          <div className="hero__image-frame">
            <img
              src="/Img/ImagemEu.jpg"
              alt="Murilo Alves - Full Stack Developer"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
