<template>
  <div class="backdrop-img" v-if="backdropPath">
    <div class="wrapper fade-in-animation-delayed">
      <Img
        :src="'https://image.tmdb.org/t/p/original' + props.backdropPath"
        :alt="'backdrop image'"
        :class="'img-backdrop'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Img from "../atoms/img.vue";
const props = defineProps<{ backdropPath: any }>();
</script>

<style lang="scss" scoped>
.backdrop-img {
  z-index: -1;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 70vh;
  overflow: hidden;

  .wrapper {
    height: 100%;

    &::before {
      z-index: 1;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background: linear-gradient(
        180deg,
        rgba(25, 25, 32, 0) 0%,
        rgba(25, 25, 32, 0) 65%,
        rgba(25, 25, 32, 1) 100%
      );
    }

    @media (min-width: 768px) {
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background: linear-gradient(
          90deg,
          rgba(25, 25, 32, 1) 0%,
          rgba(25, 25, 32, 1) 10%,
          rgba(25, 25, 32, 0) 25%,
          rgba(25, 25, 32, 0) 75%,
          rgba(25, 25, 32, 1) 90%,
          rgba(25, 25, 32, 1) 100%
        );
      }
    }
  }
}
</style>
