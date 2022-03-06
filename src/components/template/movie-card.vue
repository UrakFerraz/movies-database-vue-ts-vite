<template>
  <div class="movie-card" v-if="movie.poster_path">
    <MoviePosterImage
      class="movie-card--image"
      :poster-path="movie.poster_path"
      :alt-text="movie.original_title"
    />
    <div class="movie-card--content">
      <span
        >{{ movie.vote_average }} -
        {{ new Date(movie.release_date).getFullYear() }}</span
      >
    </div>
    <router-link :to="'/movie/' + movie.id" class="router-link"></router-link>
  </div>
</template>

<script setup lang="ts">
import MovieInListInerface from "../../interfaces/movies-in-list-interface";
import MoviePosterImage from "../molecule/movie-poster-image.vue";

const props = defineProps<{ movie: MovieInListInerface }>();
</script>

<style scoped>
.router-link {
  position: absolute;
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  border: none;
  outline: none;
}
.movie-card {
  display: grid;
  gap: 20px;
  padding: 10px;
}

.movie-card--image {
  width: 120px;
}

@media (min-width: 768px) {
  .movie-card--image {
    width: 250px;
  }
}
</style>
