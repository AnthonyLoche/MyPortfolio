<script setup>
import ArrowIcon from '@/components/global/ArrowIcon.vue'
import { profile } from '@/data/profile'
</script>
<template>
  <div class="about-copy" data-reveal-group>
    <p class="about-statement" data-reveal>Gosto de entender o problema inteiro.<br>Da conversa com o cliente à última linha de código.</p>
    <p data-reveal>Comecei meus estudos em 2023, no curso Técnico em Informática para Internet do Instituto Federal Catarinense, em Araquari. Desde então, venho construindo uma base que conecta desenvolvimento, produto e pessoas.</p>
    <p data-reveal>Meu interesse maior está no backend: pensar as regras, organizar os dados e fazer as partes conversarem. No frontend, procuro dar a essa estrutura uma interface que faça sentido para quem vai usá-la.</p>
    <p data-reveal>Trabalho com Python, JavaScript, Django e Vue.js, e venho ampliando esse repertório com React, Next.js, TypeScript e Angular. Gosto de ouvir, colaborar, compartilhar o que aprendo e assumir responsabilidade pelo que entrego.</p>
    <div class="about-socials" data-reveal><a v-for="social in profile.socials.slice(0, 2)" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" class="text-action">{{ social.name }}<ArrowIcon /></a></div>
  </div>
</template>
