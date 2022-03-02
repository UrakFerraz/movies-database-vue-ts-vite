<template>
  <div class="movie-info">
    <div class="rating">
      <div class="rate">
        <p>{{ movie.vote_average }}</p>
      </div>
    </div>
    <span>Título Original: {{ movie.original_title }}</span>
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.release_date.slice(0, 4) }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ movie: any }>();
</script>

<style scoped>
</style>