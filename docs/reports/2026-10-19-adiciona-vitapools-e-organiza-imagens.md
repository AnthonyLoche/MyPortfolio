# Adiciona VitaPools e organiza imagens por projeto

- Data: 2026-10-19
- Objetivo: incluir VitaPools no portfólio com as capturas fornecidas e separar os screenshots por projeto.
- As 10 capturas novas foram identificadas pelo usuário como VitaPools; foram mantidas sem edição visual.

## Alterações

- `src/data/projects.js`: todas as referências de screenshots apontam agora para pastas por projeto em `src/assets/images/projects/<slug>/`, com nomes sequenciais `<slug>-01.png` etc. Foi adicionado VitaPools com 10 imagens. A captura final foi escolhida para o card; o carrossel começa por ela e segue pelas demais.
- 61 imagens foram movidas e renomeadas entre 12 pastas: 11 pastas dos projetos já cadastrados e `vita-pools`. A foto pessoal `MyPhoto.jpeg` permaneceu na pasta original. Nenhuma imagem foi editada ou excluída.
- Atualização posterior com informações do usuário: VitaPools é um website para uma empresa de Portugal, feito e entregue já hospedado em um mês. O objetivo é ampliar a visibilidade da empresa por SEO e automatizar a elaboração de orçamentos para o volume de clientes. O cadastro mostra status “Concluído”, duração “1 mês”, tipo “Website e automação de orçamentos” e tecnologias Next.js, React, Tailwind CSS e SEO. O link `https://www.vitapools.pt/` foi informado pelo usuário e não foi validado ao vivo; o ano segue como “A definir”.
- `src/components/sections/projects/ProjectsSection.vue`: os cards agora aparecem em ordem aleatória a cada montagem da vitrine. O embaralhamento atua somente sobre uma cópia dos projetos visíveis, preserva a lista original e mantém a ordem estável durante a renderização da seção.
- A nota do projeto MyPortfolio no Obsidian foi atualizada com o novo projeto e a convenção das pastas de screenshots.

## Validação

- ESLint nos arquivos Vue/JS alterados: passou.
- `npm run build`: passou.
- `git diff --check`: passou.
- Verificação da store confirmou 12 projetos, 10 imagens de VitaPools e os três projetos previamente ocultos ainda cadastrados.
- Contagem local confirmou 61 imagens em 12 pastas de projeto.
- Na alteração posterior do embaralhamento dos cards, ESLint do componente e `npm run build` passaram novamente; `git diff --check` também passou.
- Não houve deploy nem teste no site publicado.

## Pendências

Confirmar o ano de VitaPools se for necessário mostrá-lo no portfólio. Não foram fornecidos detalhes adicionais sobre o fluxo de orçamentos ou a infraestrutura de hospedagem.
