import { useEffect, useRef, type CSSProperties, type PointerEvent } from 'react';
import {
  ArrowUpRight,
  Award,
  Braces,
  CalendarDays,
  Code2,
  Database,
  Download,
  GraduationCap,
  Github,
  GitBranch,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Server,
  Sparkles,
  Star,
  Terminal,
  Wrench,
  Workflow,
} from 'lucide-react';
import avatarImage from '../Img/icon.png';
import mapImage from '../Img/mapa.webp';
import profilePhoto from '../Img/ImagemEu.jpg';
import { portfolioConfig } from './config';

const schoolCards = [
  {
    title: 'Universidade La Salle',
    text: 'Bacharelado em Engenharia de Software desde março de 2025.',
  },
  {
    title: 'E.T.E. Frederico G. Schmidt',
    text: 'Ensino médio integrado com formação técnica em eletrotécnica.',
  },
];

const featuredProjects = [
  {
    id: 'async-landing',
    title: 'Async Studio Landing Page',
    type: 'Landing Page',
    description:
      'Landing page criada para apresentar a proposta da Async Studio Dev, organizar a comunicação comercial e direcionar contatos.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS'],
    github: portfolioConfig.githubUrl + 'LandingPageAsync',
    accent: 'from-green',
  },
  {
    id: 'bizmanager',
    title: 'Bizmanager',
    type: 'Sistema Web',
    description:
      'Sistema em evolução para gestão, organização de dados e apoio a processos internos com foco em regras de negócio e manutenção.',
    tags: ['PHP', 'Laravel', 'MySQL', 'APIs'],
    github: portfolioConfig.githubUrl + 'Bizmanager',
    accent: 'from-blue',
  },
  {
    id: 'dias-do-canto',
    title: 'Portal Dias do Canto',
    type: 'Portal / Sistema interno',
    description:
      'Projeto de portal para centralizar informações e fluxos internos, priorizando clareza, operação simples e evolução gradual.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    github: portfolioConfig.githubUrl,
    accent: 'from-purple',
  },
  {
    id: 'sistema-pontos',
    title: 'Sistema de pontos',
    type: 'Sistema Web',
    description:
      'Sistema voltado para registro, controle e consulta de pontuações, com foco em lógica de negócio, dados e uso no dia a dia.',
    tags: ['PHP', 'MySQL', 'CRUD', 'Regras'],
    github: portfolioConfig.githubUrl,
    accent: 'from-green',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Pessoal',
    type: 'Website',
    description:
      'Portfólio em React e TypeScript para apresentar stack, projetos e evolução técnica com visual responsivo e deploy próprio.',
    tags: ['React', 'TypeScript', 'Vite', 'VPS'],
    github: portfolioConfig.githubUrl + 'PortfolioPessoal',
    accent: 'from-blue',
  },
];

const resumeHref = '/curriculo-murilo-alves.pdf';

const stackItems = [
  {
    label: 'PHP',
    icon: Code2,
    meta: 'back-end',
    color: '#8f9bff',
  },
  {
    label: 'Laravel',
    icon: Braces,
    meta: 'framework',
    color: '#ff6b7a',
  },
  {
    label: 'MySQL',
    icon: Database,
    meta: 'dados',
    color: '#39c7ff',
  },
  {
    label: 'APIs',
    icon: Globe2,
    meta: 'integração',
    color: '#39ff9d',
  },
  {
    label: 'Debug',
    icon: Wrench,
    meta: 'bugs',
    color: '#f8d85a',
  },
  {
    label: 'React',
    icon: Code2,
    meta: 'interface',
    color: '#61dafb',
  },
  {
    label: 'TypeScript',
    icon: Braces,
    meta: 'base',
    color: '#4d8dff',
  },
  {
    label: 'Tailwind',
    icon: Sparkles,
    meta: 'ui',
    color: '#4fe7ff',
  },
  {
    label: 'Docker',
    icon: Server,
    meta: 'ambiente',
    color: '#4d8dff',
  },
  {
    label: 'n8n',
    icon: Workflow,
    meta: 'automação',
    color: '#ff6b7a',
  },
  {
    label: 'Linux',
    icon: Terminal,
    meta: 'apoio',
    color: '#9dff8f',
  },
  {
    label: 'Git',
    icon: GitBranch,
    meta: 'versionamento',
    color: '#ff8a5b',
  },
  {
    label: 'Segurança',
    icon: ShieldCheck,
    meta: 'boas práticas',
    color: '#58ffcb',
  },
];

const stackRows = [
  stackItems.slice(0, 7),
  stackItems.slice(7),
];

const craftSkills = ['PHP', 'Laravel', 'MySQL', 'APIs', 'CRUDs', 'Bugs', 'Lógica', 'React', 'Docker', 'Git', 'n8n'];

const certificateAreas = ['JavaScript', 'PHP', 'Linux', 'DevOps', 'Inglês básico', 'Alura'];

const otherItems = [
  {
    title: 'GitHub',
    text: 'Repositórios, estudos e evolução dos projetos.',
    href: portfolioConfig.githubUrl,
    icon: Github,
  },
  {
    title: 'LinkedIn',
    text: 'Perfil profissional e atualizações da jornada.',
    href: portfolioConfig.linkedinUrl,
    icon: Linkedin,
  },
  {
    title: 'Email',
    text: 'Contato direto para projetos, freelas e oportunidades.',
    href: 'mailto:' + portfolioConfig.email,
    icon: Mail,
  },
  {
    title: 'Currículo',
    text: 'PDF com formação, stack e informações profissionais.',
    href: resumeHref,
    icon: Download,
  },
];

const allowedPerformanceModes = new Set(['no-orbit', 'no-filters', 'no-blur', 'no-motion', 'lite']);

function getScheduleHref() {
  const params = new URLSearchParams({
    subject: 'Agendar conversa pelo portfolio',
    body:
      'Olá Murilo, vi seu portfolio e gostaria de agendar uma conversa.\n\n' +
      'Meu nome:\n' +
      'Melhor dia/horário:\n' +
      'Assunto da conversa:\n' +
      'Link ou referência:',
  });

  return 'mailto:' + portfolioConfig.email + '?' + params.toString();
}

function getGmailHref() {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: portfolioConfig.email,
    su: portfolioConfig.contactSubject,
    body: portfolioConfig.contactBody,
  });

  return 'https://mail.google.com/mail/?' + params.toString();
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
  const shellRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const shell = shellRef.current;

    if (!shell) {
      return;
    }

    shell.style.setProperty('--cursor-x', window.innerWidth / 2 + 'px');
    shell.style.setProperty('--cursor-y', window.innerHeight / 2 + 'px');
  }, []);

  useEffect(() => {
    const sectionId = window.location.hash.replace('#', '');

    if (!sectionId) {
      return;
    }

    window.setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (!section) {
        return;
      }

      window.scrollTo({ top: section.offsetTop, behavior: 'auto' });
    }, 60);
  }, []);

  function updateCursorGlow(event: PointerEvent<HTMLElement>) {
    const shell = shellRef.current;

    if (!shell || event.pointerType === 'touch') {
      return;
    }

    shell.style.setProperty('--cursor-x', event.clientX + 'px');
    shell.style.setProperty('--cursor-y', event.clientY + 'px');
  }

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const offset = sectionId === 'inicio' ? 0 : 0;
    const nextTop = section.getBoundingClientRect().top + window.scrollY - offset;
    window.history.pushState(null, '', '#' + sectionId);
    window.scrollTo({ top: nextTop, behavior: 'smooth' });
  }

  return (
    <main className={getPerformanceClassName()} ref={shellRef} onPointerMove={updateCursorGlow}>
      <div className="ambient-glow" aria-hidden="true" />
      <header className="topbar">
        <nav className="topnav" aria-label="Navegação principal">
          <a href="#inicio" onClick={(event) => { event.preventDefault(); scrollToSection('inicio'); }}>Inicio</a>
          <a href="#sobre" onClick={(event) => { event.preventDefault(); scrollToSection('sobre'); }}>Sobre Mim</a>
          <a href="#projetos" onClick={(event) => { event.preventDefault(); scrollToSection('projetos'); }}>Projetos</a>
          <a href="#skills" onClick={(event) => { event.preventDefault(); scrollToSection('skills'); }}>Stack</a>
          <a href="#outros" onClick={(event) => { event.preventDefault(); scrollToSection('outros'); }}>Outros</a>
        </nav>
      </header>

      <section className="hero-lab" id="inicio" aria-label="Primeira tela do portfolio Murilo Lab">
        <div className="hero-lab__grid" aria-hidden="true" />

        <div className="hero-lab__content">
          <div className="avatar-showcase" aria-label={'Avatar animado de ' + portfolioConfig.name}>
            <div className="avatar-frame">
              <img className="memoji-image" src={avatarImage} alt={'Avatar 3D de ' + portfolioConfig.name} />
              <div className="avatar-status" aria-hidden="true">
                <span className="avatar-status__dot" />
                <span>online</span>
              </div>
            </div>
          </div>

          <div className="hero-lab__copy">
            <span className="eyebrow">
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
        </div>
      </section>

      <section className="about-section section-preview" id="sobre">
        <div className="section-preview__heading section-preview__heading--center">
          <span>Sobre mim</span>
          <h2>Construindo base técnica, raciocínio lógico e soluções que continuam funcionando.</h2>
        </div>

        <div className="about-bento">
          <article className="about-card about-card--profile">
            <p>Profile</p>
            <h3>{portfolioConfig.name}</h3>
            <span>Graduando em Engenharia de Software</span>
          </article>

          <article className="about-card about-card--schools">
            <p>Formação</p>
            <div className="school-list">
              {schoolCards.map((school) => (
                <div className="school-mini" key={school.title}>
                  <GraduationCap size={18} />
                  <h4>{school.title}</h4>
                  <span>{school.text}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="about-card about-card--photo">
            <img src={profilePhoto} alt={'Foto de ' + portfolioConfig.name} />
          </article>

          <article className="about-card about-card--mindset">
            <h3>Perfil profissional</h3>
            <span>
              <strong>Aprendo construindo e depurando.</strong> Tenho mais afinidade com backend, regras de negócio,
              banco de dados e investigação de bugs, sem deixar de cuidar da interface quando o projeto precisa.
            </span>
            <div className="about-card__actions">
              <a className="about-card__resume" href={resumeHref} target="_blank" rel="noreferrer">
                <Download size={16} />
                Abrir currículo
              </a>
              <a className="about-card__resume about-card__resume--secondary" href="#certificados">
                <Award size={16} />
                Certificados
              </a>
            </div>
          </article>

          <article className="about-card about-card--location">
            <img src={mapImage} alt="" />
            <div className="about-card--location__shade" />
            <div>
              <MapPin size={22} />
              <h3>Rio Grande do Sul</h3>
              <span>Brasil / GMT-3</span>
            </div>
            <p>Base no RS, com foco em oportunidades de desenvolvimento web, sistemas internos e colaboração remota.</p>
          </article>

          <article className="about-card about-card--craft">
            <h3>Atuação técnica</h3>
            <span>
              Atuo principalmente na construção e manutenção de <strong>sistemas web, APIs, CRUDs e fluxos internos</strong>.
              Gosto de entender regra de negócio, investigar falhas e organizar soluções para que sejam fáceis de manter.
            </span>
            <div className="about-card__chips" aria-label="Ferramentas e tecnologias de atuação">
              <div className="about-card__chips-track">
                {[...craftSkills, ...craftSkills].map((skill, index) => (
                  <span key={skill + '-' + index}>{skill}</span>
                ))}
              </div>
            </div>
            <small>Disponível para projetos, freelas, correção de bugs, sistemas internos e desafios de backend.</small>
          </article>
        </div>
      </section>

      <section className="featured-projects section-preview" id="projetos">
        <div className="section-preview__heading section-preview__heading--center">
          <span>Projetos em destaque</span>
          <h2>Projetos que mostram construção, lógica e entrega prática.</h2>
          <p>Uma seleção editável com sistemas, landing pages e soluções que representam melhor minha evolução técnica.</p>
        </div>

        <div className="featured-projects__grid">
          {featuredProjects.map((project, index) => (
            <article className={'featured-card featured-card--' + project.accent} key={project.id}>
              <header>
                <div>
                  <span>0{index + 1}</span>
                  <small>{project.type}</small>
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" aria-label={'Abrir ' + project.title}>
                  <ArrowUpRight size={18} />
                </a>
              </header>

              <div className="featured-card__preview" aria-hidden="true">
                <div className="browser-mock">
                  <span />
                  <span />
                  <span />
                </div>
                <strong>{project.title}</strong>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <footer>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="section-preview skills-lab" id="skills">
        <div className="section-preview__heading section-preview__heading--center">
          <span>Stack</span>
          <h2>Ferramentas que uso para construir e manter sistemas.</h2>
          <p>Backend, banco de dados e lógica aparecem primeiro. Interface, automação e infra entram como apoio.</p>
        </div>

        <div className="stack-board" aria-label="Stack técnica de Murilo Alves">
          <div className="stack-board__summary">
            <span>Stack do dia a dia</span>
            <strong>PHP, Laravel, MySQL, APIs, lógica e manutenção.</strong>
            <p>
              Não é uma lista fechada: são tecnologias que venho usando para construir, testar, publicar, corrigir e
              manter projetos reais.
            </p>
          </div>

          <div className="stack-marquees">
            {stackRows.map((row, rowIndex) => (
              <div
                className={'stack-marquee ' + (rowIndex === 1 ? 'stack-marquee--reverse' : '')}
                key={'stack-row-' + rowIndex}
              >
                <div className="stack-marquee__track">
                  {[...row, ...row].map((item, itemIndex) => {
                    const Icon = item.icon;
                    const skillStyle = { '--skill-color': item.color } as CSSProperties;

                    return (
                      <span className="stack-chip" style={skillStyle} key={item.label + '-' + itemIndex}>
                        <Icon size={18} />
                        <strong>{item.label}</strong>
                        <small>{item.meta}</small>
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className="other-section section-preview" id="outros">
        <div className="section-preview__heading section-preview__heading--center">
          <span>Contato</span>
          <h2>Links pessoais, contato e próximos passos.</h2>
          <p>Um espaço direto para oportunidades, colaboração, currículo e registros importantes da minha evolução.</p>
        </div>

        <div className="contact-board">
          <article className="contact-board__intro">
            <div>
              <MessageSquareText size={24} />
            </div>
            <span>Disponível para colaboração</span>
            <h3>Tem uma ideia, projeto ou desafio técnico?</h3>
            <p>
              Envie uma proposta de horário ou fale direto por email. Tenho interesse em projetos web, sistemas internos,
              manutenção, bugs e automações que façam sentido para o negócio.
            </p>
          </article>

          <a className="contact-action-card" href={getScheduleHref()}>
            <CalendarDays size={24} />
            <span>Agendar conversa</span>
            <strong>Sugerir um horário</strong>
          </a>

          <a className="contact-action-card" href={getGmailHref()} target="_blank" rel="noreferrer">
            <Mail size={24} />
            <span>Contato direto</span>
            <strong>Abrir Gmail</strong>
          </a>
        </div>

        <div className="other-grid">
          {otherItems.map((item) => {
            const Icon = item.icon;
            return (
              <a className="other-card" href={item.href} target={item.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" key={item.title}>
                <div className="other-card__icon">
                  <Icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>
                  Abrir
                  <ArrowUpRight size={15} />
                </span>
              </a>
            );
          })}
          <article className="other-card other-card--certificates" id="certificados">
            <div className="other-card__icon">
              <Award size={24} />
            </div>
            <h3>Certificados</h3>
            <p>Área para reunir cursos, trilhas e formações que comprovam minha evolução técnica.</p>
            <div className="certificate-tags">
              {certificateAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
            <span>
              Em atualização
              <Star size={15} />
            </span>
          </article>
        </div>
      </section>

      <footer className="site-footer">
        <span>Murilo Alves © 2026</span>
      </footer>

    </main>
  );
}
