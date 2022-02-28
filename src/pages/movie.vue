<template>
  <div>
    <h1>{{ props.movieId }}</h1>
    <h1>{{ movieDetails }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MovieDatabase from "../modules/movies-db-api";
const props = defineProps<{ movieId: string }>();
let movieDatabase = new MovieDatabase(props.movieId);
let movieDetails = ref(null) as any;
async function getMovieDetails() {
  movieDetails.value = await movieDatabase.fetchData(
    movieDatabase.movieDetailsUrl
  );
}
getMovieDetails();
console.log(movieDatabase.movieDetailsUrl);
console.log(movieDetails);
</script>

<style scoped>
</style>