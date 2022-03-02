<template>
  <div>
    <div class="movies-list--wrapper">
      <MovieCard :movie="movie" v-for="mov in props.movie" :key="mov.id" />
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieCard from "../organism/cast-list.vue";
const props = defineProps<{ movie: any }>();
</script>

<style scoped>
</style>