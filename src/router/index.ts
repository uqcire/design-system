import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' },
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@p/Home.vue'),
    meta: { title: 'Home | FGL - Design System' },
  },
  {
    path: '/color',
    name: 'Color',
    component: () => import('@p/Visual/VisualColor.vue'),
    meta: { title: 'Color | FGL - Design System' },
  },
  {
    path: '/typography',
    name: 'Typography',
    component: () => import('@p/Visual/VisualTypography.vue'),
    meta: { title: 'Typography | FGL - Design System' },
  },
  {
    path: '/spacing',
    name: 'Spacing',
    component: () => import('@p/Visual/VisualSpacing.vue'),
    meta: { title: 'Spacing | FGL - Design System' },
  },
  {
    path: '/breakpoints',
    name: 'Breakpoints',
    component: () => import('@p/Visual/VisualBreakpoints.vue'),
    meta: { title: 'Breakpoints | FGL - Design System' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title
  }
  next()
})

export default router
