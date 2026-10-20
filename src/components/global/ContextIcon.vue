<script setup>
defineProps({ name: { type: String, required: true } })
</script>

<template>
  <svg class="context-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <template v-if="name === 'projects'">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" stroke="currentColor" stroke-width="1.7" />
      <path d="M8 8.5h8M8 12h8M8 15.5h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
    </template>
    <template v-else-if="name === 'about'">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.7" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
    </template>
    <template v-else-if="name === 'contact' || name === 'email'">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.7" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
    </template>
    <template v-else-if="name === 'whatsapp'">
      <path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4.1A8 8 0 1 1 20 11.7Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
      <path d="M9 8.5c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.6.7c.5 1 1.3 1.7 2.4 2.2l.7-.8c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.5 0 .7-.3 1.4-.8 1.7-.6.4-1.3.5-2 .3-2.6-.7-5.4-3.4-5.8-5.6-.2-.8.2-1.5 1.1-1.8Z" fill="currentColor" />
    </template>
    <template v-else-if="name === 'github'">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.8A5.3 5.3 0 0 0 18.8 5a4.9 4.9 0 0 0-.1-3.8S17.5.9 15 2.7a13.4 13.4 0 0 0-7 0C5.5.9 4.3 1.2 4.3 1.2A4.9 4.9 0 0 0 4.2 5a5.3 5.3 0 0 0-1.4 3.7c0 5.3 3.1 6.5 6.1 6.8a3.4 3.4 0 0 0-.9 2.6V22" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
    </template>
    <template v-else-if="name === 'linkedin'">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.7" />
      <path d="M8 10v7M8 7v.01M12 17v-7m0 3a3 3 0 0 1 6 0v4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
    </template>
    <template v-else-if="name === 'instagram'">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
    </template>
    <template v-else-if="name === 'backend'">
      <rect x="4" y="4" width="16" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7" />
      <rect x="4" y="14" width="16" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7" />
      <path d="M8 7h.01M8 17h.01" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
    </template>
    <template v-else-if="name === 'interface'">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.7" />
      <path d="M3 8h18M7 6h.01M10 6h.01" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
    </template>
    <template v-else-if="name === 'data'">
      <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" stroke-width="1.7" />
      <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" stroke="currentColor" stroke-width="1.7" />
    </template>
    <template v-else-if="name === 'daily'">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.7" />
      <path d="m8 10 2 2-2 2m5 0h3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
    </template>
    <template v-else-if="name === 'copy'">
      <rect x="8" y="8" width="12" height="13" rx="2" stroke="currentColor" stroke-width="1.7" />
      <path d="M16 8V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2" stroke="currentColor" stroke-width="1.7" />
    </template>
  </svg>
</template>
