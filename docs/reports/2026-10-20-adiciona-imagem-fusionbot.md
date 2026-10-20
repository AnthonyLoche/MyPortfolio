# Adiciona imagem de arquitetura ao FusionBOT

- Data: 2026-10-20
- Objetivo: incluir no detalhe do FusionBOT a imagem de arquitetura adicionada pelo usuário.

## Alterações

- Renomeado `src/assets/images/projects/fusion-bot/Arquitetura Verde do Chatbot WhatsApp.png` para `src/assets/images/projects/fusion-bot/fusion-bot-01.png`, seguindo o padrão de nomes do portfólio.
- A PNG foi definida como capa e imagem da galeria `carrouselImages` do FusionBOT em `src/data/projects.js`.
- Durante a vinculação, o checkout continha apenas a PNG nessa pasta; por isso as referências ao SVG anterior foram removidas para evitar caminhos quebrados.

## Validação

- A imagem foi aberta e inspecionada visualmente antes de ser vinculada.
- Não foram executados lint, build ou testes nesta alteração.
- Sem commit, push ou deploy.
