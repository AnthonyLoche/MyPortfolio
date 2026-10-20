export const projectStories = {
  13: { challenge: 'Entre visitas técnicas, anotações e cobranças, informações importantes se perdiam.', solution: 'Um sistema privado reúne clientes, ordens de serviço, agenda e financeiro. Cron jobs cuidam dos lembretes.', focus: 'Gestão de ponta a ponta' },
  12: { challenge: 'Uma empresa de Portugal precisava ganhar visibilidade e atender seu volume de pedidos de orçamento.', solution: 'Website com foco em SEO e automação de orçamentos, entregue e hospedado em um mês.', focus: 'Presença digital e automação' },
  11: { challenge: 'Apresentar um petshop em Mafra, Portugal, e dar autonomia para manter seu catálogo.', solution: 'Website institucional e painel administrativo para gerenciar produtos, categorias e marcas.', focus: 'Website e gestão de catálogo' },
  10: { challenge: 'Reorganizar a experiência de uma comunidade de streaming e sua plataforma de recompensas.', solution: 'Redesign, componentização e revisão das regras de acesso no Firebase para o sistema de pontos e trocas.', focus: 'Experiência e engenharia' },
}
export function projectCategory(project) {
  return /landing|website|portfolio/i.test(project.type + ' ' + project.title + ' ' + project.description) && !/monolito|fullstack/i.test(project.type) ? 'Websites' : 'Sistemas'
}
