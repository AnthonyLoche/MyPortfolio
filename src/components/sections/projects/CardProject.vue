<script setup>
import { projectImage } from '@/lib/projectMedia'
import { projectStories } from '@/data/projectStories'
import { computed } from 'vue'
import ArrowIcon from '@/components/global/ArrowIcon.vue'
import { gsap, reducedMotion } from '@/lib/motion'
const props = defineProps({ project: { type: Object, required: true }, mode: { type: String, default: 'interface' } })
const story = computed(() => projectStories[props.project.id])
function enter(el, done) {
  if (reducedMotion()) { done(); return }
  gsap.fromTo(el, { autoAlpha: 0, y: 26, rotateX: -4 }, { autoAlpha: 1, y: 0, rotateX: 0, duration: 0.6, ease: 'power3.out', clearProps: 'opacity,visibility,transform', onComplete: done })
}
function leave(el, done) {
  if (reducedMotion()) { done(); return }
  gsap.to(el, { autoAlpha: 0, y: -12, duration: 0.18, ease: 'power2.in', onComplete: done })
}
</script>
<template>
  <article class="work-case" :class="{ 'is-context': mode === 'context' }">
    <div class="case-copy">
      <h3 class="case-title">{{ project.title }}</h3><p class="case-focus">{{ story.focus }}</p>
      <p class="case-excerpt">{{ story.challenge }}</p>
      <p class="case-tech-summary">{{ project.technologies.slice(0, 4).join(', ') }}</p>
      <div class="case-meta"><p>{{ project.duration }}{{ project.year !== 'A definir' ? ' / ' + project.year : '' }}</p><RouterLink class="text-action" :to="'/projects/' + project.id">Conhecer projeto <ArrowIcon /></RouterLink></div>
    </div>
    <div class="case-stage">
      <Transition :css="false" @enter="enter" @leave="leave">
        <div v-if="mode === 'interface'" key="interface" class="case-surface case-media">
          <RouterLink class="case-image-link" :to="'/projects/' + project.id" :aria-label="'Conhecer o projeto ' + project.title"><img class="case-picture" :src="projectImage(project.image)" :alt="'Interface completa de ' + project.title" width="1200" height="800" loading="lazy"></RouterLink>
        </div>
        <div v-else key="context" class="case-surface case-context">
          <div><h4>O desafio</h4><p>{{ story.challenge }}</p></div><div><h4>A solução</h4><p>{{ story.solution }}</p></div><p class="case-tech">{{ project.technologies.join(', ') }}</p>
        </div>
      </Transition>
    </div>
  </article>
</template>
