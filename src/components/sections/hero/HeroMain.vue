<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const heroEl = ref(null)
let vanta = null

onMounted(() => {
  if (window.VANTA) {
    vanta = window.VANTA.BIRDS({
      el: heroEl.value,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      backgroundColor: 0x000000,
      color1: 0x00ff41,
      color2: 0x1eff00,
      wingSpan: 20.0,
      separation: 50.0,
      alignment: 50.0,
      cohesion: 50.0,
      quantity: 4.0
    })
  }
})

onBeforeUnmount(() => {
  if (vanta) vanta.destroy()
})
</script>
<template>
  <section class="hero" ref="heroEl">
    <div class="overlay"></div>
    <div class="container-hero">
      <div class="title">
        <div class="badge">
          <span class="status-dot"></span>
          Disponível para projetos
        </div>
        <h1>
          <span class="highlight">Desenvolvedor</span><br>
          <span class="typing-animation">FullStack</span>
        </h1>
        <p class="sub">
          Criando soluções digitais inovadoras com foco em experiência do usuário e performance.
          Especializado em <strong>Django</strong>, <strong>Vue.js</strong> e tecnologias modernas.
        </p>
        <div class="tech-stack">
          <span class="tech-item">JavaScript</span>
          <span class="tech-item">Vue.js</span>
          <span class="tech-item">Node.js</span>
          <span class="tech-item">SQL</span>
          <span class="tech-item">Python</span>
          <span class="tech-item">Django</span>
          <span class="tech-item">API Rest</span>
        </div>
        <div class="buttons">
          <button class="projects">
            <span>Ver Projetos</span>
            <div class="button-glow"></div>
          </button>
          <button class="contact">
            <span>Entre em Contato</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero canvas {
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 0 !important;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
  z-index: 0;
}

.container-hero {
  margin: auto;
  max-width: 800px;
  width: 90%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 2;
  padding: 2rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(56, 223, 92, 0.1);
  border: 1px solid rgba(56, 223, 92, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  color: #38df5c;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #38df5c;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-weight: 800;
  line-height: 1.1;
  text-shadow: 0 0 30px rgba(56, 223, 92, 0.3);
}

.highlight {
  color: #38df5c;
  position: relative;
}

.typing-animation {
  position: relative;
  overflow: hidden;
}

.typing-animation::after {
  content: '|';
  color: #38df5c;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.sub {
  color: #b0b0b0;
  font-size: clamp(1rem, 2vw, 1.3rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.sub strong {
  color: #38df5c;
  font-weight: 600;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.tech-item {
  background: rgba(56, 223, 92, 0.1);
  border: 1px solid rgba(56, 223, 92, 0.2);
  color: #38df5c;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(56, 223, 92, 0.2);
  border-color: rgba(56, 223, 92, 0.4);
  transform: translateY(-2px);
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

button {
  border: 0;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-width: 160px;
}

button.projects {
  color: #000000;
  background: #38df5c;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(56, 223, 92, 0.3);
}

.button-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

button.projects:hover .button-glow {
  left: 100%;
}

button.projects:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(56, 223, 92, 0.4);
}

button.contact {
  color: #38df5c;
  border: 2px solid #38df5c;
  background: rgba(56, 223, 92, 0.05);
  cursor: pointer;
  position: relative;
}

button.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: rgba(56, 223, 92, 0.1);
  transition: width 0.3s ease;
  z-index: -1;
}

button.contact:hover::before {
  width: 100%;
}

button.contact:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(56, 223, 92, 0.2);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.scroll-arrow {
  width: 2px;
  height: 30px;
  background: #38df5c;
  position: relative;
  animation: scroll 2s infinite;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -4px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid #38df5c;
}

@keyframes scroll {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* Responsividade */
@media (max-width: 768px) {
  .hero {
    height: 100vh;
  }
  
  .container-hero {
    width: 95%;
    padding: 1rem;
  }
  
  .buttons {
    flex-direction: column;
    align-items: center;
  }
  
  button {
    width: 100%;
    max-width: 250px;
  }
  
  .tech-stack {
    gap: 0.5rem;
  }
  
  .tech-item {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
