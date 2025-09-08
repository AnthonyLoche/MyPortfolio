import { defineStore } from "pinia";
import { reactive } from "vue";

export const useProjectsStore = defineStore("projects", () => {
    const state = reactive({
        projects: [
            {
                id: 1,
                title: "FabricaDoor",
                description: "Um sistema de segurança de acesso da Fabrica de Software, usando ESP32 e RFID.",
                logo: new URL("@/assets/images/fabricaDoorPage.png", import.meta.url).href,
                image: new URL("@/assets/images/fabricaDoorPage.png", import.meta.url).href,
                status: "Concluído",
                type: "FullStack - (Web - Hardware)",
                technologies: ["Vue.js", "Node.js (express)", "C++"],
                duration: "6 meses",
                year: "2025",
            },
            {
                id: 2,
                title: "GoRoutes",
                description: "Um sistema de gerenciamento de rotas e transporte escolar com otimização das rotas.",
                logo: new URL("@/assets/images/GoRoutesPage.png", import.meta.url).href,
                image: new URL("@/assets/images/GoRoutesPage.png", import.meta.url).href,
                status: "Em Desenvolvimento",
                type: "FullStack - (Web)",
                technologies: ["Django", "Vue.js"],
                duration: "---",
                year: "2025",
            },
            {
                id: 3,
                title: "Meu Portfolio",
                description: "Um portfólio pessoal para exibir projetos e habilidades.",
                logo: new URL("@/assets/images/PortfolioPage.png", import.meta.url).href,
                image: new URL("@/assets/images/PortfolioPage.png", import.meta.url).href,
                status: "Em Desenvolvimento",
                type: "FrontEnd - (Web)",
                technologies: ["Vue.js"],
                duration: "1 mês",
                year: "2025",
            },
            {
                id: 4,
                title: "Fabrica Portal",
                description: "Um sistema de gerenciamento de acesso e informações para a Fabrica de Software.",
                logo: new URL("@/assets/images/FabricaPortalPage.png", import.meta.url).href,
                image: new URL("@/assets/images/FabricaPortalPage.png", import.meta.url).href,
                status: "Concluído",
                type: "FullStack - (Web)",
                technologies: ["Vue.js", "Django"],
                duration: "1 mês",
                year: "2025",
            },
            {
                id: 4,
                title: "Fex Company",
                description: "Um sistema de gerenciamento de pedidos e rotas para uma empresa de entregas.",
                logo: new URL("@/assets/images/FexCompanyPage.png", import.meta.url).href,
                image: new URL("@/assets/images/FexCompanyPage.png", import.meta.url).href,
                status: "Descontinuado",
                type: "FullStack - (Web)",
                technologies: ["Vue.js", "Django"],
                duration: "1 mês",
                year: "2024",
            },
            {
                id: 5,
                title: "Fabrica Hackathon",
                description: "Um sistema de gerenciamento de hackathons do IFC Campus Araquari.",
                logo: new URL("@/assets/images/FabricaHackatonPage.png", import.meta.url).href,
                image: new URL("@/assets/images/FabricaHackatonPage.png", import.meta.url).href,
                status: "Descontinuado",
                type: "FullStack - (Web)",
                technologies: ["Vue.js", "Django"],
                duration: "1 mês",
                year: "2024",
            },
        ],
        selectedProject: null,
        loading: false,
        error: null,
    });

    const getProjectById = (id) => {
        const response = state.projects.find((project) => project.id === id);
        state.selectedProject = response;
        return response;
    };

    return {
        state,
        getProjectById,
    };
});
