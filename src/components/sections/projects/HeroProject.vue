<script setup>
import { computed } from 'vue'
import { useProjectsStore } from '@/data/projects'
import ArrowIcon from '@/components/global/ArrowIcon.vue'
const store = useProjectsStore()
const project = computed(() => store.state.selectedProject)
</script>
<template>
  <section v-if="project" class="project-hero frame" data-reveal-group>
    <RouterLink class="text-action project-back" to="/projects"><ArrowIcon direction="left" />Todos os projetos</RouterLink>
    <h1 class="project-name" :class="{ 'long-title': project.title.length > 26 }" tabindex="-1" data-reveal>{{ project.title }}</h1>
    <div class="project-hero-bottom"><p data-reveal>{{ project.description }}</p><dl class="project-facts" data-reveal><div><dt>Desenvolvimento</dt><dd>{{ project.duration }}</dd></div><div><dt>Status</dt><dd>{{ project.status }}</dd></div><div><dt>Ano</dt><dd>{{ project.year }}</dd></div></dl></div>
  </section>
</template>
