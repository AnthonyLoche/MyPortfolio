<script setup>
import portrait from '@/assets/images/optimized/MyPhoto.webp'
import { profile } from '@/data/profile'
</script>
<template>
  <figure class="portrait"><div class="portrait-crop"><img class="portrait-image" :src="portrait" alt="Anthony Gabriel" width="800" height="1000" loading="lazy"></div><figcaption>Anthony Gabriel <span>{{ profile.location }}</span></figcaption></figure>
</template>
