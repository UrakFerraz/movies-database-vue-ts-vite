<template>
  <div class="movie-card" v-if="movie.poster_path">
    <MovieCardMenu :movie-id="movie.id" />
    <MoviePosterImage
      class="movie-card--image"
      :poster-path="movie.poster_path"
      :alt-text="movie.original_title"
    />
    <div class="movie-card--content fade-in-animation-delayed">
      <Rating :movie="movie" class="movie-card--rating" />
      <span> {{ new Date(movie.release_date).getFullYear() }}</span>
    </div>
    <router-link :to="'/movie/' + movie.id" class="router-link"></router-link>
  </div>
</template>

<script setup lang="ts">
import MovieInListInerface from "../../interfaces/movies-in-list-interface";
import MoviePosterImage from "../molecule/movie-poster-image.vue";
import MovieCardMenu from "../molecule/movie-card-menu.vue";
import Rating from "../atoms/rating.vue";

const props = defineProps<{ movie: MovieInListInerface }>();
</script>

<style lang="scss" scoped>
.router-link {
  position: absolute;
  width: 90%;
  height: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  border: none;
  outline: none;
}
.movie-card {
  display: grid;
  padding: 10px;
}

.movie-card--content {
  display: flex;
  gap: 10px;
  align-items: center;
}

.movie-card--rating {
  border: 1px solid $principal;
}

.movie-card--image {
  min-width: 120px;
  margin: 5px 0;
}

@media (min-width: 768px) {
  .movie-card--image {
    width: 250px;
  }
}
</style>
