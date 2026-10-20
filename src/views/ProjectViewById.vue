<script setup>
import { Components } from '@/components';
</script>

<template>
    <component :is="Components.HeaderMain" />
    <component :is="Components.HeroProject" />
    <component :is="Components.InfoProject" />
    <component :is="Components.FooterMain" />
</template>
