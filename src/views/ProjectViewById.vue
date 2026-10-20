<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '@/data/projects'
import HeroProject from '@/components/sections/projects/HeroProject.vue'
import InfoProject from '@/components/sections/projects/InfoProject.vue'
import { usePageMotion } from '@/composables/usePageMotion'
const page = ref(null)
const route = useRoute()
const store = useProjectsStore()
const project = computed(() => store.state.selectedProject)
store.getProjectById(route.params.id)
if (project.value) document.title = project.value.title + ' | Anthony Gabriel'
usePageMotion(page)
</script>
<template><div v-if="project" ref="page" class="project-detail"><HeroProject /><InfoProject /></div></template>
