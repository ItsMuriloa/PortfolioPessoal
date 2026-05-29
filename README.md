# Portfólio Pessoal - Murilo Alves

Portfólio one-page desenvolvido para apresentar meu perfil profissional, stack, projetos, certificados e canais de contato.

Sou Murilo Alves, Desenvolvedor Full Stack no Rio Grande do Sul, com foco em sistemas web, automações, integrações, infraestrutura e experiências digitais objetivas. O portfólio foi pensado para comunicar essa atuação de forma visual, direta e fácil de manter.

## Como foi desenvolvido

O projeto foi construído com Next.js, React, CSS customizado e dados locais centralizados. A interface usa uma composição editorial escura, elementos cromados, seções em tela cheia, carousel de projetos, modais acessíveis e imagens otimizadas com `next/image`.

## Stack

- Next.js
- React
- JavaScript
- CSS customizado
- ESLint com configuração `core-web-vitals`

## Estrutura principal

- `src/app`: rotas, layout, SEO, sitemap, robots e estilos globais.
- `src/components`: seções visuais e modais.
- `src/data`: conteúdo editável do portfólio.
- `public/assets/projetos`: imagens e documentação dos projetos reais.
- `public/assets/projects`: imagens genéricas e placeholders.
- `public/assets/images`: imagens pessoais e apoio visual.

## Como atualizar projetos

Adicione imagens e documentação em:

```txt
public/assets/projetos/nome-do-projeto/cover.png
public/assets/projetos/nome-do-projeto/screenshot-01.png
public/assets/projetos/nome-do-projeto/README.md
```

Use nomes consistentes e atualize `src/data/projects.js` com imagem principal, título, descrição, tecnologias, status e links. Quando o projeto não tiver deploy público ou código aberto, use `projectLink: null` e `codeLink: null`.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Publicação na Vercel

Configuração recomendada:

- Framework: Next.js
- Build command: `npm run build`
- Output: automático do Next.js
- Variável de ambiente: `NEXT_PUBLIC_SITE_URL=https://itsmuriloa.com`

O domínio final do projeto é `https://itsmuriloa.com`. Essa URL alimenta metadata, Open Graph, sitemap e robots.
