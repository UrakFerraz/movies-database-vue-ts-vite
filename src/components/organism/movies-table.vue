<template>
  <div class="movies-list" v-if="results">
    <h2>{{ title }}</h2>
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
import { useRoute } from "vue-router";
import MovieCard from "../template/movie-card.vue";
import genres from "../../assets/genres";

const props =
  defineProps<{ movies: any; pageName: "genre" | "favorites" | "to-see" }>();

const route = useRoute();

const title = ref("");

const results = computed(() => {
  if (props.movies.results) return props.movies.results;
  return props.movies;
});

if (props.pageName === "favorites") {
  title.value = "Favorites";
}
if (props.pageName === "to-see") {
  title.value = "To See";
}
if (props.pageName === "genre") {
  function getGenreName() {
    const genreId = Number(route.params.genre);
    const getGenre = genres.forEach((genre) => {
      if (genre.id == genreId) {
        title.value = genre.name;
      }
    });
  }
  getGenreName();
}
</script>

<style lang="scss" scoped>
.movies-list {
  h2 {
    text-transform: capitalize;
  }
  &--wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 10px;
    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
    }
  }
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
</style>
