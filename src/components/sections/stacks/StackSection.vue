<script setup>
import { ref, computed } from 'vue'
const groups = [
  { name: 'Backend', tools: 'Python, Django, Node.js, APIs REST.', text: 'Regras de negócio, integrações e uma estrutura que sustenta o produto.' },
  { name: 'Interface', tools: 'Vue.js, React, Next.js, JavaScript, TypeScript.', text: 'Experiências responsivas que conectam a complexidade do sistema à rotina de quem usa.' },
  { name: 'Dados', tools: 'PostgreSQL, MySQL, Prisma ORM.', text: 'Informação bem organizada para dar continuidade a cada fluxo da aplicação.' },
  { name: 'No dia a dia', tools: 'Git, Linux, escuta e colaboração.', text: 'Código se constrói em conjunto. Conversar, entender e compartilhar também fazem parte do trabalho.' },
]
const selected = ref(0)
const active = computed(() => groups[selected.value])
function navigate(event) {
  const keys = { ArrowRight: 1, ArrowLeft: -1 }
  if (event.key in keys) selected.value = (selected.value + keys[event.key] + groups.length) % groups.length
  else if (event.key === 'Home') selected.value = 0
  else if (event.key === 'End') selected.value = groups.length - 1
  else return
  event.preventDefault()
  event.currentTarget.querySelectorAll('[role=tab]')[selected.value].focus()
}
</script>
<template>
  <section class="stack-section frame" data-reveal-group>
    <div class="stack-heading"><h2 class="section-title" data-reveal>O repertório.</h2><p data-reveal>A ferramenta certa depende do problema.<br>Meu trabalho é fazer as partes se encontrarem.</p></div>
    <div class="stack-layout">
      <div class="stack-tabs" role="tablist" aria-label="Áreas de conhecimento" @keydown="navigate"><button v-for="(group, i) in groups" :id="'stack-tab-' + i" :key="group.name" role="tab" :aria-selected="selected === i" :aria-controls="'stack-panel-' + i" :tabindex="selected === i ? 0 : -1" @click="selected = i">{{ group.name }}</button></div>
      <Transition name="preview" mode="out-in"><div :id="'stack-panel-' + selected" :key="selected" class="stack-panel" role="tabpanel" :aria-labelledby="'stack-tab-' + selected" tabindex="0"><p class="stack-tools">{{ active.tools }}</p><p class="stack-description">{{ active.text }}</p></div></Transition>
    </div>
  </section>
</template>
