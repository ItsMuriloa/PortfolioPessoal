
<h1 align="center">Meu ERP</h1>

<p align="center">
  <strong>O ERP definitivo para alta performance, controle operacional e gestão estratégica de escritórios de advocacia de grande porte.</strong><br />
  Fluxo de Iniciais · CRM Previdenciário · Gestão de Prazos · Kanban Integrado · RH & Benefícios
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Laravel-13.x-FF2D20?style=flat-square&logo=laravel&logoColor=white" alt="Laravel" />
  <img src="https://img.shields.io/badge/PHP-8.3%20%7C%208.4-777BB4?style=flat-square&logo=php&logoColor=white" alt="PHP" />
  <img src="https://img.shields.io/badge/MySQL-MariaDB-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/Nginx-Proxy%20SPA-009639?style=flat-square&logo=nginx&logoColor=white" alt="Nginx" />
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
- [📁 Estrutura do Monorepo](#-estrutura-do-monorepo)
- [🔌 API Endpoints](#-api-endpoints)
- [🗃 Modelo de Dados](#-modelo-de-dados)
- [💎 Planos e Pricing](#-planos-e-pricing)
- [🗺 Roadmap Comercial](#-roadmap-comercial)
- [📄 Licença e Termos de Uso](#-licença-e-termos-de-uso)

---

## 💡 Sobre o Produto

O **Meu ERP** é uma plataforma corporativa SaaS/Enterprise de alta performance projetada sob medida para resolver os gargalos de comunicação, controle de prazos e operações logísticas de grandes escritórios de advocacia e departamentos jurídicos no Brasil. 

Nascido da necessidade de superar a complexidade e a rigidez dos ERPs jurídicos genéricos, o sistema integra em um único ecossistema fluido: **gestão inteligente de vales e benefícios (RH)**, **triagem operacional de petições iniciais (Trabalhista)**, **onboarding clínico previdenciário estruturado (Previdenciário)**, **controle dinâmico de prazos processuais** e um **sistema Kanban de suporte e chamados internos**. 

Com interfaces dinâmicas, limpas e rápidas, o Meu ERP elimina riscos operacionais, automatiza a distribuição de demandas e provê um controle em tempo real para a diretoria, elevando a rentabilidade do seu negócio jurídico.

---

## ✨ Módulos e Funcionalidades

### 🔐 Autenticação e Personalização de Home por Setor
*   **Perfis de Acesso Inteligentes:** O sistema identifica o cargo e o setor do funcionário e personaliza dinamicamente a barra de navegação (Sidebar) e a página inicial (Home).
*   **Páginas Iniciais Customizadas:** 
    *   **Vendas:** Métricas de captação de clientes e leads.
    *   **Jurídico Trabalhista:** Resumo de produções, prazos urgentes e fichas pendentes.
    *   **Jurídico Previdenciário:** Status das entrevistas de onboarding de benefícios.
    *   **RH:** Aniversariantes do dia, controle de faturamento de vales e novos colaboradores.
    *   **Diretoria / Admin:** Painel executivo consolidado com KPIs macro.
*   **Autenticação Robusta:** Gestão segura por Sessão e Cookie nativo do Laravel (`auth:portal`), protegendo endpoints sensíveis contra acesso direto não autenticado.

### ⚖️ Módulo Jurídico Trabalhista (Fluxo de Iniciais Trabalhistas)
*   **Gestão de Produção de Petições:** Painel operacional dinâmico (`/fluxo-iniciais-trabalhistas`) para acompanhar em tempo real quem está produzindo cada inicial, o status de ajuizamento e as flags de desistência.
*   **Triagem Operacional por "Fichas" Coloridas:**
    *   🔵 `PENDENTE`: Petição na fila de espera, sem produtor atribuído.
    *   🟡 `EM ANDAMENTO`: Produtor assinalado à inicial (limitação inteligente de uma petição ativa em produção por usuário).
    *   🔴 `URGENTE`: Destaque visual imediato para demandas prioritárias.
    *   🟢 `CONCLUÍDO`: Finalizado no fluxo produtivo (gera timestamp `inicial_data_conclusao`).
    *   🟢🔵 `AJUIZADO`: Ação devidamente ajuizada com número de processo atribuído.
*   **Segurança Multinível:** Apenas usuários com cargo **Administrador** (`ehAdm`) podem reabrir, editar observações ou reclassificar fichas na aba de concluidas.
*   **Exportação Inteligente:** Geração automatizada de relatórios em CSV/Excel das petições filtradas com um clique.

### 📋 Módulo de Gestão de Prazos Processuais
*   **Controle Contra Perda de Prazos:** Painel para listagem, consulta, criação e edição de prazos judiciais conectados a processos reais.
*   **Rastreabilidade:** Logs detalhados de histórico de movimentação do processo, recursos interpostos e auditoria (`tbl_log_prazo`).
*   **Associação Dinâmica:** Vinculação inteligente entre o prazo, a reclamada (empresa ré) e o colaborador responsável pela elaboração.

### 💼 Módulo Jurídico Previdenciário (Entrevistas e Benefícios)
*   **Fluxo de Onboarding de Cliente:** Abertura fluida de modal de entrevista previdenciária imediata após a criação de um cliente na plataforma.
*   **Ficha Clínica Previdenciária Multisseções:** Formulário detalhado de alta fidelidade com campos mapeados semanticamente em 8 abas de benefícios estruturadas:
    *   🤰 *Salário Maternidade:* Prazos, nascimentos, dados da mãe e do bebê.
    *   💀 *Pensão por Morte:* Certidões de óbito, qualidade de segurado do de cujus e dependentes.
    *   🔒 *Auxílio Reclusão:* Dados do segurado recluso e período de carência.
    *   ♿ *LOAS Deficiência:* Deficiências físicas/mentais e laudos médicos.
    *   👵 *LOAS Idoso:* Critérios socioeconômicos e comprovação de idade.
    *   🩺 *Auxílio Doença / Acidente:* Doenças profissionais, nexo causal e sequelas.
    *   🌾 *Aposentadoria:* Vínculos de emprego, regimes especiais, períodos nocivos e atividade rural.
*   **Gravação Transacionada:** Processamento no backend com rollback automático em caso de falhas, garantindo a integridade dos dados no banco principal.

### 🎫 Módulo de Suporte & Chamados (Kanban da TI)
*   **Abertura de Chamados Simplificada:** Modal global com preenchimento de assunto (observação), categoria (Ajuste, Bugs, Melhorias, Outros), prioridades, descrição do problema e URL da tela onde ocorreu o erro.
*   **Kanban Administrativo Interativo:** Painel de cartões arrastáveis (Drag & Drop) organizado por colunas de status operacionais (Aberto, Sob Análise, Em Andamento, Aguardando Retorno, Fechado).
*   **Regra de Responsabilidade Estrita:**
    *   Atribuição de até **4 profissionais de TI** simultâneos por chamado (`tbl_chamado_responsaveis`).
    *   Somente os técnicos de TI formalmente atribuídos ao chamado podem responder ao usuário, interagir no chat interno ou arrastar o card de status.
*   **Histórico de Conversa & Logs:** Linha do tempo integrada contendo a conversa entre o solicitante e o suporte, anexo de capturas de tela e logs completos de auditoria de alterações do chamado.

### 👥 Módulo de Recursos Humanos (RH) e Benefícios
*   **Gestão Geral:** Cadastro e controle de filiais, setores e salários de colaboradores.
*   **Impressão Inteligente de VT e VR:** Módulo otimizado para cálculo e impressão em lote dos benefícios de Vale Transporte e Vale Refeição dos funcionários, permitindo filtros por filial ou setor para simplificar a logística mensal.

---

## 🛠 Tech Stack

### Frontend (SPA)

| Tecnologia | Versão | Papel no Sistema |
| :--- | :---: | :--- |
| **React** | 19.2 | Biblioteca principal para renderização de componentes e UIs interativas. |
| **Vite** | 8.0 | Ferramenta de build, HMR e servidor de desenvolvimento ultra-rápido. |
| **React Router** | 7.15 | Roteamento dinâmico SPA com suporte a Lazy Loading de páginas administrativas. |
| **Lucide React** | 1.14 | Pacote de ícones SVG vetorizados e responsivos. |
| **Quill** | 2.0 | Editor de texto rico (WYSIWYG) utilizado no módulo de chat de chamados da TI. |
| **Vanilla CSS** | — | Estilização personalizada, com transições suaves e layout premium adaptativo. |

### Backend (REST API)

| Tecnologia | Versão | Papel no Sistema |
| :--- | :---: | :--- |
| **Laravel Framework** | 13.x | Framework PHP principal, provendo rotas REST, Eloquent ORM e Services. |
| **PHP** | 8.3 / 8.4 | Interpretador backend moderno, otimizado para concorrência e tipagem forte. |
| **Laravel Pail & Tinker**| — | Ferramental CLI avançado de depuração de requisições em tempo real e testes rápidos. |
| **FormatadorDataBr** | Custom | Helper nativo para sanitização e conversão bidirecional de datas BR -> MySQL ISO. |

### Banco de Dados & Servidor

| Tecnologia | Papel no Sistema |
| :--- | :--- |
| **MySQL / MariaDB / Percona** | Banco de dados relacional robusto estruturado com relacionamentos e transações estritas. |
| **Nginx (Proxy SPA)** | Servidor de borda que distribui os estáticos otimizados do React e repassa chamadas `/api` ao PHP-FPM. |
| **FastCGI (FPM)** | Processador PHP escalável rodando em porta local dedicada (`127.0.0.1:20008` em produção). |

---

## 🏗 Arquitetura do Sistema

O Meu ERP é construído em cima de uma arquitetura monorepo limpa, dividida entre FrontEnd (React SPA) e BackEnd (Laravel API), comunicando-se via requisições assíncronas JSON.

```text
┌─────────────────────────────────────────────────────────────┐
│                            Cliente                          │
│                      React 19.2 SPA (Vite)                  │
│                https://portal2.com              │
└──────────────────────────────┬──────────────────────────────┘
                               │
               HTTPS / Proxy Reverso (/api & /storage)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                       Nginx Web Server                      │
│                  portal2.com                    │
│                                                             │
│   ┌────────────────────┐   ┌────────────────────────────┐   │
│   │    React Build     │   │     Laravel FastCGI        │   │
│   │   (dist/static)    │   │  (127.0.0.1:20008 / FPM)   │   │
│   └────────────────────┘   └─────────────┬──────────────┘   │
└──────────────────────────────────────────┼──────────────────┘
                                           ▼
┌─────────────────────────────────────────────────────────────┐
│                      Servidor API Laravel                   │
│                     Laravel 13 REST Backend                 │
│                                                             │
│   ┌───────────┐  ┌──────────────┐  ┌────────────────────┐   │
│   │  Routes   │→│ Middlewares  │→│    Controllers     │   │
│   │ (routes/) │  │(auth:portal) │  │(RH/Prev/Trab/TI...)│   │
│   └───────────┘  └──────────────┘  └─────────────┬──────┘   │
│                                                  │          │
│                                            ┌─────▼──────┐   │
│                                            │Eloquent ORM│   │
│                                            └─────┬──────┘   │
└──────────────────────────────────────────────────┼──────────┘
                                                   ▼
┌─────────────────────────────────────────────────────────────┐
│                 MySQL / MariaDB / Percona                   │
│                    Banco de Dados Principal                 │
│         (tbl_funcionario, tbl_inicial, tbl_chamado...)      │
└─────────────────────────────────────────────────────────────┘
```

---

## 📌 Pré-requisitos

Para rodar o sistema localmente ou realizar deploy em produção, garanta que sua máquina possua instalado:

*   **PHP** v8.3 ou superior (Recomendado PHP v8.4)
*   **Composer** v2.6 ou superior
*   **Node.js** v18 ou superior
*   **npm** v9 ou superior
*   **MySQL / MariaDB / Percona** v8.0 ou superior rodando localmente (porta padrão `3306`)

---

## 🚀 Instalação e Setup Local

### 1. Clonar o Repositório
```bash
git clone https://github.com/murilocosta0/MeuERP.git
cd MeuERP
```

### 2. Configurar o Backend (Laravel)
```bash
cd BackEnd
composer install

# Criar e configurar as variáveis de ambiente
cp .env.example .env
php artisan key:generate
```

### 3. Configurar o Banco de Dados Local
Se você utiliza o XAMPP no Windows, o projeto possui um script PowerShell automatizado para criar o banco de dados `MeuERP_local` e importar as estruturas de teste:
```powershell
# Executar a partir da pasta raiz do projeto
powershell -ExecutionPolicy Bypass -File "!documentation/local-testing/setup-local-xampp.ps1"
```

Alternativamente, execute manualmente a importação das tabelas de suporte do previdenciário:
```bash
# Executando no seu cliente MySQL local
mysql -u root -p MeuERP_local < BackEnd/scripts/sql_prev.sql
```

E rode as migrações adicionais de chamados e responsáveis do Laravel:
```bash
php artisan migrate
```

### 4. Popular Dados de Teste Previdenciários
Para validar as entrevistas previdenciárias imediatamente, rode o seed pré-configurado:
```bash
php scripts/criar_testes_previdenciarios.php
```

### 5. Configurar o Frontend (React)
```bash
cd ../FrontEnd
npm install
```

### 6. Inicializar os Servidores de Desenvolvimento
Para rodar ambas as camadas simultaneamente (graças ao script de concorrência configurado no composer do Backend):
```bash
cd ../BackEnd
composer run dev
```

*   **FrontEnd Vite:** `http://localhost:5173` (Com proxy reverso configurado para repassar `/api` e `/storage` para a porta 8080)
*   **BackEnd API:** `http://localhost:8080` (Acesso direto a rotas)

---

## 🔑 Variáveis de Ambiente

### Backend (`BackEnd/.env`)

| Variável | Obrigatória | Descrição | Exemplo |
| :--- | :---: | :--- | :--- |
| `APP_ENV` | Sim | Ambiente do sistema | `local` ou `production` |
| `APP_KEY` | Sim | Chave de criptografia do Laravel | `base64:xxxx...` |
| `DB_CONNECTION` | Sim | Conexão do banco | `mysql` |
| `DB_HOST` | Sim | Endereço do servidor MySQL | `127.0.0.1` |
| `DB_PORT` | Sim | Porta de conexão | `3306` |
| `DB_DATABASE` | Sim | Nome da base de dados | ` MeuERP_local` |
| `DB_USERNAME` | Sim | Usuário do banco | `root` |
| `DB_PASSWORD` | Sim | Senha do banco | `sua_senha_secreta` |
| `SESSION_DRIVER` | Sim | Driver de controle de sessões | `cookie` |
| `SESSION_DOMAIN` | Não | Domínio de compartilhamento de cookies | `portal2.com` |

### Frontend (`FrontEnd/.env`)

| Variável | Obrigatória | Descrição | Exemplo |
| :--- | :---: | :--- | :--- |
| `VITE_API_URL` | Não | Sobrescreve a rota base da API (se ausente, o Vite utiliza o proxy `/api`) | `http://127.0.0.1:8080/api` |

---

## 📜 Scripts Disponíveis

### Monorepo Principal

| Comando (Backend) | Função |
| :--- | :--- |
| `composer run dev` | Inicia simultaneamente o servidor Laravel API, queue listener, depurador Pail e o Vite FrontEnd. |
| `composer run test` | Limpa os caches de rotas/configurações e roda a suíte de testes automatizados PHPUnit. |
| `composer run setup` | Instala dependências PHP, configura o arquivo `.env`, gera chaves, roda migrations, instala dependências JS e realiza build de produção. |

### Frontend (`FrontEnd/`)

| Comando (Frontend) | Função |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local de desenvolvimento Vite na porta 5173. |
| `npm run build` | Compila a aplicação React gerando os estáticos otimizados na pasta `FrontEnd/dist`. |
| `npm run lint` | Roda o ESLint para validar boas práticas de código no Javascript/React. |

---

## 📁 Estrutura do Monorepo

```
MeuERP/
├── !documentation/           # Pasta oficial de engenharia e fluxos do sistema
│   ├── !ArquivosBanco/       # Dumps e modelos relacionais semanticamente novos
│   ├── 03-FLUXOS/            # Documentação técnica detalhada das regras de negócio
│   └── 04-APENDICES/         # Mapas de arquivos, endpoints da API e tabelas
│
├── BackEnd/                  # REST API Laravel v13
│   ├── app/
│   │   ├── Http/Controllers/ # Controllers da API (Previdenciário, Chamados, etc.)
│   │   ├── Models/           # Models do Eloquent ORM mapeados
│   │   └── Support/          # Helpers auxiliares (Formatadores de datas)
│   ├── config/               # Arquivos de configurações do framework
│   ├── database/             # Migrations e Seeders locais
│   ├── routes/
│   │   └── api.php           # Definição oficial de endpoints do portal
│   └── scripts/              # Scripts de suporte de banco e dados mockados
│
├── FrontEnd/                 # React SPA
│   ├── dist/                 # Build estático otimizado gerado pelo Vite
│   ├── public/               # Logos, ícones e arquivos estáticos públicos
│   └── src/
│       ├── app/              # Configurações globais de rotas e providers
│       ├── auth/             # Provedores de contexto de autenticação local
│       ├── features/         # Configurações de formulários específicos
│       ├── globals/          # Sidebar principal, modais globais e layouts
│       ├── pages/            # Componentes principais de páginas por setor
│       └── services/         # Integrações HTTP com fetch() e regras de cookies
│
├── deploy/                   # Arquivos de suporte para servidores Nginx/VPS
└── package-lock.json
```

---

## 🔌 API Endpoints

### Autenticação & Sessão

| Método | Rota | Função | Proteção |
| :---: | :--- | :--- | :---: |
| `POST` | `/api/auth/login` | Efetua o login do colaborador e cria o cookie de sessão. | Livre |
| `GET` | `/api/auth/me` | Retorna os dados completos do usuário autenticado no momento. | 🔐 `auth:portal` |
| `POST` | `/api/auth/logout` | Invalida a sessão ativa e destrói os cookies locais. | 🔐 `auth:portal` |
| `POST` | `/api/auth/trocar-senha`| Altera a senha do funcionário após validação. | 🔐 `auth:portal` |

### Fluxo de Iniciais Trabalhistas

| Método | Rota | Função | Proteção |
| :---: | :--- | :--- | :---: |
| `GET` | `/api/fluxo-iniciais-trabalhistas` | Retorna a lista paginada de iniciais conforme a aba (`gerais`, `concluidas`, `ajuizados`) e filtros. | 🔐 `auth:portal` |
| `PATCH` | `/api/fluxo-iniciais-trabalhistas/{id}` | Atualiza o status da Ficha, observações ou flags operacionais. | 🔐 `auth:portal` |

### Entrevistas Previdenciárias

| Método | Rota | Função | Proteção |
| :---: | :--- | :--- | :---: |
| `POST` | `/api/reclamantes-previdenciarios` | Grava o onboarding completo do previdenciário e popula tabelas filhas. | 🔐 `auth:portal` |

### Chamados & Kanban da TI

| Método | Rota | Função | Proteção |
| :---: | :--- | :--- | :---: |
| `GET` | `/api/chamados` | Retorna todos os chamados ativos (Kanban administrativo para TI/ADM). | 🔐 `auth:portal` |
| `GET` | `/api/chamados/meus` | Retorna apenas os chamados abertos pelo colaborador logado. | 🔐 `auth:portal` |
| `POST` | `/api/chamados` | Registra a abertura de um novo chamado no suporte. | 🔐 `auth:portal` |
| `PATCH` | `/api/chamados/{id}` | Mudar status, vincular equipe de TI ou enviar respostas na conversa. | 🔐 `auth:portal` |

### Recursos Humanos (RH) & Apoio

| Método | Rota | Função | Proteção |
| :---: | :--- | :--- | :---: |
| `GET` | `/api/colaboradores` | Lista todos os colaboradores ativos do escritório. | 🔐 `auth:portal` |
| `GET` | `/api/reclamadas` | Lista as empresas cadastradas no sistema. | 🔐 `auth:portal` |
| `GET` | `/api/filiais` | Lista e cria filiais no sistema. | 🔐 `auth:portal` |

---

## 🗃 Modelo de Dados

Mapeamento relacional simplificado das tabelas que estruturam o motor de regras do Meu ERP:

```text
┌─────────────────┐       ┌─────────────────┐
│ tbl_funcionario │───1:N─│   tbl_inicial   │
│─────────────────│       │─────────────────│
│ id (INT PK)     │       │ pk_inicial_id   │
│ nome            │       │ fk_cliente_id   │
│ username        │       │ fk_entrevistador│
│ status (ATIVO)  │       │ inicial_data_con│
│ cargo / setor   │       └────────┬────────┘
└────────┬────────┘                │
         │                         │ 1:N
         │ 1:N (Criador / Resp)    │ (LEFT JOIN)
         ├─────────────────┐       ▼
         │                 │ ┌─────────────────┐
         │                 │ │tbl_reclamante_tr│
         │                 │ │─────────────────│
         │                 │ │id (INT PK)      │
         │                 │ │fk_cliente_id    │
         │                 │ │fk_reclamada_id  │
         │                 │ └────────┬────────┘
         │                 │          │
         │                 │          │ 1:1
         │                 │          ▼
         │                 │ ┌─────────────────┐
         │                 │ │tbl_trab_fluxo_in│
         │                 │ │─────────────────│
         │                 │ │id (INT PK)      │
         │                 │ │status_inicial   │
         │                 │ │iniciou_realizaci│
         │                 │ └─────────────────┘
         │
         ├─────────────────────────────────────────┐
         │ 1:N (Criador / Suporte)                 │ 1:N
         ▼                                         ▼
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│   tbl_chamado   │───1:N─│tbl_chamado_respo│       │tbl_reclamante_pr│
│─────────────────│       │─────────────────│       │─────────────────│
│ id (INT PK)     │       │ id (INT PK)     │       │ id (INT PK)     │
│ funcionarioCriou│       │ fk_chamado_id   │       │ fk_cliente_id   │
│ observacao      │       │ fk_funcionario_i│       │ fk_empresa_id   │
│ prioridade / cat│       └─────────────────┘       │ tipoProcesso    │
│ status (Kanban) │                                 └────────┬────────┘
└────────┬────────┘                                          │
         │                                                   │ 1:1
         │ 1:N                                               ▼
         ├─────────────────┐                         ┌─────────────────┐
         ▼                 ▼                         │ Secções Filhas  │
┌─────────────────┐ ┌─────────────────┐              │ (sal_matern,    │
│tbl_chamado_mensa│ │tbl_chamado_logs │              │ aux_doenca,     │
└─────────────────┘ └─────────────────┘              │ aposent...)     │
                                                     └─────────────────┘
```

---

## 💎 Planos e Pricing

Nossa estrutura de licenciamento é flexível, visando atender desde escritórios boutique até mega bancas jurídicas com filiais espalhadas por todo o país.

| Funcionalidade | Advocacia Start | Advocacia Growth | MeuERP Enterprise |
| :--- | :---: | :---: | :---: |
| **Colaboradores** | Até 10 | Até 50 | Ilimitados |
| **Monitore de Prazos** | Até 200 ativos | Ilimitado | Ilimitado + Histórico Completo |
| **Fichas Trabalhistas** | Básico | Completo | Customizado por Produtor |
| **Onboarding Previdenciário**| Apenas Geral | Até 4 Abas Extras | Todas as 8 Abas Especializadas |
| **Kanban / Suporte TI** | Suporte Geral | Kanban Padrão | Kanban Completo + Chat Estrito |
| **Logística de VT / VR** | Não | Apenas Emissão Individual | Impressão Consolidada em Lote |
| **Filiais Integradas** | 1 Filial | Até 3 Filiais | Filiais Ilimitadas + Painel Executivo |
| **Suporte** | E-mail (24h) | E-mail + Telefone | SLA Dedicado via WhatsApp e Slack |

---

## 🗺 Roadmap Comercial

Evolução contínua planejada para consolidar o Meu ERP como líder do segmento.

### 🌟 Fase 1: Fundação Operacional (Concluída ✅)
- [x] Onboarding previdenciário unificado em 8 abas funcionais de benefício.
- [x] Painel de Iniciais Trabalhistas com controle rígido de produção ativa de petições.
- [x] Sistema Kanban de chamados com múltiplos responsáveis (limite de 4 técnicos) e auditoria de logs.
- [x] Geração automática de relatórios em CSV/Excel de petições trabalhistas.
- [x] Migração de bootstrap do frontend para React 19 + Vite 8.

### 🚀 Fase 2: Integração e Automação (Em Progresso ⏳)
- [ ] Módulo de assinatura digital integrado (Docusign/Clicksign) no onboarding do cliente.
- [ ] Chatbot automatizado (WhatsApp API) para pré-triagem de entrevistas previdenciárias.
- [ ] Push Notifications para alertas de aproximação de prazos urgentes via Telegram.
- [ ] Emissão e gerenciamento de faturas de honorários (Integração com Gateway de Pagamentos).

### 🔮 Fase 3: Inteligência Jurídica & Escala (Futuro 🗺)
- [ ] Análise preditiva de decisões judiciais por inteligência artificial treinada nas iniciais trabalhistas.
- [ ] Geração de petições automatizada a partir do questionário previdenciário preenchido.
- [ ] Aplicativo nativo mobile (Android/iOS) para captação externa de clientes e acompanhamento de chamados.
- [ ] Integração nativa com diários de justiça eletrônicos (DJEs) para captura e criação de prazos automatizada.

---

## 📄 Licença e Termos de Uso

Este é um **software comercial proprietário**. Todos os direitos intelectuais e autorais pertencem à corporação **Meu ERP**. 

O uso, reprodução, cópia, engenharia reversa ou distribuição não autorizada deste repositório constitui violação direta dos direitos de propriedade industrial regulados pela [Lei nº 9.609/1998 (Lei do Software)](https://www.planalto.gov.br/ccivil_03/leis/l9609.htm) e pela [Lei nº 9.610/1998 (Lei de Direitos Autorais)](https://www.planalto.gov.br/ccivil_03/leis/l9610.htm), estando os infratores sujeitos às sanções cíveis e criminais cabíveis.

---

<p align="center">
  Desenvolvido com excelência por <a href="https://github.com/SeuEscritorio"><strong>Meu ERP Dev Team</strong></a>
</p>
