import { createRouter, createWebHistory } from "vue-router";
import contact from '@/files/contact.vue'
import home from '@/files/index.vue'


const routes = [
  {
    path: "/",
    name: "Home",
    component: ()=>
      home
  },
  {
    path: "/contact",
    name: "Contact",
    component: ()=>
      contact
  },
  /*{
    path: "/*",
    name: "not-found",
    component: ()=>
      Error404
  }*/
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
export default router;