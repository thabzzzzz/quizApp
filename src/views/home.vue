<script setup>
import q from '../data/quizes.json';
import { ref,watch } from 'vue';
import Card from '../Card.vue';
import {RouterView} from 'vue-router';
import quizesView from '../views/quizePage.vue'
import gsap from 'gsap'
 
const quizes = ref(q);
const search = ref('');

watch(search, ()=>{
  quizes.value= q.filter(quiz=>quiz.name.toLowerCase().includes(search.value.toLocaleLowerCase()))
})

const beforeEnter = (el)=>{
  //card-enter-from
  el.style.transform = 'translateY(-30px)';
  el.style.opacity=0;
  
}
const enter = (el)=>{
 gsap.to(el,{
  opacity:1,
  y:0,
  duration:0.4,
  delay:el.dataset.index *0.2
 })
}
const afterEnter = ()=>{
  console.log('after enter')
}
</script>

<template>
      <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    
    <div class="options-container">
      <!-- <div class="card" v-for="quiz in quizes" :key="quiz.id">
        <img :src="quiz.img" alt="">
        <div class="card-text">
          <h2>{{quiz.name}}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div>
      </div> -->
      <TransitionGroup  appear
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      >
        <Card v-for="(quiz, index) in quizes" :key="quiz.id" :quiz="quiz" :data-index="index" >
        </Card>
      </TransitionGroup>
    
     

     

    </div>
  </div>
</template>

<style scoped>

.container {
    max-width: 1000px;
    margin: 0 auto
  }

  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }

  header input {
    border: none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;
    border-radius: 5px;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  .card-enter-active,
.card-leave-active {
  transition: all 0.5s ease;
}
.card-enter-from,
.card-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>