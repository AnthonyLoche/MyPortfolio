<script setup>
import { ref } from 'vue'
import ContactComp from '@/components/global/ContactComp.vue'
import { usePageMotion } from '@/composables/usePageMotion'
const page = ref(null)
usePageMotion(page)
</script>
<template><div ref="page" class="contact-page"><ContactComp /></div></template>
