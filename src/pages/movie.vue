<template>
  <div v-if="movieDetails">
    <Backdrop :backdrop-path="movieDetails.backdrop_path" />
    <div class="movie-content">
      <Suspense>
        <MovieCard :movie="movieDetails" />
        <template #fallback> Loading... </template>
      </Suspense>
      <CastList class="cast-list--wrapper" :movie-id="props.movieId" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import CastList from "../components/template/cast-list.vue";
import Backdrop from "../components/molecule/backdrop.vue";
import MovieCard from "../components/template/movie-card-with-details.vue";
import MovieDatabase from "../modules/movies-db-api";

const props = defineProps<{ movieId: number | string }>();
let movieDatabase = new MovieDatabase(props.movieId);
let movieDetails = ref(null) as any;

async function getMovieDetails() {
  movieDetails.value = await movieDatabase.fetchData(
    movieDatabase.movieDetailsUrl
  );
}

console.log(movieDatabase.movieDetailsUrl);
console.log(movieDetails);

getMovieDetails();
</script>

<style scoped>
.movie-content {
  display: grid;
  grid-template-columns: auto minmax(300px, 1200px) auto;
}
.movie-content .movie-card {
  grid-column: 2 / -2;
}
.cast-list--wrapper {
  grid-column: 2 / -2;
}
</style>