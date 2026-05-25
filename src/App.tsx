import { useEffect, useState, useRef } from 'react';
import {
  Activity,
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Layers,
  Linkedin,
  Mail,
  Moon,
  Search,
  Server,
  Sun,
  Terminal,
  X,
} from 'lucide-react';
import { portfolioConfig } from './config';
import { useGithubPortfolio } from './hooks/useGithubPortfolio';

// Types
type BugCase = {
  id: string;
  label: string;
  title: string;
  problem: string;
  diagnostic: string;
  solution: string;
  details: string;
};

// Feature Projects Type
type FeaturedProject = {
  id: string;
  name: string;
  description: string;
  techs: string[];
  visualText: string;
  visualIcon: React.ReactNode;
  githubUrl: string;
  demoUrl?: string;
  bug: BugCase;
};

// Featured Projects with Integrated Backend Bug Solving Cases
const featuredProjects: FeaturedProject[] = [
  {
    id: 'laravel-api-engine',
    name: 'Laravel REST API Engine',
    description: 'Core de APIs robustas e escaláveis estruturadas sob conceitos de Clean Code e SOLID. Desenvolvido para servir como hub de microsserviços integrando cache, eventos assíncronos e processamento em segundo plano.',
    techs: ['PHP', 'Laravel', 'MySQL', 'APIs REST', 'Redis'],
    visualText: 'API_ROUTING_TABLE',
    visualIcon: <Database className="project-icon" size={40} style={{ color: 'var(--accent)' }} />,
    githubUrl: 'https://github.com/ItsMuriloa/PortfolioPessoal', // Redireciona para o portfólio principal
    demoUrl: 'https://itsmuriloa.com',
    bug: {
      id: 'db-bottleneck',
      label: 'DB Performance',
      title: 'Gargalo em Query SQL / Index Scan',
      problem: 'GET /api/v1/reports -> HTTP/1.1 504 Gateway Timeout (5.4s de execução)',
      diagnostic: 'Comando EXPLAIN identificou Table Scan completo em 2M+ registros. Falha na indexação de chaves compostas e relacionamentos.',
      solution: 'Criação de índice composto B-Tree (user_id, created_at) e otimização do SELECT para carregamento eager (Eager Loading). Tempo reduzido de 5400ms para 12ms.',
      details: 'EXPLAIN ANALYZE SELECT id, total, created_at \nFROM reports \nWHERE user_id = 42 AND status = "active"\nORDER BY created_at DESC;\n\n--> Query Plan: Index Scan using idx_user_created (cost=0.42..8.15 rows=10)'
    }
  },
  {
    id: 'n8n-automations',
    name: 'n8n Automation Hub',
    description: 'Central de automações inteligentes e fluxos de trabalho distribuídos no n8n. Integração ativa de Webhooks assíncronos, bots de mensageria e orquestração automatizada entre diferentes SaaS e bancos de dados.',
    techs: ['n8n', 'Workflow Automation', 'API Integration', 'JavaScript', 'Webhooks'],
    visualText: 'AUTOMATION_FLOW',
    visualIcon: <Cpu className="project-icon" size={40} style={{ color: 'var(--accent)' }} />,
    githubUrl: 'https://github.com/ItsMuriloa/n8n-automations',
    bug: {
      id: 'race-condition',
      label: 'Concorrência / Idempotência',
      title: 'Idempotência em Webhooks',
      problem: 'POST /api/v1/payments/callback -> Saldo creditado duplicado por requisições simultâneas (Race Condition)',
      diagnostic: 'Gateway de pagamento enviou 3 callbacks idênticos em menos de 15ms. Aplicação leu e atualizou saldo em paralelo, sem bloqueio atômico.',
      solution: 'Implementação de bloqueio atômico (Mutex) com Redis utilizando chave exclusiva do callback. Retornos duplicados em janela de concorrência são rejeitados com HTTP 409.',
      details: '// Bloqueio de Idempotência no Laravel\n$lockKey = "payment_callback:" . $callbackToken;\nif (!Redis::funnel($lockKey)->limit(1)->block(0)->acquire()) {\n    abort(409, "Callback já em processamento");\n}'
    }
  },
  {
    id: 'vps-infra-bootstrap',
    name: 'VPS Linux Infra Bootstrap',
    description: 'Provisionamento automatizado e receitas Docker Compose prontas para produção. Orquestração de proxy reverso Nginx, renovação automática de certificados SSL/TLS e blindagem básica de servidores VPS.',
    techs: ['DevOps', 'VPS Oracle', 'Docker Compose', 'Nginx', 'Linux Security'],
    visualText: 'INFRA_BOOTSTRAP',
    visualIcon: <Server className="project-icon" size={40} style={{ color: 'var(--accent)' }} />,
    githubUrl: 'https://github.com/ItsMuriloa/vps-infra-bootstrap',
    bug: {
      id: 'vps-oom',
      label: 'DevOps / Recursos',
      title: 'Vazamento de Memória na VPS',
      problem: 'Importador em lote derruba VPS devido ao estouro de limite físico (OOM Killer rodando no Docker)',
      diagnostic: 'Instância Laravel Excel alocou arquivo de 150MB inteiro na memória RAM (overhead de Eloquent). Docker sem limites físicos configurados rodou sem swap.',
      solution: 'Configuração de swap virtual (2GB) na VPS; limite rígido de RAM no Docker; refatoração do importador com chunks e Lazy Collections no Laravel.',
      details: '# Limitar memória RAM do container Docker a 512MB\ndocker update --memory=512m php-fpm\n\n// Refatoração com Lazy Collection:\nUser::query()->cursor()->chunk(1000, function ($users) {\n    // Memória estável em ~24MB independentemente do tamanho do lote\n});'
    }
  }
];

// Tech stack split
const techStack = {
  backend: ['PHP', 'Laravel', 'MySQL', 'APIs REST', 'Docker', 'Redis'],
  frontend: ['TypeScript', 'React', 'JavaScript', 'Tailwind CSS', 'Vite'],
  devops: ['Linux', 'VPS Oracle', 'Git & GitHub', 'n8n Automações', 'Nginx'],
};

// Scheduler Simulation Data
const daysList = [
  { name: 'Terça-feira', date: '26 Mai', slots: '3 horários' },
  { name: 'Quarta-feira', date: '27 Mai', slots: '4 horários' },
  { name: 'Quinta-feira', date: '28 Mai', slots: '2 horários' }
];

const timesListByDay: Record<string, string[]> = {
  '26 Mai': ['09:00', '14:30', '16:00'],
  '27 Mai': ['10:00', '11:30', '15:00', '17:30'],
  '28 Mai': ['09:30', '14:00']
};

export function App() {
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  // UI state
  const [expandedBugId, setExpandedBugId] = useState<string | null>(null);
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Real-time VPS Simulation
  const [vpsTelemetry, setVpsTelemetry] = useState({ cpu: 1.2, ram: 312, disk: 42, uptime: '99.98%' });
  
  // Scroll & Nav states
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');

  // Scheduler Modal Simulation States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(daysList[0].date);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [schedulerName, setSchedulerName] = useState('');
  const [schedulerEmail, setSchedulerEmail] = useState('');
  const [isScheduled, setIsScheduled] = useState(false);

  const { error, isLoading, profile, repositories } = useGithubPortfolio(portfolioConfig.githubUsername);

  // Sync theme to DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle scroll events for progress and active sections
  useEffect(() => {
    const handleScroll = () => {
      // 1. Progress Bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.pageYOffset / totalScroll) * 100;
        setScrollProgress(progress);
      }

      // 2. Active Section detection
      const sections = ['inicio', 'projetos', 'contato'];
      const scrollPosition = window.pageYOffset + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Telemetry updates
  useEffect(() => {
    const timer = setInterval(() => {
      setVpsTelemetry({
        cpu: parseFloat((Math.random() * 1.5 + 0.8).toFixed(1)),
        ram: Math.floor(310 + Math.random() * 8),
        disk: 42,
        uptime: '99.98%'
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Spotlight mouse effect on Bento cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  // Toggle bug case details on featured projects
  const toggleBugCase = (bugId: string) => {
    setExpandedBugId((prev) => (prev === bugId ? null : bugId));
  };

  // Toggle API Route Project expand
  const toggleProject = (id: number) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  // Switch Theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Handle simulated meeting submission
  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime || !schedulerName || !schedulerEmail) return;

    // Simulate scheduling completion
    setIsScheduled(true);

    // Open direct email option in background
    setTimeout(() => {
      const subject = encodeURIComponent(`Agendamento de Conversa - ${schedulerName}`);
      const body = encodeURIComponent(
        `Olá Murilo,\n\nSimulei o agendamento no seu portfolio para:\nDia: ${selectedDay}\nHorário: ${selectedTime}\n\nMeu e-mail: ${schedulerEmail}\n\nVamos conversar sobre um projeto/desafio técnico!`
      );
      window.location.href = `mailto:${portfolioConfig.email}?subject=${subject}&body=${body}`;
    }, 1500);
  };

  // Build dynamic mailto contact subject/body for direct footer button
  const contactHref = () => {
    const params = new URLSearchParams({
      subject: portfolioConfig.contactSubject,
      body: portfolioConfig.contactBody,
    });
    return `mailto:${portfolioConfig.email}?${params.toString()}`;
  };

  // Reset modal simulation
  const closeSchedulerModal = () => {
    setIsModalOpen(false);
    // Reset state after transition
    setTimeout(() => {
      setIsScheduled(false);
      setSelectedTime(null);
      setSchedulerName('');
      setSchedulerEmail('');
    }, 300);
  };

  // Filter repositories from GitHub API:
  // Excludes featured ones to avoid double listing, and applies search filter
  const filteredRepos = repositories.filter((repo) => {
    const isFeatured = featuredProjects.some(
      (fp) => repo.name.toLowerCase().includes(fp.id) || repo.name === 'PortfolioPessoal'
    );
    if (isFeatured && repo.name !== 'ia-agents-lab') return false; // Permite ia-agents-lab se retornar da API
    
    // Apply search filter
    if (searchQuery.trim() === '') return true;
    return (
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.language || '').toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <main className="portfolio-shell">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Header / Sticky Floating Topbar */}
      <header className="topbar">
        <div className="topbar__content">
          <div className="brand">
            <div className="brand__status-indicator" />
            <span>murilo_alves.sys</span>
          </div>
          
          <nav className="topnav" aria-label="Navegação principal">
            <a href="#inicio" className={activeSection === 'inicio' ? 'active' : ''}>_home</a>
            <a href="#projetos" className={activeSection === 'projetos' ? 'active' : ''}>_projetos_e_codigo</a>
            <a href="#contato" className={activeSection === 'contato' ? 'active' : ''}>_request_contato</a>
          </nav>

          <div className="topbar-actions">
            <button 
              type="button" 
              className="theme-toggle" 
              onClick={toggleTheme} 
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="social-links">
              <a href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={portfolioConfig.linkedinUrl} target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Bento Grid */}
      <section className="container bento-hero" id="inicio">
        <div className="bento-grid">
          
          {/* Box 1: Profile & Bio */}
          <article className="bento-card bento-card--profile" onMouseMove={handleMouseMove}>
            <div className="bento-card--profile__content">
              <span className="badge badge--accent">
                <Layers size={12} /> {portfolioConfig.eyebrow}
              </span>
              <h1>Olá, sou <span>{portfolioConfig.name}</span></h1>
              <p className="bento-card--profile__headline">{portfolioConfig.headline}</p>
              <p className="bento-card--profile__bio">{portfolioConfig.bio}</p>
            </div>
            
            <div className="bento-card--profile__actions">
              <button onClick={() => setIsModalOpen(true)} className="btn btn--primary">
                Requisitar Conexão
                <ArrowRight size={16} />
              </button>
              <a href={portfolioConfig.githubUrl} target="_blank" rel="noreferrer" className="btn btn--secondary">
                <Github size={16} /> GitHub
              </a>
            </div>
          </article>

          {/* Box 2: VPS Telemetry Monitor */}
          <article className="bento-card bento-card--vps" onMouseMove={handleMouseMove}>
            <div className="vps-monitor">
              <div className="vps-monitor__header">
                <span className="vps-monitor__title">
                  <Server size={12} />
                  VPS_ORACLE_MONITOR
                </span>
                <span className="vps-monitor__status">
                  <span className="vps-monitor__status-dot" />
                  ONLINE
                </span>
              </div>
              
              <div className="vps-monitor__console">
                <div className="vps-monitor__line">
                  <span className="vps-monitor__prompt">$</span>
                  <span className="vps-monitor__output">uname -a</span>
                </div>
                <div className="vps-monitor__line">
                  <span className="vps-monitor__output" style={{ color: 'var(--text-muted)' }}>
                    Linux oracle-vps 5.15.0-aarch64 #1 SMP Ubuntu
                  </span>
                </div>
                <div className="vps-monitor__line" style={{ marginTop: '4px' }}>
                  <span className="vps-monitor__prompt">$</span>
                  <span className="vps-monitor__output">uptime</span>
                </div>
                <div className="vps-monitor__line">
                  <span className="vps-monitor__output" style={{ color: 'var(--accent)' }}>
                    up 253 days, {vpsTelemetry.uptime} uptime SLA
                  </span>
                </div>
              </div>

              <div className="vps-monitor__telemetry">
                <div className="vps-monitor__stat-bar">
                  <span className="vps-monitor__stat-label">CPU:</span>
                  <div className="vps-monitor__stat-track">
                    <div className="vps-monitor__stat-fill" style={{ width: `${(vpsTelemetry.cpu / 5) * 100}%` }} />
                  </div>
                  <span className="vps-monitor__output" style={{ minWidth: '40px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                    {vpsTelemetry.cpu}%
                  </span>
                </div>

                <div className="vps-monitor__stat-bar">
                  <span className="vps-monitor__stat-label">RAM:</span>
                  <div className="vps-monitor__stat-track">
                    <div className="vps-monitor__stat-fill" style={{ width: `${(vpsTelemetry.ram / 1024) * 100}%` }} />
                  </div>
                  <span className="vps-monitor__output" style={{ minWidth: '40px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                    {vpsTelemetry.ram}MB
                  </span>
                </div>
              </div>

              <div className="vps-monitor__footer">
                <span>Nginx/1.24.0</span>
                <span>SSL Secured</span>
              </div>
            </div>
          </article>

          {/* Box 3: GitHub Card */}
          <article className="bento-card bento-card--github" onMouseMove={handleMouseMove}>
            <div className="git-card">
              <div className="git-card__avatar-frame">
                <img 
                  className="git-card__avatar" 
                  src={profile?.avatar_url || 'https://github.com/identicons/ItsMuriloa.png'} 
                  alt="Murilo Alves GitHub Avatar" 
                />
              </div>
              <div className="git-card__meta">
                <h3>{profile?.name || 'Murilo Alves'}</h3>
                <p>@{profile?.login || 'ItsMuriloa'}</p>
              </div>
              
              <div className="git-card__stats">
                <div className="git-card__stat-item">
                  <span className="git-card__stat-val">{profile?.public_repos ?? '12+'}</span>
                  <span className="git-card__stat-lbl">Repositórios</span>
                </div>
                <div className="git-card__stat-item">
                  <span className="git-card__stat-val">Online</span>
                  <span className="git-card__stat-lbl">Estado</span>
                </div>
              </div>
            </div>
          </article>

          {/* Box 4: Tech Stack Block */}
          <article className="bento-card bento-card--stack" onMouseMove={handleMouseMove}>
            <div className="bento-card--stack__content" style={{ width: '100%' }}>
              <div className="bento-card--stack__header">
                <h3>Tech Stack & Ecossistema</h3>
                <p>Ferramentas estruturadas com foco lógico e otimização.</p>
              </div>
              
              <div className="stack-groups">
                <div className="stack-group">
                  <span className="stack-group__title">Backend & SQL</span>
                  <div className="stack-group__list">
                    {techStack.backend.map((tech) => (
                      <span className="stack-pill" key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <span className="stack-group__title">Frontend</span>
                  <div className="stack-group__list">
                    {techStack.frontend.map((tech) => (
                      <span className="stack-pill" key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="stack-group">
                  <span className="stack-group__title">DevOps & Auto</span>
                  <div className="stack-group__list">
                    {techStack.devops.map((tech) => (
                      <span className="stack-pill" key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Featured Projects with Consolidated Bug Solving Section */}
      <section className="section container" id="projetos">
        <div className="section-header">
          <span className="section-header__subtitle">FEATURED_ENGINEERING</span>
          <h2>Projetos de Destaque & Engenharia</h2>
          <p>
            Uma seleção dos meus projetos principais focados no backend. Clique em cada card para expandir
            o acordeão de **Caso de Engenharia / Solução de Bug** e entender como resolvi problemas críticos reais de infra, concorrência e query SQL.
          </p>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project) => {
            const isBugExpanded = expandedBugId === project.bug.id;
            
            return (
              <article className="project-card" key={project.id}>
                {/* Main project information */}
                <div className="project-card__main">
                  <div className="project-card__info">
                    <div className="project-card__header">
                      <h3 className="project-card__title">{project.name}</h3>
                      <span className="badge badge--accent">Destaque</span>
                    </div>
                    
                    <p className="project-card__desc">{project.description}</p>
                    
                    <div className="project-card__tags">
                      {project.techs.map((tech) => (
                        <span className="stack-pill" key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-card__links">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn--secondary" style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
                        <Github size={14} /> Código Fonte
                      </a>
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn--secondary" style={{ padding: '8px 14px', fontSize: '0.8rem', border: '1px solid var(--accent-border)' }}>
                          <ExternalLink size={14} /> Ver Produção
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Technical Visual Representation */}
                  <div className="project-card__visual">
                    {project.visualIcon}
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)'
                    }}>
                      SYS_ID: {project.visualText}
                    </div>
                  </div>
                </div>

                {/* Bug solver integrated accordion */}
                <div className={`project-bug-solver ${isBugExpanded ? 'project-bug-solver--expanded' : ''}`}>
                  <button 
                    type="button" 
                    className="project-bug-solver__trigger"
                    onClick={() => toggleBugCase(project.bug.id)}
                    aria-expanded={isBugExpanded}
                  >
                    <span className="project-bug-solver__trigger-title">
                      <Terminal size={14} />
                      {isBugExpanded ? 'Fechar Relatório de Engenharia' : 'Abrir Caso de Engenharia / Solução de Bug'}
                    </span>
                    <ChevronDown size={16} className="project-bug-solver__chevron" />
                  </button>

                  <div className="project-bug-solver__content">
                    <div className="project-bug-solver__wrapper">
                      <div className="project-bug-steps">
                        {/* Step 1: Input / Problem */}
                        <div className="project-bug-step project-bug-step--problem">
                          <div className="project-bug-step__indicator">
                            <AlertCircle size={15} />
                          </div>
                          <div className="project-bug-step__body">
                            <span className="project-bug-step__label">INPUT // O PROBLEMA</span>
                            <p className="project-bug-step__text">{project.bug.problem}</p>
                          </div>
                        </div>

                        {/* Step 2: Processing / Diagnostic */}
                        <div className="project-bug-step project-bug-step--diagnostic">
                          <div className="project-bug-step__indicator">
                            <Activity size={15} />
                          </div>
                          <div className="project-bug-step__body">
                            <span className="project-bug-step__label">PROCESSING // DIAGNÓSTICO</span>
                            <p className="project-bug-step__text">{project.bug.diagnostic}</p>
                          </div>
                        </div>

                        {/* Step 3: Output / Solution */}
                        <div className="project-bug-step project-bug-step--solution">
                          <div className="project-bug-step__indicator">
                            <CheckCircle2 size={15} />
                          </div>
                          <div className="project-bug-step__body">
                            <span className="project-bug-step__label">OUTPUT // RESOLUÇÃO ESTÁVEL</span>
                            <p className="project-bug-step__text">{project.bug.solution}</p>
                            <pre className="project-bug-step__details">
                              {project.bug.details}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* REST API Router (Other Repositories from GitHub API) */}
        <div style={{ marginTop: '80px' }}>
          <div className="section-header" style={{ marginBottom: '30px' }}>
            <span className="section-header__subtitle">GITHUB_API_ROUTER</span>
            <h3>Outras Rotas & Projetos</h3>
            <p>
              Tabela de roteamento de repositórios públicos carregada dinamicamente via GitHub. 
              Digite abaixo para filtrar em tempo real.
            </p>
          </div>

          {/* Search box for dynamic table */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'var(--panel)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '10px 16px',
            maxWidth: '400px',
            marginBottom: '20px',
            gap: '10px',
            transition: 'var(--transition-smooth)'
          }}>
            <Search size={16} style={{ color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Buscar rota/projeto..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                width: '100%',
                outline: 'none',
                fontSize: '0.85rem'
              }}
            />
          </div>

          <div className="api-router">
            <div className="api-router__header">
              <div className="api-router__header-title">
                <Code2 size={14} />
                <span>HTTP_ROUTING_TABLE (ItsMuriloa)</span>
              </div>
              <div className="api-router__header-dot" />
            </div>

            {isLoading && (
              <div style={{ padding: '40px 24px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <span style={{ display: 'inline-block', animation: 'pulse-glow-amber 1.5s infinite' }}>
                  $ FETCHING /api/v1/projects ...
                </span>
              </div>
            )}

            {!isLoading && error && (
              <div style={{ padding: '40px 24px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--rose)' }}>
                <span>ERROR 500: {error}</span>
              </div>
            )}

            {!isLoading && !error && filteredRepos.length === 0 && (
              <div style={{ padding: '40px 24px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <span>RESPONSE 200: Nenhum repositório público encontrado correspondente.</span>
              </div>
            )}

            {!isLoading && !error && filteredRepos.length > 0 && (
              <div className="api-router__list">
                {filteredRepos.map((repo) => {
                  const isExpanded = expandedProjectId === repo.id;
                  const isLaravelOrPHP = repo.language?.toLowerCase() === 'php' || repo.name?.toLowerCase().includes('laravel');
                  const httpMethod = isLaravelOrPHP ? 'POST' : 'GET';
                  
                  return (
                    <article 
                      className={`api-route-item ${isExpanded ? 'api-route-item--expanded' : ''}`} 
                      key={repo.id}
                    >
                      {/* Trigger Table Row */}
                      <div className="api-route-row" onClick={() => toggleProject(repo.id)}>
                        <span className={`api-route-row__method ${httpMethod === 'POST' ? 'api-route-row__method--post' : 'api-route-row__method--get'}`}>
                          {httpMethod}
                        </span>
                        
                        <span className="api-route-row__path">
                          /api/v1/projects<span className="api-route-row__path-param">/{repo.name}</span>
                        </span>
                        
                        <span className="api-route-row__lang">
                          <span className={`badge ${repo.language ? 'badge--blue' : ''}`}>{repo.language || 'HTML'}</span>
                        </span>
                        
                        <span className="api-route-row__stars">
                          ★ {repo.stargazers_count}
                        </span>
  
                        <span className="api-route-row__chevron">
                          <ChevronDown size={16} />
                        </span>
                      </div>
  
                      {/* Collapsible details */}
                      <div className="api-route-details">
                        <div className="api-route-details__wrapper">
                          <p className="api-route-details__desc">
                            {repo.description || 'Repositório público exposto da API do GitHub. Código-fonte livre disponível para análise e auditoria.'}
                          </p>
                          
                          {repo.topics && repo.topics.length > 0 && (
                            <div className="api-route-details__topics">
                              {repo.topics.map((topic) => (
                                <span className="api-route-details__topic" key={topic}>
                                  #{topic}
                                </span>
                              ))}
                            </div>
                          )}
  
                          <div className="api-route-details__footer">
                            <div className="api-route-details__meta">
                              <span className="api-route-details__meta-item">
                                Last_Update: <strong>{new Date(repo.updated_at).toLocaleDateString('pt-BR')}</strong>
                              </span>
                              <span className="api-route-details__meta-item">
                                Forks: <strong>{repo.forks_count}</strong>
                              </span>
                              {repo.homepage && (
                                <span className="api-route-details__meta-item">
                                  Live_Demo: <strong><a href={repo.homepage} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'var(--accent)' }}>{repo.homepage}</a></strong>
                                </span>
                              )}
                            </div>
  
                            <div className="api-route-details__actions">
                              <a href={repo.html_url} target="_blank" rel="noreferrer" className="btn btn--secondary" style={{ padding: '6px 12px', fontSize: '0.78rem' }}>
                                Ver Repositório <ExternalLink size={12} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer Contact POST Request Simulation */}
      <footer className="section container footer-section" id="contato">
        <div className="footer-api-box">
          <div className="footer-api-box__header">
            <div className="footer-api-box__method-row">
              <span className="footer-api-box__method">POST</span>
              <span className="footer-api-box__endpoint">/api/v1/contact</span>
              <span className="footer-api-box__protocol">HTTP/1.1</span>
            </div>
            <Terminal size={14} style={{ color: 'var(--text-muted)' }} />
          </div>

          <div className="footer-api-box__payload">
            <span style={{ color: 'var(--text-muted)' }}>// Envie uma requisição direta para meu e-mail principal</span>
            <br />
            {'{'}
            <br />
            &nbsp;&nbsp;<span className="footer-api-box__json-key">"nome"</span>:&nbsp;
            <span className="footer-api-box__json-string">"Seu Nome"</span>,
            <br />
            &nbsp;&nbsp;<span className="footer-api-box__json-key">"email"</span>:&nbsp;
            <span className="footer-api-box__json-string">"seu@email.com"</span>,
            <br />
            &nbsp;&nbsp;<span className="footer-api-box__json-key">"mensagem"</span>:&nbsp;
            <span className="footer-api-box__json-string">"Gostaria de falar sobre um desafio técnico ou projeto web."</span>,
            <br />
            &nbsp;&nbsp;<span className="footer-api-box__json-key">"vps_host"</span>:&nbsp;
            <span className="footer-api-box__json-string">"oracle_cloud_vps"</span>,
            <br />
            &nbsp;&nbsp;<span className="footer-api-box__json-key">"status"</span>:&nbsp;
            <span className="footer-api-box__json-val">200</span>
            <br />
            {'}'}
          </div>

          <div className="footer-api-box__footer">
            <div className="footer-api-box__response-status">
              <span>Response:</span>
              <span className="footer-api-box__status-code">200 OK</span>
            </div>

            <div className="footer-api-box__actions">
              <a href={contactHref()} className="btn btn--primary">
                <Mail size={16} />
                Enviar E-mail Direto
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom__copy">
            <Code2 size={12} />
            <span>Designed & Engineered by Murilo Alves // © {new Date().getFullYear()}</span>
          </div>
          <span>Built with React + TS + Vanilla CSS</span>
        </div>
      </footer>

      {/* Floating Scheduler Trigger Button on the right edge */}
      <button 
        type="button" 
        className="scheduler-trigger"
        onClick={() => setIsModalOpen(true)}
      >
        <Calendar size={14} />
        BORA CONVERSAR?
      </button>

      {/* Premium Interactive Scheduler Modal */}
      <div className={`modal-overlay ${isModalOpen ? 'modal-overlay--open' : ''}`} onClick={closeSchedulerModal}>
        <div className="scheduler-modal" onClick={(e) => e.stopPropagation()}>
          <div className="scheduler-modal__header">
            <div className="scheduler-modal__title">
              <h3>Agendar Reunião ou Enviar Mensagem</h3>
              <p>Escolha um slot de simulação ou envie um e-mail direto rápido.</p>
            </div>
            <button type="button" className="scheduler-modal__close" onClick={closeSchedulerModal}>
              <X size={16} />
            </button>
          </div>

          <div className="scheduler-modal__body">
            {!isScheduled ? (
              <>
                {/* Simulated Calendar Day Cards */}
                <div className="scheduler-calendar">
                  <span className="scheduler-calendar__title">1. Escolha o Dia (Simulação)</span>
                  <div className="scheduler-days">
                    {daysList.map((day) => (
                      <div 
                        key={day.date}
                        className={`scheduler-day-card ${selectedDay === day.date ? 'scheduler-day-card--selected' : ''}`}
                        onClick={() => {
                          setSelectedDay(day.date);
                          setSelectedTime(null); // Reset time when day changes
                        }}
                      >
                        <span className="scheduler-day-card__name">{day.name}</span>
                        <span className="scheduler-day-card__date">{day.date}</span>
                        <span className="scheduler-day-card__slots">{day.slots}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Times Slots */}
                <div className="scheduler-calendar">
                  <span className="scheduler-calendar__title">2. Escolha o Horário</span>
                  <div className="scheduler-times">
                    {timesListByDay[selectedDay].map((time) => (
                      <div 
                        key={time}
                        className={`scheduler-time-slot ${selectedTime === time ? 'scheduler-time-slot--selected' : ''}`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form to submit */}
                <form className="scheduler-form" onSubmit={handleScheduleSubmit}>
                  <div className="scheduler-form__group">
                    <label className="scheduler-form__label" htmlFor="sched-name">Seu Nome</label>
                    <input 
                      type="text" 
                      id="sched-name"
                      className="scheduler-form__input" 
                      placeholder="Ex: Ana Souza" 
                      required
                      value={schedulerName}
                      onChange={(e) => setSchedulerName(e.target.value)}
                    />
                  </div>
                  <div className="scheduler-form__group">
                    <label className="scheduler-form__label" htmlFor="sched-email">Seu E-mail</label>
                    <input 
                      type="email" 
                      id="sched-email"
                      className="scheduler-form__input" 
                      placeholder="Ex: ana@empresa.com" 
                      required
                      value={schedulerEmail}
                      onChange={(e) => setSchedulerEmail(e.target.value)}
                    />
                  </div>

                  <div className="scheduler-modal__footer" style={{ border: 'none', padding: '10px 0 0', background: 'none' }}>
                    <a 
                      href={`mailto:${portfolioConfig.email}?subject=Contato%20Portfólio&body=Olá%20Murilo,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.`}
                      className="btn btn--secondary" 
                      style={{ fontSize: '0.8rem' }}
                    >
                      Apenas e-mail direto
                    </a>
                    <button 
                      type="submit" 
                      className="btn btn--primary"
                      disabled={!selectedTime}
                      style={{ 
                        opacity: selectedTime ? 1 : 0.6, 
                        cursor: selectedTime ? 'pointer' : 'not-allowed',
                        fontSize: '0.8rem'
                      }}
                    >
                      Confirmar Slot & Enviar
                    </button>
                  </div>
                </form>
              </>
            ) : (
              /* Success confirmation panel */
              <div className="scheduler-success">
                <div className="scheduler-success__icon">
                  <CheckCircle2 size={32} />
                </div>
                <h4>Agendamento Solicitado!</h4>
                <p>
                  Abrindo seu aplicativo de e-mail local para enviar o convite de <strong>{selectedDay} às {selectedTime}</strong> para <strong>{portfolioConfig.email}</strong>.
                </p>
                <button 
                  type="button" 
                  className="btn btn--secondary" 
                  style={{ marginTop: '10px' }}
                  onClick={closeSchedulerModal}
                >
                  Fechar Janela
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
