<template>
  <div class="movie-card--img fade-in-animation-fast" v-if="posterPath">
    <Suspense>
      <template #default>
        <Img
          :src="'https://image.tmdb.org/t/p/w300' + props.posterPath"
          :alt="props.altText"
        />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import Img from "../atoms/img.vue";
const props = defineProps<{ posterPath: any; altText: any }>();
</script>

<style scoped>
.movie-card--img {
  justify-self: center;
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