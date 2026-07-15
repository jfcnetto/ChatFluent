# Regras do Workspace: ChatFluent

Este arquivo define o contexto e as regras para o assistente Antigravity ao trabalhar no projeto **ChatFluent**.

## Contexto do Projeto
* **Nome:** ChatFluent
* **Objetivo:** Plataforma gratuita para aprender inglês de forma prática e divertida, utilizando histórias interativas e situações do mundo real, com feedback imediato e sem necessidade de cadastro.
* **Hospedagem / Produção:** GitHub Pages (URL: https://jfcnetto.github.io/ChatFluent/)

## Estrutura do Projeto
O projeto é estruturado de forma estática com suporte a múltiplos idiomas em pastas dedicadas:
* `index.html`: Página principal (raiz).
* `/css/style.css`: Estilos globais (Vanilla CSS).
* `/js/app.js`: Lógica principal da aplicação.
* `/js/data.js`: Dados das histórias e conteúdos.
* `/js/idiomas.js`: Gerenciamento de tradução e idiomas.
* `/pt/`, `/en/`, `/es/`, `/fr/`, `/de/`, `/it/`, `/ja/`, `/nl/`, `/pl/`, `/ru/`, `/tr/`: Pastas de páginas traduzidas contendo `index.html`, `historia.html`, etc.
* `/scripts/`: Scripts auxiliares.

## Diretrizes de Desenvolvimento
1. **Preservar a Estrutura Multilíngue:** Ao fazer alterações na interface ou nas histórias, garanta que os arquivos de tradução e as respectivas pastas de idiomas (`/pt/`, `/en/`, etc.) sejam mantidos em sincronia.
2. **Estilo CSS Puro (Vanilla):** Use CSS limpo, moderno e responsivo em `/css/style.css`. Evite frameworks CSS a menos que explicitamente solicitado.
3. **Organização das Histórias:** As histórias interativas devem ser mantidas e atualizadas em `/js/data.js`.
4. **Sem Cadastro:** Lembre-se de que a plataforma não exige cadastro do usuário; o progresso deve ser salvo localmente (ex: `localStorage`) quando necessário.
5. **SEO:** Sempre otimizar tags de título, metadados e estrutura semântica nos arquivos HTML das pastas de idiomas.
