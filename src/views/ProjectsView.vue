<script setup>
import { ref } from 'vue'
import ProjectsSection from '@/components/sections/projects/ProjectsSection.vue'
import { usePageMotion } from '@/composables/usePageMotion'
const page = ref(null)
usePageMotion(page)
</script>
<template><div ref="page" class="projects-page"><ProjectsSection /></div></template>
