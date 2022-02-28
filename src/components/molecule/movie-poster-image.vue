<template>
  <div class="movie-card--img">
    <img
      :src="'https://www.themoviedb.org/t/p/w300/' + props.posterPath"
      alt="{{props.title}}"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ posterPath: string; title: string }>();
</script>

<style scoped>
.movie-card--img {
  width: 200px;
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