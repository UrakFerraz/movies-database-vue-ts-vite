<template>
  <div class="movies-list--content" v-if="results">
    <div class="movies-list--wrapper">
      <div class="movies-list--overflow">
        <MovieCard
          :class="`movie-card-scroll-snap movie-card-scroll-snap--${movie.id}`"
          :id="`movie-card-scroll-snap--${movie.id}`"
          :movie="movie"
          v-for="(movie, index) in results"
          :key="Number(movie.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import MovieCard from "../template/movie-card.vue";
const props = defineProps<{ movies: any }>();

const results = computed(() => {
  if (props.movies.results) return props.movies.results;
  return props.movies;
});
</script>

<style lang="scss" scoped>
.movies-list--wrapper {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
}

/* Let's get this party started */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: rgba(75, 66, 66, 0.8);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(75, 66, 66, 0.8);
}

.movies-list--overflow {
  display: flex;
}

.movie-card-scroll-snap {
  scroll-snap-align: start;
}

@media (min-width: 768px) {
  .movies-list--overflow {
    gap: 10px;
  }
}
</style>
