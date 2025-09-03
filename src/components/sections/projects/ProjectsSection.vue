<script setup>
import { ref, onMounted } from 'vue'
import CardProject from './CardProject.vue'
import fabricaDoorPage from "../../../assets/images/fabricaDoorPage.png"
import GoRoutesPage from "../../../assets/images/GoRoutesPage.png"
import PorfolioPage from "../../../assets/images/PortfolioPage.png"

const projects = ref([
    {
        id: 1,
        title: 'FabricaDoor',
        description: 'Um sistema de segurança de acesso da Fabrica de Software, usando ESP32 e RFID.',
        logo: fabricaDoorPage,
        image: fabricaDoorPage,
        status: 'Concluído',
        type: 'FullStack - (Web - Hardware)',
        technologies: ['Vue.js', 'Node.js (express)', 'C++'],
        duration: '6 meses',
        year: '2025',
    },
    {
        id: 2,
        title: 'GoRoutes',
        description: 'Um sistema de gerenciamento de rotas e transporte escolar com otimização das rotas.',
        logo: GoRoutesPage,
        image: GoRoutesPage,
        status: 'Em Desenvolvimento',
        type: 'FullStack - (Web)',
        technologies: ['Django', 'Vue.js'],
        duration: '---',
        year: '2025',
    },
    {
        id: 3,
        title: 'Meu Portfolio',
        description: 'Um portfólio pessoal para exibir projetos e habilidades.',
        logo: PorfolioPage,
        image: PorfolioPage,
        status: 'Em Desenvolvimento',
        type: 'FrontEnd - (Web)',
        technologies: ["Vue.js"],
        duration: '1 mês',
        year: '2025',
    },
])

const aboutSection = ref(null)
const isVisible = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            isVisible.value = entry.isIntersecting
        },
        { threshold: 0.3 }
    )

    if (aboutSection.value) observer.observe(aboutSection.value)
})
</script>

<template>
    <section class="projects-section" ref="aboutSection" :class="{ 'visible': isVisible }">
        <div class="title">
            <h2>Projetos em Destaque</h2>
            <p>Alguns dos projetos que desenvolvi, demonstrando minhas habilidades e experiência.</p>
        </div>
        <div class="container">
            <CardProject :projects="projects" />
        </div>
    </section>
</template>

<style scoped>
.projects-section {
    min-height: 70vh;
    background: #131613;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 4rem 0;
    display: flex;
}

.title {
    text-align: center;
    margin-bottom: .5rem;
}

.title>p {
    color: #b0b0b0;
    font-size: 1rem;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
}

h2 {
    font-size: 2rem;
    color: #ffffff;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: .5rem;
    text-shadow: 0 0 30px rgba(56, 223, 92, 0.3);
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
    width: 70%;
    gap: 3rem;
}

@media screen and (max-width: 1024px) {
    .container {
        display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
        gap: 1rem;
        width: 95%;
    }
}
</style>