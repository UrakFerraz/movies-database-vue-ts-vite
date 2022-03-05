<template>
  <div class="movies-list--content">
    <h2>{{ genreName }}</h2>
    <button class="view-more--btn">Ver mais</button>
    <div class="movies-list--wrapper">
      <MovieCard
        :class="`movie-card-scroll-snap movie-card-scroll-snap--${movie.id}`"
        :movie="movie"
        v-for="movie in props.movies"
        :key="Number(movie.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MovieInListInerface from "../../interfaces/movies-in-list-interface";
import { useRoute } from "vue-router";
import MovieCard from "../template/movie-card.vue";
import genres from "../../assets/genres";
const props = defineProps<{ movies: MovieInListInerface[] }>();

const route = useRoute();

const genreName = ref("");

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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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
    gap: 10px;
  }
  .movies-list--overflow {
    gap: 10px;
  }
}
</style>
