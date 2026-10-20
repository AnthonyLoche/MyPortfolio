<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import ArrowIcon from '../ArrowIcon.vue'
import ContextIcon from '../ContextIcon.vue'

const route = useRoute()
const open = ref(false)
const menuButton = ref(null)
const progress = ref(0)
const links = [{ label: 'Projetos', to: '/projects', icon: 'projects' }, { label: 'Sobre', to: '/about-me', icon: 'about' }, { label: 'Contato', to: '/contact', icon: 'contact' }]
let frame = 0
function scroll() {
  if (frame) return
  frame = requestAnimationFrame(() => {
    const height = document.documentElement.scrollHeight - window.innerHeight
    progress.value = height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0
    frame = 0
  })
}
function escape(event) {
  if (event.key === 'Escape' && open.value) { open.value = false; menuButton.value?.focus() }
}
watch(() => route.path, () => { open.value = false; scroll() })
onMounted(() => { window.addEventListener('scroll', scroll, { passive: true }); window.addEventListener('keydown', escape); scroll() })
onUnmounted(() => { window.removeEventListener('scroll', scroll); window.removeEventListener('keydown', escape); cancelAnimationFrame(frame) })
</script>
<template>
  <header class="site-header">
    <div class="header-inner frame">
      <RouterLink class="brand" to="/" aria-label="Anthony Gabriel, início">
        <span class="brand-monogram">ag</span><span class="brand-caption">Anthony Gabriel<br>Desenvolvedor fullstack</span>
      </RouterLink>
      <nav class="desktop-nav" aria-label="Navegação principal">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" :aria-current="route.path.startsWith(link.to) ? 'page' : undefined">
          <ContextIcon :name="link.icon" /><span class="link-roll"><span>{{ link.label }}</span><span aria-hidden="true">{{ link.label }}</span></span>
        </RouterLink>
        <a class="header-contact" href="mailto:anthonylocheifc@gmail.com" aria-label="Enviar um e-mail para Anthony"><ContextIcon name="email" /></a>
      </nav>
      <button ref="menuButton" class="menu-toggle" :aria-expanded="open" aria-controls="mobile-navigation" @click="open = !open">
        {{ open ? 'Fechar' : 'Menu' }}<span class="menu-lines" :class="{ 'is-open': open }" aria-hidden="true"><i></i><i></i></span>
      </button>
    </div>
    <nav v-if="open" id="mobile-navigation" class="mobile-nav frame" aria-label="Navegação mobile">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to" :aria-current="route.path.startsWith(link.to) ? 'page' : undefined"><span class="mobile-nav-label"><ContextIcon :name="link.icon" />{{ link.label }}</span><ArrowIcon /></RouterLink>
      <a href="mailto:anthonylocheifc@gmail.com"><span class="mobile-nav-label"><ContextIcon name="email" />Enviar um e-mail</span><ArrowIcon /></a>
    </nav>
    <div class="reading-progress" aria-hidden="true" :style="{ transform: 'scaleX(' + progress + ')' }"></div>
  </header>
</template>
