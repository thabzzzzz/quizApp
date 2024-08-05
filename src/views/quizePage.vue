<script setup>
import question from '../components/question.vue';
import quizHeader from '../components/quizHeader.vue';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import quizes from '../data/quizes.json';

//get the quiz ID
const route = useRoute();
const quizID = parseInt(route.params.id);

//assign current quiz to the quiz in the fetched list ie, the one from the json
const quiz=quizes.find(q=>q.id === quizID)

const currentQuestionIndex = ref(0);
const questionStatus =ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)

watch(()=>currentQuestionIndex.value, ()=>{
    questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
})
</script>

<template>
    <div>
       <quizHeader :questionStatus="questionStatus"/>
        <question 
        :question="quiz.questions[currentQuestionIndex]"
        
        />
        <div>
       
        </div>
        <button @click="currentQuestionIndex++">Next question</button>
    </div>
</template>

<style scoped>



</style>