<script setup>
import { Components } from '@/components';
import { useProjectsStore } from '@/data/projects';
import router from '@/router';
import { onMounted } from 'vue';

const projectsStore = useProjectsStore();

onMounted(async() => {

    await projectsStore.getProjectById(router.currentRoute.value.params.id);
});
</script>

<template>
    <component :is="Components.HeaderMain" />
    <component :is="Components.ContactComp" />
    <component :is="Components.FooterMain" />
</template>
