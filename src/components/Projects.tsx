import { Github, ArrowUpRight } from 'lucide-react';
import { portfolioConfig } from '../config';

export function Projects() {
  return (
    <section className="section container" id="projetos">
      <div className="section-header">
        <span className="section-label">// Projetos em destaque</span>
        <h2>Trabalhos selecionados</h2>
        <p>
          Uma seleção de sistemas desenvolvidos com foco em arquitetura sólida.
          Código-fonte disponível no GitHub.
        </p>
      </div>

      <div className="projects__list">
        {portfolioConfig.featuredProjects.map((project, index) => (
          <article
            className={`project-item ${
              index % 2 !== 0 ? 'project-item--reverse' : ''
            }`}
            key={project.id}
          >
            <div className="project-item__info">
              <span className="project-item__number">{project.number}</span>
              <span className="project-item__category">{project.category}</span>
              <h3 className="project-item__name">{project.name}</h3>
              <p className="project-item__desc">{project.description}</p>

              <div className="project-item__stack">
                {project.techs.map((tech) => (
                  <span className="project-item__stack-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-item__links">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--secondary"
                  style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                >
                  <Github size={14} />
                  Código Fonte
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--ghost"
                  >
                    Ver Online
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>

            <div className="project-item__image">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
