<template>
  <div class="listed-movies--content">
    <Pagination />
    <Suspense>
      <MoviesTable
        :movies="toSeeMoviesList"
        :page-name="'toSee'"
        v-if="toSeeMoviesList"
      />
      <template #fallback> Loading... </template>
    </Suspense>
    <Pagination />
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import MoviesTable from "../components/organism/movies-table.vue";
import MovieInListInerface from "../interfaces/movies-in-list-interface";
import ResultsInterface from "../interfaces/results-interface";
import MovieInterface from "../interfaces/movie-interface";
import getStates, { toSeeStore } from "../store/get-states";
import MovieDatabase from "../modules/movies-db-api";
import Pagination from "../components/molecule/pagination.vue";

const props = defineProps<{ pageNumber: string }>();

const toSeeMoviesList = ref([] as any);

const moviesIdsListFromStore = toSeeStore.getList;

setTimeout(() => {}, 2000);

onBeforeMount(async () => {
  console.log(moviesIdsListFromStore);

  getStates();
  loadToSee(props.pageNumber);
});

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

  return movie;
}

async function loadToSee(pageNumber: string): Promise<void> {
  let moviesPerPage = 20;
  const pages = [];
  const promises = moviesIdsListFromStore.map(async (id) => {
    const response = await getMovieDetails(id);
    return response;
  });
  for (var i = 0; i < promises.length; i = i + moviesPerPage) {
    pages.push(promises.slice(i, i + moviesPerPage));
  }
  toSeeMoviesList.value = await Promise.all(pages[Number(pageNumber)]);
}
</script>

<style scoped>
.listed-movies--content {
  padding: 20px;
}
</style>
