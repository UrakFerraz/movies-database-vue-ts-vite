<template>
  <div class="more-info fade-in-animation-fast">
    <h2>{{ movie.tagline }}</h2>
    <p>{{ movie.overview }}</p>
    <p>
      Duração: {{ (movie.runtime / 60).toFixed(2).split(".").join(":") }} horas
    </p>
    <a
      v-if="movie.imdb_id !== undefined || movie.imdb_id !== null"
      class="average-rgb--border"
      target="_blank"
      :href="'https://www.imdb.com/title/' + props.movie.imdb_id"
      >Ver no IMDB</a
    >
  </div>
</template>

<script setup lang="ts">
import MovieInterface from "../../interfaces/movie-interface";
const props = defineProps<{ movie: MovieInterface }>();
</script>

<style scoped>
</style>