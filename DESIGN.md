---
name: MyPortfolio
description: Portfólio de Anthony Gabriel com identidade verde, projetos reais e movimento coordenado.
colors:
  brand-green: "#38df5c"
  bg: "#101411"
  surface: "#18201b"
  surface-raised: "#233029"
  ink: "#f3f7f4"
  muted: "#a9b5ac"
  accent-ink: "#0b2112"
  rule: "#2b382f"
typography:
  display:
    fontFamily: "Chivo, sans-serif"
    fontSize: "clamp(80px, 9.2vw, 132px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Chivo, sans-serif"
    fontSize: "clamp(2.5rem, 1.3rem + 4.7vw, 6rem)"
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Chivo, sans-serif"
    fontSize: "clamp(32px, 3.2vw, 46px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Chivo, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.16vw, 1.1875rem)"
    lineHeight: 1.5
  lead:
    fontFamily: "Chivo, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.5vw, 1.625rem)"
rounded:
  square: "0px"
  surface: "16px"
spacing:
  gutter: "clamp(20px, 4vw, 64px)"
  column-gap: "clamp(32px, 4vw, 64px)"
  section-space: "clamp(80px, 8vw, 120px)"
  surface-padding: "32px"
  mobile-surface-padding: "24px"
components:
  button-primary:
    backgroundColor: "{colors.brand-green}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.square}"
    padding: "15px 23px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
  button-text:
    textColor: "{colors.ink}"
    padding: "4px 0"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "{spacing.surface-padding}"
  project:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "40px"
  navigation:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
  navigation-active:
    textColor: "{colors.brand-green}"
---

# Design System: MyPortfolio

## Overview

**Creative North Star: "Nome como assinatura, trabalho como evidência"**

O nome de Anthony tem escala de assinatura e convive com interfaces reais. A identidade verde original é uma preferência explícita do usuário. O conteúdo dos projetos e o retrato fornecido dão caráter ao portfólio; a composição usa hierarquia tipográfica, alinhamentos e superfícies para organizar essa evidência.

A direção Taste `name-as-monument`, seed `463317649`, foi adaptada ao feedback: a paleta bronze e o efeito de metades foram substituídos pelo verde e por capturas inteiras. O usuário considerou as animações e apresentações satisfatórias, mas apontou que a composição ainda parecia desorganizada. O ajuste seguinte, apenas no CSS, está registrado como estado implementado e aguarda inspeção visual; não representa aprovação dessa nova composição.

**Key Characteristics:**
- Verde de identidade sobre neutros escuros com tonalidade verde.
- Chivo local, escala tipográfica ampla e leitura em português.
- Projetos reais apresentados com seu contexto e capturas inteiras.
- Movimento GSAP preservado, com alternativa para movimento reduzido.

Fontes: `src/assets/main.css`, componentes em `src/components/`, `src/composables/usePageMotion.js`, `src/App.vue`, `PRODUCT.md` e `docs/reports/2026-10-19-redesign-portfolio.md`. Esta extração descreve o código, sem certificar a composição no navegador.

## Colors

### Primary

O verde de identidade (`brand-green`) aparece no nome, monograma, ações principais, seleção, estados ativos, progresso e transição de rota. O acento global aponta para esse token. O rodapé usa o verde como fundo e inverte as cores da ação dentro de seu contexto.

### Neutral

O fundo (`bg`) ancora a página. A superfície (`surface`) agrupa prévias, projetos, fatos e repertório; a superfície elevada (`surface-raised`) responde a controles interativos. O texto principal (`ink`) sustenta a leitura, enquanto o texto secundário (`muted`) identifica metadados. O texto sobre verde (`accent-ink`) e as linhas de divisão (`rule`) completam os papéis existentes.

As rampas OKLCH do sidecar são amostras sintetizadas para o painel, mantendo matiz e cromaticidade do token. Não são uma escala usada pelo site nem substituem os valores normativos do frontmatter.

**The Identity Rule.** Preserve o verde de identidade; as cores próprias dos produtos pertencem às capturas reais.

## Typography

**Display Font:** Chivo variável local, com fallback sans-serif e licença OFL.

**Body Font:** a mesma Chivo; a hierarquia vem de escala, peso e espaço.

O nome da capa usa `display`; títulos de seção usam `headline`; títulos dos projetos em destaque usam `title`. Corpo e introduções usam `body` e `lead`; metadados têm variações locais entre 13 e 16px. O rodapé possui assinatura própria de peso 900. O título da página de projeto tem escala específica, com variante menor para títulos longos.

O corpo tem entrelinha geral de 1,5; textos longos usam 1,65 a 1,75. Comprimentos observados incluem 43ch na introdução, 37ch no resumo de projeto e 70ch no relato longo. No mobile, o nome usa `clamp(76px, 24vw, 150px)`; títulos comuns reduzem para a escala responsiva definida no CSS.

## Layout

A moldura central tem largura máxima de 1248px. As margens laterais usam `gutter`; os principais pares de colunas compartilham `column-gap`. Hero, introduções de seção, trajetória e arquivo usam pares alinhados. Cada projeto reúne texto e captura em uma superfície única, com colunas de 0,85fr e 1,25fr, respiro interno de 40px e intervalo de 40px.

O hero agrupa captura, legenda e controles em uma superfície. Fatos e repertório também possuem superfícies próprias; essa composição não exige transformar todo conteúdo em cartão. As grandes áreas usam `section-space` e linhas discretas.

Em até 1050px, alguns intervalos e proporções são ajustados. Em até 760px, os pares principais passam a uma coluna, a margem lateral é 20px, o menu substitui a navegação desktop e a prévia fixa do arquivo dá lugar a capturas dentro da lista. Os projetos usam 24px de respiro interno. Abaixo de 360px, a legenda da marca é omitida. Há um ajuste pontual a partir de 1800px. O breakpoint de movimento desktop é independente: 800px.

## Elevation & Depth

Não há sombras no CSS atual. A profundidade vem de camadas tonais, bordas discretas, agrupamento e movimento. Cabeçalho e prévia do arquivo usam `sticky`. Capturas e retrato recebem translações e escalas controladas pelo GSAP. A transição de rota é uma superfície verde sem interação própria.

**The Flat Surface Rule.** Mantenha a separação por tom, espaço e alinhamento; não acrescente glow, gradientes decorativos ou sombras em repouso.

## Shapes

Superfícies de destaque, retrato, prévia do arquivo, fatos e repertório usam `rounded.surface`. Ações, controles e abas preservam cantos retos. As linhas estruturais têm 1px; o progresso tem 2px. O foco usa contorno de 3px com afastamento de 6px na cor de acento do contexto.

Capturas principais usam `object-fit: contain`, preservando a interface inteira. Retrato e miniaturas de navegação usam `cover` intencionalmente. Não generalize esse recorte para as capturas principais.

## Components

### Actions

A ação principal é um retângulo verde, texto escuro, peso 500 e altura mínima de 58px. No hover, o fundo passa ao texto claro e a seta se desloca. A ação textual tem altura mínima de 48px e respiro vertical de 4px. Ambas recebem o foco global. Na capa mobile, a ação principal reduz para 52px de altura mínima.

### Navigation

Cabeçalho persistente com monograma verde, legenda, links e acesso por e-mail. A rota atual recebe verde; os rótulos desktop fazem troca vertical no hover e foco. O menu mobile fecha ao navegar e com Escape, devolvendo o foco ao botão. O progresso representa a posição real da leitura.

### Project presentation

Texto e imagem pertencem ao mesmo bloco visual. O controle de perspectiva alterna a interface inteira e o contexto do projeto; é conteúdo explicativo real. O arquivo tem filtros, ordem aleatória na montagem e prévia por hover ou foco. No mobile, a captura acompanha cada item.

### Preview and gallery

A prévia da capa oferece navegação, pausa e apresentação automática a cada seis segundos, suspensa durante interação, fora de visibilidade ou com movimento reduzido. A galeria individual tem controles, miniaturas e reprodução opcional; os controles quadrados usam a superfície e mudam para o tom elevado no hover. A captura principal permanece inteira.

### Repertoire and facts

O repertório usa abas semânticas com seleção verde, painel associado e navegação por teclado. Os fatos usam lista de definições em uma superfície compartilhada. O contato utiliza destinos reais e cópia de e-mail com feedback; não há campos de formulário implementados.

### Motion

Preserve a sequência GSAP implementada: linhas do nome, introdução, ações e prévia entram em sequência; grupos aparecem no scroll; projetos assentam com translação, escala e rotação discreta; o retrato tem deslocamento contínuo; a navegação usa passagem verde. Há limpeza de contexto, listeners e intervalos ao desmontar. `prefers-reduced-motion` desliga os movimentos GSAP da página e a rotação automática da capa, reduz transições CSS e mantém a galeria manual. Sem sequestro de scroll ou carregamento artificial.

## Do's and Don'ts

### Do:

- **Do** preserve o verde de identidade e o movimento já implementado ao refinar a composição.
- **Do** mantenha títulos, contexto e capturas reais alinhados dentro da moldura compartilhada.
- **Do** preserve capturas principais inteiras, foco visível e alternativas para movimento reduzido.
- **Do** use conteúdo, retrato e interfaces reais, preservando o contexto dos sistemas privados.

### Don't:

- **Don't** acrescente glow, gradientes decorativos ou sombras em repouso.
- **Don't** parta títulos ou interfaces em metades como efeito decorativo.
- **Don't** invente métricas, depoimentos, clientes, prêmios ou fotografias de banco.
- **Don't** trate o ajuste atual de composição como aprovado antes da inspeção do usuário.
