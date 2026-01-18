import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  const state = reactive({
    projects: [
      {
        id: 1,
        title: 'Fábrica Door',
        description:
          'Um sistema de segurança de acesso da Fábrica de Software, usando ESP32 e RFID.',
        logo: new URL('@/assets/images/fabricaDoorPage.png', import.meta.url).href,
        image: new URL('@/assets/images/fabricaDoorPage.png', import.meta.url).href,
        status: 'Concluído',
        type: 'FullStack - (Web - Hardware)',
        technologies: ['Vue.js', 'Node.js (express)', 'C++', "ESP32"],
        duration: '6 meses',
        year: '2025',
        carrouselImages: [
          new URL('@/assets/images/fabricaDoorPage.png', import.meta.url).href,
          new URL('@/assets/images/FabricaDoorPage2.png', import.meta.url).href,
          new URL('@/assets/images/FabricaDoorPage3.png', import.meta.url).href,
          new URL('@/assets/images/FabricaDoorPage4.png', import.meta.url).href,
        ],
        links: [
          {
            label: 'FrontEnd',
            url: 'https://github.com/fabricadesoftware-ifc/FabricaDoor_Frontend',
            type: 'secondary',
            icon: '💻',
          },
          {
            label: 'AuthMock',
            url: 'https://github.com/fabricadesoftware-ifc/doorAuthMock',
            type: 'primary',
            icon: '📋',
          },
        ],
        about:
          'O Fábrica Door é uma solução integrada de controle de acesso físico desenvolvida pela Fábrica de Software do Instituto Federal Catarinense (IFC), que une hardware, software e interface web em um sistema completo, flexível e de fácil uso. O projeto é composto por três partes principais: o HardwareDoor, baseado no microcontrolador ESP32, responsável pela comunicação com dispositivos físicos como leitores RFID, relés, LEDs e buzzer, permitindo a abertura de portas, o registro de cartões e a configuração local por meio de uma interface web embarcada; o FabricaDoor_Frontend, desenvolvido em Vue.js, que oferece aos administradores uma plataforma moderna e responsiva para gerenciamento de usuários, permissões, horários de acesso e logs; e o doorAuthMock, um backend em Node.js e Express que simula a autenticação de usuários e dispositivos, fornecendo APIs RESTful documentadas no Swagger. A integração desses três componentes resulta em uma solução coesa e escalável, voltada à segurança e automação de ambientes restritos, sendo aplicável em instituições de ensino, laboratórios, empresas e outros espaços que demandem maior controle sobre fluxos de entrada. O projeto evidencia não apenas a viabilidade técnica da proposta, mas também o potencial de iniciativas acadêmicas em criar soluções reais com tecnologias modernas, acessíveis e de código aberto.',
      },
      {
        id: 2,
        title: 'GoRoutes',
        description:
          'Um sistema de gerenciamento de rotas e transporte escolar com otimização das rotas.',
        logo: new URL('@/assets/images/GoRoutesPage.png', import.meta.url).href,
        image: new URL('@/assets/images/GoRoutesPage.png', import.meta.url).href,
        status: 'Descontinuado',
        type: 'FullStack - (Web)',
        technologies: ['Django', 'Vue.js'],
        duration: '---',
        year: '2025',
        carrouselImages: [
            new URL('@/assets/images/GoRoutesPage.png', import.meta.url).href,
            new URL('@/assets/images/GoRoutesPage2.png', import.meta.url).href,
            new URL('@/assets/images/GoRoutesPage3.png', import.meta.url).href,
            new URL('@/assets/images/GoRoutesPage4.png', import.meta.url).href,
            new URL('@/assets/images/GoRoutesPage5.png', import.meta.url).href,
            new URL('@/assets/images/GoRoutesPage6.png', import.meta.url).href,
            new URL('@/assets/images/GoRoutesPage7.png', import.meta.url).href,
        ],
        links: [
          {
            label: 'FrontEnd',
            url: 'https://github.com/GoRoutes/GoRoutes_FrontEnd',
            type: 'secondary',
            icon: '💻',
          },
          {
            label: 'BackEnd',
            url: 'https://github.com/GoRoutes/GoRoutes_BackEnd',
            type: 'primary',
            icon: '📋',
          },
          {
            label: 'Docs',
            url: "https://github.com/GoRoutes/Docs_GoRoutes",
            type: 'secondary',
            icon: '📋',
          }
        ],
        about: "Após dialogarmos com administradores de diversas empresas de transporte escolar, identificamos que o gerenciamento manual das rotas frequentemente se revela um processo moroso e ineficiente, especialmente quando há um grande número de alunos a serem atendidos. Diante desse cenário, nosso sistema foi concebido com o propósito de otimizar essa gestão, oferecendo um serviço automatizado de planejamento de rotas. A solução permite que a empresa insira os endereços dos alunos, bem como os pontos de partida e destino, para então calcular a rota mais eficiente. Além disso, o sistema realiza a distribuição estratégica dos alunos entre diferentes veículos, agrupando aqueles cujos trajetos apresentam maior similaridade."
      },
      {
        id: 3,
        title: 'Meu Portfolio',
        description: 'Um portfólio pessoal para exibir projetos e habilidades.',
        logo: new URL('@/assets/images/PortfolioPage.png', import.meta.url).href,
        image: new URL('@/assets/images/PortfolioPage.png', import.meta.url).href,
        status: 'Concluído',
        type: 'FrontEnd - (Web)',
        technologies: ['Vue.js'],
        duration: '1 mês',
        year: '2025',
        carrouselImages: [
            new URL('@/assets/images/PortfolioPage.png', import.meta.url).href,
            new URL('@/assets/images/PortfolioPage2.png', import.meta.url).href,
            new URL('@/assets/images/PortfolioPage3.png', import.meta.url).href,
            new URL('@/assets/images/PortfolioPage4.png', import.meta.url).href,
            new URL('@/assets/images/PortfolioPage5.png', import.meta.url).href,
        ],
        links: [
          {
            label: 'Código',
            url: 'https://github.com/AnthonyLoche/MyPortfolio',
            type: 'secondary',
            icon: '💻',
          },
          {
            label: 'Deploy',
            url: 'https://my-portfolio-anthonygabriel.vercel.app/',
            type: 'secondary',
            icon: '📋',
          },
        ],
        about: "Este portfólio pessoal foi desenvolvido com o objetivo de apresentar meus projetos, habilidades e experiências de forma organizada e atraente. Utilizando Vue.js, criei uma interface moderna e responsiva que facilita a navegação e a visualização do conteúdo. O portfólio inclui seções dedicadas a diferentes categorias de projetos, cada uma detalhando as tecnologias utilizadas, desafios enfrentados e soluções implementadas. Além disso, o design foi cuidadosamente pensado para refletir minha identidade profissional, com atenção especial à usabilidade e acessibilidade. Este projeto não apenas serve como uma vitrine do meu trabalho, mas também demonstra minhas capacidades técnicas em desenvolvimento web front-end."
      },
      {
        id: 4,
        title: 'Fabrica Portal',
        description:
          'Um sistema de gerenciamento de acesso e informações para a Fabrica de Software.',
        logo: new URL('@/assets/images/FabricaPortalPage.png', import.meta.url).href,
        image: new URL('@/assets/images/FabricaPortalPage.png', import.meta.url).href,
        status: 'Concluído',
        type: 'FullStack - (Web)',
        technologies: ['Vue.js', 'Django', "RabbitMQ", "Celery"],
        duration: '1 mês',
        year: '2025',
        carrouselImages: [new URL('@/assets/images/FabricaPortalPage.png', import.meta.url).href],
        links: [
          { label: 'Ver Demo', url: 'https://meuprojeto.demo', type: 'primary', icon: '🔗' },
          {
            label: 'Ver Código',
            url: 'https://github.com/meuprojeto',
            type: 'secondary',
            icon: '💻',
          },
          {
            label: 'Documentação',
            url: 'https://docs.meuprojeto.com',
            type: 'secondary',
            icon: '📋',
          },
        ],
      },
      {
        id: 5,
        title: 'Fex Company',
        description: 'Um sistema de gerenciamento de pedidos e rotas para uma empresa de entregas.',
        logo: new URL('@/assets/images/FexCompanyPage.png', import.meta.url).href,
        image: new URL('@/assets/images/FexCompanyPage.png', import.meta.url).href,
        status: 'Descontinuado',
        type: 'FullStack - (Web)',
        technologies: ['Vue.js', 'Django', "RabbitMQ", "Celery"],
        duration: '1 mês',
        year: '2024',
        carrouselImages: [new URL('@/assets/images/FexCompanyPage.png', import.meta.url).href],
        links: [
          {
            label: 'FrontEnd',
            url: 'https://github.com/HackHeaders/FrontEnd',
            type: 'secondary',
            icon: '💻',
          },
          {
            label: 'BackEnd',
            url: 'https://github.com/HackHeaders/Backend',
            type: 'secondary',
            icon: '📋',
          },
        ],
        about: "A 'Fex Company', foi um projeto desenvolvido para o hackathon dos segundos anos que acontece no IFC Campus Araquari para fins educativos e avaliativos. A 'Fex' foi um sistema de gerenciamento de trasporte, rotas, pedidos e entregas, que visava otimizar a logística de uma empresa fictícia de entregas. O sistema permitia o cadastro e gerenciamento de clientes, produtos e pedidos, além de oferecer funcionalidades para a criação e otimização de rotas de entrega. Utilizando algoritmos de roteirização, o sistema sugeria as rotas mais eficientes para os motoristas, considerando fatores como distância, tempo e condições de trânsito. A interface do usuário foi projetada para ser intuitiva e fácil de usar, permitindo que os funcionários da empresa gerenciassem suas operações diárias com eficiência. Embora o projeto tenha sido descontinuado após o hackathon, ele serviu como uma valiosa experiência de aprendizado em desenvolvimento web e gestão de projetos."
      },
      {
        id: 6,
        title: 'Fabrica Hackathon',
        description: 'Um sistema de gerenciamento de hackathons do IFC Campus Araquari.',
        logo: new URL('@/assets/images/FabricaHackatonPage.png', import.meta.url).href,
        image: new URL('@/assets/images/FabricaHackatonPage.png', import.meta.url).href,
        status: 'Descontinuado',
        type: 'FullStack - (Web)',
        technologies: ['Vue.js', 'Django', 'RabbitMQ', 'Celery'],
        duration: '1 mês',
        year: '2024',
        carrouselImages: [new URL('@/assets/images/FabricaHackatonPage.png', import.meta.url).href],
        links: [
          {
            label: 'BackEnd',
            url: 'https://github.com/fabricadesoftware-ifc/fabricaHackathon-backend',
            type: 'secondary',
            icon: '💻',
          },
          {
            label: 'FrontEnd',
            url: 'https://github.com/fabricadesoftware-ifc/fabricaHackathon-frontend',
            type: 'secondary',
            icon: '📋',
          },
        ],
        about: "O projeto desenvolvido para o Hackathon de Informática do campus Araquari é um sistema web que facilita o gerenciamento das edições do evento, inscrições dos alunos e avaliação dos projetos desenvolvidos. Com o objetivo de integrar o conhecimento teórico dos cursos técnicos com a prática, o sistema incentiva a resolução de problemas reais em equipe, simulando um ambiente profissional. O sistema oferece funcionalidades essenciais para o gerenciamento do evento, como o controle detalhado de cada edição, incluindo informações sobre critérios de avaliação, rankings e projetos de cada equipe. Também permite que as avaliações sejam realizadas de maneira intuitiva, com interfaces dedicadas para visualização e interação dos avaliadores em cada edição. Além disso, o sistema envia notificações por e-mail, mantendo alunos e avaliadores atualizados sobre prazos, alterações e notificações importantes. Além disso, o sistema também funciona como um portal acessível a todos os participantes, que centraliza a visualização dos projetos desenvolvidos e fornece informações sobre os alunos envolvidos, favorecendo a transparência, acompanhamento dos resultados e trazendo visibilidade aos projetos realizados. Para o desenvolvimento do sistema, são utilizadas tecnologias modernas como o VueJS no front-end e o Django REST Framework para a construção da API. A comunicação e gerenciamento de tarefas assíncronas contam com RabbitMQ e Celery, garantindo um funcionamento eficiente e escalável. A metodologia ágil SCRUM orienta o desenvolvimento, facilitando o trabalho em equipe e o monitoramento do progresso."
      },
       {
        id: 7,
        title: 'Gaia Estética Animal',
        description:
          'Um website para dar mais visibilidade a um petshop e maior contato com clientes',
        logo: new URL('@/assets/images/gaiaPage.png', import.meta.url).href,
        image: new URL('@/assets/images/gaiaPage.png', import.meta.url).href,
        status: 'Concluído',
        type: 'FullStack - (Web - Hardware)',
        technologies: ['Vue.js'],
        duration: '6 meses',
        year: '2025',
        carrouselImages: [
          new URL('@/assets/images/gaiaPage.png', import.meta.url).href,
          new URL('@/assets/images/gaiaPage1.png', import.meta.url).href,
          new URL('@/assets/images/gaiaPage2.png', import.meta.url).href,
          new URL('@/assets/images/gaiaPage3.png', import.meta.url).href,
          new URL('@/assets/images/gaiaPage4.png', import.meta.url).href,
          new URL('@/assets/images/gaiaPage5.png', import.meta.url).href,
        ],
        links: [
          {
            label: 'Deploy ',
            url: 'https://gaia-estetica-animal.com.br/',
            type: 'secondary',
            icon: '💻',
          }
        ],
        about:
          'O site da Gaia Estética Animal é uma plataforma digital desenvolvida com o objetivo de ampliar a visibilidade do trabalho do pet shop e fortalecer a comunicação com seus clientes. A solução foi pensada para apresentar de forma clara e atrativa os serviços oferecidos, valores, diferenciais e informações de contato, proporcionando uma experiência simples e intuitiva para o usuário.O site conta com um design moderno e responsivo, permitindo o acesso eficiente tanto em dispositivos móveis quanto em computadores. Através da plataforma, os clientes podem conhecer melhor os serviços de estética animal, como banho, tosa e cuidados especializados, além de entrar em contato de forma rápida por meio de canais integrados, facilitando agendamentos e esclarecimento de dúvidas. Ao centralizar informações importantes e oferecer um canal direto de comunicação, o site contribui para o fortalecimento da presença digital da Gaia Estética Animal, ajudando a atrair novos clientes e a fidelizar os atuais. O projeto evidencia como soluções web bem planejadas podem apoiar pequenos negócios, aumentando sua visibilidade, credibilidade e alcance no meio digital.',
      },
    ],
    selectedProject: null,
    loading: false,
    error: null,
  })

  const getProjectById = (id) => {
    const response = state.projects.find((project) => project.id == id)
    state.selectedProject = response
    return response
  }

  return {
    state,
    getProjectById,
  }
})
