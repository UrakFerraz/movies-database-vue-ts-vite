<template>
  <div v-if="movieDetails">
    <Backdrop :backdrop-path="movieDetails.backdrop_path" />
    <div class="rating">
      <div class="rate">
        <p>{{ movieDetails.vote_average }}</p>
      </div>
    </div>
    <div class="movie-img">
      <img
        :src="'https://www.themoviedb.org/t/p/w300/' + movieDetails.poster_path"
        alt=""
      />
    </div>
    <div class="movie-info">
      <span>Título Original: {{ movieDetails.original_title }}</span>
      <h1>{{ movieDetails.title }}</h1>
      <h2>{{ movieDetails.tagline }}</h2>
      <p>{{ movieDetails.overview }}</p>
    </div>
    <div class="genres">
      <ul>
        <li v-for="genre in movieDetails.genres" :key="genre.id">
          <a :href="'#'">{{ genre.name }}</a>
        </li>
      </ul>
    </div>
    <div class="more-info">
      <p>
        Duração:
        {{ (movieDetails.runtime / 60).toFixed(2).split(".").join(":") }} horas
      </p>
      <a
        target="_blank"
        :href="'https://www.imdb.com/title/' + movieDetails.imdb_id"
        >Ver no IMDB</a
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Backdrop from "../components/backdrop.vue";
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