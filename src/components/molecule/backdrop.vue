<template>
  <div class="backdrop-img" v-if="backdropPath !== null">
    <div class="wrapper fade-in-animation-delayed">
      <Img
        :src="backdropImgSrc('https://image.tmdb.org/t/p/original')"
        :alt="'backdrop image'"
        :class="'img-backdrop'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Img from "../atoms/img.vue";
const props = defineProps<{ backdropPath: string | null | undefined }>();

function backdropImgSrc(prefix: string) {
  return (props.backdropPath !== null && typeof props.backdropPath !== "undefined") ? prefix + props.backdropPath : "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath fill='%23990000' d='M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z'/%3e%3c/svg%3e"
}
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
