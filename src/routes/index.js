import { createRouter,
    createWebHistory } from 'vue-router'
   
   
   const Home = () => import('../components/quizePage.vue');
   
   
   
   const routes = [
   
       {path:"/",
   
       name:'Home',
   
       component:Home
       },
   
       {path:"/quiz",
       name:'quizePage',
       component:() => import('../components/quizePage.vue')},
   
  
   ]
   
   
   const router = createRouter({
   
       history:createWebHistory(),
   
       routes
   
   })
   
   export default router;