<template>
  <div class="movie-info fade-in-animation-fast">
    <Rating :movie="movie" />
    <span>Título Original: {{ movie.original_title }}</span>
    <h1>{{ movie.title }}</h1>
    <p>{{ new Date(movie.release_date).getFullYear() }}</p>
  </div>
</template>

<script setup lang="ts">
import Rating from "../atoms/rating.vue";
import MovieInterface from '../../interfaces/movie-interface'
const props = defineProps<{ movie: MovieInterface }>();
</script>

<style lang="scss" scoped>
.movie-info {
  display: flex;
  flex-flow: column;
}
</style>
