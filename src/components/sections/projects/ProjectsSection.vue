<script setup>
import { ref, onMounted } from 'vue'
import CardProject from './CardProject.vue'
import { useProjectsStore } from '@/data/projects'

const aboutSection = ref(null)
const isVisible = ref(false)
const projectsStore = useProjectsStore()
const projects = projectsStore.state.projects

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