<template>
  <div class="movie-page--wrapper" v-if="movieDetails">
    <Backdrop :backdrop-path="movieDetails.backdrop_path" />
    <div class="movie-content">
      <Suspense>
        <MovieCard :movie="movieDetails" />
        <template #fallback> Loading... </template>
      </Suspense>
      <CastList class="cast-list--wrapper" :movie-id="props.movieId" />
      <ProductionCompanies :companies="movieDetails.production_companies" />
      <a
        v-if="movieDetails.homepage"
        class="homepage-link average-rgb--border"
        target="_blank"
        :href="movieDetails.homepage"
        >Homepage</a
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import CastList from "../components/template/cast-list.vue";
import Backdrop from "../components/molecule/backdrop.vue";
import MovieCard from "../components/template/movie-card-with-details.vue";
import MovieDatabase from "../modules/movies-db-api";
import getAverageRgb from "../modules/get-average-rgb";
import ProductionCompanies from "../components/organism/production-companies.vue";

const props = defineProps<{ movieId: number | string }>();
let movieDatabase = new MovieDatabase(props.movieId);
const movieDetails = ref(null) as any;
const averageRGB = ref(null) as any;

async function getMovieDetails() {
  movieDetails.value = await movieDatabase.fetchData(movieDatabase.movieDetailsUrl);
  averageRGB.value = await getAverageRGBfromPoster();
}

async function getAverageRGBfromPoster() {
  const rgb = await getAverageRgb(
    `https://image.tmdb.org/t/p/w300${movieDetails.value.poster_path}`
  );
  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}
console.log(movieDatabase.movieDetailsUrl);
console.log(movieDetails);
getMovieDetails();

watch(averageRGB, () => {
  document.querySelectorAll(".average-rgb--bg").forEach((el) => {
    el.style.background = averageRGB.value;
  });
  document.querySelectorAll(".average-rgb--border").forEach((el) => {
    el.style.borderColor = averageRGB.value;
  });
});
</script>

<style scoped>
.movie-page--wrapper .movie-content {
  display: grid;
  grid-template-columns: auto minmax(300px, 1200px) auto;
}
.movie-content * {
  grid-column: 2 / -2;
}

.homepage-link {
  justify-self: center;
  padding: 10px 15px;
}
</style>
