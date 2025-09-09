<script setup>
import { ref, computed, onMounted } from "vue"
import { useProjectsStore } from "@/data/projects"

const projectsStore = useProjectsStore()
const currentImageIndex = ref(0)

const selectedProject = computed(() => projectsStore.state.selectedProject)

const nextImage = () => {
  if (!selectedProject.value?.carrouselImages) return
  const nextIndex = (currentImageIndex.value + 1) % selectedProject.value.carrouselImages.length
  currentImageIndex.value = nextIndex
}

const prevImage = () => {
  if (!selectedProject.value?.carrouselImages) return
  const prevIndex = currentImageIndex.value === 0 
    ? selectedProject.value.carrouselImages.length - 1 
    : currentImageIndex.value - 1
  currentImageIndex.value = prevIndex
}

const goToImage = (index) => {
  currentImageIndex.value = index
}

const getStatusColor = (status) => {
  switch (status) {
    case 'Concluído':
      return 'completed'
    case 'Em Desenvolvimento':
      return 'in-progress'
    case 'Descontinuado':
      return 'discontinued'
    default:
      return 'default'
  }
}

const startAutoPlay = () => {
  if (!selectedProject.value?.carrouselImages || selectedProject.value.carrouselImages.length <= 1) return
  
  setInterval(() => {
    nextImage()
  }, 5000)
}

onMounted(() => {
  currentImageIndex.value = 0
  startAutoPlay() 
})
</script>

<template>
  <section v-if="selectedProject">
    <div class="container">
      <div class="project-header">
        <div class="header-content">
          <div class="project-meta">
            <div class="status-badge" :class="getStatusColor(selectedProject.status)">
              <span class="status-dot"></span>
              {{ selectedProject.status }}
            </div>
            <div class="project-type">{{ selectedProject.type }}</div>
            <div class="project-year">{{ selectedProject.year }}</div>
          </div>
          <h1>{{ selectedProject.title }}</h1>
          <p class="project-description">{{ selectedProject.description }}</p>
        </div>
      </div>

      <div class="action-buttons" v-if="selectedProject.links?.length">
            <a 
              v-for="(link, i) in selectedProject.links" 
              :key="i" 
              :href="link.url" 
              target="_blank" 
              rel="noopener noreferrer"
              :class="link.type === 'primary' ? 'btn-primary' : 'btn-secondary'"
            >
              <span class="btn-icon">{{ link.icon }}</span>
              <span>{{ link.label }}</span>
              <div v-if="link.type === 'primary'" class="btn-glow"></div>
            </a>
          </div>

      <div class="project-content">
        <!-- Carousel -->
        <div class="project-showcase">
          <div class="carousel-container">
            <div class="carousel-wrapper">
              <div 
                class="carousel-track"
                :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }"
              >
                <div
                  v-for="(image, index) in selectedProject.carrouselImages"
                  :key="index"
                  class="carousel-slide"
                >
                  <img :src="image" :alt="`${selectedProject.title} - Screenshot ${index + 1}`" />
                  <div class="image-overlay">
                    <div class="overlay-content">
                      <h4>Screenshot {{ index + 1 }}</h4>
                      <p>{{ selectedProject.title }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                class="carousel-btn prev-btn"
                @click="prevImage"
                v-if="selectedProject.carrouselImages.length > 1"
              >
                <span>‹</span>
              </button>
              <button 
                class="carousel-btn next-btn"
                @click="nextImage"
                v-if="selectedProject.carrouselImages.length > 1"
              >
                <span>›</span>
              </button>
            </div>

            <div class="carousel-indicators" v-if="selectedProject.carrouselImages.length > 1">
              <button
                v-for="(image, index) in selectedProject.carrouselImages"
                :key="index"
                class="indicator"
                :class="{ active: currentImageIndex === index }"
                @click="goToImage(index)"
              >
                <span class="indicator-number">{{ index + 1 }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Detalhes -->
        <div class="project-details">
          <div class="detail-card full-width">
            <div class="card-header">
              <div class="card-icon">📝</div>
              <h3>Sobre o Projeto</h3>
            </div>
            <div class="project-about">
              <p>{{ selectedProject.about }}</p>

              <!-- Tecnologias -->
              <div class="features-list">
                <h4>Tecnologias:</h4>
                <div class="tech-stack">
                  <div 
                    v-for="tech in selectedProject.technologies" 
                    :key="tech"
                    class="tech-badge"
                  >
                    {{ tech }}
                  </div>
                </div>
              </div>

              <!-- Infos -->
              <div class="features-list">
                <h4>Detalhes:</h4>
                <div class="project-info">
                  <div class="info-row">
                    <span class="info-label">Duração:</span>
                    <span class="info-value">{{ selectedProject.duration }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Ano:</span>
                    <span class="info-value">{{ selectedProject.year }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Categoria:</span>
                    <span class="info-value">{{ selectedProject.type }}</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">Status:</span>
                    <span class="info-value" :class="getStatusColor(selectedProject.status)">
                      {{ selectedProject.status }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Funcionalidades -->
              <div class="features-list" v-if="selectedProject.features?.length">
                <h4>Principais Funcionalidades:</h4>
                <ul>
                  <li v-for="(feat, i) in selectedProject.features" :key="i">
                    {{ feat }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Botões dinâmicos -->
          
        </div>
      </div>
    </div>
  </section>

  <!-- Caso não tenha projeto -->
  <section v-else class="empty-state">
    <div class="container">
      <div class="empty-content">
        <div class="empty-icon">📁</div>
        <h2>Nenhum projeto selecionado</h2>
        <p>Selecione um projeto para ver os detalhes</p>
        <button class="btn-primary" @click="$router.push('/projects')">
          <span>Ver Projetos</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  min-height: 100vh;
  background: #131613;
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
  width: 100%;
}

section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  pointer-events: none;
}

.container {
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  max-width: 1200px;
}

a{
    text-decoration: none;
}

.project-header {
  text-align: center;
  margin-bottom: 1rem;
  padding: 2rem 0;
}

.project-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.status-badge {
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
}

.status-badge.completed {
  background: rgba(56, 223, 92, 0.2);
  border: 1px solid rgba(56, 223, 92, 0.4);
  color: #38df5c;
}

.status-badge.in-progress {
  background: rgba(255, 193, 7, 0.2);
  border: 1px solid rgba(255, 193, 7, 0.4);
  color: #ffc107;
}

.status-badge.discontinued {
  background: rgba(220, 53, 69, 0.2);
  border: 1px solid rgba(220, 53, 69, 0.4);
  color: #dc3545;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

.project-type,
.project-year {
  background: rgba(56, 223, 92, 0.1);
  border: 1px solid rgba(56, 223, 92, 0.3);
  color: #38df5c;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.project-header h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #ffffff;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0 0 30px rgba(56, 223, 92, 0.3);
}

.project-description {
  color: #b0b0b0;
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* Conteúdo Principal */
.project-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

/* Carousel de Imagens */
.project-showcase {
  background: rgba(56, 223, 92, 0.05);
  border: 1px solid rgba(56, 223, 92, 0.2);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.carousel-container {
  position: relative;
}

.carousel-wrapper {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.carousel-slide:hover .image-overlay {
  transform: translateY(0);
}

.overlay-content h4 {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.overlay-content p {
  color: #b0b0b0;
  font-size: 0.9rem;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(56, 223, 92, 0.9);
  color: #000000;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.carousel-btn:hover {
  background: #38df5c;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 5px 20px rgba(56, 223, 92, 0.4);
}

.prev-btn {
  left: 1.5rem;
}

.next-btn {
  right: 1.5rem;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.1);
}

.indicator {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid rgba(56, 223, 92, 0.3);
  background: rgba(56, 223, 92, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #38df5c;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.indicator.active {
  background: rgba(56, 223, 92, 0.3);
  border-color: #38df5c;
  transform: scale(1.1);
}

.indicator:hover {
  background: rgba(56, 223, 92, 0.2);
  border-color: rgba(56, 223, 92, 0.5);
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.detail-card {
  background: rgba(56, 223, 92, 0.05);
  border: 1px solid rgba(56, 223, 92, 0.2);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.detail-card:hover {
  background: rgba(56, 223, 92, 0.1);
  border-color: rgba(56, 223, 92, 0.3);
  transform: translateY(-5px);
}

.detail-card.full-width {
  grid-column: 1 / -1;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.card-icon {
  width: 40px;
  height: 40px;
  background: rgba(56, 223, 92, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.card-header h3 {
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-badge {
  background: rgba(56, 223, 92, 0.1);
  border: 1px solid rgba(56, 223, 92, 0.3);
  color: #38df5c;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: rgba(56, 223, 92, 0.2);
  border-color: rgba(56, 223, 92, 0.4);
  transform: translateY(-2px);
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(56, 223, 92, 0.1);
}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  color: #b0b0b0;
  font-weight: 600;
}

.info-value {
  color: #38df5c;
  font-weight: 500;
}

.info-value.completed { color: #38df5c; }
.info-value.in-progress { color: #ffc107; }
.info-value.discontinued { color: #dc3545; }

.project-about p {
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.features-list h4 {
  color: #38df5c;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.features-list ul {
  list-style: none;
  padding: 0;
}

.features-list li {
  color: #b0b0b0;
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.features-list li::before {
  content: '✓';
  color: #38df5c;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
    margin-bottom: 2rem;
}

.btn-primary,
.btn-secondary {
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 150px;
  justify-content: center;
}

.btn-primary {
  background: #38df5c;
  color: #000000;
  box-shadow: 0 8px 25px rgba(56, 223, 92, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(56, 223, 92, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #38df5c;
  border: 2px solid #38df5c;
}

.btn-secondary:hover {
  background: rgba(56, 223, 92, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(56, 223, 92, 0.2);
}

.btn-icon {
  font-size: 1.1rem;
}

.btn-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.btn-primary:hover .btn-glow {
  left: 100%;
}

/* Estado Vazio */
.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.empty-content {
  text-align: center;
  max-width: 400px;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-content h2 {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.empty-content p {
  color: #b0b0b0;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

/* Responsividade */
@media screen and (max-width: 1024px) {
  .project-content {
    gap: 3rem;
  }
  
  .carousel-wrapper {
    height: 400px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .project-meta {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .project-header h1 {
    font-size: 2.5rem;
  }
  
  .carousel-wrapper {
    height: 300px;
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .prev-btn, .next-btn {
    left: 1rem;
  }
  
  .next-btn {
    right: 1rem;
  }
  
  .unified-card {
    gap: 2rem;
  }
  
  .section-group:not(:last-child)::after {
    bottom: -1rem;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
  }
}

@media screen and (max-width: 480px) {
  .carousel-wrapper {
    height: 250px;
  }
  
  .detail-card {
    padding: 1.5rem;
  }
  
  .carousel-indicators {
    padding: 1rem;
  }
  
  .indicator {
    width: 40px;
    height: 40px;
  }
}
</style>