# Portfolio Pessoal - Murilo Alves

Meu portfólio pessoal desenvolvido para apresentar minha evolução como desenvolvedor, meus estudos, minhas áreas de interesse e meus projetos publicados no GitHub.

A ideia do projeto é funcionar como um "Developer Lab": um espaço visual, simples e direto para reunir desenvolvimento web, automações, infraestrutura, IA generativa, APIs e experimentos que fazem parte da minha jornada técnica.

Site em produção:

```txt
https://itsmuriloa.com
```

## Sobre o projeto

Este portfólio foi construído com React, TypeScript e Vite. A interface apresenta uma página única com:

- apresentação pessoal;
- áreas em que estou me desenvolvendo;
- links para GitHub e LinkedIn;
- projetos carregados automaticamente pela API pública do GitHub;
- layout responsivo com assets visuais personalizados.

O foco não é apenas mostrar uma página bonita, mas também organizar de forma clara os conhecimentos que venho praticando em projetos reais.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS
- Lucide React
- GitHub API
- Nginx
- VPS Oracle

## Áreas de conhecimento representadas

- Desenvolvimento Web
- React e Vite
- TypeScript
- APIs REST
- Git e GitHub
- Automações
- DevOps e infraestrutura
- IA generativa
- Linux e servidores

## Como funciona a integração com GitHub

O portfólio busca automaticamente os repositórios públicos mais recentes do usuário configurado em uma variável de ambiente.

Endpoint utilizado:

```txt
https://api.github.com/users/SEU_USUARIO/repos
```

Os repositórios aparecem na seção de projetos sem precisar editar o código toda vez que um novo projeto público for criado.

## Como rodar localmente

Clone o repositório e instale as dependências:

```bash
cd caminho/do/PortfolioPessoal
npm install
```

Crie um arquivo `.env` na raiz do projeto com seu usuário do GitHub:

```env
VITE_GITHUB_USERNAME=ItsMuriloa
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois acesse o endereço exibido no terminal pelo Vite. Normalmente será algo como:

```txt
http://localhost:5173
```

## Scripts disponíveis

```bash
npm run dev
```

Executa o projeto em modo de desenvolvimento.

```bash
npm run build
```

Valida o TypeScript e gera a versão de produção em `dist/`.

```bash
npm run preview
```

Executa uma pré-visualização local da build de produção.

## Personalização

Os dados principais podem ser ajustados em:

```txt
src/config.ts
```

Nesse arquivo ficam informações como nome, cargo, localização, e-mail, usuário do GitHub, bio e habilidades.

Os textos e seções principais da interface estão em:

```txt
src/App.tsx
```

Os estilos globais ficam em:

```txt
src/styles.css
```

## Estrutura principal

```txt
PortfolioPessoal/
  Img/
  src/
    App.tsx
    config.ts
    hooks/
      useGithubPortfolio.ts
    services/
      github.ts
    styles.css
    main.tsx
  index.html
  package.json
  vite.config.ts
```

## Fluxo de trabalho

O fluxo recomendado é:

```txt
Editar localmente -> testar localmente -> commit -> push GitHub -> entrar na VPS -> pull -> build -> publicar dist/ no Nginx
```

A VPS deve ser usada apenas para deploy. Evite editar código diretamente nela, a menos que seja uma emergência.

## Antes de enviar para o GitHub

No computador local, valide:

```bash
npm run build
git status
```

Se o build passar, salve no Git:

```bash
git add .
git commit -m "Descreva sua alteração"
git push origin main
```

## Deploy manual na VPS

Repositório remoto usado pela VPS:

```txt
git@github.com:ItsMuriloa/PortfolioPessoal.git
```

Entre na VPS:

```bash
ssh oracle-vps
```

Acesse o projeto:

```bash
cd /home/ubuntu/apps/PortfolioPessoal
```

Atualize o código:

```bash
git pull origin main
```

Instale dependências somente quando `package.json` ou `package-lock.json` mudar:

```bash
npm ci
```

Gere o build:

```bash
npm run build
```

Publique apenas o `dist/` no Nginx:

```bash
sudo rsync -av --delete --chown=www-data:www-data dist/ /var/www/itsmuriloa.com/
```

Valide o Nginx e o site:

```bash
sudo nginx -t
curl -I https://itsmuriloa.com
curl -I https://itsmuriloa.com/favicon.png
```

Resultado esperado:

```txt
HTTP/2 200
```

## Checklist rápido de deploy

```bash
ssh oracle-vps
cd /home/ubuntu/apps/PortfolioPessoal
git pull origin main
npm run build
sudo rsync -av --delete --chown=www-data:www-data dist/ /var/www/itsmuriloa.com/
sudo nginx -t
curl -I https://itsmuriloa.com
```

Use `npm ci` antes do build quando dependências forem adicionadas, removidas ou atualizadas.

## Pastas importantes na VPS

```txt
/home/ubuntu/apps/PortfolioPessoal
```

Cópia do repositório. Use para `git pull`, `npm ci` e `npm run build`.

```txt
/var/www/itsmuriloa.com
```

Pasta pública do Nginx. Deve receber somente os arquivos finais de `dist/`.

## Observação sobre ambiente

O arquivo `.env` não deve ser enviado para o GitHub. Use `.env.example` como referência para outras pessoas configurarem o projeto localmente.

Nunca publique manualmente estas coisas em `/var/www/itsmuriloa.com`:

- `.env`;
- `.git/`;
- `node_modules/`;
- chaves SSH;
- tokens;
- documentação privada;
- arquivos de backup.

## Verificar estado do servidor

Comandos úteis na VPS:

```bash
node -v
npm -v
sudo nginx -t
sudo systemctl status nginx --no-pager
curl -I https://itsmuriloa.com
```

## Objetivo

Este repositório representa minha evolução prática em tecnologia. Ele será atualizado conforme eu desenvolver novos projetos, estudar novas ferramentas e consolidar conhecimentos em desenvolvimento, automação, infraestrutura e inteligência artificial.
