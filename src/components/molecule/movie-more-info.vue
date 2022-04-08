<template>
  <div class="more-info fade-in-animation-fast">
    <h2>{{ movie.tagline }}</h2>
    <p v-if="movie.overview !== null">{{ movie.overview }}</p>
    <p v-if="movie.runtime !== null">
      Duração: {{ (movie.runtime / 60).toFixed(2).split(".").join(":") }} horas
    </p>
    <Link
      v-if="movie.imdb_id !== undefined || movie.imdb_id !== null"
      :class="'average-rgb--border'"
      :href="'https://www.imdb.com/title/' + props.movie.imdb_id"
      :target="'_blank'"
      :title="'Ver no IMDB'"
    />
  </div>
</template>

<script setup lang="ts">
import Link from "../atoms/link.vue";
import MovieInterface from "../../interfaces/movie-interface";
const props = defineProps<{ movie: MovieInterface }>();
</script>

<style lang="scss" scoped></style>
