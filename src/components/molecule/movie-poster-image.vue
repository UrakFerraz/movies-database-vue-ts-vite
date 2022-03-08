<template>
  <div class="movie-card--img" v-if="posterPath">
    <img
      loading="lazy"
      :src="'https://image.tmdb.org/t/p/w300' + props.posterPath"
      :alt="props.altText"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ posterPath: any; altText: any }>();
</script>

<style scoped>
.movie-card--img {
  overflow: hidden;
  border-radius: 10px;
}

.movie-card--img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .movie-card--img {
    width: 300px;
  }
}
</style>