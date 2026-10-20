import { onMounted, onUnmounted, nextTick } from 'vue'
import { gsap, ScrollTrigger } from '@/lib/motion'

export function usePageMotion(root) {
  let media
  let disposed = false
  onMounted(async () => {
    await nextTick()
    await document.fonts.ready
    if (disposed || !root.value) return
    media = gsap.matchMedia()
    media.add({ desktop: '(min-width: 800px)', motion: '(prefers-reduced-motion: no-preference)' }, (context) => {
      if (!context.conditions.motion) return
      const scope = root.value
      const hero = scope.querySelector('.intro-hero')
      if (hero) {
        const intro = gsap.timeline({ defaults: { ease: 'expo.out' } })
        intro.from(hero.querySelectorAll('.hero-name-line'), { yPercent: 110, duration: 1.15, stagger: 0.12 })
          .from(hero.querySelectorAll('.hero-intro > p'), { y: 28, autoAlpha: 0, duration: 0.75, stagger: 0.09 }, 0.35)
          .from(hero.querySelectorAll('.hero-actions > *'), { y: 24, autoAlpha: 0, duration: 0.65, stagger: 0.08 }, 0.58)
          .from(hero.querySelector('.hero-feature'), { y: 70, rotation: 3, scale: 0.94, autoAlpha: 0, duration: 1 }, 0.25)
          .from(hero.querySelectorAll('.hero-bottom > *'), { y: 14, autoAlpha: 0, duration: 0.6, stagger: 0.07 }, 0.8)
        if (context.conditions.desktop) gsap.to(hero.querySelector('.hero-feature-media'), { y: -35, ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.8 } })
      }
      scope.querySelectorAll('[data-reveal-group]').forEach((group) => {
        const children = group.querySelectorAll('[data-reveal]')
        if (!children.length) return
        gsap.from(children, { y: 34, autoAlpha: 0.15, duration: 0.9, stagger: 0.095, ease: 'power3.out',
          scrollTrigger: { trigger: group, start: 'top 88%', once: true } })
      })
      scope.querySelectorAll('.work-case').forEach((project) => {
        const timeline = gsap.timeline({ scrollTrigger: { trigger: project, start: 'top 87%', end: 'top 24%', scrub: 0.65 } })
        timeline.from(project.querySelector('.case-stage'), { y: context.conditions.desktop ? 80 : 40, scale: 0.94, rotation: context.conditions.desktop ? 1.4 : 0, autoAlpha: 0.3, ease: 'power2.out' }, 0)
          .from(project.querySelectorAll('.case-copy > *'), { y: 30, autoAlpha: 0.2, stagger: 0.08, ease: 'power2.out' }, 0.08)
      })
      const portrait = scope.querySelector('.portrait-image')
      if (portrait) gsap.fromTo(portrait, { yPercent: -3, scale: 1.08 }, { yPercent: 3, scale: 1.08, ease: 'none',
        scrollTrigger: { trigger: portrait.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.8 } })
      const gallery = scope.querySelector('.gallery-image')
      if (gallery) gsap.from(gallery, { scale: 0.96, autoAlpha: 0.4, duration: 1, ease: 'expo.out' })
      const interactions = scope.querySelectorAll('.hero-feature, .case-image-link')
      const cleanup = []
      interactions.forEach((link) => {
        const image = link.querySelector('img')
        if (!image) return
        const over = () => gsap.to(image, { scale: 1.035, duration: 0.65, ease: 'power3.out', overwrite: 'auto' })
        const out = () => gsap.to(image, { scale: 1, duration: 0.65, ease: 'power3.out', overwrite: 'auto' })
        link.addEventListener('pointerenter', over)
        link.addEventListener('pointerleave', out)
        cleanup.push(() => { link.removeEventListener('pointerenter', over); link.removeEventListener('pointerleave', out); gsap.killTweensOf(image) })
      })
      return () => cleanup.forEach((remove) => remove())
    }, root.value)
    ScrollTrigger.refresh()
  })
  onUnmounted(() => { disposed = true; media?.revert() })
}
