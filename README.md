# Portfolio Pessoal

Portfolio pessoal em React, Vite e TypeScript, publicado como site estatico em Nginx na VPS Oracle.

Site em producao:

```txt
https://itsmuriloa.com
```

Repositorio remoto usado pela VPS:

```txt
git@github.com:ItsMuriloa/PortfolioPessoal.git
```

## Fluxo de trabalho

A partir de agora, o fluxo recomendado e:

```text
Editar localmente -> testar localmente -> commit -> push GitHub -> entrar na VPS -> pull -> build -> publicar dist/ no Nginx
```

A VPS deve ser usada apenas para deploy. Evite editar codigo diretamente nela, a menos que seja uma emergencia.

## Rodar localmente

No seu computador local:

```bash
cd caminho/do/PortfolioPessoal
npm install
npm run dev
```

O Vite vai abrir o projeto em algo como:

```txt
http://localhost:5173
```

## Configurar GitHub

Crie um arquivo `.env` na raiz do projeto com seu usuario do GitHub:

```env
VITE_GITHUB_USERNAME=ItsMuriloa
```

O app busca os repositorios publicos mais recentes em:

```txt
https://api.github.com/users/ItsMuriloa/repos
```

O arquivo `.env` nao deve ser versionado. Use `.env.example` como modelo.

## Personalizar dados

Edite `src/config.ts` para trocar dados do portfolio, como:

- nome;
- e-mail;
- GitHub;
- LinkedIn;
- headline;
- bio;
- habilidades;
- texto do contato;
- assunto e corpo pre-preenchidos do `mailto`.

## Antes de enviar para o GitHub

No computador local, valide:

```bash
npm run build
git status
```

Se o build passar, salve no Git:

```bash
git add .
git commit -m "Descreva sua alteracao"
git push origin main
```

## Deploy manual na VPS

Entre na VPS:

```bash
ssh oracle-vps
```

Acesse o projeto:

```bash
cd /home/ubuntu/apps/PortfolioPessoal
```

Atualize o codigo:

```bash
git pull origin main
```

Instale dependencias somente quando `package.json` ou `package-lock.json` mudar:

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

## Checklist rapido de deploy

```bash
ssh oracle-vps
cd /home/ubuntu/apps/PortfolioPessoal
git pull origin main
npm run build
sudo rsync -av --delete --chown=www-data:www-data dist/ /var/www/itsmuriloa.com/
sudo nginx -t
curl -I https://itsmuriloa.com
```

Use `npm ci` antes do build quando dependencias forem adicionadas, removidas ou atualizadas.

## Pastas importantes na VPS

```txt
/home/ubuntu/apps/PortfolioPessoal
```

Copia do repositorio. Use para `git pull`, `npm ci` e `npm run build`.

```txt
/var/www/itsmuriloa.com
```

Pasta publica do Nginx. Deve receber somente os arquivos finais de `dist/`.

## Cuidados

Nunca publique manualmente estas coisas em `/var/www/itsmuriloa.com`:

- `.env`;
- `.git/`;
- `node_modules/`;
- chaves SSH;
- tokens;
- documentacao privada;
- arquivos de backup.

Por isso o deploy usa sempre:

```bash
sudo rsync -av --delete --chown=www-data:www-data dist/ /var/www/itsmuriloa.com/
```

## Verificar estado do servidor

Comandos uteis na VPS:

```bash
node -v
npm -v
sudo nginx -t
sudo systemctl status nginx --no-pager
curl -I https://itsmuriloa.com
```
