import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'Home' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@p/404.vue'),
    meta: { title: '404 - Page not found | FGL - Design System' },
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@p/Home.vue'),
    meta: { title: 'Home | FGL - Design System' },
  },
  {
    path: '/visual-color',
    name: 'Color',
    component: () => import('@p/Visual/VisualColor.vue'),
    meta: { title: 'Color | FGL - Design System' },
  },

  {
    path: '/visual-typography',
    name: 'Typography',
    component: () => import('@p/Visual/VisualTypography.vue'),
    meta: { title: 'Typography | FGL - Design System' },
  },
  {
    path: '/visual-spacing',
    name: 'Spacing',
    component: () => import('@p/Visual/VisualSpacing.vue'),
    meta: { title: 'Spacing | FGL - Design System' },
  },
  {
    path: '/visual-breakpoints',
    name: 'Breakpoints',
    component: () => import('@p/Visual/VisualBreakpoints.vue'),
    meta: { title: 'Breakpoints | FGL - Design System' },
  },
  {
    path: '/element-articles',
    name: 'ElementArticle',
    component: () => import('@p/Elements/ElementArticle.vue'),
    meta: { title: 'Articles | FGL - Design System' },
  },
  {
    path: '/element-text-link',
    name: 'ElementTextLink',
    component: () => import('@p/Elements/ElementTextLink.vue'),
    meta: { title: 'Text Link | FGL - Design System' },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title;
  }
  next();
});

export default router;
