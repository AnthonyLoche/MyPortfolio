# Amplia projetos disponíveis no hero

- Data: 2026-10-20
- Objetivo: permitir navegar por mais de três projetos na prévia rotativa do hero da página inicial.
- Causa: `HeroMain.vue` mantinha uma lista fixa com os IDs 13, 12 e 11.
- Arquivo alterado: `src/components/sections/hero/HeroMain.vue`.
- Comportamento novo: mantém os três projetos atuais no início e acrescenta todos os demais projetos com `showInShowcase` diferente de `false`; o contador e a navegação incluem 11 projetos visíveis.
- Conteúdo: quando um projeto não tem resumo específico do hero, a descrição cadastrada no catálogo é usada como alternativa.
- Desempenho: o pré-carregamento inicial foi limitado aos três primeiros projetos, evitando baixar todas as capturas de uma vez.
- Dependências, migrations, endpoints e variáveis de ambiente: não alterados.
- Validação: ESLint do componente, `npm run build` e `git diff --check` passaram.
- Limitações: a navegação foi validada por lint e build, sem teste manual em navegador nesta tarefa.
