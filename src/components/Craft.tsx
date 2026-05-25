import { portfolioConfig } from '../config';

export function Craft() {
  return (
    <section className="section container" id="craft">
      <div className="section-header">
        <span className="section-label">// O que eu faço</span>
        <h2>Craft & Expertise</h2>
      </div>

      <div className="craft__content">
        <p className="craft__text">
          {portfolioConfig.craftDescription}
        </p>
      </div>

      <div className="craft__chips">
        {portfolioConfig.craftTechnologies.map((tech) => (
          <span className="craft__chip" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
