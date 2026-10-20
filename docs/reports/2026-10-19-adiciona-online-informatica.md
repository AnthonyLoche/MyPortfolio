# Adiciona Online Informática ao portfolio

- Data: 2026-10-19
- Objetivo: renomear as capturas fornecidas e cadastrar o projeto Online Informática no catálogo do portfolio.
- Contexto: o cliente realiza consertos de computadores, serviços de informática e visitas técnicas. Antes, organizava compromissos e pendências em Google Docs e na agenda do iPhone; com vários atendimentos simultâneos, informações se perdiam e cobranças podiam ser esquecidas. O sistema centraliza o acompanhamento da operação.
- Arquivos alterados:
  - `src/data/projects.js`
  - `src/assets/images/projects/online-informatica/online-informatica-01.png` a `online-informatica-11.png` (renomeados a partir das capturas com data e hora)
- Comportamento novo: o projeto aparece na vitrine, possui onze imagens no carrossel e apresenta a motivação do produto, os problemas da rotina anterior e a solução entregue.
- Dados do catálogo: status "Concluído"; feito em duas semanas; aplicação monolítica com front-end e back-end no mesmo projeto; Next.js, React, Prisma ORM, PostgreSQL e Tailwind CSS. Cron jobs emitem lembretes para avisos agendados. O projeto é fechado para uso privado do cliente e não possui link público de deploy.
- Dependências, migrations, endpoints e variáveis de ambiente: não alterados.
- Validação: ESLint em `src/data/projects.js`, `npm run build`, verificação dos onze arquivos referenciados e `git diff --check` passaram.
- Limitações: o ano não foi informado e ficou sem confirmação no catálogo. Por se tratar de uso privado, não há deploy público.
