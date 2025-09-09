<script setup>
import { ref, onMounted } from 'vue'

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
    <section class="photo-section" ref="aboutSection" :class="{ 'visible': isVisible }">
        <div class="profile-section">
              <h2 class="section-title">
                        <span class="title-highlight">Sobre</span> Mim
                    </h2>
            <div class="profile-container">
                <div class="profile-image">
                    <img src="../../../assets/images/MyPhoto.jpeg" alt="My Photo" class="profile-photo" />
                    <div class="profile-glow"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.photo-section {
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
}

.section-title {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 2rem;
    display: none;
}


.title-highlight {
    color: #38df5c;
}

.profile-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.profile-container {
    text-align: center;
}

.profile-image {
    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(20px);
    border: 2px solid rgba(56, 223, 92, 0.2);
    overflow: hidden;
}

.profile-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    z-index: 2;
}

.profile-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    z-index: 1;
}

.profile-image::before {
    content: '';
    position: absolute;
    inset: 3px;
    background: #131613;
    border-radius: 50%;
    z-index: 1;
}

@media screen and (max-width: 1024px) {
   .photo-section{
    height: 10vh;
   }
   .section-title{
    display: block;
   }
}
</style>
