import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectViewById from '@/views/ProjectViewById.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import { useProjectsStore } from '@/data/projects'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, left: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: ProjectViewById,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' },
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: AboutMeView,
    },
  ],
})

router.beforeEach((to) => {
  if (to.name !== 'project') return
  const projectsStore = useProjectsStore()
  if (!projectsStore.state.projects.some((project) => String(project.id) === String(to.params.id))) return { name: 'projects' }
})

export default router
