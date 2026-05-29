<p align="center">
  <img src="src/assets/BizManager_Transparent.png" alt="BizManager Logo" width="280" />
</p>

<h1 align="center">BizManager</h1>

<p align="center">
  <strong>Plataforma completa de gestão para MEIs e pequenos negócios.</strong><br />
  Dashboard · Finanças · Clientes · Estoque · Agenda — tudo em um só lugar.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Express-5.2-000000?style=flat-square&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Prisma-7.5-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-17-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/license-Propriet%C3%A1ria-ef4444?style=flat-square" alt="License" />
</p>

<p align="center">
  <img src="src/assets/dashboard.png" alt="BizManager Dashboard Preview" width="720" />
</p>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tech Stack](#-tech-stack)
- [Arquitetura](#-arquitetura)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Setup](#-instalação-e-setup)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API Endpoints](#-api-endpoints)
- [Modelo de Dados](#-modelo-de-dados)
- [Planos e Pricing](#-planos-e-pricing)
- [Roadmap](#-roadmap)
- [Licença](#-licença)

---

## 💡 Sobre o Projeto

O **BizManager** é um SaaS de gestão empresarial desenvolvido para microempreendedores individuais (MEIs), autônomos e pequenos negócios no Brasil. A plataforma unifica as principais necessidades de gestão — finanças, clientes, estoque e agenda — em uma interface moderna, intuitiva e acessível.

O objetivo é democratizar o acesso a ferramentas de gestão profissional, oferecendo uma alternativa acessível aos ERPs tradicionais que geralmente são complexos e caros para quem está começando.

---

## ✨ Funcionalidades

### 🏠 Landing Page
- Hero section com preview do dashboard
- Seção de features e diferenciais
- Painel de estatísticas com animações
- CTA com redirecionamento para registro

### 🔐 Autenticação
- Registro com seleção de plano e ciclo de faturamento
- Login seguro com JWT (válido por 7 dias)
- Hash de senha com bcrypt (salt rounds: 10)
- Tela de recuperação de senha

### 📊 Dashboard
- **4 KPIs em tempo real** — Receita, Despesas, Lucro Líquido, Total de Clientes
- **Gráfico de Fluxo de Caixa** — Receitas vs Despesas nos últimos 6 meses (Recharts)
- **Transações recentes** — Lista das últimas movimentações financeiras
- **Widget de Agenda** — Compromissos do dia com indicador "Agora"
- **Widget de Estoque** — Alertas de reposição urgente
- **Meta Mensal** — Barra de progresso baseada na receita atual
- **Modal de lançamento rápido** — Criar transações direto do dashboard

### 💰 Gestão Financeira
- CRUD completo de transações (entradas e saídas)
- Categorias separadas por tipo (Vendas, Serviços, Fornecedores, Operacional, etc.)
- Controle de status (Pago/Pendente)
- Datas de vencimento e pagamento
- Máscara de moeda brasileira (R$)

### 👥 CRM de Clientes
- Cadastro completo (nome, e-mail, telefone, notas)
- Sistema de rating (1-5)
- Status ativo/inativo
- Busca e filtragem

### 📦 Controle de Estoque
- Cadastro de produtos com SKU, categoria, preço e custo
- Controle de estoque atual vs estoque mínimo
- Alertas automáticos de estoque baixo
- Cálculo de status (bom, atenção, crítico)

### 📅 Agenda
- Agendamentos com título, descrição, horário de início e fim
- Vinculação com clientes cadastrados
- Tipos de evento (serviço, reunião, etc.)
- Status do agendamento (agendado, concluído, cancelado)

### ⚙️ Configurações
- **Perfil** — Nome, e-mail, empresa, CNPJ, foto de perfil (upload com preview)
- **Segurança** — Alteração de senha com validação
- **Notificações** — Preferências de alertas (e-mail, SMS, promoções)
- **Assinatura** — Visualização do plano atual, ciclo de faturamento e status
- **Zona de Perigo** — Exclusão permanente da conta com confirmação

---

## 🛠 Tech Stack

### Frontend

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| **React** | 18.3 | Biblioteca UI |
| **Vite** | 5.4 | Build tool e dev server |
| **React Router** | 6.22 | Roteamento SPA |
| **Recharts** | 2.15 | Gráficos e visualização de dados |
| **Lucide React** | 0.344 | Ícones SVG |
| **CSS** | — | Estilização (Vanilla CSS, dark theme) |

### Backend

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| **Express** | 5.2 | Framework HTTP |
| **Prisma** | 7.5 | ORM e migrations |
| **PostgreSQL** | — | Banco de dados relacional |
| **JSON Web Token** | 9.0 | Autenticação stateless |
| **bcryptjs** | 3.0 | Hash de senhas |
| **dotenv** | 17.3 | Variáveis de ambiente |

### DevTools

| Tecnologia | Uso |
|-----------|-----|
| **concurrently** | Rodar front e back simultaneamente |
| **tsx** | Executar TypeScript/ESM no Node |

---

## 🏗 Arquitetura

```
┌─────────────────────────────────────────────────────┐
│                     Cliente                         │
│              React + Vite (SPA)                     │
│         http://localhost:5173                        │
└────────────────────┬────────────────────────────────┘
                     │  Proxy /api → :3000
                     ▼
┌─────────────────────────────────────────────────────┐
│                  Servidor API                       │
│              Express 5 (REST)                       │
│         http://localhost:3000                        │
│                                                     │
│  ┌──────────┐  ┌────────────┐  ┌──────────────┐    │
│  │  Routes   │→│ Middleware  │→│ Controllers   │    │
│  │ (7 rotas) │  │  (auth)    │  │ (7 modules)  │    │
│  └──────────┘  └────────────┘  └──────┬───────┘    │
│                                       │             │
│                                ┌──────▼───────┐    │
│                                │  Prisma ORM   │    │
│                                │  (5 models)   │    │
│                                └──────┬───────┘    │
└───────────────────────────────────────┼─────────────┘
                                        │
                              ┌─────────▼────────┐
                              │   PostgreSQL     │
                              │   bizmanager     │
                              └──────────────────┘
```

---

## 📌 Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** — v18 ou superior
- **npm** — v9 ou superior
- **PostgreSQL** — v14 ou superior (rodando localmente ou em nuvem)

---

## 🚀 Instalação e Setup

### 1. Clone o repositório

```bash
git clone https://github.com/AsyncStudio-Dev/BizManager.git
cd BizManager
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/bizmanager?schema=public"
JWT_SECRET=sua_chave_secreta_aqui
PORT=3000
```

### 4. Configure o banco de dados

```bash
# Criar o banco (se ainda não existir)
# No psql: CREATE DATABASE bizmanager;

# Rodar as migrations do Prisma
npx prisma migrate dev

# (Opcional) Abrir o Prisma Studio para visualizar os dados
npx prisma studio
```

### 5. Inicie o projeto

```bash
# Iniciar frontend + backend simultaneamente
npm run dev
```

O frontend estará disponível em `http://localhost:5173` e a API em `http://localhost:3000`.

---

## 🔑 Variáveis de Ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `DATABASE_URL` | Connection string do PostgreSQL | `postgresql://user:pass@localhost:5432/bizmanager?schema=public` |
| `JWT_SECRET` | Chave secreta para assinar tokens JWT | `MinhaChaveSecretaForte123!` |
| `PORT` | Porta do servidor Express | `3000` |

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia frontend e backend simultaneamente |
| `npm run dev:front` | Inicia apenas o frontend (Vite) na porta 5173 |
| `npm run dev:back` | Inicia apenas o backend (Express) na porta 3000 |
| `npm run build` | Gera o build de produção do frontend |
| `npm run preview` | Preview do build de produção |
| `npm run lint` | Executa o ESLint no projeto |

---

## 📁 Estrutura do Projeto

```
BizManager/
├── prisma/
│   ├── migrations/           # Histórico de migrations do banco
│   └── schema.prisma         # Schema do banco de dados (5 models)
│
├── server/
│   ├── server.js             # Entry point do servidor Express
│   └── src/
│       ├── controllers/      # Lógica de negócio
│       │   ├── authController.js
│       │   ├── userController.js
│       │   ├── clientController.js
│       │   ├── productController.js
│       │   ├── transactionController.js
│       │   ├── appointmentController.js
│       │   └── dashboardController.js
│       ├── routes/            # Definição das rotas REST
│       │   ├── authRoutes.js
│       │   ├── userRoutes.js
│       │   ├── clientRoutes.js
│       │   ├── productRoutes.js
│       │   ├── transactionRoutes.js
│       │   ├── appointmentRoutes.js
│       │   └── dashboardRoutes.js
│       ├── middlewares/
│       │   └── authMiddleware.js   # Verificação de JWT
│       └── lib/
│           └── prisma.js           # Instância do Prisma Client
│
├── src/
│   ├── assets/               # Imagens e logos
│   ├── components/
│   │   ├── charts/           # Componentes de gráficos
│   │   ├── common/           # Componentes reutilizáveis
│   │   └── layout/           # Componentes de layout
│   ├── layouts/
│   │   ├── AppLayout.jsx     # Layout principal (sidebar + content)
│   │   └── AppLayout.css
│   ├── pages/
│   │   ├── Home/             # Landing page pública
│   │   ├── Auth/             # Login, Register, ForgotPassword
│   │   ├── Plans/            # Página de planos e pricing
│   │   ├── Payment/          # Fluxo de pagamento
│   │   ├── Dashboard/        # Painel principal
│   │   ├── Financial/        # Gestão financeira
│   │   ├── Clients/          # CRM de clientes
│   │   ├── Inventory/        # Controle de estoque
│   │   ├── Agenda/           # Agendamentos
│   │   └── Settings/         # Configurações da conta
│   ├── App.jsx               # Rotas da aplicação
│   ├── main.jsx              # Entry point do React
│   └── index.css             # Estilos globais
│
├── .env                      # Variáveis de ambiente (não comitar)
├── index.html                # Template HTML
├── package.json
├── vite.config.js            # Config do Vite (proxy /api)
└── prisma.config.ts          # Config do Prisma
```

---

## 🔌 API Endpoints

### Autenticação

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| `POST` | `/api/auth/register` | Criar nova conta | ❌ |
| `POST` | `/api/auth/login` | Fazer login (retorna JWT) | ❌ |

### Usuário

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| `GET` | `/api/users/profile` | Obter perfil do usuário | ✅ |
| `PUT` | `/api/users/profile` | Atualizar perfil / senha | ✅ |
| `DELETE` | `/api/users/profile` | Excluir conta | ✅ |

### Clientes

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| `GET` | `/api/clients` | Listar clientes | ✅ |
| `POST` | `/api/clients` | Criar cliente | ✅ |
| `PUT` | `/api/clients/:id` | Atualizar cliente | ✅ |
| `DELETE` | `/api/clients/:id` | Excluir cliente | ✅ |

### Produtos

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| `GET` | `/api/products` | Listar produtos | ✅ |
| `POST` | `/api/products` | Criar produto | ✅ |
| `PUT` | `/api/products/:id` | Atualizar produto | ✅ |
| `DELETE` | `/api/products/:id` | Excluir produto | ✅ |

### Transações

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| `GET` | `/api/transactions` | Listar transações | ✅ |
| `POST` | `/api/transactions` | Criar transação | ✅ |
| `PUT` | `/api/transactions/:id` | Atualizar transação | ✅ |
| `DELETE` | `/api/transactions/:id` | Excluir transação | ✅ |

### Agendamentos

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| `GET` | `/api/appointments` | Listar agendamentos | ✅ |
| `POST` | `/api/appointments` | Criar agendamento | ✅ |
| `PUT` | `/api/appointments/:id` | Atualizar agendamento | ✅ |
| `DELETE` | `/api/appointments/:id` | Excluir agendamento | ✅ |

### Dashboard

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| `GET` | `/api/dashboard` | Dados consolidados do dashboard | ✅ |

---

## 🗃 Modelo de Dados

```
┌──────────────┐       ┌──────────────┐
│     User     │───1:N─│    Client    │
│──────────────│       │──────────────│
│ id (uuid)    │       │ id (uuid)    │
│ name         │       │ userId (FK)  │
│ email        │       │ name         │
│ passwordHash │       │ email        │
│ companyName  │       │ phone        │
│ cnpj         │       │ notes        │
│ avatarUrl    │       │ status       │
│ planType     │       │ rating       │
│ billingCycle │       └──────┬───────┘
│ subStatus    │              │
└──────┬───────┘              │ 1:N
       │                      │
       │ 1:N            ┌─────▼────────┐
       ├────────────────│ Appointment  │
       │                │──────────────│
       │                │ id (uuid)    │
       │                │ userId (FK)  │
       │                │ clientId(FK) │
       │                │ title        │
       │                │ startTime    │
       │                │ endTime      │
       │                │ type         │
       │                │ status       │
       │                └──────────────┘
       │ 1:N
       ├────────────────┐
       │                │
┌──────▼───────┐  ┌─────▼────────┐
│  Transaction │  │   Product    │
│──────────────│  │──────────────│
│ id (uuid)    │  │ id (uuid)    │
│ userId (FK)  │  │ userId (FK)  │
│ description  │  │ name         │
│ amount       │  │ sku          │
│ type (in/out)│  │ category     │
│ category     │  │ price        │
│ status       │  │ cost         │
│ dueDate      │  │ currentStock │
│ paymentDate  │  │ minStock     │
└──────────────┘  └──────────────┘
```

---

## 💎 Planos e Pricing

| Recurso | Start (Grátis) | Growth (R$ 19,90/mês) | Scale (R$ 34,90/mês) |
|---------|:--------------:|:---------------------:|:--------------------:|
| Clientes | Até 5 | Ilimitado | Ilimitado |
| Produtos/Estoque | Até 10 | Ilimitado | Ilimitado |
| Dashboard Visual | ❌ | ✅ | ✅ |
| Orçamentos PDF | ❌ | ✅ | ✅ |
| Calculadora de Preço | ❌ | ✅ | ✅ |
| Agenda | ❌ | Manual | Sync Google |
| Vitrine Virtual | ❌ | ❌ | ✅ |
| Suporte | E-mail | E-mail | WhatsApp |

> **Desconto anual:** 20% OFF em todos os planos pagos.

---

## 🗺 Roadmap

- [x] Landing page com apresentação do produto
- [x] Sistema de autenticação (Register/Login/JWT)
- [x] Dashboard com KPIs e gráficos
- [x] Módulo financeiro (CRUD de transações)
- [x] CRM de clientes
- [x] Controle de estoque com alertas
- [x] Agenda de compromissos
- [x] Página de configurações completa
- [x] Página de planos com tabela comparativa
- [x] Backend REST API completo com Prisma + PostgreSQL
- [ ] Integração de pagamento (Stripe / Pagar.me)
- [ ] Emissão de NF-e / NFS-e
- [ ] Geração de orçamentos em PDF
- [ ] Calculadora de preço de venda
- [ ] Sincronização com Google Calendar
- [ ] Vitrine virtual de produtos
- [ ] Relatórios avançados e exportação
- [ ] CI/CD com GitHub Actions
- [ ] Testes automatizados (unit + e2e)
- [ ] Deploy em produção

---

## 📄 Licença

Este projeto é **software proprietário**. Todos os direitos reservados © 2026 Async Studio.

O código-fonte é protegido pela [Lei do Software (Lei nº 9.609/1998)](https://www.planalto.gov.br/ccivil_03/leis/l9609.htm) e pela [Lei de Direitos Autorais (Lei nº 9.610/1998)](https://www.planalto.gov.br/ccivil_03/leis/l9610.htm). Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Desenvolvido por <a href="https://github.com/AsyncStudio-Dev"><strong>Async Studio</strong></a>
</p>
