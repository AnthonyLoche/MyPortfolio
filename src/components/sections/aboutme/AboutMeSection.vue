<script setup>
import { ref, onMounted } from 'vue'
import MyPhotoComp from './MyPhotoComp.vue'
import AboutMe from './AboutMe.vue'

const aboutSection = ref(null)
const isVisible = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            isVisible.value = entry.isIntersecting
        },
        { threshold: 0.3 }
    )

    if (aboutSection.value) {
        observer.observe(aboutSection.value)
    }
})
</script>

<template>
    <section class="about-section" ref="aboutSection" :class="{ 'visible': isVisible }">
        <div class="container">
            <AboutMe />
            <MyPhotoComp />
        </div>
    </section>
</template>

<style scoped>
.about-section {
    min-height: 70vh;
    background: #131613;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 4rem 0;
    display: flex;
}

.about-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
        radial-gradient(circle at 20% 80%, rgba(56, 223, 92, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(0, 255, 65, 0.05) 0%, transparent 50%);
    z-index: 1;
}

.container {
    display: grid;
    grid-template-columns: 1fr 400px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
    width: 80%;
    gap: 3rem;
}
@media screen and (max-width: 1024px) {
    .container{
        display: flex;
        flex-direction: column-reverse;
        gap: .5rem;
        width: 95%;
    }


}
</style>