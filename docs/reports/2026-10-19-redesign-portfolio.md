# Redesign completo do MyPortfolio

Data: 2026-10-19, iniciado aproximadamente às 21h em America/Sao_Paulo.

## Pedido e escopo
Redesign integral com GSAP, Taste Skill, Frontend Design, UI UX Pro Max e Impeccable. Preservar conteúdo, rotas, contatos e dados dos projetos. Implementação no checkout /home/anthony/Documentos/MyPortfolio; sem publicação autorizada nesta etapa.

## Análise inicial
Vue 3, Vite 7, JavaScript, Vue Router e Pinia. Catálogo estático com 13 projetos, dez visíveis. O checkout estava limpo ao iniciar. Backup do estado inicial e diff em /tmp/myportfolio-redesign-_ql4fayk.

O site publicado foi capturado em .taste-skill/published e o local em .taste-skill/before. A composição anterior usava verde luminoso, gradientes, badges, partículas e cartões iguais. Havia loops sem limpeza no hero, intervalos do carrossel sem encerramento e consultas de projeto sem necessidade nas páginas institucionais.

## Conteúdo e argumento
Inventário próprio: Anthony Gabriel; Araquari-SC; início no IFC em 2023; interesse pelo backend; Online Informática feito em duas semanas para organizar assistência técnica; VitaPools em Portugal, um mês e orçamentos; catálogo do petshop Cantinho Tropical; recompensas da comunidade Rafael Santos; hardware/RFID do Fábrica Door; retrato e capturas reais fornecidos.

Argumento da home: quem desenvolve → o que construiu, com capturas e problemas reais → como pensa e sua trajetória → repertório que conecta as partes → contato real.

Ideia: a passagem entre interface e engenharia vira duas leituras do mesmo trabalho. O visitante alterna A interface e Por trás do projeto; não é uma simulação de backend.

## Direção e skills
- Taste Skill: The name as a monument, seed 463317649. Chivo e Lunar and bronze. Sem redraw de slots; as imagens reais substituem a fotografia atmosférica opcional.
- Frontend Design: identidade derivada do nome e dos projetos; hierarquia editorial e composição por escala.
- UI UX Pro Max: consulta personal portfolio creative retornou Scroll-Triggered Storytelling; consulta Vue/onUnmounted reforçou limpeza de listeners. A consulta inicial mais ampla retornou FAQ, foi descartada por incompatibilidade. A composição final segue o brief e a direção Taste.
- GSAP: core, Vue/lifecycle, timeline e ScrollTrigger; matchMedia para movimento reduzido.
- Impeccable: contexto, init, new-work e craft-floor. O pedido fornece liberdade criativa e implementação direta; PRODUCT.md registra fatos já confirmados no conteúdo e na sessão. DESIGN.md registra a substituição visual. Nenhum novo padrão de trabalho comp-first foi persistido.

## Implementação
- Cabeçalho/rodapé compartilhados, menu mobile com Escape e fechamento ao navegar, indicador real de progresso e link para pular conteúdo.
- Home editorial, quatro destaques, perspectiva interface/contexto; arquivo completo aleatório com filtros e prévia.
- Trajetória, retrato, repertório em abas com navegação por teclado, contatos reais e cópia de e-mail.
- Detalhes com título único, metadados, galeria com controles, reprodução opcional e limpeza do intervalo; acesso ao original e continuidade entre projetos.
- Originais preservados. 73 derivados WebP: aproximadamente 38,40 MB de fontes para 3,58 MB no conjunto otimizado. A interface usa os derivados, com lazy loading fora da capa.
- Fonte Chivo local e licença OFL; HTML pt-BR, metadados e remoção dos scripts CDN de Vanta/Three.
- GSAP adicionado. Nenhuma migration, banco, segredo ou endpoint alterado.

## Validação e evidências
ESLint direto (`./node_modules/.bin/eslint src vite.config.js`) e `npm run build` passaram, incluindo após a revisão de composição. `git diff --check` passou nas revisões de código. O catálogo `src/data/projects.js` não foi alterado pelo redesign.

Na etapa anterior à última revisão de CSS, a inspeção funcional em Chromium registrou 32 verificações aprovadas (navegação, galerias, menu, abas, contatos, movimento reduzido e ausência de exceções); a matriz adicional percorreu as 13 páginas de projeto, rotas inválidas, reprodução automática e limpeza dos ScrollTriggers. A revisão final de composição usa novas capturas reais em 1440, 768 e 390 px. Esses registros locais não comprovam funcionamento em todos os navegadores ou aparelhos.

Detector Impeccable geral sem achados na primeira revisão; a avaliação visual independente apontou recorte de capturas no arquivo mobile, corrigido com `object-fit: contain`. Capturas integrais complementares foram refeitas após percorrer a página para carregar imagens lazy e assentar os reveals.

## Revisão a partir do feedback do usuário
O usuário aprovou a ideia geral, mas rejeitou a retirada do verde, a composição abstrata, os títulos/imagens partidos e a pouca presença do movimento. Esse feedback passa a ser a autoridade visual da tarefa.

A identidade foi ajustada para preservar o verde original #38df5c, com fundo escuro de tonalidade verde, painéis de captura inteiros e contextos de projeto organizados ao lado. O nome continua como assinatura tipográfica, em uma composição com projeto real na primeira tela. O efeito de metades opostas foi removido; GSAP passou a coordenar a entrada do nome, uma transição verde entre páginas, entrada de superfícies pelo scroll e interações nas imagens. Movimento reduzido continua respeitado.

A paleta Lunar and bronze inicialmente sorteada foi substituída pela identidade verde explicitamente solicitada pelo usuário. Não há fotos externas, mockups ou métricas inventadas.

## Revisão de composição após aprovação do movimento
Na continuidade, o usuário aprovou animações e apresentações, mas manteve a crítica de elementos quebrados, fora do lugar e jogados. O escopo passou a ser a composição, preservando os scripts GSAP existentes.

Causa visual observada: moldura quase de ponta a ponta, colunas com proporções diferentes entre seções, distâncias grandes entre texto e imagem, e controles da prévia soltos fora da superfície da captura.

Correção concentrada em `src/assets/main.css`:
- Conteúdo central limitado a 1248 px, com margens e distância entre colunas compartilhadas.
- Nome com escala menor; prévia, título, resumo e controles agrupados em uma superfície.
- Cada projeto une texto e imagem completa em um mesmo conjunto, com espaçamento interno consistente.
- Cabeçalhos, trajetória e repertório seguem colunas comuns; fatos e abas têm agrupamento explícito.
- Separação entre regiões por espaçamento e linhas de estrutura; contato e cabeçalho têm limites claros.
- Mobile mantém leitura linear, espaçamento interno próprio e imagens completas no arquivo.
- O rodapé respeita a largura máxima também na assinatura tipográfica.

Essa etapa não alterou conteúdo, banco, dependências ou lógica de movimento. DESIGN.md e seu sidecar consolidam os valores efetivamente implementados. Evidências locais: `.impeccable/review/composition/` (ignoradas no Git). A aprovação visual do usuário para a nova composição permanece pendente.

A revisão independente encontrou também altura de 800px imposta pelo atributo HTML da prévia do arquivo desktop/tablet. Foi corrigida com `height: auto` e proporção 1.6; a legenda volta a ficar próxima da imagem. Detector de layout retornou `[]`. Capturas finais da home mediram molduras iguais entre cabeçalho e obras (1248px em tela 1440; aproximadamente 706.55px em 768; 350px em 390), sem overflow horizontal, imagens pendentes ou exceções no percurso capturado.

Confirmação independente final: `ship` após revisar a correção da prévia e as capturas de contato em 1440/768px. Os dois achados foram considerados resolvidos, sem regressão material observada. Esse parecer cobre a inspeção visual fornecida e os achados revisados; não é aprovação estética do usuário nem auditoria funcional de todos os aparelhos. A recaptura de arquivo/contato em 1440/768/390 também registrou títulos com opacidade 1, largura sem overflow e localização Joinville.

## Localização solicitada na continuidade
O usuário pediu Joinville em lugar de Araquari como localização atual. `src/data/profile.js` passa a centralizar Joinville, Santa Catarina e Joinville, SC. Hero e legenda do retrato passaram a consumir esses dados; contato e rodapé já os utilizavam. PRODUCT.md e a nota do Obsidian foram atualizados. Araquari foi preservada nas informações históricas do IFC e dos projetos do campus.

## Arquivos e manutenção técnica
- Shell e navegação: `src/App.vue`, `src/router/index.js`, `src/views/`, cabeçalho e rodapé compartilhados.
- Interface: `src/assets/main.css`, componentes de hero, projetos, trajetória, repertório e contato.
- Apoio: `src/lib/`, `src/composables/`, `src/data/profile.js`, `src/data/projectStories.js`, `ArrowIcon.vue`.
- Assets/documentos: fonte e licença em `src/assets/fonts/`, derivados em `src/assets/images/optimized/`, PRODUCT.md, DESIGN.md, sidecar de design e este relatório. Capturas locais de inspeção ignoradas em `.gitignore`.
- Configuração: `index.html`, `vite.config.js`, `package.json` e lockfile. GSAP adicionado; dependências Three, Vanta e vue-material-design-icons removidas. Plugin de devtools retirado da configuração Vite. Nenhuma nova dependência na etapa de composição.
- Correções durante o redesign: normalização de caminhos antes de resolver WebP; substituição da transição de imagens que desmontava o elemento da galeria; pré-carregamento e controle de solicitação da imagem; validação de parâmetros de projeto a cada navegação; cleanup de timers, observers, listeners e animações.

## Persistência
Nota existente do Obsidian MyPortfolio atualizada por append, com confirmação de gravação: direção verde, aprovação do movimento, composição aguardando retorno do usuário, limites da inspeção e localização Joinville. Histórico da nota preservado.

## Limites
Sem commit, push ou deploy. URLs externas dos projetos são preservadas dos dados existentes; a disponibilidade de cada serviço externo não é comprovada por este redesign.
