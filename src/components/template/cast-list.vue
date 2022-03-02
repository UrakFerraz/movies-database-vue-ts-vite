<template>
  <div v-if="movieCredits" class="cast-wrapper">
    <h2>Cast Principal</h2>
    <Suspense>
      <CastList :cast="movieCreditsCastWithPhotos" class="cast-list" />
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import CastList from "../organism/cast-list.vue";
import MovieDatabase from "../../modules/movies-db-api";

const props = defineProps<{ movieId: number | string }>();
let movieDatabase = new MovieDatabase(props.movieId);
let displayCast = ref(true) as boolean;
let movieCredits = ref(null) as any;
let movieCreditsCastWithPhotos = ref(null) as any;

async function getMovieCredits() {
  movieCredits.value = await movieDatabase.fetchData(
    movieDatabase.movieCreditsUrl
  );
  await viewCast();
}

function viewCast() {
  displayCast = !displayCast;
  movieCreditsCastWithPhotos.value = getCastWithPhotos();
}

function getCastWithPhotos() {
  const castWithPhotos = [];
  movieCredits.value.cast.forEach((actor) => {
    if (actor.profile_path === null) return;
    castWithPhotos.push(actor);
  });
  if (castWithPhotos.length <= 21) {
    return castWithPhotos;
  }
  return castWithPhotos.splice(0, 18);
}

getMovieCredits();
</script>

<style scoped>
.cast-wrapper {
  padding: 20px;
}
.cast-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}
</style>