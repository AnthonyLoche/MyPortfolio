<script setup>
import { ref } from 'vue'
import { profile } from '@/data/profile'
import ArrowIcon from './ArrowIcon.vue'
const copied = ref(false)
const copyError = ref(false)
async function copyEmail() {
  try { await navigator.clipboard.writeText(profile.email); copied.value = true; copyError.value = false }
  catch { copyError.value = true }
}
</script>
<template>
  <section class="contact-section frame" data-reveal-group>
    <div class="contact-intro"><h1 class="section-title" tabindex="-1" data-reveal>Vamos conversar.</h1><p data-reveal>Tem um projeto em mente ou uma oportunidade de trabalho? Quero entender o que você precisa construir.</p></div>
    <div class="contact-addresses">
      <a class="contact-channel" :href="'mailto:' + profile.email" data-reveal><span>E-mail</span><span>{{ profile.email }}</span><ArrowIcon /></a>
      <a class="contact-channel" :href="profile.whatsapp" target="_blank" rel="noopener noreferrer" data-reveal><span>WhatsApp</span><span>{{ profile.phone }}</span><ArrowIcon /></a>
    </div>
    <div class="contact-bottom"><div><button class="text-action" @click="copyEmail">{{ copied ? 'E-mail copiado' : 'Copiar e-mail' }}<ArrowIcon /></button><p class="copy-feedback" role="status">{{ copied ? 'Pronto para colar onde preferir.' : copyError ? 'Não foi possível copiar. Use o endereço de e-mail acima.' : '' }}</p></div><p>Disponível para projetos.<br>{{ profile.location }}, Brasil.</p></div>
    <nav class="contact-networks" aria-label="Redes sociais"><a v-for="social in profile.socials" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer">{{ social.name }}<ArrowIcon /></a></nav>
  </section>
</template>
