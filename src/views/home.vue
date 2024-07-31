<script setup>
import q from '../data/quizes.json';
import { ref,watch } from 'vue';
import Card from '../Card.vue';
import {RouterView} from 'vue-router';
import quizesView from '../views/quizePage.vue'
 
const quizes = ref(q);
const search = ref('');

watch(search, ()=>{
  quizes.value= q.filter(quiz=>quiz.name.toLowerCase().includes(search.value.toLocaleLowerCase()))
})
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
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz">

      </Card>

    </div>
  </div>
</template>