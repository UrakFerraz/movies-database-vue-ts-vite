<template>
  <div v-if="movieCredits" class="cast-wrapper">
    <h2>Cast Principal</h2>
    <Suspense>
      <template #default>
        <CastList :cast="movieCreditsCastWithPhotos" />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import CastList from "../molecule/cast-list.vue";
import Cast from "../../interfaces/cast-person-interface";
import MovieDatabase from "../../modules/movies-db-api";
import getMovieCredits from "../../modules/templates-helpers/cast-list-helper";

const props = defineProps<{ movieId: number | string }>();

let movieDatabase = new MovieDatabase(Number(props.movieId));
let movieCredits = ref<Cast>({} as Cast);
let movieCreditsCastWithPhotos = ref<Cast>({} as Cast);

getMovieCredits(movieDatabase, movieCredits, movieCreditsCastWithPhotos);
</script>

<style scoped>
.cast-wrapper {
  padding: 20px;
}
</style>
