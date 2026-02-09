<script setup>
import { ref } from 'vue'

defineProps({
    projects: {
        type: Array,
        required: true
    }
})

const statusColors = {
    'Em Desenvolvimento': { bg: '#2196F3', text: '#ffffff' },
    'Concluído': { bg: '#38df5c', text: '#000000' },
    'Cancelado': { bg: '#F44336', text: '#ffffff' },
    "Não Iniciado": { bg: '#9E9E9E', text: '#ffffff' },
    "Descontinuado": { bg: '#FF9800', text: '#000000' }
}

const getStatusColor = (status) => statusColors[status] || statusColors['Em Desenvolvimento']

const UrlProject = (id) => `/projects/${id}`

const isHovered = ref(null)
</script>

<template>
    <div v-for="project in projects" :key="project.id" class="project-card"
        :class="{ 'hovered': isHovered === project.id }" @mouseenter="isHovered = project.id"
        @mouseleave="isHovered = null">

        <RouterLink :to="UrlProject(project.id)" class="card-link">
            <div class="card-header">
                <div class="image-container">
                    <img class="project-image" :src="project.image" :alt="project.title" loading="lazy" />
                    <div class="image-overlay"></div>
                </div>

                <div class="status-badge" :style="{
                    backgroundColor: getStatusColor(project.status).bg,
                    color: getStatusColor(project.status).text
                }">
                    <div class="status-dot"></div>
                    {{ project.status }}
                </div>
            </div>

            <div class="card-content">
                <div class="content-header">
                    <h3 class="project-title">{{ project.title }}</h3>
                    <div class="project-meta">
                        <span class="project-year">{{ project.year }}</span>
                        <span class="project-duration">{{ project.duration }}</span>
                    </div>
                </div>
                <p class="project-description">{{ project.description }}</p>

                <div class="technologies">
                    <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                        {{ tech }}
                    </span>
                </div>

                <div class="card-footer">
                    <div class="project-type-tag">{{ project.type }}</div>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>
/* Otimizações aplicadas:
   1. will-change apenas em elementos que animam no hover
   2. transform e opacity para animações (GPU accelerated)
   3. Redução de backdrop-filter (muito pesado)
   4. Simplificação de gradientes complexos
   5. Remoção de pseudo-elementos desnecessários
*/

.project-card {
    width: 100%;
    height: 550px;
    background: rgba(19, 22, 19, 0.95);
    border-radius: 24px;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                border-color 0.3s ease,
                box-shadow 0.3s ease;
    border: 1px solid rgba(56, 223, 92, 0.1);
    flex-shrink: 0;
}

.project-card:hover {
    transform: translateY(-8px);
    border-color: rgba(56, 223, 92, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
                0 0 60px rgba(56, 223, 92, 0.1);
}

.card-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
}

/* Header */
.card-header {
    position: relative;
    height: 220px;
    overflow: hidden;
    flex-shrink: 0;
}

.image-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
}

.project-card:hover .project-image {
    transform: scale(1.08);
}

.image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(56, 223, 92, 0.1) 100%);
    opacity: 0.6;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.project-card:hover .image-overlay {
    opacity: 0.8;
}

.status-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.85rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 3;
    white-space: nowrap;
    transition: transform 0.3s ease;
}

.project-card.hovered .status-badge {
    transform: scale(1.05);
}

.status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    animation: pulse 2s infinite;
    flex-shrink: 0;
}

/* Content */
.card-content {
    padding: 2rem;
    background: rgba(0, 0, 0, 0.9);
    position: relative;
    border-top: 1px solid rgba(56, 223, 92, 0.1);
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 360px;
}

.content-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    position: relative;
    height: 30px;
    flex-shrink: 0;
}

.project-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    flex: 1;
    line-height: 1.2;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.project-meta {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    text-align: right;
    flex-shrink: 0;
    width: 80px;
}

.project-year {
    color: #38df5c;
    font-weight: 600;
    font-size: 0.9rem;
}

.project-duration {
    color: #b0b0b0;
    font-size: 0.8rem;
}

.project-description {
    color: #e0e0e0;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0 0 1.5rem 0;
    height: 96px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    flex-shrink: 0;
}

/* Technologies */
.technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    height: 30px;
    overflow: hidden;
    flex-shrink: 0;
}

.tech-tag {
    background: rgba(56, 223, 92, 0.1);
    border: 1px solid rgba(56, 223, 92, 0.2);
    color: #38df5c;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
    transition: transform 0.2s ease, background-color 0.2s ease;
    white-space: nowrap;
    height: fit-content;
}

.tech-tag:hover {
    background: rgba(56, 223, 92, 0.2);
    transform: translateY(-2px);
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid rgba(56, 223, 92, 0.1);
    margin-top: auto;
    height: 50px;
    flex-shrink: 0;
}

.project-type-tag {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(56, 223, 92, 0.1);
    color: #38df5c;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 1px solid rgba(56, 223, 92, 0.2);
    white-space: nowrap;
    height: fit-content;
}

/* Animações otimizadas */
.project-card {
    animation: slideInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    opacity: 0;
}

.project-card:nth-child(1) { animation-delay: 0.05s; }
.project-card:nth-child(2) { animation-delay: 0.1s; }
.project-card:nth-child(3) { animation-delay: 0.15s; }
.project-card:nth-child(4) { animation-delay: 0.2s; }
.project-card:nth-child(5) { animation-delay: 0.25s; }
.project-card:nth-child(6) { animation-delay: 0.3s; }

@keyframes slideInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* Responsividade */
@media screen and (max-width: 1200px) {
    .project-card {
        width: 350px;
        height: 500px;
    }

    .technologies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        height: 30px;
    }
}

@media (max-width: 768px) {
    .card-header {
        height: 180px;
    }

    .card-content {
        padding: 1.5rem;
        height: 360px;
    }

    .card-footer {
        align-items: center;
        justify-content: center;
    }

    .content-header {
        height: 50px;
    }

    .project-description {
        height: 80px;
        -webkit-line-clamp: 3;
    }

    .technologies {
        height: 50px;
    }
}

@media (max-width: 480px) {
    .card-header {
        height: 160px;
    }

    .card-content {
        padding: 1.2rem;
        height: 340px;
    }

    .project-description {
        height: 72px;
    }

    .card-footer {
        height: 60px;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
    }
}

@media (prefers-reduced-motion: reduce) {
    .project-card,
    .project-image,
    .status-badge,
    .tech-tag {
        animation: none;
        transition: none;
    }
}
</style>