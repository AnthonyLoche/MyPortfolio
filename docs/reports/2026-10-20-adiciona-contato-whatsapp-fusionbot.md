# Adiciona contato por WhatsApp ao FusionBOT

- Data: 2026-10-20
- Objetivo: oferecer um canal de conversa no detalhe do projeto FusionBOT, já que não há URL pública de deploy do bot.

## Alteração

- `src/data/projects.js`: substituído o array vazio de links do projeto FusionBOT por uma chamada “Conversar pelo WhatsApp · +55 47 9195-3248”, apontando para `https://wa.me/554791953248`.
- O destino contém o número fornecido pelo usuário no formato internacional aceito pelo link `wa.me`.

## Validação

- `npx eslint src/data/projects.js`: passou.
- `npm run build`: passou.
- `git diff --check`: passou.
- O destino `wa.me` foi conferido no dado do projeto; não foi iniciada uma conversa real.
- Não houve teste de navegação, commit, push ou deploy.
