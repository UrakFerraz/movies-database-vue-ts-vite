<template>
  <div v-if="movieCredits">
    <button @click="viewCast()">Cast</button>
    <div>
      <CastList :cast="movieCreditsCastWithPhotos" v-if="displayCast" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CastList from "../organism/cast-list.vue";
import MovieDatabase from "../../modules/movies-db-api";
const props = defineProps<{ movieId: number }>();
console.log(props);

let movieDatabase = new MovieDatabase(props.movieId);
let displayCast = ref(false) as boolean;
let movieCredits = ref(null) as any;
let movieCreditsCastWithPhotos = [];
async function getMovieCredits() {
  movieCredits.value = await movieDatabase.fetchData(
    movieDatabase.movieCreditsUrl
  );
}
function viewCast() {
  displayCast = !displayCast;
  console.log(displayCast);
  movieCreditsCastWithPhotos = getCastWithPhotos();
  console.log(movieCreditsCastWithPhotos);
}
getMovieCredits();

function getCastWithPhotos() {
  const castWithPhotos = [];
  console.log(movieCredits);

  movieCredits.value.cast.forEach((actor) => {
    if (actor.profile_path === null) return;
    castWithPhotos.push(actor);
  });
  return castWithPhotos;
}

console.log(movieDatabase.movieCreditsUrl);
console.log(movieCredits);
</script>

<style scoped>
</style>