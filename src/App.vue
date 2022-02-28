
<script setup lang="ts">
import Movie from "./pages/movie.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <Movie :movie-id="'476669'" />
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<style scoped>
#app {
  background: rgb(25, 25, 32);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
