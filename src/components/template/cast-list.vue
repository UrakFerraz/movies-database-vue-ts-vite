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
import Cast from "../../interfaces/cast-person-interface";
import MovieDatabase from "../../modules/movies-db-api";

const props = defineProps<{ movieId: number | string }>();
let movieDatabase = new MovieDatabase(Number(props.movieId));
let movieCredits = ref(null) as any;
let movieCreditsCastWithPhotos = ref(null) as any;

async function getMovieCredits() {
  movieCredits.value = await movieDatabase.fetchData(movieDatabase.movieCreditsUrl);
  await viewCast();
}

function viewCast() {
  movieCreditsCastWithPhotos.value = getCastWithPhotos();
}

function getCastWithPhotos() {
  const castWithPhotos: Cast[] = [];
  movieCredits.value.cast.forEach((actor: Cast) => {
    if (actor.profile_path === null) return;
    castWithPhotos.push(actor);
  });
  if (castWithPhotos.length <= 21) {
    return castWithPhotos;
  }
  console.log(castWithPhotos);

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
