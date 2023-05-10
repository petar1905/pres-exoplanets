<script>
  export default {
    props: ['question', 'answer'],
  }
</script>

<template>
  <h1 v-motion-slide-left :delay=50>{{this.question}}</h1>
  <h3 v-motion-slide-right :delay=100>{{this.answer}}</h3>
</template>

<style scoped>
* {
  text-align: center;
}

h1 {
  transition: .3s cubic-bezier(.86, 0, .07, 1);
  padding: 30px;
}
</style>
