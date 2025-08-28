import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './components/pages/HomePage.vue'

const routes = [
    { 
      path: '/', 
      component: HomeView,
      meta: {
        title: 'AdminBolt - The Hosting Control Panel of The Future.',
        metaTags: [
            {
            name: 'description',
            content: 'The Next-Gen Hosting Control Panel | Simplify hosting management with one-click installs, built-in staging, and seamless collaboration. Integrated with LiteSpeed, CloudLinux, MailChannels, JetBackup, Cloudflare, and more. Unlock new revenue streams with a built-in marketplace for services and pre-configured applications. Fast, flexible, and built for modern hosting providers.'
            },
            {
            name: 'robots',
            content: 'index, follow'
            }
        ]
      }
    }
  ]

const router = createRouter({
history: createWebHistory(),
routes,
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title;
    }
  
    document.querySelectorAll('[data-vue-router-meta]').forEach(el => el.remove());
  
    if (to.meta.metaTags) {
      to.meta.metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        Object.keys(tag).forEach(key => {
          meta.setAttribute(key, tag[key]);
        });
        meta.setAttribute('data-vue-router-meta', 'true');
        document.head.appendChild(meta);
      });
    }
next();
});


export default router