<template>
  <div class="more-info">
    <h2>{{ movie.tagline }}</h2>
    <p>{{ movie.overview }}</p>
    <p>Duração: {{ duration }} horas</p>
    <a class="average-rgb--border" target="_blank" :href="imdbUrl"
      >Ver no IMDB</a
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ movie: any }>();
const imdbUrl = "https://www.imdb.com/title/" + props.movie.imdb_id;
const duration = (props.movie.runtime / 60).toFixed(2).split(".").join(":");
</script>

<style scoped>
</style>