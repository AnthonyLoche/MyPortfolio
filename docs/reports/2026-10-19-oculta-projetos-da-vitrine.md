# Oculta projetos da vitrine sem apagar os dados

- Data: 2026-10-19
- Objetivo: tirar GoRoutes, Fex Company e Fabrica Hackathon das listas públicas de projetos, preservando seus cadastros e detalhes.
- Antes: os 11 projetos apareciam na seção reutilizada pela home e pela página `/projects`.
- Depois: os três registros continuam em `src/data/projects.js`, marcados com `showInShowcase: false`; `ProjectsSection.vue` filtra somente os cartões exibidos. As páginas de detalhe continuam acessíveis pelos IDs existentes.

## Arquivos alterados

- `src/data/projects.js`: preserva os registros e marca os três como não exibidos na vitrine.
- `src/components/sections/projects/ProjectsSection.vue`: exclui da listagem somente registros com `showInShowcase: false`.
- `src/router/index.js`: seleciona o projeto na entrada da rota e retorna IDs inexistentes à lista.
- `src/views/ProjectViewById.vue`: remove a busca duplicada após a montagem; o router prepara o projeto antes de abrir o detalhe.
- `docs/reports/2026-10-19-oculta-projetos-da-vitrine.md`: registra a alteração.

## Validação

- `npm exec -- eslint src/data/projects.js src/components/sections/projects/ProjectsSection.vue src/router/index.js src/views/ProjectViewById.vue`: passou.
- `npm run build`: passou.
- `git diff --check`: passou.
- Verificação local da store confirmou 11 registros, oito exibidos e os três títulos solicitados ocultos.
- Não foi feito deploy nem inspeção no site publicado.

## Impacto e limites

- Nenhum registro ou imagem foi apagado.
- `/projects/2`, `/projects/5` e `/projects/6` continuam podendo abrir os detalhes correspondentes.
- Nenhuma dependência, variável de ambiente, migration ou integração foi alterada.
