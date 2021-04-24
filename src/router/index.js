import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: ['/inicio', '/portada', '/home'],
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    alias: ['/sobremi', '/acerca'],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sobremi" */ "../views/SobreMi.vue"),
  },
  {
    path: "/contacto",
    name: "Contacto",
    alias: ['/contacto', '/contactame'],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sobremi" */ "../views/Contacto.vue"),
  },
  {
    path: "/ultimopost/:id",
    name: "UltimoPost",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sobremi" */ "../views/UltimoPost.vue"),
      props: true,
  },
  {
    path: "/administrador/:id",
    name: "administrador",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sobremi" */ "../views/administrador.vue"),
      props: true,
  },
  
  {
    path: "*",
    name: "RutasInexistentes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sobremi" */ "../views/RutasInexistentes.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
