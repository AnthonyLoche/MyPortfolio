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
                        <img class="project-image" :src="project.image" :alt="project.title" />
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
.project-card {
    width: 100%;
    height: 550px;
    background: rgba(19, 22, 19, 0.95);
    border-radius: 24px;
    overflow: hidden;
    position: relative;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(56, 223, 92, 0.1);
    backdrop-filter: blur(20px);
    flex-shrink: 0;
}

.project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(56, 223, 92, 0.05) 0%, transparent 50%, rgba(0, 255, 65, 0.03) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
    border-radius: 24px;
}

.project-card:hover::before {
    opacity: 1;
}

.project-card:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(56, 223, 92, 0.3);
    box-shadow:
        0 20px 40px rgba(0, 0, 0, 0.3),
        0 0 60px rgba(56, 223, 92, 0.1);
}

.featured {
    border-color: rgba(56, 223, 92, 0.4);
    box-shadow: 0 8px 25px rgba(56, 223, 92, 0.15);
}

.card-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    z-index: 2;
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
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: brightness(0.8) saturate(1.1);
}

.project-card:hover .project-image {
    transform: scale(1.1);
    filter: brightness(1) saturate(1.3);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(56, 223, 92, 0.1) 100%);
    opacity: 0.6;
    transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay {
    opacity: 0.8;
}

.hover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
}

.project-card:hover .hover-overlay {
    opacity: 1;
}

.view-project {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #38df5c;
    font-weight: 600;
    font-size: 1.1rem;
    transform: translateY(20px);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .view-project {
    transform: translateY(0);
}

.project-logo {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    z-index: 3;
}

.project-logo img {
    width: 30px;
    height: 30px;
    object-fit: contain;
}

.project-card:hover .project-logo {
    transform: rotate(5deg) scale(1.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
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
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 3;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    animation: pulse 2s infinite;
    flex-shrink: 0;
    /* Não encolhe */
}

.featured-badge {
    position: absolute;
    top: 4rem;
    right: 1rem;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    color: #000;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    backdrop-filter: blur(10px);
    z-index: 3;
    animation: sparkle 3s infinite;
}

@keyframes sparkle {
    0%,
    100% {
        transform: scale(1) rotate(0deg);
    }

    50% {
        transform: scale(1.05) rotate(2deg);
    }
}

/* Content */
.card-content {
    padding: 2rem;
    background: rgba(0, 0, 0, 0.9);
    position: relative;
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(56, 223, 92, 0.1);
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 360px;
}

.card-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 0%, rgba(56, 223, 92, 0.05) 0%, transparent 70%);
    z-index: 0;
}

.content-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
    height: 30px;
    flex-shrink: 0;
}

.project-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    flex: 1;
    text-shadow: 0 2px 10px rgba(56, 223, 92, 0.2);
    line-height: 1.2;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
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
    position: relative;
    z-index: 1;
    height: 96px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
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
    position: relative;
    z-index: 1;
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
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    white-space: nowrap;
    height: fit-content;
}

.tech-tag:hover {
    background: rgba(56, 223, 92, 0.2);
    border-color: rgba(56, 223, 92, 0.4);
    transform: translateY(-2px);
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid rgba(56, 223, 92, 0.1);
    position: relative;
    z-index: 1;
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
    backdrop-filter: blur(5px);
    white-space: nowrap;
    height: fit-content;
}

.team-members {
    display: flex;
    align-items: center;
}

.members-avatars {
    display: flex;
    align-items: center;
}

.member-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #38df5c;
    margin-left: -8px;
    background: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
    flex-shrink: 0;
}

.member-avatar:first-child {
    margin-left: 0;
}

.member-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.member-avatar:hover {
    transform: translateY(-3px) scale(1.1);
    z-index: 10 !important;
    box-shadow: 0 8px 25px rgba(56, 223, 92, 0.3);
}

.more-members {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(56, 223, 92, 0.2);
    border: 2px solid #38df5c;
    margin-left: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #38df5c;
    font-size: 0.7rem;
    font-weight: 600;
    backdrop-filter: blur(10px);
    flex-shrink: 0;
}

.animated-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(45deg, #38df5c, #00ff41, #38df5c);
    background-size: 200% 200%;
    animation: borderAnimation 3s ease infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
}

.project-card:hover .animated-border {
    opacity: 1;
}

@keyframes borderAnimation {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}

.animated-border::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: rgba(19, 22, 19, 0.95);
    border-radius: 22px;
}

.project-card.hovered .status-badge {
    transform: scale(1.05);
}

.project-card.hovered .project-logo {
    animation: logoFloat 2s ease-in-out infinite;
}

@keyframes logoFloat {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-5px) rotate(5deg);
    }
}

@media screen and (max-width: 1200px) {
    .project-card {
        width: 350px;
        height: 500px;
    }

    .technologies{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        height: 30px;
    }
}

@media (max-width: 768px) {
    .projects-container {
        padding: 1rem;
        gap: 1.5rem;
        justify-content: center;
    }

    .card-header {
        height: 180px;
    }

    .card-content {
        padding: 1.5rem;
        height: 360px;
    }

    .card-footer{
        
        align-items: center;
        justify-content: center;
    }

    .content-header {
        height: 50px;
    }

    .project-description {
        height: 80px;
        -webkit-line-clamp: 3;
        line-clamp: 3;
    }

    .technologies {
        height: 50px;
    }
}

@media (max-width: 480px) {

    .card-header {
        height: 160px;
    }

    .project-logo {
        width: 40px;
        height: 40px;
    }

    .project-logo img {
        width: 24px;
        height: 24px;
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

    .team-members {
        justify-content: center;
    }
}

.project-card {
    animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    opacity: 0;
    transform: translateY(30px);
}

.project-card:nth-child(1) {
    animation-delay: 0.1s;
}

.project-card:nth-child(2) {
    animation-delay: 0.2s;
}

.project-card:nth-child(3) {
    animation-delay: 0.3s;
}

@keyframes slideInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}
</style>