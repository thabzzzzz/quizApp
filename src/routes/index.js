import { createRouter,createWebHistory } from 'vue-router'
import quizesView from '../views/quizePage.vue'
import homeView from '../views/home.vue'
   
   
   
   
   
   
   const routes = [
   
       {path:"/",
   
       name:'homeView',
   
       component:() => import('../views/home.vue')
       },
       {path:"/quizes/:id",
   
        name:'quizes',
    
        component:() => import('../views/quizePage.vue')
        }
   
  
   ]
   
   
   const router = createRouter({
   
       history:createWebHistory(),
   
       routes
   
   })
   
   export default router;