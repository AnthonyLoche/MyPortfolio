<script setup>
import { computed, ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useProjectsStore } from '@/data/projects'
import { profile } from '@/data/profile'
import { projectImage } from '@/lib/projectMedia'
import { gsap, reducedMotion } from '@/lib/motion'
import ArrowIcon from '@/components/global/ArrowIcon.vue'
const store = useProjectsStore()
const choices = computed(() => [13, 12, 11].map((id) => store.state.projects.find((project) => project.id === id)).filter(Boolean))
const index = ref(0)
const featured = computed(() => choices.value[index.value])
const summaries = { 13: 'Um sistema completo para organizar uma assistência técnica.', 12: 'Presença digital e automação de orçamentos para uma empresa de Portugal.', 11: 'Website e gestão de catálogo para um petshop em Mafra, Portugal.' }
const preview = ref(null)
const paused = ref(false)
const interacting = ref(false)
const visible = ref(true)
const reduce = ref(false)
const pageVisible = ref(true)
let timer
let observer
let media
function next(direction = 1) { index.value = (index.value + direction + choices.value.length) % choices.value.length }
function refreshTimer() {
  clearInterval(timer)
  if (!paused.value && !interacting.value && visible.value && !reduce.value && pageVisible.value) timer = setInterval(() => next(), 6000)
}
function visibility() { pageVisible.value = document.visibilityState === 'visible' }
function preference() { reduce.value = media.matches }
function focusOut(event) { if (!event.currentTarget.contains(event.relatedTarget)) interacting.value = false }
watch([paused, interacting, visible, reduce, pageVisible], refreshTimer)
watch(index, async () => {
  await nextTick()
  if (!reducedMotion() && preview.value) gsap.fromTo(preview.value, { y: 22, autoAlpha: 0.35 }, { y: 0, autoAlpha: 1, duration: 0.7, ease: 'expo.out', overwrite: 'auto', clearProps: 'opacity,visibility,transform' })
})
onMounted(() => {
  media = window.matchMedia('(prefers-reduced-motion: reduce)')
  preference()
  media.addEventListener('change', preference)
  visibility()
  document.addEventListener('visibilitychange', visibility)
  observer = new IntersectionObserver(([entry]) => { visible.value = entry.isIntersecting }, { threshold: 0.2 })
  if (preview.value) observer.observe(preview.value)
  for (const project of choices.value) { const image = new Image(); image.src = projectImage(project.image) }
  refreshTimer()
})
onUnmounted(() => { clearInterval(timer); observer?.disconnect(); media?.removeEventListener('change', preference); document.removeEventListener('visibilitychange', visibility); if (preview.value) gsap.killTweensOf(preview.value) })
</script>
<template>
  <section class="intro-hero frame">
    <div class="hero-layout">
      <div class="hero-copy">
        <h1 class="hero-name" tabindex="-1"><span class="hero-line"><span class="hero-name-line">Anthony</span></span><span class="hero-line"><span class="hero-name-line">Gabriel</span></span></h1>
        <div class="hero-intro"><p class="hero-role">Desenvolvedor fullstack.</p><p class="hero-description">Da conversa com o cliente ao sistema pronto.<br class="desktop-only"> Crio interfaces e construo o que acontece por trás delas.</p></div>
        <div class="hero-actions"><a class="solid-action" href="#trabalhos">Explorar projetos <ArrowIcon direction="down" /></a><RouterLink class="text-action" to="/contact">Vamos conversar <ArrowIcon /></RouterLink></div>
      </div>
      <div v-if="featured" class="hero-feature" role="region" aria-label="Prévia de projetos" @pointerenter="interacting = $event.pointerType === 'mouse'" @pointerleave="interacting = false" @focusin="interacting = true" @focusout="focusOut">
        <div ref="preview" :aria-live="paused || interacting || reduce ? 'polite' : 'off'">
          <RouterLink class="hero-feature-link" :to="'/projects/' + featured.id">
            <div class="hero-feature-media"><img :src="projectImage(featured.image)" :alt="'Interface do projeto ' + featured.title" width="1000" height="700" fetchpriority="high"></div>
            <div class="hero-feature-caption"><div><h2>{{ featured.title }}</h2><p>{{ summaries[featured.id] }}</p></div><ArrowIcon /></div>
          </RouterLink>
        </div>
        <div class="hero-preview-controls"><div><button class="icon-button" aria-label="Projeto anterior na prévia" @click="next(-1)"><ArrowIcon direction="left" /></button><span>{{ index + 1 }} de {{ choices.length }}</span><button class="icon-button" aria-label="Próximo projeto na prévia" @click="next()"><ArrowIcon direction="right" /></button></div><button v-if="!reduce" class="preview-play" :aria-pressed="!paused" @click="paused = !paused">{{ paused ? 'Reproduzir prévia' : 'Pausar prévia' }}</button><span v-else class="preview-reduced">Navegação manual</span></div>
      </div>
    </div>
    <div class="hero-bottom"><p>Interfaces, APIs e dados.<br>As partes conectadas ao mesmo objetivo.</p><p>{{ profile.locationShort }}<br>Disponível para projetos</p><a class="scroll-cue" href="#trabalhos" aria-label="Rolar até os projetos"><ArrowIcon direction="down" /></a></div>
  </section>
</template>
