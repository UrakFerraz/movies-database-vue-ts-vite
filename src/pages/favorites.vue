<template>
  <div class="listed-movies--content">
    <Suspense>
      <MoviesTable :movies="favoriteMoviesIds" v-if="favoriteMoviesIds" />
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import MoviesTable from "../components/organism/movies-table.vue";
import MovieInterface from "../interfaces/movie-interface";
import getStates, { favoritesStore } from "../store/get-states";
import MovieDatabase from "../modules/movies-db-api";

export interface MoviesIdsResults {
  results: MovieInterface[];
}

const favoriteMoviesIds = ref<MoviesIdsResults>({} as MoviesIdsResults);

const moviesIdsListFromStore = favoritesStore.getList;

onMounted(getStates);

console.log(favoritesStore);

async function getMovieDetails(movieId: number) {
  const movieDatabase = new MovieDatabase(movieId);
  let movieDetailsResponse = {} as MovieInterface;
  movieDetailsResponse = await movieDatabase.fetchData(
    movieDatabase.movieDetailsUrl
  );

  console.log(movieDetailsResponse);

  favoriteMoviesIds.value.results.push(movieDetailsResponse);
}

console.log(favoriteMoviesIds);
console.log(moviesIdsListFromStore);

async function loadFavorites() {
  const promises = moviesIdsListFromStore.map(async (id) => {
    console.log(id);

    await getMovieDetails(id);
  });
  const data = await Promise.all(promises);
  return data;
}
</script>

<style scoped>
.movie-page--wrapper {
  display: grid;
  grid-template-columns: auto minmax(300px, 1200px) auto;
}
.movie-content {
  grid-column: 2 / -2;
}

.homepage-link {
  justify-self: center;
  padding: 10px 15px;
}
</style>
