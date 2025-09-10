<script setup>
import Instagram from "vue-material-design-icons/Instagram.vue"
import LinkedIn from "vue-material-design-icons/Linkedin.vue"
import GitHub from "vue-material-design-icons/Github.vue"

const currentYear = new Date().getFullYear()
const email = "anthonylocheifc@gmail.com"

const socialLinks = [
    { name: 'GitHub', icon: GitHub, url: 'https://github.com/AnthonyLoche', hover: 'Ver repositórios' },
    { name: 'LinkedIn', icon: LinkedIn, url: 'https://www.linkedin.com/in/anthony-reis-282663291/', hover: 'Conectar no LinkedIn' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/4nthony_lch/', hover: 'Ver posts' }
]

const quickLinks = [
    { name: 'Sobre', url: '/about-me' },
    { name: 'Projetos', url: '/projects' },
    { name: 'Contato', url: '/contact' }
]

const services = [
    'Desenvolvimento Web',
    'APIs REST',
    'Manutenção'
]

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <footer class="footer">
        <div class="footer-bg"></div>
        <div class="container">
            <div class="footer-main">
                <div class="footer-brand">
                    <div class="logo">
                        <span class="logo-icon">⚡</span>
                        <span class="logo-text">Anthony Gabriel Portfólio</span>
                    </div>
                    <p class="brand-description">
                        Desenvolvedor FullStack apaixonado por criar soluções digitais inovadoras 
                        e experiências únicas para usuários.
                    </p>
                    <div class="social-links">
                        <a 
                            v-for="social in socialLinks" 
                            :key="social.name"
                            :href="social.url" 
                            class="social-link"
                            :title="social.hover"
                        >
                            <component :is="social.icon" class="social-icon" />
                            <span class="social-name">{{ social.name }}</span>
                            <div class="social-glow"></div>
                        </a>
                    </div>
                </div>

                <div class="footer-links">
                    <div class="link-group">
                        <h3>Navegação</h3>
                        <ul>
                            <li v-for="link in quickLinks" :key="link.name">
                                <router-link :to="link.url" class="footer-link">{{ link.name }}</router-link>
                            </li>
                        </ul>
                    </div>

                    <div class="link-group">
                        <h3>Serviços</h3>
                        <ul>
                            <li v-for="service in services" :key="service">
                                <span>{{ service }}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="link-group contact-info">
                        <h3>Contato</h3>
                        <div class="contact-item">
                            <span class="contact-icon">📧</span>
                            <a :href="`mailto:${email}`" class="contact-link">{{ email }}</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📍</span>
                            <span>Araquari, SC - Brasil</span>
                        </div>
                        <div class="availability">
                            <span class="status-dot"></span>
                            <span>Disponível para projetos</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Linha divisória -->
            <div class="divider"></div>

            <!-- Rodapé final -->
            <div class="footer-bottom">
                <div class="copyright">
                    <p>&copy; {{ currentYear }} DevPortfolio. Todos os direitos reservados.</p>
                    <p class="made-with">Feito com <span class="heart">❤️</span> e muito <span class="coffee">☕</span></p>
                </div>
                <div class="back-to-top">
                    <button class="scroll-top" @click="scrollToTop">
                        <span class="arrow">↑</span>
                        Voltar ao topo
                    </button>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
  background: #000000;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  margin-top: auto;
}

.footer-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(56, 223, 92, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(56, 223, 92, 0.05) 0%, transparent 50%),
    linear-gradient(180deg, transparent 0%, rgba(56, 223, 92, 0.02) 100%);
  z-index: 0;
}

.container {
  width: 75%;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  position: relative;
  z-index: 1;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand {
  max-width: 400px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.logo-icon {
  font-size: 2rem;
  background: linear-gradient(135deg, #38df5c, #1eff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 10px rgba(56, 223, 92, 0.3));
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 0 0 20px rgba(56, 223, 92, 0.3);
}

.brand-description {
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
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

.social-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(56, 223, 92, 0.2), transparent);
  transition: left 0.6s ease;
}

.social-link:hover .social-glow {
  left: 100%;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.link-group h3 {
  color: #38df5c;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
}

.link-group h3::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #38df5c, transparent);
}

.link-group ul {
  list-style: none;
  padding: 0;
}

.link-group li {
  margin-bottom: 0.75rem;
}

.link-group a {
  color: #b0b0b0;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.link-group a:hover {
  color: #38df5c;
  padding-left: 0.5rem;
}

.link-group span {
  color: #b0b0b0;
  font-size: 0.95rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.contact-icon {
  font-size: 1.1rem;
  opacity: 0.8;
}

.contact-link {
  color: #38df5c !important;
  text-decoration: none;
  font-weight: 500;
}

.contact-link:hover {
  padding-left: 0 !important;
  text-shadow: 0 0 10px rgba(56, 223, 92, 0.5);
}

.availability {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(56, 223, 92, 0.1);
  border: 1px solid rgba(56, 223, 92, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: #38df5c;
  font-size: 0.85rem;
  margin-top: 1rem;
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

.tech-section {
  text-align: center;
  margin-bottom: 3rem;
}

.tech-section h3 {
  color: #38df5c;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.tech-badge {
  background: rgba(56, 223, 92, 0.1);
  border: 1px solid rgba(56, 223, 92, 0.2);
  color: #38df5c;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.tech-badge:hover {
  background: rgba(56, 223, 92, 0.2);
  border-color: rgba(56, 223, 92, 0.4);
  transform: translateY(-2px);
}

.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(56, 223, 92, 0.3), transparent);
  margin: 2rem 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright p {
  color: #808080;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.made-with {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.heart {
  color: #ff4757;
  animation: heartbeat 2s infinite;
}

.coffee {
  color: #8b4513;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.scroll-top {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(56, 223, 92, 0.1);
  border: 1px solid rgba(56, 223, 92, 0.3);
  color: #38df5c;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-size: 0.9rem;
  font-weight: 500;
}

.scroll-top:hover {
  background: rgba(56, 223, 92, 0.2);
  border-color: rgba(56, 223, 92, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(56, 223, 92, 0.2);
}

.arrow {
  font-size: 1.1rem;
  font-weight: bold;
}

/* Responsividade */
@media (max-width: 968px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .footer-links {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}

@media (max-width: 768px) {
  .container {
    padding: 3rem 1rem 1.5rem;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  

  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .tech-grid {
    gap: 0.5rem;
  }
  
  .tech-badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 480px) {
  .social-links {
    flex-direction: column;
    align-items: center;
  }
  
  .social-link {
    width: 200px;
    justify-content: center;
  }
}
</style>