# Relatorio Tecnico - PortfolioPessoal

## 1. Visao geral

O projeto `PortfolioPessoal` e uma aplicacao front-end de portfolio pessoal construida com React, TypeScript e Vite. A tela principal apresenta uma identidade visual chamada "Murilo Lab", com foco em desenvolvimento web, automacao, infraestrutura e IA.

A implementacao atual esta concentrada principalmente em:

- `src/App.tsx`: estrutura de interface, textos, links, imagens e secoes da pagina.
- `src/styles.css`: sistema visual completo, responsividade, animacoes e composicao do hero.
- `src/config.ts`: configuracao central de dados pessoais, atualmente nao consumida pelo `App`.
- `src/services/github.ts`: cliente para API publica do GitHub.
- `src/hooks/useGithubPortfolio.ts`: hook React para carregar perfil e repositorios do GitHub.
- `src/main.tsx`: ponto de entrada da aplicacao.

O produto atual funciona como uma landing page/portfolio visual. A fundacao para integracao com GitHub existe, mas ainda nao esta conectada na interface renderizada em `App.tsx`.

## 2. Stack tecnica

### Bibliotecas e ferramentas

- React `19`
- React DOM `19`
- TypeScript `5.8`
- Vite `7`
- Lucide React para icones SVG

### Scripts disponiveis

```bash
npm run dev
npm run build
npm run preview
```

`npm run build` executa:

```bash
tsc -b && vite build
```

Isso valida TypeScript e gera a build de producao em `dist/`.

## 3. Estrutura de arquivos

```txt
PortfolioPessoal/
  Img/
    icon.png
    mac.png
    pc.png
    software.png
    orbit/
      json.png
      miniterminal.png
      software.png
      terminal2.png
  src/
    App.tsx
    config.ts
    hooks/
      useGithubPortfolio.ts
    main.tsx
    services/
      github.ts
    styles.css
    vite-env.d.ts
  index.html
  package.json
  vite.config.ts
  tsconfig*.json
```

Observacao: existem arquivos gerados/localizados no workspace, como `dist/`, `node_modules/`, `.env` e `.DS_Store`. Eles nao devem ser tratados como codigo-fonte principal.

## 4. Ponto de entrada

Arquivo: `src/main.tsx`

Responsabilidades:

- Importar `StrictMode` do React.
- Criar a raiz da aplicacao com `createRoot`.
- Renderizar o componente `App`.
- Importar o CSS global `styles.css`.

Fluxo:

```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

O operador `!` assume que existe um elemento `#root` no `index.html`. Essa e uma pratica comum em projetos Vite, mas depende da presenca correta desse elemento no HTML.

## 5. Componente principal

Arquivo: `src/App.tsx`

O componente `App` e o centro da aplicacao. Ele renderiza toda a pagina em uma unica arvore JSX.

### Importacoes principais

O arquivo importa icones de `lucide-react`:

- `ArrowUpRight`
- `Bot`
- `Code2`
- `Github`
- `Linkedin`
- `Mail`
- `Server`
- `Sparkles`
- `Workflow`

Tambem importa imagens locais:

- `icon.png`: avatar/memoji principal.
- `mac.png`: notebook no hero.
- `pc.png`: servidor/computador da secao de skills.
- `software.png`: asset visual da secao de skills.
- imagens em `Img/orbit/`: objetos orbitais ao redor do avatar.

### Dados locais

O componente define tres arrays internos:

#### `labCards`

Usado para os cards/pills abaixo do hero:

- Dev
- IA
- Infra
- Auto

Cada item possui:

- `label`
- `detail`
- `icon`

#### `focusAreas`

Usado na nuvem de habilidades:

- Desenvolvimento Web
- Automacoes
- Infraestrutura
- IA Generativa
- Docker
- GitHub
- Linux
- APIs

#### `nextSections`

Usado nos cards de preview:

- Projetos reais
- Murilo Lab
- Jornada

### Estrutura da pagina

O JSX renderiza:

1. `main.portfolio-shell`
2. `section.hero-lab`
3. `header.topbar`
4. `nav.topnav`
5. bloco de copy principal
6. composicao visual `aside.lab-stage`
7. cards inferiores `hero-lab__bottom`
8. secao de skills
9. secao de cards/projetos
10. footer de contato

### Navegacao

A navegacao superior aponta para ancoras internas:

- `#Inicio`
- `#skills`
- `#contato`

O botao "Ver projetos" aponta para:

- `#projetos`

Links externos:

- GitHub: `https://github.com/ItsMuriloa/`
- LinkedIn: `https://www.linkedin.com/in/itsmuriloa/`

Contato:

- `mailto:muriloa.pro@gmail.com`

## 6. Composicao visual do hero

A area visual do hero e composta por:

```tsx
<aside className="lab-stage">
  <img className="stage-asset stage-asset--laptop" />
  <div className="avatar-console">
    <div className="avatar-frame">
      <img className="memoji-image" />
    </div>
    <div className="orbit-system">...</div>
  </div>
</aside>
```

### `lab-stage`

Funciona como container relativo para os elementos posicionados absolutamente.

Ele define variaveis CSS para controlar avatar e notebook:

```css
--avatar-x
--avatar-y
--avatar-size
--avatar-transform
--laptop-right
--laptop-bottom
--laptop-size
```

Essas variaveis permitem ajustar a composicao sem alterar diretamente cada seletor.

### `stage-asset--laptop`

Controla o notebook:

```css
right: var(--laptop-right);
bottom: var(--laptop-bottom);
width: var(--laptop-size);
```

### `avatar-console`

Controla o conjunto do avatar:

```css
top: var(--avatar-y);
left: var(--avatar-x);
width: var(--avatar-size);
transform: var(--avatar-transform);
```

### `avatar-frame`

Cria a placa translúcida atras do avatar, com:

- borda transparente
- `aspect-ratio`
- gradientes
- sombra
- pseudo-elemento interno

### `memoji-image`

Imagem do avatar. Possui animacao `avatar-breathe`, que cria uma flutuacao sutil.

### `orbit-system`

Cria a orbita circular ao redor do avatar.

Os itens orbitais usam variaveis:

- `--angle`
- `--radius`
- `--image-size`
- `--image-scale`

Isso permite posicionar cada asset em um ponto diferente da orbita.

## 7. CSS e sistema visual

Arquivo: `src/styles.css`

O CSS e global e concentra todo o design system da pagina.

### Tokens globais

No `:root`, o projeto define:

- cores de fundo
- cores de texto
- cores de destaque
- opacidades para paineis
- sombra principal
- familia tipografica

Principais variaveis:

```css
--bg
--panel
--panel-strong
--line
--text
--muted
--blue
--cyan
--purple
--green
--shadow
```

### Reset/base

O CSS define:

- `box-sizing: border-box`
- `scroll-behavior: smooth`
- `body` sem margem
- `min-width: 320px`
- links sem decoracao

### Layout geral

`portfolio-shell` cria o fundo global com gradientes radiais e lineares.

`hero-lab` define:

- altura minima de viewport
- layout em coluna
- padding responsivo
- isolamento de stacking context com `isolation: isolate`

`hero-lab__content` usa CSS Grid:

```css
grid-template-columns: minmax(0, 1fr) minmax(360px, 500px);
```

Isso separa texto e composicao visual no desktop.

### Tipografia

O titulo principal usa:

```css
font-size: clamp(4.1rem, 10vw, 8.7rem);
line-height: 0.86;
```

O subtitulo usa:

```css
font-size: clamp(1.65rem, 3.4vw, 3.3rem);
```

No mobile, esses valores sao reduzidos para evitar overflow horizontal.

### Botoes

Existem dois estilos:

- `.button--primary`
- `.button--ghost`

Os botoes usam `inline-flex`, bordas arredondadas, transicao e hover com `translateY`.

### Cards e secoes

O projeto possui:

- `lab-pill`
- `preview-card`
- `contact-strip`
- `skill-cloud`
- `skills-visual`

Todos seguem uma linguagem visual semelhante:

- fundo translúcido
- bordas suaves
- blur
- destaque ciano
- sombras discretas

## 8. Responsividade

O CSS possui dois breakpoints principais:

### Ate 960px

```css
@media (max-width: 960px)
```

Mudancas:

- grids passam para uma coluna
- `lab-stage` ganha altura responsiva com `clamp`
- avatar e notebook recebem valores proprios de tamanho e posicao
- cards inferiores passam para duas colunas

### Ate 680px

```css
@media (max-width: 680px)
```

Mudancas:

- padding geral reduzido
- topbar e footer empilham
- nav ocupa largura total
- botoes ocupam 100%
- tipografia do hero diminui
- texto passa a permitir quebra com `overflow-wrap: anywhere`
- `lab-stage` recebe coordenadas especificas para celular
- cards inferiores viram uma coluna
- assets da secao de skills sao reposicionados

### Observacao tecnica

A composicao do hero depende bastante de posicionamento absoluto, imagens grandes e variaveis CSS. Isso permite controle visual fino, mas exige teste em varias larguras: desktop largo, notebook, tablet e celular.

## 9. Animacoes

Animacoes definidas:

- `reveal-up`: entrada do bloco de texto.
- `hero-tilt`: animacao herdada, atualmente pouco usada porque `avatar-console` esta com `animation: none`.
- `avatar-breathe`: flutuacao do avatar.
- `float-device`: flutuacao do servidor na secao de skills.
- `float-soft`: flutuacao do asset de software.
- `float-badge`: animacao para badges atualmente ocultos.
- `orbit-spin`: rotacao da orbita.
- `orbit-counter-spin`: contra-rotacao dos itens da orbita.

Tambem existe suporte a reducao de movimento:

```css
@media (prefers-reduced-motion: reduce)
```

Esse bloco reduz duracao de animacoes e transicoes.

## 10. Integracao com GitHub

Arquivos:

- `src/services/github.ts`
- `src/hooks/useGithubPortfolio.ts`
- `src/config.ts`

### `github.ts`

Define tipos:

- `GitHubUser`
- `GitHubRepository`

Define `githubHeaders` com:

- `Accept: application/vnd.github+json`
- `X-GitHub-Api-Version: 2022-11-28`

Define a funcao generica:

```ts
requestGitHub<T>(url, signal)
```

Ela:

1. Executa `fetch`.
2. Valida `response.ok`.
3. Lanca erro com status quando a API falha.
4. Retorna JSON tipado.

Funcoes publicas:

```ts
getGitHubProfile(username, signal)
getPublicRepositories(username, signal)
```

`getPublicRepositories` busca ate 12 repositorios recentes e filtra:

- forks
- repositorios arquivados

### `useGithubPortfolio.ts`

Hook React que recebe `username`.

Estado retornado:

```ts
{
  error: string | null;
  isLoading: boolean;
  profile: GitHubUser | null;
  repositories: GitHubRepository[];
}
```

Comportamentos:

- Valida se o username foi configurado.
- Usa `AbortController`.
- Cancela a requisicao no unmount.
- Define timeout de 8 segundos.
- Busca perfil e repositorios em paralelo com `Promise.all`.
- Trata erro de timeout separadamente.

### Estado atual da integracao

A integracao esta implementada, mas nao esta conectada ao `App.tsx`.

Atualmente:

- `App.tsx` nao importa `portfolioConfig`.
- `App.tsx` nao chama `useGithubPortfolio`.
- A secao de projetos usa `nextSections`, que e um array estatico.
- O README informa carregamento automatico de repositorios, mas isso ainda nao aparece na UI atual.

Para completar a integracao, seria necessario criar uma secao de projetos que consuma:

```ts
const { profile, repositories, isLoading, error } = useGithubPortfolio(portfolioConfig.githubUsername);
```

## 11. Configuracao

Arquivo: `src/config.ts`

Define:

```ts
portfolioConfig
```

Campos:

- `name`
- `role`
- `location`
- `email`
- `githubUsername`
- `bio`
- `skills`

`githubUsername` vem de:

```ts
import.meta.env.VITE_GITHUB_USERNAME || 'seu-usuario'
```

O arquivo `.env.example` documenta:

```env
VITE_GITHUB_USERNAME=seu-usuario
```

## 12. Acessibilidade

Pontos positivos:

- Uso de landmarks semanticos: `main`, `section`, `header`, `nav`, `aside`, `footer`.
- `nav` possui `aria-label`.
- `aside` visual possui `aria-label`.
- Imagens decorativas usam `alt=""` ou `aria-hidden`.
- Links externos usam `target="_blank"` com `rel="noreferrer"`.

Pontos a revisar:

- O id `Inicio` esta no `span.eyebrow`; semanticamente poderia ficar no `section` ou em um elemento mais representativo.
- O projeto usa muitos elementos visuais animados; apesar de haver `prefers-reduced-motion`, vale testar com leitor de tela e navegacao por teclado.
- Alguns textos e cards sao estaticos; quando a secao de projetos for dinamica, sera importante manter titulos e descricoes acessiveis.

## 13. Estado de build

O comando abaixo foi executado com sucesso:

```bash
npm run build
```

Resultado:

- TypeScript compilou sem erro.
- Vite gerou build de producao em `dist/`.

## 14. Riscos e pontos de atencao

### 1. Divergencia entre README e UI atual

O README diz que os projetos sao carregados automaticamente do GitHub. O codigo de servico e hook existe, mas a tela atual nao usa esses dados.

Impacto:

- Quem ler o README pode esperar uma funcionalidade que ainda nao esta visivel.

### 2. Arquivos nao relacionados ao fonte

Existem `.DS_Store`, `dist/` e `node_modules/` no diretorio. Eles normalmente nao devem entrar em versionamento.

Impacto:

- Repositorio mais pesado.
- Possivel ruido em diffs.

### 3. CSS concentrado em um unico arquivo

`styles.css` e grande e controla tudo globalmente.

Impacto:

- Rapido para iterar no inicio.
- Pode ficar dificil de manter conforme novas secoes forem adicionadas.

### 4. Hero com composicao visual delicada

O hero depende de posicionamento absoluto, imagens grandes e breakpoints especificos.

Impacto:

- Visual forte em desktop.
- Exige validacao frequente em mobile, tablet e telas intermediarias.

### 5. Dados duplicados/estaticos

Ha dados em `config.ts`, mas o `App.tsx` ainda usa textos hardcoded.

Impacto:

- Alteracoes de conteudo precisam ser feitas em mais de um lugar.
- A configuracao central perde valor ate ser conectada.

## 15. Recomendacoes tecnicas

### Prioridade alta

1. Conectar `portfolioConfig` ao `App.tsx`.
2. Decidir se a secao de projetos sera estatica ou dinamica via GitHub.
3. Se for dinamica, usar `useGithubPortfolio` na secao `#projetos`.
4. Atualizar o README para refletir o estado real da UI.

### Prioridade media

1. Remover arquivos gerados do versionamento, se estiverem rastreados.
2. Revisar `.gitignore` para garantir exclusao de:
   - `node_modules`
   - `dist`
   - `.DS_Store`
   - `.env`
3. Separar o CSS em blocos ou arquivos por area quando o projeto crescer.
4. Testar a composicao visual em larguras intermediarias, especialmente entre 681px e 960px.

### Prioridade baixa

1. Criar componentes menores:
   - `Hero`
   - `HeroVisual`
   - `TopNav`
   - `SkillCloud`
   - `PreviewCards`
   - `ContactStrip`
2. Criar tipos para os arrays locais (`labCards`, `focusAreas`, `nextSections`).
3. Adicionar testes simples para funcoes de GitHub, especialmente filtros de repositorios.

## 16. Conclusao

O projeto tem uma base visual forte, com boa direcao de identidade e uma composicao hero bem personalizada. A arquitetura ainda e simples e adequada para um portfolio em evolucao.

O principal ponto tecnico e alinhar a intencao de produto com a implementacao: a base para GitHub e configuracao dinamica ja existe, mas ainda nao esta integrada ao componente principal. Ao conectar `config.ts` e `useGithubPortfolio` ao `App.tsx`, o portfolio ficara mais facil de manter e mais coerente com o README.

