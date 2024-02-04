import { createRouter, createWebHistory } from "vue-router";


const routes = [

      {
      path: "/:lang?",
      name: "Home",
      component: () => import("@/presentation/screens/HomeView.vue"),
      }
    
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


