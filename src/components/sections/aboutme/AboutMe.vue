<script setup>
import { ref, onMounted } from 'vue'

const aboutSection = ref(null)
const isVisible = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            isVisible.value = entry.isIntersecting
        },
        { threshold: 0.3 }
    )

    if (aboutSection.value) {
        observer.observe(aboutSection.value)
    }
})
</script>

<template>
    <section class="desc-section" ref="aboutSection" :class="{ 'visible': isVisible }">
        <div class="container">
            <div class="content-grid">
                <div class="text-content">
                    <div class="section-badge">
                        <span class="badge-dot"></span>
                        Conheça mais
                    </div>
                    <h2 class="section-title">
                        <span class="title-highlight">Sobre</span> Mim
                    </h2>
                    <div class="description">
                        <p class="main-text">
                            Sou um jovem desenvolvedor que começou os estudos em <strong>2023</strong>
                            ao ingressar no curso Técnico em Informática para Internet pelo IFC Campus Araquari. Desde então, venho estudando cada vez mais tanto <strong>Backend</strong> quanto <strong>Frontend</strong>, porém com maior interesse pelo Backend. As linguagens que aprendi foram <strong>Python</strong> e <strong>JavaScript</strong>, e com elas os frameworks <strong>Django</strong> e <strong>Vue.js</strong>. Também aprendi sobre bancos de dados relacionais como <strong>PostgreSQL</strong> e <strong>MySQL</strong>. Além disso, estou sempre explorando outras linguagens e frameworks, como <strong>React</strong>, <strong>Angular</strong> e <strong>Typescript</strong>, e com essa base consigo aprender facilmente praticamente qualquer nova tecnologia.
                        </p>
                        <p class="secondary-text">
                            Com este portfólio, busco compilar meus projetos e experiências, com o objetivo de entrar em contato com possíveis clientes, mas principalmente com empresas interessadas em me contratar como estagiário ou desenvolvedor júnior fullstack.
                        </p>
                    </div>
                    <div class="social-links">
                        <a href="https://github.com/AnthonyLoche" target="_blank" class="social-link github">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/anthony-reis-282663291/" target="_blank" class="social-link linkedin">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.desc-section {
    min-height: 70vh;
    display: flex;
    align-items: center;
    padding: 4rem 0;
    overflow: hidden;
}

.desc-section.visible .content-grid {
    opacity: 1;
    transform: translateY(0);
}

.container {
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
}

.content-grid {
    gap: 4rem;
    align-items: center;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(56, 223, 92, 0.1);
    border: 1px solid rgba(56, 223, 92, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 25px;
    color: #38df5c;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
}

.badge-dot {
    width: 8px;
    height: 8px;
    background: #38df5c;
    border-radius: 50%;
}

.section-title {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 2rem;
}

.title-highlight {
    color: #38df5c;
}

.description {
    margin-bottom: 3rem;
}

.main-text {
    font-size: 1.2rem;
    line-height: 1.7;
    color: #e0e0e0;
    margin-bottom: 1.5rem;
}

.main-text strong {
    color: #38df5c;
}

.secondary-text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #b0b0b0;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(56, 223, 92, 0.05);
    border: 1px solid rgba(56, 223, 92, 0.2);
    border-radius: 30px;
    color: #38df5c;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
}

.social-link:hover {
    background: rgba(56, 223, 92, 0.1);
    border-color: rgba(56, 223, 92, 0.4);
}

@media screen and (max-width: 1024px) {
    .section-title {
        display: none;
    }

    .container{
        width: 95%;
        padding: 0;
    }
}
</style>
