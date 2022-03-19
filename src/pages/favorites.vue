<template>
  <div class="listed-movies--content">
    <Pagination />
    <Suspense>
      <MoviesTable
        :movies="favoriteMoviesList"
        :page-name="'favorites'"
        :key="forceReload"
      />
      <template #fallback> Loading... </template>
    </Suspense>
    <Pagination />
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import MoviesTable from "../components/organism/movies-table.vue";
import MovieInListInerface from "../interfaces/movies-in-list-interface";
import ResultsInterface from "../interfaces/results-interface";
import MovieInterface from "../interfaces/movie-interface";
import getStates, { favoritesStore } from "../store/get-states";
import MovieDatabase from "../modules/movies-db-api";
import Pagination from "../components/molecule/pagination.vue";

const props = defineProps<{ pageNumber: string }>();

const favoriteMoviesList = ref([] as any);

const forceReload = ref(0);

const moviesIdsListFromStore = favoritesStore.getList;

onBeforeMount(loadFavorites(props.pageNumber));
onMounted(getStates);

console.log(moviesIdsListFromStore);

async function getMovieDetails(movieId: number) {
  const movieDatabase = new MovieDatabase(movieId);
  let movieDetailsResponse = {} as MovieInterface;
  movieDetailsResponse = await movieDatabase.fetchData(
    movieDatabase.movieDetailsUrl
  );

  const {
    budget,
    genres,
    homepage,
    revenue,
    runtime,
    status,
    tagline,
    belongs_to_collection,
    imdb_id,
    production_companies,
    production_countries,
    spoken_languages,
    ...movie
  } = movieDetailsResponse;

  console.log(movie);

  return movie;
}

async function loadFavorites(pageNumber: string) {
  const promises = moviesIdsListFromStore
    .slice(Number(pageNumber), 21)
    .map(async (id) => {
      forceReload.value++;
      const response = await getMovieDetails(id);
      return response;
    });
  favoriteMoviesList.value = await Promise.all(promises);
  console.log(favoriteMoviesList);
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
