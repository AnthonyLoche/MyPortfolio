<script setup>
import MyPhotoComp from './MyPhotoComp.vue'
import AboutMe from './AboutMe.vue'
defineProps({ standalone: Boolean })
</script>
<template>
  <section class="about-section frame" :class="{ 'about-standalone': standalone }">
    <div class="about-heading" data-reveal-group><component :is="standalone ? 'h1' : 'h2'" tabindex="-1" class="section-title" data-reveal>Por trás do código.</component><p data-reveal>Curiosidade para entender.<br>Engenharia para transformar.</p></div>
    <div class="about-layout"><MyPhotoComp /><AboutMe /></div>
    <dl class="about-facts"><div><dt>Onde tudo começou</dt><dd>IFC, Araquari<br>Informática para Internet</dd></div><div><dt>Desde</dt><dd>2023<br>Estudando e construindo</dd></div><div><dt>O que me move</dt><dd>Pessoas, problemas reais<br>e soluções que ajudam</dd></div></dl>
  </section>
</template>
