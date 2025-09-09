<script setup>
import { ref, onMounted } from 'vue'
import Github from 'vue-material-design-icons/Github.vue'
import Linkedin from 'vue-material-design-icons/Linkedin.vue'
import Instagram from 'vue-material-design-icons/Instagram.vue'
import Whatsapp from 'vue-material-design-icons/Whatsapp.vue'
import Map from 'vue-material-design-icons/Map.vue'
import Mail from 'vue-material-design-icons/Email.vue'

const contactSection = ref(null)
const isVisible = ref(false)

// Contact info
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'anthonylocheifc@gmail.com',
    link: 'mailto:anthonylocheifc@gmail.com'
  },
  {
    icon: Whatsapp,
    label: 'WhatsApp',
    value: '+55 (47) 99963-6618',
    link: 'https://wa.me/5547999636618'
  },
  {
    icon: Map,
    label: 'Localização',
    value: 'Araquari, SC - Brasil',
    link: null
  }
]

// Social links
const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/AnthonyLoche',
    color: '#38df5c'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/anthony-reis-282663291/',
    color: '#0077b5'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/4nthony_lch',
    color: '#e4405f'
  }
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting
    },
    { threshold: 0.3 }
  )
  
  if (contactSection.value) {
    observer.observe(contactSection.value)
  }
})
</script>

<template>
  <section class="contact-section" ref="contactSection" :class="{ 'visible': isVisible }">
    <div class="container">
      <!-- Contact Info -->
      <div class="contact-info">
        <div class="section-header">
          <div class="badge">
            <span class="status-dot"></span>
            Disponível para projetos
          </div>
          <h2>Vamos Conversar!</h2>
          <p class="subtitle">
            Tem uma ideia incrível? Vamos transformá-la em realidade juntos. 
            Entre em contato e vamos discutir seu próximo projeto.
          </p>
          <p class="subtitle">
            Ou se for uma empresa e estiver interessada em me contratar, por favor, entre em contato comigo!
          </p>
        </div>

        <!-- Contact Methods -->
        <div class="contact-methods">
          <div 
            v-for="contact in contactInfo" 
            :key="contact.label"
            class="contact-item"
          >
            <div class="contact-icon">
                <component :is="contact.icon" />
            </div>
            <div class="contact-details">
              <div class="contact-label">{{ contact.label }}</div>
              <a 
                v-if="contact.link" 
                :href="contact.link"
                class="contact-value"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ contact.value }}
              </a>
              <span v-else class="contact-value">{{ contact.value }}</span>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="social-section">
          <h3>Me encontre também em:</h3>
          <div class="social-links">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              class="social-link"
              target="_blank"
              rel="noopener noreferrer"
              :title="`Ver perfil no ${social.name}`"
            >
            <component :is="social.icon" />
              <span class="social-name">{{ social.name }}</span>
              <div class="social-hover-effect"></div>
            </a>
          </div>
        </div>
      </div>

      <!-- Photo Section -->
      <div class="photo-wrapper">
        <div class="photo-container">
          <div class="photo-frame">
            <img 
              src="../../assets/images/MyPhoto.jpeg" 
              alt="Foto de perfil" 
              class="profile-photo"
            />
            <div class="photo-glow"></div>
          </div>
          <div class="photo-decoration">
            <div class="floating-element element-1"></div>
            <div class="floating-element element-2"></div>
            <div class="floating-element element-3"></div>
          </div>
        </div>
        
        <div class="photo-info">
          <h3>Anthony Loche</h3>
          <p>Desenvolvedor Full Stack</p>
          <div class="availability-status">
            <span class="status-indicator"></span>
            Disponível para novos projetos
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  min-height: 70vh;
  background: #131613;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 4rem 0;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.contact-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(56, 223, 92, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(0, 255, 65, 0.05) 0%, transparent 50%);
  z-index: 1;
}

.container {
  display: grid;
  grid-template-columns: 1fr 400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  width: 74%;
  gap: 4rem;
  align-items: center;
  margin-top: 2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.section-header {
  text-align: left;
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

.section-header h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  color: #ffffff;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  text-shadow: 0 0 30px rgba(56, 223, 92, 0.3);
}

.subtitle {
  color: #b0b0b0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(56, 223, 92, 0.05);
  border: 1px solid rgba(56, 223, 92, 0.2);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(56, 223, 92, 0.1);
  border-color: rgba(56, 223, 92, 0.3);
  transform: translateX(10px);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: rgba(56, 223, 92, 0.1);
  border: 1px solid rgba(56, 223, 92, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  color: #00ff41;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-label {
  color: #38df5c;
  font-size: 0.9rem;
  font-weight: 600;
}

.contact-value {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-value:hover {
  color: #38df5c;
}

.social-section h3 {
  color: #38df5c;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(56, 223, 92, 0.05);
  border: 1px solid rgba(56, 223, 92, 0.2);
  border-radius: 25px;
  color: #38df5c;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: rgba(56, 223, 92, 0.1);
  border-color: rgba(56, 223, 92, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(56, 223, 92, 0.2);
}

.social-hover-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(56, 223, 92, 0.2), transparent);
  transition: left 0.6s ease;
}

.social-link:hover .social-hover-effect {
  left: 100%;
}

/* Photo Section Styles */
.photo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.photo-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-frame {
  position: relative;
  width: 300px;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(56, 223, 92, 0.3);
  background: rgba(56, 223, 92, 0.05);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.photo-frame:hover {
  transform: scale(1.02) rotate(1deg);
  border-color: rgba(56, 223, 92, 0.5);
  box-shadow: 0 20px 40px rgba(56, 223, 92, 0.2);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.photo-frame:hover .profile-photo {
  transform: scale(1.05);
}

.photo-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #38df5c, #00ff41, #38df5c);
  border-radius: 22px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.photo-frame:hover .photo-glow {
  opacity: 0.3;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.photo-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  background: rgba(56, 223, 92, 0.2);
  animation: float 6s ease-in-out infinite;
}

.element-1 {
  width: 20px;
  height: 20px;
  top: 10%;
  left: -10%;
  animation-delay: 0s;
}

.element-2 {
  width: 15px;
  height: 15px;
  top: 70%;
  right: -5%;
  animation-delay: 2s;
}

.element-3 {
  width: 12px;
  height: 12px;
  top: 30%;
  right: -8%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
  50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
}

.photo-info {
  text-align: center;
  color: #ffffff;
}

.photo-info h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px rgba(56, 223, 92, 0.3);
}

.photo-info p {
  color: #b0b0b0;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.availability-status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(56, 223, 92, 0.1);
  border: 1px solid rgba(56, 223, 92, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  color: #38df5c;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.status-indicator {
  width: 8px;
  height: 8px;
  background: #38df5c;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

span{
    display: flex;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 90%;
  }
  
  .photo-wrapper {
    order: -1;
  }
  
  .photo-frame {
    width: 250px;
    height: 300px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    width: 95%;
    padding: 0 1rem;
    gap: 2rem;
  }
  
  .contact-item {
    padding: 0.75rem;
  }
  
  .contact-icon {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .photo-frame {
    width: 200px;
    height: 250px;
  }
}

@media screen and (max-width: 480px) {
  .social-links {
    flex-direction: column;
  }
  
  .social-link {
    justify-content: center;
    width: 100%;
  }
  
  .contact-methods {
    gap: 1rem;
  }
  
  .photo-frame {
    width: 180px;
    height: 220px;
  }
}
</style>