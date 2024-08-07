<script setup>
const props = defineProps(['numOfCorrectQuestions','quizQuestionLength']);


</script>

<template>
    <div class="result">
        <p>Your result...</p>
        
       <h1>{{ numOfCorrectQuestions }} / {{ quizQuestionLength }} </h1> 
    </div>
</template>

<style scoped>
.result{
    text-align: center;
    padding: 100px 0;
}

p{
    font-size: 25px;
}
</style>