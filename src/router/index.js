import Vue from "vue";
import VueRouter from 'vue-router'
import Meta from 'vue-meta';
import Home from "../views/Home.vue";

Vue.use(VueRouter);
Vue.use(Meta);

export default new VueRouter({
  mode: 'history',
  routes: [
        {
          path: '/',
          name: 'home',
          component: Home,
          meta: {hasHero: true}
        },
        {
          path: '/about',
          name: 'about',
          component: () => import(/* webpackChunkName: "demo" */ '../views/About.vue')
        },
        {
          path: '/docs',
          name: 'docs',
          component: () => import(/* webpackChunkName: "demo" */ '../views/Documentation.vue')
        },
  ]
 });

  
