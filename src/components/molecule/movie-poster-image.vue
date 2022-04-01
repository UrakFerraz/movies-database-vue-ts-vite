<template>
  <div class="movie-card--img">
    <Img
      :src="posterPathImgSrc('https://image.tmdb.org/t/p/w300')"
      :alt="props.altText"
      :class="'fade-in-animation-fast img-cover'"
    />
  </div>
</template>

<script setup lang="ts">
import Img from "../atoms/img.vue";
const props = defineProps<{ posterPath: any; altText: any }>();
function posterPathImgSrc(prefix: string) {
  return (props.posterPath !== null && typeof props.posterPath !== "undefined") ? prefix + props.posterPath : null
}
</script>

<style lang="scss" scoped>
.movie-card--img {
  justify-self: center;
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 1 / 1.5;
  @media (min-width: 768px) {
    min-width: 300px;
  }
}
</style>