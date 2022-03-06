<template>
  <div class="movie-card" v-if="movie">
    <MoviePosterImage
      :poster-path="movie.poster_path"
      :alt-text="movie.original_title"
    />
    <div class="movie-card--content">
      <MovieInfo :movie="movie" />
      <MovieMoreInfo :movie="movie" />
      <GenresList :genres="movie.genres" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MoviePosterImage from "../molecule/movie-poster-image.vue";
import MovieMoreInfo from "../molecule/movie-more-info.vue";
import MovieInfo from "../molecule/movie-info.vue";
import GenresList from "../molecule/genres-list.vue";
import MovieInterface from "../../interfaces/movie-interface";

const props = defineProps<{ movie: MovieInterface }>();
</script>

<style scoped>
.movie-card {
  padding: 100px 20px 40px 20px;
  display: grid;
  gap: 20px;
  overflow: hidden;
}

.movie-card img {
  width: 20px;
}
@media (min-width: 768px) {
  .movie-card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
  }
}
</style>
