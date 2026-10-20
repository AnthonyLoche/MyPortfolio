<script setup>
import { computed, ref, watch, nextTick } from 'vue'
import { useProjectsStore } from '@/data/projects'
import { projectImage } from '@/lib/projectMedia'
import { projectCategory, projectStories } from '@/data/projectStories'
import { ScrollTrigger } from '@/lib/motion'
import CardProject from './CardProject.vue'
import ArrowIcon from '@/components/global/ArrowIcon.vue'

const props = defineProps({ featured: Boolean })
const store = useProjectsStore()
const mode = ref('interface')
const filter = ref('Todos')
function shuffle(items) {
  const list = [...items]
  for (let i = list.length - 1; i > 0; i--) {
    const index = Math.floor(Math.random() * (i + 1))
    ;[list[i], list[index]] = [list[index], list[i]]
  }
  return list
}
const archive = ref(shuffle(store.state.projects.filter((project) => project.showInShowcase !== false)))
const featuredProjects = computed(() => [13, 12, 11, 10].map((id) => store.state.projects.find((p) => p.id === id)).filter(Boolean))
const projects = computed(() => archive.value.filter((project) => filter.value === 'Todos' || projectCategory(project) === filter.value))
const active = ref(archive.value[0])
watch(filter, async () => { active.value = projects.value[0]; await nextTick(); ScrollTrigger.refresh() })
watch(mode, async () => { await nextTick(); ScrollTrigger.refresh() })
</script>
<template>
  <section id="trabalhos" class="projects-section" :class="{ 'is-archive': !props.featured }">
    <div class="section-heading frame" data-reveal-group>
      <component :is="props.featured ? 'h2' : 'h1'" class="section-title" tabindex="-1" data-reveal>{{ props.featured ? 'Trabalho que resolve.' : 'Projetos.' }}</component>
      <div class="section-intro" data-reveal><p>{{ props.featured ? 'Cada interface tem uma história. E uma boa parte dela acontece por trás da tela.' : 'Websites, plataformas e sistemas construídos a partir de problemas reais.' }}</p>
        <div v-if="props.featured" class="view-switch" role="group" aria-label="Perspectiva dos projetos">
          <button :aria-pressed="mode === 'interface'" @click="mode = 'interface'">A interface</button><button :aria-pressed="mode === 'context'" @click="mode = 'context'">Por trás do projeto</button>
        </div>
        <div v-else class="view-switch" role="group" aria-label="Filtrar projetos"><button v-for="category in ['Todos', 'Sistemas', 'Websites']" :key="category" :aria-pressed="filter === category" @click="filter = category">{{ category }}</button></div>
      </div>
    </div>
    <template v-if="props.featured">
      <div class="featured-work"><CardProject v-for="project in featuredProjects" :key="project.id" :project="project" :mode="mode" /></div>
      <div class="all-work frame"><p>Outras ideias que saíram do papel.</p><RouterLink class="solid-action" to="/projects">Ver todos os projetos <ArrowIcon /></RouterLink></div>
    </template>
    <div v-else class="project-index frame">
      <p class="sr-only" aria-live="polite">{{ projects.length }} projetos encontrados</p>
      <div class="index-list">
        <RouterLink v-for="project in projects" :key="project.id" :to="'/projects/' + project.id" class="index-item" :class="{ 'is-selected': active?.id === project.id }" @mouseenter="active = project" @focus="active = project">
          <img class="index-mobile-image" :src="projectImage(project.image)" :alt="'Interface de ' + project.title" width="800" height="500" loading="lazy">
          <div><p class="index-category">{{ projectCategory(project) }}</p><h2>{{ project.title }}</h2><p class="index-technologies">{{ project.technologies.slice(0, 3).join(', ') }}</p></div><ArrowIcon />
        </RouterLink>
      </div>
      <aside v-if="active" class="index-preview" aria-label="Prévia do projeto selecionado">
        <Transition name="preview" mode="out-in"><div :key="active.id"><RouterLink :to="'/projects/' + active.id" tabindex="-1" aria-hidden="true"><img :src="projectImage(active.image)" :alt="active.title" width="1000" height="800"></RouterLink><p>{{ projectStories[active.id]?.focus || active.type }}</p><p class="preview-description">{{ active.description }}</p></div></Transition>
      </aside>
    </div>
  </section>
</template>
