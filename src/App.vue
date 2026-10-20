<script setup>
import { RouterView, useRoute } from 'vue-router'
import { watch, ref } from 'vue'
import HeaderMain from '@/components/global/header/HeaderMain.vue'
import FooterMain from '@/components/global/footer/FooterMain.vue'
import { gsap, reducedMotion } from '@/lib/motion'

const route = useRoute()
const wipe = ref(null)
watch(() => route.fullPath, () => {
  const names = { home: 'Desenvolvedor fullstack', projects: 'Projetos', 'about-me': 'Sobre', contact: 'Contato', project: 'Projeto' }
  document.title = (names[route.name] || 'Portfolio') + ' | Anthony Gabriel'
}, { immediate: true })
function enter(el, done) {
  if (reducedMotion()) { gsap.set(wipe.value, { scaleY: 0 }); done(); return }
  gsap.set(wipe.value, { transformOrigin: 'center top' })
  gsap.to(wipe.value, { scaleY: 0, duration: 0.45, ease: 'power3.inOut' })
  gsap.fromTo(el, { autoAlpha: 0.65, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.65, ease: 'expo.out', clearProps: 'opacity,visibility,transform', onComplete: done })
}
function leave(el, done) {
  if (reducedMotion()) { done(); return }
  gsap.set(wipe.value, { transformOrigin: 'center bottom' })
  gsap.to(wipe.value, { scaleY: 1, duration: 0.25, ease: 'power3.inOut', onComplete: done })
}
function afterEnter(el) {
  el.querySelector('h1')?.focus({ preventScroll: true })
}
</script>
<template>
  <a class="skip-link" href="#main-content">Pular para o conteúdo</a>
  <HeaderMain />
  <div ref="wipe" class="route-wipe" aria-hidden="true"></div>
  <main id="main-content" tabindex="-1">
    <RouterView v-slot="{ Component, route: currentRoute }">
      <Transition :css="false" :mode="reducedMotion() ? undefined : 'out-in'" @enter="enter" @leave="leave" @after-enter="afterEnter">
        <component :is="Component" :key="currentRoute.path" />
      </Transition>
    </RouterView>
  </main>
  <FooterMain />
</template>
