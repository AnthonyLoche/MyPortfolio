<script setup>
import { ref } from 'vue'
import AboutMeSection from '@/components/sections/aboutme/AboutMeSection.vue'
import StackSection from '@/components/sections/stacks/StackSection.vue'
import { usePageMotion } from '@/composables/usePageMotion'
const page = ref(null)
usePageMotion(page)
</script>
<template><div ref="page" class="about-page"><AboutMeSection standalone /><StackSection /></div></template>
