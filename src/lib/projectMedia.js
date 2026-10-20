const originals = import.meta.glob('/src/assets/images/projects/**/*.png', { eager: true, query: '?url', import: 'default' })
const optimized = import.meta.glob('/src/assets/images/optimized/*.webp', { eager: true, query: '?url', import: 'default' })
const names = new Map(Object.entries(optimized).map(([path, url]) => [path.split('/').pop().replace('.webp', ''), url]))
const mediaPath = (source) => new URL(source, import.meta.url).pathname
const replacements = new Map(Object.entries(originals).map(([path, url]) => [mediaPath(url), names.get(path.split('/').pop().replace('.png', ''))]))
export const projectImage = (source) => source ? replacements.get(mediaPath(source)) || source : source
