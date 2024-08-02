<script setup>
import question from '../components/question.vue';
import quizHeader from '../components/quizHeader.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import quizes from '../data/quizes.json';

const route = useRoute();
const quizID = parseInt(route.params.id);

const quiz=quizes.find(q=>q.id === quizID)

const currentQuestionIndex = ref(0);
const questionStatus =`${currentQuestionIndex.value+1}/${quiz.questions.length}`

</script>

<template>
    <div>
       <quizHeader :questionStatus="questionStatus"/>
        <question 
        :question="quiz.questions[currentQuestionIndex]"
        
        />
        <div>
       
        </div>
    </div>
</template>

<style scoped>



</style>