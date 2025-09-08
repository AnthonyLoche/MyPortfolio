<script setup>
import { Components } from '@/components';
</script>

<template>
  <component :is="Components.HeaderMain" />
  <component :is="Components.HeroMain" />
  <component :is="Components.AboutMeSection" />
  <component :is="Components.StackSection" />
  <component :is="Components.ProjectsSection" ref="projectsSection" />
  <component :is="Components.FooterMain" />
</template>
