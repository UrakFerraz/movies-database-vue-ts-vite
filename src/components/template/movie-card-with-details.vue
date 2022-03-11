<template>
  <div class="movie-card" v-if="movie">
    <MoviePosterImage
      class="movie-page-poster-img"
      :poster-path="movie.poster_path"
      :alt-text="movie.original_title"
    />
    <div class="movie-card--content">
      <MovieCardMenu :movie-id="movie.id" />
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
import MovieCardMenu from "../molecule/movie-card-menu.vue";

const props = defineProps<{ movie: MovieInterface }>();
</script>

<style scoped>
.movie-card {
  padding: 100px 20px 40px 20px;
  display: grid;
  gap: 20px;
  overflow: hidden;
}

.movie-page-poster-img {
  width: 200px;
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
  .movie-page-poster-img {
    width: 300px;
  }
}
</style>
