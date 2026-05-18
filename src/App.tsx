import { useRef } from 'react';
import {
  ArrowUpRight,
  Bot,
  ChevronLeft,
  ChevronRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Server,
  Sparkles,
  Workflow,
} from 'lucide-react';
import avatarImage from '../Img/icon.png';
import laptopImage from '../Img/mac.png';
import serverImage from '../Img/pc.png';
import skillsIconImage from '../Img/software.png';
import orbitJsonImage from '../Img/orbit/json.png';
import orbitMiniTerminalImage from '../Img/orbit/miniterminal.png';
import orbitSoftwareImage from '../Img/orbit/software.png';
import orbitTerminalImage from '../Img/orbit/terminal2.png';
import { portfolioConfig } from './config';
import { useGithubPortfolio } from './hooks/useGithubPortfolio';

const labCards = [
  { label: 'Dev', detail: 'React / Web', icon: Code2 },
  { label: 'IA', detail: 'Prompts / Agents', icon: Bot },
  { label: 'Infra', detail: 'Linux / VPS', icon: Server },
  { label: 'Auto', detail: 'n8n / APIs', icon: Workflow },
];

const allowedPerformanceModes = new Set(['no-orbit', 'no-filters', 'no-blur', 'no-motion', 'lite']);

function getContactHref() {
  const params = new URLSearchParams({
    subject: portfolioConfig.contactSubject,
    body: portfolioConfig.contactBody,
  });

  return 'mailto:' + portfolioConfig.email + '?' + params.toString();
}

function getPerformanceClassName() {
  const params = new URLSearchParams(window.location.search);
  const modes = (params.get('perf') || '')
    .split(',')
    .map((mode) => mode.trim())
    .filter((mode) => allowedPerformanceModes.has(mode));

  return ['portfolio-shell', ...modes.map((mode) => 'perf-' + mode)].join(' ');
}

export function App() {
  const projectsViewportRef = useRef<HTMLDivElement>(null);
  const { error, isLoading, repositories } = useGithubPortfolio(portfolioConfig.githubUsername);

  function scrollProjects(direction: -1 | 1) {
    const viewport = projectsViewportRef.current;

    if (!viewport) {
      return;
    }

    const card = viewport.querySelector<HTMLElement>('.project-card');
    const gap = 16;
    const distance = (card?.getBoundingClientRect().width || 360) + gap;

    viewport.scrollBy({
      left: direction * distance,
      behavior: 'smooth',
    });
  }

  return (
    <main className={getPerformanceClassName()}>
      <section className="hero-lab" aria-label="Primeira tela do portfolio Murilo Lab">
        <div className="hero-lab__grid" aria-hidden="true" />
        <header className="topbar">
          <nav className="topnav" aria-label="Navegação principal">
            <a href="#Inicio">Inicio</a>
            <a href="#skills">Skills e Projetos</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>

        <div className="hero-lab__content">
          <div className="hero-lab__copy">
            <span className="eyebrow" id="Inicio">
              <Sparkles size={16} />
              {portfolioConfig.eyebrow}
            </span>
            <h1>{portfolioConfig.name}</h1>
            <p className="hero-lab__headline">{portfolioConfig.headline}</p>
            <p className="hero-lab__description">{portfolioConfig.bio}</p>

            <div className="hero-lab__actions">
              <a className="button button--primary" href="#projetos">
                Ver projetos
                <ArrowUpRight size={18} />
              </a>
              <a className="button button--ghost" href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer">
                <Github size={18} />
                GitHub
              </a>
              <a className="button button--ghost" href={portfolioConfig.linkedinUrl} target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="lab-stage" aria-label="Composição visual com avatar e objetos 3D">
            <img className="stage-asset stage-asset--laptop" src={laptopImage} alt="Notebook com terminal aberto" />

            <div className="avatar-console">
              <div className="avatar-frame">
                <img className="memoji-image" src={avatarImage} alt={'Avatar 3D de ' + portfolioConfig.name} />
              </div>

              <div className="orbit-system" aria-hidden="true">
                <span className="orbit-item orbit-item--terminal">
                  <span className="orbit-visual">
                    <img src={orbitTerminalImage} alt="" />
                  </span>
                </span>
                <span className="orbit-item orbit-item--json">
                  <span className="orbit-visual">
                    <img src={orbitJsonImage} alt="" />
                  </span>
                </span>
                <span className="orbit-item orbit-item--mini-terminal">
                  <span className="orbit-visual">
                    <img src={orbitMiniTerminalImage} alt="" />
                  </span>
                </span>
                <span className="orbit-item orbit-item--software">
                  <span className="orbit-visual">
                    <img src={orbitSoftwareImage} alt="" />
                  </span>
                </span>
              </div>
            </div>
          </aside>
        </div>

        <div className="hero-lab__bottom">
          {labCards.map((item) => {
            const Icon = item.icon;
            return (
              <article className="lab-pill" key={item.label}>
                <Icon size={18} />
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.detail}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-preview" id="skills">
        <div className="skills-section">
          <div>
            <div className="section-preview__heading">
              <span>Stack inicial</span>
              <h2>Áreas que estou me desenvolvendo</h2>
            </div>
            <div className="skill-cloud">
              {portfolioConfig.skills.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>

          <div className="skills-visual" aria-hidden="true">
            <img className="skills-visual__server" src={serverImage} alt="" />
            <img className="skills-visual__tools" src={skillsIconImage} alt="" />
          </div>
        </div>
      </section>

      <section className="section-preview section-preview--cards" id="projetos" aria-label="Projetos do GitHub">
        <article className="projects-carousel">
          <div className="projects-carousel__headrow">
            <div className="projects-carousel__heading">
              <span>GitHub</span>
              <h2>Projetos reais direto do repositório</h2>
              <p>Os cards abaixo são carregados automaticamente da API pública do GitHub.</p>
            </div>

            {!isLoading && !error && repositories.length > 0 && (
              <div className="projects-carousel__controls" aria-label="Controles dos projetos">
                <button type="button" aria-label="Projeto anterior" onClick={() => scrollProjects(-1)}>
                  <ChevronLeft size={20} />
                </button>
                <button type="button" aria-label="Próximo projeto" onClick={() => scrollProjects(1)}>
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>

          {isLoading && (
            <div className="projects-carousel__status">
              <h3>Carregando projetos...</h3>
              <p>Buscando seus repositórios públicos mais recentes.</p>
            </div>
          )}

          {!isLoading && error && (
            <div className="projects-carousel__status">
              <h3>Projetos indisponíveis</h3>
              <p>{error}</p>
            </div>
          )}

          {!isLoading && !error && repositories.length === 0 && (
            <div className="projects-carousel__status">
              <h3>Nenhum projeto encontrado</h3>
              <p>Crie ou publique repositórios no GitHub para eles aparecerem automaticamente aqui.</p>
            </div>
          )}

          {!isLoading && !error && repositories.length > 0 && (
            <div className="projects-carousel__viewport" ref={projectsViewportRef}>
              <div className="projects-carousel__track">
                {repositories.map((repository) => (
                  <article className="project-card" key={repository.id}>
                    <div className="project-card__topline">
                      <span>{repository.language || 'Projeto'}</span>
                      <span>★ {repository.stargazers_count}</span>
                    </div>
                    <h3>{repository.name}</h3>
                    <p>{repository.description || ('Repositório público do GitHub de ' + portfolioConfig.name + '.')}</p>
                    {repository.topics && repository.topics.length > 0 && (
                      <div className="project-card__topics" aria-label="Tópicos do projeto">
                        {repository.topics.slice(0, 3).map((topic) => (
                          <span key={topic}>{topic}</span>
                        ))}
                      </div>
                    )}
                    <a href={repository.html_url} target="_blank" rel="noreferrer">
                      Ver no GitHub
                      <ArrowUpRight size={16} />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          )}
        </article>
      </section>

      <footer className="contact-strip" id="contato">
        <div>
          <strong>{portfolioConfig.contactTitle}</strong>
          <span>{portfolioConfig.contactText}</span>
        </div>
        <a className="button button--primary" href={getContactHref()}>
          <Mail size={18} />
          Contato
        </a>
      </footer>
    </main>
  );
}
