<script setup>
import { useProjectsStore } from "@/data/projects";
const projectsStore = useProjectsStore();

</script>

<template>
  <section
    class="hero"
    :style="{
      backgroundImage: `url(${projectsStore.state.selectedProject?.image})`,
    }"
  >
    <div class="overlay"></div>
    <div class="container-hero">
      <h1>{{ projectsStore.state.selectedProject?.title }}</h1>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6); 
  z-index: 1;
}

.container-hero {
  position: relative;
  z-index: 2;
  text-align: center;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: #ffffff;
  font-weight: 800;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
}
</style>
