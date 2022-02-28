<template>
  <div class="movie-card">
    <MoviePosterImage :poster-path="movie.poster_path" :title="movie.title" />
    <div class="movie-card--content">
      <MovieInfo :movie="movie" />
      <GenresList :genres="movie.genres" />
      <MovieMoreInfo :movie="movie" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const displayCast = ref(false);
import MoviePosterImage from "../molecule/movie-poster-image.vue";
import MovieMoreInfo from "../molecule/movie-more-info.vue";
import MovieInfo from "../organism/movie-info.vue";
import GenresList from "../organism/genres-list.vue";
const props = defineProps<{ movie: any }>();
function viewCast(): void {
  return !displayCast.value;
  console.log(displayCast);
}
</script>

<style scoped>
.movie-card {
  padding: 40px 20px;
  display: grid;
  gap: 20px;
}

@media (min-width: 768px) {
  .movie-card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
  }
}
</style>