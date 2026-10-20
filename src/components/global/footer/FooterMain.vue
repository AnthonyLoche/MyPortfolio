<script setup>
import { profile } from '@/data/profile'
import ArrowIcon from '../ArrowIcon.vue'
import ContextIcon from '../ContextIcon.vue'
import { reducedMotion } from '@/lib/motion'
const year = new Date().getFullYear()
function toTop() { window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' }) }
</script>
<template>
  <footer class="site-footer">
    <div class="frame footer-top">
      <div class="footer-invitation"><h2>Vamos construir<br>algo com sentido.</h2><RouterLink class="text-action" to="/contact">Vamos conversar <ArrowIcon /></RouterLink></div>
      <nav aria-label="Redes sociais" class="footer-socials"><a v-for="social in profile.socials" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer"><span class="footer-social-label"><ContextIcon :name="social.name.toLowerCase()" />{{ social.name }}</span><ArrowIcon /></a></nav>
      <div class="footer-location"><p>{{ profile.location }}<br>Brasil</p><a :href="'mailto:' + profile.email">Enviar um e-mail</a><button class="back-top" @click="toTop">Voltar ao topo <ArrowIcon direction="up" /></button></div>
    </div>
    <div class="footer-wordmark frame" aria-hidden="true">ANTHONY</div>
    <div class="footer-bottom frame"><p>© {{ year }} Anthony Gabriel</p><p>Da ideia ao código. Do front ao back.</p><RouterLink to="/">Início</RouterLink></div>
  </footer>
</template>
