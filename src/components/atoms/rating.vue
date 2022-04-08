<template>
  <div class="rating average-rgb--bg">
    <div class="rate">
      <p>{{ movie.vote_average }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieInterface from "../../interfaces/movie-interface";
import MovieInListInerface from "../../interfaces/movies-in-list-interface";
import MovieCardInterface from "../../interfaces/movie-card-interface";
const props = defineProps<{
  movie: MovieInterface | MovieCardInterface | MovieInListInerface;
}>();
</script>

<style lang="scss" scoped>
.rating {
  display: inline-flex;
  padding: 5px 9px;
  align-self: start;
  justify-self: center;
  border-radius: 5px;
  p {
    margin: 0;
    padding: 0;
  }
}
</style>
