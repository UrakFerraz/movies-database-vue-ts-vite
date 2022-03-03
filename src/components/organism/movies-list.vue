<template>
  <div class="movies-list--content">
    <button class="view-more--btn">Ver mais</button>
    <div class="movies-list--wrapper">
      <div class="movies-list--overflow">
        <MovieCard
          :class="`movie-card-scroll-snap movie-card-scroll-snap--${movie.id}`"
          :movie="movie"
          v-for="movie in props.content"
          :key="movie.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MovieCard from "../template/movie-card.vue";
const props = defineProps<{ content: any }>();

const countScroll = ref(0);
</script>

<style scoped>
.movies-list--wrapper {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.movies-list--wrapper::-webkit-scrollbar {
  display: none;
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
  top: -36px;
  z-index: 2;
}

@media (min-width: 768px) {
  .movies-list--overflow {
    gap: 10px;
  }
}
</style>