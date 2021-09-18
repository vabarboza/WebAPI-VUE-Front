import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
     {
          path: "/",
          name: "Home",
          component: Home,
     },
     {
          path: "/about",
          name: "About",
          component: () => import("../views/About.vue"),
     },
     {
          path: "/produto",
          name: "Produto",
          component: () => import("../views/Produto.vue"),
     },
     {
          path: "/categoria",
          name: "Categoria",
          component: () => import("../views/Categoria.vue"),
     }
];

const router = createRouter({
     history: createWebHistory(process.env.BASE_URL),
     routes,
});

export default router;
