<h1 align="center">Async Studio - Site Oficial</h1>

<p align="center">
  <strong>O portal institucional definitivo e bilingue da Async Studio. Uma vitrine digital premium voltada para a captação de clientes, demonstração de engenharia de software e apresentação de soluções digitais de alta performance.</strong><br />
  Internacionalização Dinâmica (PT/EN) · Next.js App Router · Design System em Glassmorphism · SEO Otimizado · UI Componentizada
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.3-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind--CSS-3.4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/PostCSS-8.5-DD3A0A?style=flat-square&logo=postcss&logoColor=white" alt="PostCSS" />
  <img src="https://img.shields.io/badge/license-Propriet%C3%A1ria-ef4444?style=flat-square" alt="License" />
</p>

---

## 📋 Índice

- [💡 Sobre o Produto](#-sobre-o-produto)
- [✨ Módulos e Funcionalidades](#-módulos-e-funcionalidades)
- [🛠 Tech Stack](#-tech-stack)
- [🏗 Arquitetura do Sistema](#-arquitetura-do-sistema)
- [📌 Pré-requisitos](#-pré-requisitos)
- [🚀 Instalação e Setup Local](#-instalação-e-setup-local)
- [🔑 Variáveis de Ambiente](#-variáveis-de-ambiente)
- [📜 Scripts Disponíveis](#-scripts-disponíveis)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [💎 Modelos de Engajamento & Soluções](#-modelos-de-engajamento--soluções)
- [🗺 Roadmap Comercial](#-roadmap-comercial)
- [📄 Licença e Termos de Uso](#-licença-e-termos-de-uso)

---

## 💡 Sobre o Produto

O **site oficial da Async Studio** é uma plataforma web institucional de alta fidelidade visual e performance técnica excelente, projetada para estabelecer a autoridade digital da marca no mercado de desenvolvimento de software sob demanda. 

Desenvolvido para atender clientes tanto no Brasil quanto no exterior, o site se destaca por seu suporte nativo e transparente à bilinguidade (Português e Inglês) e por uma experiência de usuário (UX) extremamente refinada, utilizando conceitos modernos de design como o **glassmorphism**, micro-interações responsivas e um esquema de cores futurista (Ice & Async Theme).

Mais do que apenas um site institucional, o portal funciona como uma poderosa máquina de captação de leads (Landing Page de conversão direta via WhatsApp API) e como um portfólio vivo que apresenta os serviços especializados do estúdio e demonstra sua capacidade técnica de engenharia através do showcase do **BizManager** — o produto SaaS autoral desenvolvido pelos founders.

---

## ✨ Módulos e Funcionalidades

### 🌐 Motor de Internacionalização Dinâmica (Bilingue PT/EN)
*   **Dicionário de Tradução Estruturado:** Sistema nativo implementado em TypeScript (`pt.ts`, `en.ts`), garantindo consistência estática e tipagem estrita de todos os textos da aplicação.
*   **Alternância de Idioma Instantânea:** Componente `LanguageSwitcher` integrado no cabeçalho (Header) que gerencia rotas localizadas (`/` para Português e `/en` para Inglês) mantendo o estado fluido e a navegação SPA intacta.
*   **Injeção de Metadados Localizados:** SEO dinâmico por idioma, alterando tags `<html lang="...">` e dados OpenGraph de forma automatizada para melhor indexação internacional de motores de busca.

### 🎨 Design System Premium & Efeitos Glassmorphic
*   **Branding & Paleta Futurista:** Configuração de cores e variáveis CSS estendidas no Tailwind (`async.ink`, `async.graphite`, `async.lavender`, `async.frost`, `async.cyan`) que proporcionam uma identidade moderna, contrastando tons escuros profundos e brilhos neon azulados.
*   **Fidelidade Visual Elevada:** Utilização de sombras projetadas customizadas (`shadow-frost`, `shadow-glass`), gradientes de fundo complexos (`frost-flow`) e bordas translúcidas simulando vidro jateado nos componentes interativos (`GlassCard`).
*   **Responsividade Fluida:** Adaptação completa de layout de grid e navegação, suportando desde telas de smartphones ultra-compactas até monitores widescreen de alta resolução.

### 📦 Biblioteca Interna de Componentes Reutilizáveis (Atomic UI)
*   `PageShell`: O container global de layout que unifica a barra de navegação responsiva (Header) e o rodapé institucional (Footer).
*   `GlassCard`: Cartão translúcido com efeitos hover de alta qualidade visual, usado para apresentar dores de clientes, diferenciais e serviços.
*   `ServiceCard`: Componente detalhado para apresentar o escopo, público-alvo e problema resolvido de cada serviço com botões de chamada rápida para ação (CTA).
*   `FounderCard`: Cartão profissional com foto de perfil e links de credibilidade dos co-founders (Caetano & Murilo).
*   `ProjectPreview`: Vitrine interativa de projetos em destaque (ex.: BizManager) com imagens reais e fluxos.
*   `ProcessStep`: Linha do tempo visual orientada a números para ilustrar as etapas de desenvolvimento ("Como tiramos sua ideia do papel").
*   `CTAWhatsApp`: Botão global padronizado com mensageria customizada para captar leads e canalizar contatos comerciais diretamente ao WhatsApp.

### 🔍 Engenharia de SEO & Performance
*   **Carregamento de Fontes Otimizado:** Integração com Google Fonts (Inter) sem causar oscilações no layout inicial (Zero layout shifts).
*   **Arquivos de Rastreamento:** Geração nativa e estática de favicon, manifest, robots.txt, sitemap e imagem social para compartilhamento (Preview no WhatsApp/LinkedIn).
*   **Carregamento Assíncrono:** Utilização de otimizadores de imagens do Next.js e Lazy Loading de componentes das rotas secundárias.

---

## 🛠 Tech Stack

### Frontend (Framework & Engine)

| Tecnologia | Versão | Papel no Sistema |
| :--- | :---: | :--- |
| **Next.js** | 15.3.x | Framework corporativo React com App Router, oferecendo Server-Side Rendering (SSR) e Static Site Generation (SSG). |
| **React** | 18.3.x | Biblioteca principal para renderização declarativa e manipulação de estado interativo. |
| **TypeScript** | 5.8.x | Linguagem base para desenvolvimento robusto, tipagem estrita de traduções e validação estática de propriedades de UI. |

### Estilização & UI/UX

| Tecnologia | Versão | Papel no Sistema |
| :--- | :---: | :--- |
| **Tailwind CSS** | 3.4.x | Framework CSS utilitário para construção rápida de layouts altamente responsivos e adaptáveis. |
| **PostCSS** | 8.5.x | Processador CSS para injeção de plugins, autoprefixer de navegadores antigos e suporte a imports customizados. |
| **Autoprefixer** | 10.4.x | Injeção de prefixos de navegadores de forma automatizada para manter o layout 100% fiel em todos os dispositivos. |

### Infraestrutura & Deploy

| Tecnologia | Papel no Sistema |
| :--- | :--- |
| **Vercel / Cloudflare** | Infraestrutura serverless global para distribuição rápida do conteúdo gerado com CDN de borda integrada. |
| **WhatsApp Business API** | Roteador dinâmico de conversação direta para fechamento de negócios. |

---

## 🏗 Arquitetura do Sistema

O portal utiliza o Next.js App Router para roteamento híbrido de alta performance. As traduções são centralizadas estaticamente, evitando overheads de banco de dados ou APIs de terceiros.

```text
┌─────────────────────────────────────────────────────────────┐
│                           Client                            │
│                 Browser (SPA Hydration / React)             │
│                      https://asyncstudio.dev                │
└──────────────────────────────┬──────────────────────────────┘
                               │
                      Request HTTP (GET /)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                       Next.js App Router                    │
│                                                             │
│  ┌───────────────────────┐       ┌──────────────────────┐   │
│  │   pt/ (Português)     │       │    en/ (English)     │   │
│  │    Roteamento Pad      │       │     Subpath /en      │   │
│  └───────────┬───────────┘       └──────────┬───────────┘   │
│              │                              │               │
│              └───────────────┬──────────────┘               │
│                              ▼                              │
│                   PageShell (Header & Footer)               │
│                              ▼                              │
│                     Dictionary Resolver                     │
│               (getContent("pt") | getContent("en"))          │
│                              ▼                              │
└──────────────────────────────┼──────────────────────────────┘
                               │
               Mapeamento Dinâmico de Módulos
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    UI Components (Atomic)                   │
│                                                             │
│   ┌──────────────┐   ┌──────────────┐   ┌───────────────┐   │
│   │  GlassCard   │   │ ServiceCard  │   │  FounderCard  │   │
│   └──────────────┘   └──────────────┘   └───────────────┘   │
│   ┌──────────────┐   ┌──────────────┐   ┌───────────────┐   │
│   │ProcessStep   │   │ProjectPreview│   │  CTAWhatsApp  │   │
│   └──────────────┘   └──────────────┘   └───────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 📌 Pré-requisitos

Para executar o projeto de forma local em ambiente de desenvolvimento ou gerar a build de produção, garanta que sua máquina atende aos seguintes requisitos mínimos:

*   **Node.js** v18 ou superior (Recomendado LTS v20+)
*   **npm** v9 ou superior (ou gerenciador alternativo pnpm / yarn)
*   Navegador moderno com suporte a flexbox, CSS variables e grid.

---

## 🚀 Instalação e Setup Local

### 1. Clonar o Repositório
```bash
git clone https://github.com/AsyncStudio-Dev/AsyncStudio-site.git
cd AsyncStudio-site
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Configurar as Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto contendo as credenciais de contato reais do estúdio:
```bash
cp .env.example .env
```

### 4. Inicializar o Servidor de Desenvolvimento
Inicie a aplicação localmente utilizando o dev server do Next.js:
```bash
npm run dev
```

Acesse o portal local em: `http://localhost:3000` (ou a porta informada pelo terminal).

### 5. Compilar para Produção (Build)
Para testar a performance final e validar a indexação SEO:
```bash
npm run build
npm run start
```

---

## 🔑 Variáveis de Ambiente

As configurações dinâmicas de contatos e domínios são configuradas através do arquivo `.env` local ou nas configurações da plataforma de hosting (Vercel):

| Variável | Obrigatória | Descrição | Exemplo |
| :--- | :---: | :--- | :--- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Sim | Número do WhatsApp comercial para CTAs de alta conversão (formato DDI + DDD + Número) | `5511999999999` |
| `NEXT_PUBLIC_SITE_DOMAIN` | Sim | Domínio de hospedagem oficial para geração automática de metadados SEO absolutos | `https://asyncstudio.dev` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Não | Endereço de e-mail institucional oficial exibido no rodapé e canal alternativo | `asyncstudio@outlook.com` |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Não | Link de direcionamento para o perfil oficial no Instagram | `https://instagram.com/asyncstudiodev` |

---

## 📜 Scripts Disponíveis

Os scripts configurados no arquivo `package.json` gerenciam o ciclo de vida do projeto:

| Comando | Função |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local de desenvolvimento com Hot Module Replacement (HMR). |
| `npm run build` | Compila o projeto otimizando scripts, minificando CSS e gerando páginas estáticas e SSR ultrarrápidas na pasta `.next`. |
| `npm run start` | Inicia o servidor Next.js em modo de produção (requer compilação prévia). |

---

## 📁 Estrutura do Projeto

Abaixo é detalhada a estrutura interna de arquivos, organizada sob a pasta `/src` seguindo boas práticas de modularização:

```
AsyncStudio-site/
├── .env.example              # Exemplo de configuração de variáveis de ambiente
├── next.config.ts            # Arquivo de configurações do framework Next.js
├── tailwind.config.js        # Configuração do compilador Tailwind CSS
├── tsconfig.json             # Definições do compilador TypeScript
├── public/                   # Favicons, imagens estáticas globais e manifest
│   ├── favicon.ico
│   └── site.webmanifest
│
└── src/
    ├── app/                  # Roteamento baseado em pastas (App Router)
    │   ├── layout.tsx        # Layout principal global com fontes do Google Font
    │   ├── not-found.tsx     # Página de erro 404 customizada
    │   ├── page.tsx          # Página Home oficial (Português)
    │   │
    │   ├── en/               # Subpath localizado para Inglês
    │   │   ├── page.tsx
    │   │   └── ...           # Demais páginas localizadas
    │   │
    │   ├── contato/          # Rota para página de contato
    │   ├── projetos/         # Rota de vitrine de soluções (BizManager Showcase)
    │   ├── servicos/         # Rota detalhada de serviços de engenharia
    │   └── sobre/            # Rota com história institucional e fundadores
    │
    ├── assets/               # Imagens locais importadas via código
    ├── components/           # Componentes atômicos de UI e layout
    │   ├── layout/           # Componentes de estrutura (Header, Footer, PageShell)
    │   └── ui/               # Componentes visuais básicos (GlassCard, Button, etc.)
    │
    ├── content/              # Dicionários de internacionalização (PT/EN)
    │   ├── pt.ts             # Todos os textos traduzidos em Português
    │   ├── en.ts             # Todos os textos traduzidos em Inglês
    │   ├── types.ts          # Definições e contratos estritos do dicionário
    │   └── index.ts          # Utilitários de seleção de idioma (getContent)
    │
    ├── lib/                  # Helpers e utilitários internos (SEO Meta Generator)
    ├── routes/               # Mapeador de caminhos de navegação localizados
    ├── styles/               # Folhas de estilo globais (globals.css)
    └── views/                # Telas completas que recebem dados do App Router
        ├── Home.tsx          # View modularizada da Home
        ├── About.tsx         # View modularizada da página Sobre
        ├── Contact.tsx       # View modularizada da página Contato
        ├── Projects.tsx      # View modularizada da página Projetos
        └── Services.tsx      # View modularizada da página Serviços
```

---

## 💎 Modelos de Engajamento & Soluções

A Async Studio desenvolve soluções robustas para resolver os problemas reais das empresas, organizadas em 4 grandes categorias comerciais:

| Solução | Público-alvo | Gargalo Resolvido | Entrega Esperada |
| :--- | :--- | :--- | :--- |
| **Sites Institucionais** | Empresas consolidadas | Falta de credibilidade e presença profissional na web | Site responsivo premium, rápido e otimizado para atração comercial. |
| **Landing Pages** | Campanhas de tráfego | Páginas de destino poluídas e de baixa conversão | Página com copy persuasiva de alta clareza, design premium e CTA com taxa de conversão excelente. |
| **Sistemas sob Medida** | Operações complexas | Planilhas confusas e processos manuais demorados | ERP, CRM ou sistema de controle sob medida desenhado exatamente para a regra de negócio. |
| **SaaS / MVP** | Startups inovadoras | Ideias paradas sem validação de mercado | Primeira versão funcional com escopo otimizado, base técnica limpa e escalável para captação de investimento. |

---

## 🗺 Roadmap Comercial

O planejamento estratégico da Async Studio foca em evolução constante de ferramentas internas e captação de novos clientes.

### 🌟 Fase 1: Presença & Consolidação (Concluída ✅)
- [x] Lançamento oficial do portal bilingue integrado com dicionários TypeScript.
- [x] Otimização completa do Core Web Vitals (Performance, SEO e Acessibilidade).
- [x] Integração ágil de contato direto via WhatsApp API com mensageria customizada.
- [x] Publicação da documentação comercial do **BizManager** como showcase técnico.
- [x] Desenvolvimento de layout responsivo fluido baseado em glassmorphism.

### 🚀 Fase 2: Atração & Ecossistema (Em Progresso ⏳)
- [ ] Blog oficial integrado ao Next.js para marketing de conteúdo e SEO orgânico de TI.
- [ ] Formulário de diagnóstico de orçamento interativo automatizado no portal.
- [ ] Mapeamento e publicação de novos casos de sucesso corporativos no portfólio.
- [ ] Versão em espanhol (trilinguismo) para captação em toda a América Latina.

### 🔮 Fase 3: Escala & IA (Futuro 🗺)
- [ ] Calculadora automatizada inteligente de precificação estimada de projetos.
- [ ] Painel interno para clientes acompanharem etapas e tarefas de desenvolvimento ativa.
- [ ] Agendamento de reuniões comerciais integrado nativamente com Calendly.
- [ ] Chatbot proprietário com Inteligência Artificial para pré-atendimento e triagem de escopo de sistemas.

---

## 📄 Licença e Termos de Uso

Este projeto é um **software proprietário**. Todos os direitos autorais e propriedade intelectual pertencem exclusivamente à corporação **Async Studio** (fundada por Caetano e Murilo).

Qualquer cópia não autorizada do design visual, reprodução não aprovada da engenharia de software ou modificação imprópria com fins comerciais desvinculados do portfólio pessoal constitui infração direta às regulamentações de direitos autorais [Lei nº 9.609/1998 (Software)](https://www.planalto.gov.br/ccivil_03/leis/l9609.htm) e [Lei nº 9.610/1998 (Direitos Autorais)](https://www.planalto.gov.br/ccivil_03/leis/l9610.htm).

---

<p align="center">
  Desenvolvido com sofisticação técnica pela equipe da <a href="https://github.com/AsyncStudio-Dev"><strong>Async Studio Dev Team</strong></a>
</p>
