# Portfolio Pessoal

Portfolio em React, Vite e TypeScript com projetos carregados automaticamente da API pública do GitHub.

## Como rodar

```bash
npm install
npm run dev
```

## Configurar GitHub

Crie um arquivo `.env` na raiz do projeto com seu usuário do GitHub:

```bash
VITE_GITHUB_USERNAME=seu-usuario
```

Depois reinicie o servidor de desenvolvimento. O portfolio busca os repositórios públicos mais recentes em:

```txt
https://api.github.com/users/SEU_USUARIO/repos
```

Quando você criar um novo repositório público, ele aparece automaticamente na próxima visita ou recarregamento da página.

## Personalizar dados

Edite `src/config.ts` para trocar nome, cargo, localização, e-mail, bio e habilidades.
