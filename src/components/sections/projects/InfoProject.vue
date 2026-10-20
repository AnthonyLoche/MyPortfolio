<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useProjectsStore } from '@/data/projects'
import { projectImage } from '@/lib/projectMedia'
import { gsap, reducedMotion } from '@/lib/motion'
import ArrowIcon from '@/components/global/ArrowIcon.vue'
const store = useProjectsStore()
const project = computed(() => store.state.selectedProject)
const current = ref(0)
const playing = ref(false)
const visible = ref(true)
const documentVisible = ref(true)
const reduce = ref(false)
const gallery = ref(null)
const galleryImage = ref(null)
const imageLoading = ref(false)
const imageError = ref(false)
let imageRequest = 0
let timer
let observer
let media
const images = computed(() => project.value?.carrouselImages || [])
const next = computed(() => {
  const list = store.state.projects.filter((item) => item.showInShowcase !== false)
  return list[(list.findIndex((item) => item.id === project.value?.id) + 1) % list.length]
})
async function select(index) {
  const target = (index + images.value.length) % images.value.length
  const request = ++imageRequest
  imageLoading.value = true
  imageError.value = false
  const preload = new Image()
  preload.src = projectImage(images.value[target])
  try {
    await preload.decode()
    if (request !== imageRequest) return
    current.value = target
    await nextTick()
    if (!reducedMotion() && galleryImage.value) gsap.fromTo(galleryImage.value, { autoAlpha: 0.55, x: 14 }, { autoAlpha: 1, x: 0, duration: 0.4, ease: 'power3.out', clearProps: 'opacity,visibility,transform', overwrite: true })
  } catch {
    if (request === imageRequest) imageError.value = true
  } finally {
    if (request === imageRequest) imageLoading.value = false
  }
}
function manual(index) { playing.value = false; select(index) }
function keyboard(event) {
  if (event.key === 'ArrowRight') { event.preventDefault(); manual(current.value + 1) }
  if (event.key === 'ArrowLeft') { event.preventDefault(); manual(current.value - 1) }
}
function refreshTimer() {
  clearInterval(timer)
  if (playing.value && visible.value && documentVisible.value && !reduce.value && images.value.length > 1) timer = setInterval(() => select(current.value + 1), 5000)
}
function visibility() { documentVisible.value = document.visibilityState === 'visible' }
function preference() { reduce.value = media.matches; if (reduce.value) playing.value = false }
watch([playing, visible, documentVisible, reduce], refreshTimer)
watch(() => project.value?.id, () => { imageRequest++; current.value = 0; playing.value = false; imageError.value = false; imageLoading.value = false })
onMounted(() => {
  media = window.matchMedia('(prefers-reduced-motion: reduce)')
  preference()
  media.addEventListener('change', preference)
  visibility()
  document.addEventListener('visibilitychange', visibility)
  observer = new IntersectionObserver(([entry]) => { visible.value = entry.isIntersecting }, { threshold: 0.25 })
  if (gallery.value) observer.observe(gallery.value)
})
onUnmounted(() => { imageRequest++; clearInterval(timer); observer?.disconnect(); media?.removeEventListener('change', preference); document.removeEventListener('visibilitychange', visibility); if (galleryImage.value) gsap.killTweensOf(galleryImage.value) })
</script>
<template>
  <div v-if="project" class="project-info">
    <section ref="gallery" class="project-gallery frame" aria-label="Galeria de imagens do projeto" @keydown="keyboard">
      <div class="gallery-image" :aria-busy="imageLoading"><img ref="galleryImage" :src="projectImage(images[current])" :alt="project.title + ', captura ' + (current + 1) + ' de ' + images.length" width="1600" height="1000" fetchpriority="high"></div>
      <p v-if="imageError" class="gallery-error" role="status">Não foi possível carregar a imagem. Tente novamente pelos controles da galeria.</p>
      <div class="gallery-controls"><div><button class="icon-button" :disabled="images.length < 2" aria-label="Imagem anterior" @click="manual(current - 1)"><ArrowIcon direction="left" /></button><p :aria-live="playing ? 'off' : 'polite'">{{ current + 1 }} de {{ images.length }}</p><button class="icon-button" :disabled="images.length < 2" aria-label="Próxima imagem" @click="manual(current + 1)"><ArrowIcon direction="right" /></button></div><button v-if="images.length > 1" class="gallery-play" :aria-pressed="playing" :disabled="reduce" @click="playing = !playing">{{ reduce ? 'Movimento reduzido' : playing ? 'Pausar galeria' : 'Reproduzir galeria' }}</button><a :href="images[current]" target="_blank" rel="noopener noreferrer" class="text-action">Abrir original <ArrowIcon /></a></div>
      <div class="gallery-thumbnails" role="group" aria-label="Escolher uma imagem"><button v-for="(image, i) in images" :key="image" :aria-label="'Ver captura ' + (i + 1)" :aria-pressed="current === i" @click="manual(i)"><img :src="projectImage(image)" alt="" width="144" height="90" loading="lazy"></button></div>
    </section>
    <section class="project-story frame" data-reveal-group>
      <div class="story-sidebar"><h2 data-reveal>O projeto.</h2><p>{{ project.type }}</p><ul class="technology-list" aria-label="Tecnologias utilizadas"><li v-for="tech in project.technologies" :key="tech">{{ tech }}</li></ul></div>
      <div class="story-copy"><p data-reveal>{{ project.about }}</p><div v-if="project.links.length" class="project-links"><a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer" class="solid-action">{{ link.label.trim() }}<ArrowIcon /></a></div><p v-else class="private-project">{{ project.id === 13 ? 'Projeto fechado para uso privado do cliente. Não há link público de deploy.' : 'Não há links públicos disponíveis para este projeto.' }}</p></div>
    </section>
    <section v-if="next" class="next-project frame"><h2>Continue explorando.</h2><RouterLink :to="'/projects/' + next.id"><p class="next-project-name">{{ next.title }}</p><ArrowIcon /></RouterLink></section>
  </div>
</template>
