# Adiciona o projeto FusionBOT ao portfólio

- Data: 2026-10-20
- Objetivo: registrar o FusionBOT no catálogo do MyPortfolio e criar uma imagem autoral do fluxo e da arquitetura.
- Fonte técnica consultada: checkout `/home/anthony/Documentos/Fusion/FusionBOT`, incluindo a implementação do agente, fluxo de mensagens, consulta do catálogo, painel e schema Prisma.

## Alterações

- `src/data/projects.js`: adicionado o projeto FusionBOT (id 15), com descrição, tecnologias confirmadas e resumo funcional. Não foi associado um link público de deploy.
- `src/data/projectStories.js`: adicionados desafio, solução e foco do projeto.
- `src/assets/images/projects/fusion-bot/fusion-bot-01.svg`: criado diagrama vetorial acessível do atendimento, ramificações de consulta, cache, handoff e painel/dados.

## Conteúdo registrado

- O bot recebe mensagens pelo WhatsApp usando Baileys e conduz o fluxo em Node.js.
- O agente usa Gemini com function calling para consultar o catálogo do GestãoClick, buscar telas no inventário próprio ou encaminhar casos à equipe.
- As buscas de grupos e produtos usam cache em memória com TTL de 30 minutos.
- Mensagens com imagem podem passar por Gemini Vision para extrair informações úteis à consulta.
- O projeto também contém painel/API em Express e EJS e persistência PostgreSQL acessada com Prisma.
- A implementação atual executa o agente Gemini dentro do FusionBOT; não depende de um serviço Flask externo mencionado no README antigo.
- Duração e ano não foram informados e permanecem como “A definir”. Não foi atribuído ao bot o domínio público do website Fusion Virtual.

## Validação

- `npx eslint src/data/projects.js src/data/projectStories.js`: passou.
- `npm run build`: passou.
- `git diff --check`: passou.
- Diagrama renderizado localmente no Chrome headless e inspecionado visualmente.
- Sem teste da navegação em browser da aplicação, commit, push ou deploy.
