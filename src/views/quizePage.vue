<script setup>
import question from '../components/question.vue';
import quizHeader from '../components/quizHeader.vue';
import { useRoute } from 'vue-router';
import { ref, watch, computed } from 'vue';
import quizes from '../data/quizes.json';
import result from '../components/result.vue';

//get the quiz ID
const route = useRoute();
const quizID = parseInt(route.params.id);

//assign current quiz to the quiz in the fetched list ie, the one from the json
const quiz = quizes.find(q => q.id === quizID);

const currentQuestionIndex = ref(0);

const nextQuestion = () => {
    if (currentQuestionIndex.value < quiz.questions.length) {
        currentQuestionIndex.value++;
    }
};


/* const questionStatus =ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)

watch(()=>currentQuestionIndex.value, ()=>{
    questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
}) */

const questionStatus = computed(() => {
    return `${currentQuestionIndex.value}/${quiz.questions.length}`
})

const barPercentage = computed(() => {
    return `${Math.floor((currentQuestionIndex.value / quiz.questions.length) * 100)}%`;
})


const numOfCorrectQuestions = ref(0);
const onOptionSelected = (isCorrect) => {
    if(isCorrect==true){
        numOfCorrectQuestions.value++;
        console.log('correct answer')
    } 
    else console.log('answer is false') 
    currentQuestionIndex.value++ 
    
}
</script>

<template>
    <div>
        <quizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />

        <question :question="quiz.questions[currentQuestionIndex]" @SelectedOption="onOptionSelected" />
        <div>

        </div>
        <button @click="nextQuestion()">Next question</button>
    </div>
    <div>
        <result :numOfCorrectQuestions="numOfCorrectQuestions" :questionStatus="questionStatus"/>
    </div>
</template>

<style scoped></style>