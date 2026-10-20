<script setup>
import { ref } from 'vue'
import HeroMain from '@/components/sections/hero/HeroMain.vue'
import ProjectsSection from '@/components/sections/projects/ProjectsSection.vue'
import AboutMeSection from '@/components/sections/aboutme/AboutMeSection.vue'
import StackSection from '@/components/sections/stacks/StackSection.vue'
import { usePageMotion } from '@/composables/usePageMotion'
const page = ref(null)
usePageMotion(page)
</script>
<template>
  <div ref="page" class="home-page"><HeroMain /><ProjectsSection featured /><AboutMeSection /><StackSection /></div>
</template>
