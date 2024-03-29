<template>
  <div class="movie-page" v-if="movieDetails">
    <Backdrop :backdrop-path="movieDetails.backdrop_path" />
    <div class="movie-page--content">
      <MovieCard :movie="movieDetails" />
      <CastList :movie-id="movieId" />
      <ProductionCompanies
        :companies="movieDetails.production_companies"
        v-if="movieDetails.production_companies"
      />
      <Link
        v-if="movieDetails.homepage"
        :class="'homepage-link average-rgb--border'"
        :href="movieDetails.homepage"
        :target="'_blank'"
        :title="'Homepage'"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, watch } from "vue";
import Link from "../components/atoms/link.vue";
const props = defineProps<{ movieId: number | string }>();

import {
  movieDetails,
  averageRGB,
  getMovieDetails,
} from "../modules/pages-helpers/movie-page-helper";

import CastList from "../components/template/cast-list.vue";
import Backdrop from "../components/molecule/backdrop.vue";
import MovieCard from "../components/template/movie-card-with-details.vue";
import ProductionCompanies from "../components/organism/production-companies.vue";
import getStates from "../store/get-states";
import MovieDatabase from "../modules/movies-db-api";

let movieDatabase = new MovieDatabase(Number(props.movieId));

onMounted(getStates);

getMovieDetails(movieDatabase);

watch(averageRGB, () => {
  document.querySelectorAll(".average-rgb--bg").forEach((el: any) => {
    el.style.background = averageRGB.value;
  });
  document.querySelectorAll(".average-rgb--border").forEach((el: any) => {
    el.style.borderColor = averageRGB.value;
  });
});
</script>

<style lang="scss" scoped>
.movie-page {
  display: grid;
  grid-template-columns: auto minmax(300px, 1200px) auto;
  &--content {
    grid-column: 2 / -2;
  }
}
.homepage-link {
  justify-self: center;
  padding: 10px 15px;
}
</style>
