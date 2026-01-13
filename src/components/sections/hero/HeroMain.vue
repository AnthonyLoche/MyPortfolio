<script setup>
import { ref, onMounted } from "vue"

const heroEl = ref(null)

// Configuração para as partículas
const particles = ref([])
const mousePosition = ref({ x: 0, y: 0 })

const createParticles = () => {
  const particleCount = 30
  const newParticles = []
  
  for (let i = 0; i < particleCount; i++) {
    newParticles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.5 + 0.1,
      color: i % 2 === 0 ? '#00ff41' : '#1eff00'
    })
  }
  
  particles.value = newParticles
}

const updateParticles = () => {
  particles.value.forEach(particle => {
    particle.x += particle.speed
    if (particle.x > 100) {
      particle.x = -10
      particle.y = Math.random() * 100
    }
    
    // Efeito de movimento com o mouse
    const dx = mousePosition.value.x - (particle.x * window.innerWidth / 100)
    const dy = mousePosition.value.y - (particle.y * window.innerHeight / 100)
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance < 200) {
      const force = (200 - distance) / 200
      particle.x += (dx / distance) * force * 0.5
      particle.y += (dy / distance) * force * 0.5
    }
  })
}

const handleMouseMove = (e) => {
  mousePosition.value = { x: e.clientX, y: e.clientY }
}

onMounted(() => {
  createParticles()
  
  // Animar partículas
  const animate = () => {
    updateParticles()
    requestAnimationFrame(animate)
  }
  animate()
  
  // Adicionar evento de mouse
  window.addEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <section class="hero" ref="heroEl" @mousemove="handleMouseMove">
    <!-- Background animado -->
    <div class="particles-background">
      <div class="particle" 
           v-for="particle in particles" 
           :key="particle.id"
           :style="{
             left: particle.x + 'vw',
             top: particle.y + 'vh',
             width: particle.size + 'px',
             height: particle.size + 'px',
             opacity: particle.opacity,
             background: particle.color,
             animationDuration: (Math.random() * 10 + 10) + 's',
             animationDelay: (Math.random() * 5) + 's'
           }">
      </div>
    </div>
    
    <!-- Efeitos de grade -->
    <div class="grid-overlay"></div>
    
    <!-- Luzes de fundo -->
    <div class="light-effect light-1"></div>
    <div class="light-effect light-2"></div>
    <div class="light-effect light-3"></div>
    
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
          <button class="projects" @click="$router.push('/projects')">
            <span>Ver Projetos</span>
            <div class="button-glow"></div>
          </button>
          <button class="contact" @click="$router.push('/contact')">
            <span>Entre em Contato</span>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Indicador de scroll -->
    <div class="scroll-indicator">
      <div class="scroll-arrow"></div>
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
  background: #000000;
}

/* Partículas animadas */
.particles-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.particle {
  position: absolute;
  border-radius: 50%;
  filter: blur(0.5px);
  animation: float linear infinite;
  box-shadow: 0 0 10px currentColor;
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-10px) translateX(5px);
  }
  50% {
    transform: translateY(-5px) translateX(10px);
  }
  75% {
    transform: translateY(-15px) translateX(5px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}

/* Efeito de grade */
.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(56, 223, 92, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 223, 92, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

/* Luzes de fundo */
.light-effect {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  z-index: 0;
}

.light-1 {
  width: 300px;
  height: 300px;
  background: #00ff41;
  top: 20%;
  left: 10%;
  animation: pulseLight 8s ease-in-out infinite;
}

.light-2 {
  width: 200px;
  height: 200px;
  background: #1eff00;
  bottom: 30%;
  right: 15%;
  animation: pulseLight 6s ease-in-out infinite reverse;
}

.light-3 {
  width: 150px;
  height: 150px;
  background: #00ff41;
  top: 60%;
  left: 80%;
  animation: pulseLight 10s ease-in-out infinite;
}

@keyframes pulseLight {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.1);
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  z-index: 1;
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

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
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

  0%,
  50% {
    opacity: 1;
  }

  51%,
  100% {
    opacity: 0;
  }
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

  0%,
  100% {
    opacity: 0.3;
  }

  50% {
    opacity: 1;
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .hero {
    height: 100vh;
  }

  .container-hero {
    width: 95%;
    padding: 1rem;
    margin-top: 2rem;
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
  
  /* Reduzir efeitos para mobile */
  .light-effect {
    filter: blur(40px);
  }
  
  .grid-overlay {
    background-size: 30px 30px;
  }
}

@media (max-width: 480px) {
  .badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  
  .light-effect {
    display: none;
  }
}
</style>