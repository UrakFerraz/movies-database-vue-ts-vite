<template>
  <div class="movie-card">
    <MoviePosterImage
      :poster-path="movie.poster_path"
      :alt-text="movie.original_title"
    />
    <div class="movie-card--content">
      <MovieInfo :movie="movie" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import MoviePosterImage from "../molecule/movie-poster-image.vue";
import MovieInfo from "../molecule/movie-info.vue";

const props = defineProps<{ movie: any }>();

onMounted(() => {
  console.log(props.movie);
});
</script>

<style scoped>
.movie-card {
  padding: 100px 20px 40px 20px;
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