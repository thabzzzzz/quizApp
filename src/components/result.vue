<script setup>
const props = defineProps(['numOfCorrectQuestions']);
console.log(props.numOfCorrectQuestions)
</script>

<template>
    <div>
        <p>this is result</p>
        
        {{ numOfCorrectQuestions}}
    </div>
</template>