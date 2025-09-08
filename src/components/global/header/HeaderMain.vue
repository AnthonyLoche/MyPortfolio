<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="{ 'scrolled': isScrolled }">
    <div class="header-container">
      <div class="brand">
        <div class="logo-icon">
          <span class="logo-text">AG</span>
          <div class="logo-glow"></div>
        </div>
        <h2 class="brand-name">
          <span class="highlight">Anthony Gabriel</span>
          <span class="subtitle">Portfolio</span>
        </h2>
      </div>

      <nav class="desktop-nav">
        <router-link to="/" class="nav-link active">
          <span class="nav-text">Home</span>
          <div class="nav-indicator"></div>
        </router-link>
        <router-link to="/about" class="nav-link">
          <span class="nav-text">Sobre</span>
          <div class="nav-indicator"></div>
        </router-link>
        <router-link to="/projects" class="nav-link">
          <span class="nav-text">Projetos</span>
          <div class="nav-indicator"></div>
        </router-link>
        <router-link to="/contact" class="nav-link">
          <span class="nav-text">Contato</span>
          <div class="nav-indicator"></div>
        </router-link>
      </nav>


      <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ 'active': isMobileMenuOpen }">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" :class="{ 'open': isMobileMenuOpen }">
      <div class="mobile-nav-content">
        <router-link to="/" class="mobile-nav-link" @click="toggleMobileMenu">
          <span class="mobile-link-number">01</span>
          <span class="mobile-link-text">Home</span>
        </router-link>
        <router-link to="/about" class="mobile-nav-link" @click="toggleMobileMenu">
          <span class="mobile-link-number">02</span>
          <span class="mobile-link-text">Sobre</span>
        </router-link>
        <router-link to="/projects" class="mobile-nav-link" @click="toggleMobileMenu">
          <span class="mobile-link-number">03</span>
          <span class="mobile-link-text">Projetos</span>
        </router-link>
        <router-link to="/contact" class="mobile-nav-link" @click="toggleMobileMenu">
          <span class="mobile-link-number">04</span>
          <span class="mobile-link-text">Contato</span>
        </router-link>
        <div class="mobile-cta">
          <button class="mobile-cta-button" @click="toggleMobileMenu">
            Vamos conversar
          </button>
        </div>
      </div>
    </div>

    <div class="header-backdrop"></div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 1rem 0;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(0, 0, 0, 0.05);
}

header.scrolled {
  padding: 0.75rem 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(56, 223, 92, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.header-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(10px);
  z-index: -1;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
}

.logo-icon {
  position: relative;
  width: 45px;
  height: 45px;
  background: #38df5c;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.logo-text {
  font-size: 1.2rem;
  font-weight: 900;
  color: #000;
  z-index: 2;
}

.logo-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: logoGlow 3s infinite;
}

@keyframes logoGlow {

  0%,
  100% {
    left: -100%;
  }

  50% {
    left: 100%;
  }
}

.brand-name {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0;
}

.highlight {
  font-size: 1.3rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
}

.subtitle {
  font-size: 0.8rem;
  font-weight: 400;
  color: #38df5c;
  line-height: 1;
  margin-top: -2px;
}

.desktop-nav {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: #b0b0b0;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  overflow: hidden;
}

.nav-text {
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
}

.nav-indicator {
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: #38df5c;
  transform: translateX(-50%);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 1px;
}

.nav-link:hover .nav-text,
.nav-link.active .nav-text {
  color: #38df5c;
}

.nav-link:hover .nav-indicator,
.nav-link.active .nav-indicator {
  width: 100%;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(56, 223, 92, 0.05);
  border-radius: 8px;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  z-index: 1;
}

.nav-link:hover::before {
  transform: scaleX(1);
}

.header-cta {
  display: flex;
  align-items: center;
}

.cta-button {
  position: relative;
  background: #38df5c;
  color: #000;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(56, 223, 92, 0.3);
}

.button-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.6s ease;
}

.cta-button:hover .button-shine {
  left: 100%;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(56, 223, 92, 0.4);
}

.button-text {
  position: relative;
  z-index: 2;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.hamburger-line {
  width: 25px;
  height: 2px;
  background: #ffffff;
  transition: all 0.3s ease;
  border-radius: 1px;
}

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
  background: #38df5c;
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
  background: #38df5c;
}

.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
}

.mobile-nav.open {
  right: 0;
}

.mobile-nav-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2rem;
  padding: 2rem;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  animation: slideInUp 0.6s ease forwards;
}

.mobile-nav-link:nth-child(1) {
  animation-delay: 0.1s;
}

.mobile-nav-link:nth-child(2) {
  animation-delay: 0.2s;
}

.mobile-nav-link:nth-child(3) {
  animation-delay: 0.3s;
}

.mobile-nav-link:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-link-number {
  font-size: 1rem;
  color: #38df5c;
  font-weight: 400;
  min-width: 30px;
}

.mobile-nav-link:hover {
  color: #38df5c;
  transform: translateX(10px);
}

.mobile-cta {
  margin-top: 2rem;
  opacity: 0;
  animation: slideInUp 0.6s ease 0.5s forwards;
}

.mobile-cta-button {
  background: transparent;
  border: 2px solid #38df5c;
  color: #38df5c;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-cta-button:hover {
  background: #38df5c;
  color: #000;
}

/* Responsividade */
@media (max-width: 1024px) {
  .desktop-nav {
    gap: 2rem;
  }

  .nav-link {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 1.5rem;
  }

  .desktop-nav,
  .header-cta {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .brand-name {
    display: none;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0 1rem;
    gap: 1rem;
  }

  .logo-icon {
    width: 40px;
    height: 40px;
  }

  .logo-text {
    font-size: 1.1rem;
  }
}
</style>