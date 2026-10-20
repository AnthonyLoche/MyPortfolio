# Adiciona Fusion Virtual ao portfolio

- Data: 2026-10-20
- Objetivo: padronizar as capturas fornecidas do site da Fusion Virtual e cadastrar o projeto no portfolio.
- Contexto: o site apresenta um catálogo comercial de peças para notebooks e telas para smartphones, com busca por modelo ou part number, filtros e consulta de garantia.
- Arquivos alterados: `src/data/projects.js`, `src/data/projectStories.js`.
- Imagens renomeadas: sete capturas em `src/assets/images/projects/fusion-virtual/`, agora de `fusion-virtual-01.png` a `fusion-virtual-07.png`, em ordem cronológica.
- Comportamento novo: Fusion Virtual passa a constar como projeto 14, com resumo, tecnologias, história do projeto, carrossel das capturas e link para o site público.
- Dados registrados: Next.js e React; ano e duração permanecem “A definir”, pois não foram confirmados.
- Link público: `https://fusionvirtual.com.br/`, acessado durante a tarefa.
- Dependências, migrations, endpoints e variáveis de ambiente: não alterados.
- Validação: ESLint nos arquivos de dados, `npm run build`, `git diff --check` e conferência de que as sete imagens padronizadas existem passaram.
- Limitações no cadastro inicial: a implementação interna do website não foi inspecionada; o contexto técnico inicial veio do Obsidian e foi complementado pelo usuário abaixo.
- Pendência após o complemento: ano do projeto ainda sem confirmação.

## Complemento de informações — 2026-10-20

O usuário confirmou que o projeto foi desenvolvido em um mês com Next.js, React, Tailwind CSS e CSS. O catálogo integra com um ERP para obter produtos e usa um sistema de cache para evitar requisições repetidas. A hospedagem foi feita em Dokku e o domínio foi conectado por um Cloudflare Tunnel. O campo de duração foi atualizado para “1 mês”; o ano continua sem confirmação. `src/data/projects.js` e a história do projeto em `src/data/projectStories.js` foram atualizados com esses dados. Nenhuma dependência, endpoint, migration ou variável de ambiente foi alterada nesta atualização.
