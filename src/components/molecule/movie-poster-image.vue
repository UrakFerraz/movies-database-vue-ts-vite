<template>
  <div class="movie-card--img" v-if="posterPath">
    <Img
      :src="'https://image.tmdb.org/t/p/w300' + props.posterPath"
      :alt="props.altText"
      :class="'fade-in-animation-fast img-cover'"
    />
  </div>
</template>

<script setup lang="ts">
import Img from "../atoms/img.vue";
const props = defineProps<{ posterPath: any; altText: any }>();
</script>

<style lang="scss" scoped>
.movie-card--img {
  justify-self: center;
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 1 / 1.5;
  @media (min-width: 768px) {
    width: 300px;
  }
}
</style>