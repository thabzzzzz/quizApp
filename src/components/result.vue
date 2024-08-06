<script setup>
const props = defineProps(['numOfCorrectQuestions']);
console.log(props.numOfCorrectQuestions)
</script>

<template>
    <div class="result">
        <p>Your result...</p>
        
       <h1>{{ numOfCorrectQuestions }}</h1> 
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