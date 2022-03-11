<template>
  <div class="movies-list--content" v-if="results">
    <h2>{{ genreName }}</h2>
    <div class="movies-list--wrapper">
      <MovieCard
        :class="`movie-card-scroll-snap movie-card-scroll-snap--${movie.id}`"
        :movie="movie"
        v-for="movie in results"
        :key="Number(movie.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import MovieInListInerface from "../../interfaces/movies-in-list-interface";
import ResultsInterface from "../../interfaces/results-interface";
import { useRoute } from "vue-router";
import MovieCard from "../template/movie-card.vue";
import genres from "../../assets/genres";
const props = defineProps<{ movies: any }>();

const route = useRoute();

const genreName = ref("");

const results = computed(() => {
  if (props.movies.results) return props.movies.results;
  return props.movies;
});

function getGenreName() {
  const genreId = Number(route.params.genre);
  const getGenre = genres.forEach((genre) => {
    if (genre.id == genreId) {
      genreName.value = genre.name;
    }
  });
}

getGenreName();
</script>

<style scoped>
.movies-list--content h2 {
  text-transform: capitalize;
}
.movies-list--wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 10px;
}
.movies-list--overflow {
  display: flex;
}

.movie-card-scroll-snap {
  scroll-snap-align: start;
}

.view-more--btn {
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 2;
}

@media (min-width: 768px) {
  .movies-list--wrapper {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
  }
  .movies-list--overflow {
    gap: 10px;
  }
}
</style>
