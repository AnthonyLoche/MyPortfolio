# Corrige posição de scroll ao navegar para projetos

- Data: 2026-10-19
- Objetivo: abrir páginas de projeto no topo, sem perder a restauração de posição ao voltar pelo histórico do navegador.

## Causa

O router Vue não definia `scrollBehavior`. Ao navegar de uma página que já estava rolada até perto do fim para `/projects/:id`, o scroll atual era mantido e a página de detalhe aparecia no final.

## Alteração

- `src/router/index.js`: adicionada política global de scroll. Navegações novas começam em `{ top: 0, left: 0 }`; quando o navegador fornece `savedPosition` (voltar/avançar), essa posição é restaurada.
- A validação da rota por ID e as demais rotas existentes foram preservadas.

## Validação

- ESLint de `src/router/index.js`: passou.
- `npm run build`: passou.
- `git diff --check`: passou.
- Verificação visual/navegação no navegador: não executada.
