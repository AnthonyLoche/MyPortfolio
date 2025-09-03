<script setup>
import { Components } from '@/components';
</script>

<template>
  <component :is="Components.HeaderMain" />
  <component :is="Components.HeroMain" />
  <component :is="Components.AboutMeSection" />
</template>
