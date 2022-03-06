<template>
  <div class="backdrop-img" v-if="backdropPath">
    <div>
      <img
        :src="'https://image.tmdb.org/t/p/original' + props.backdropPath"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ backdropPath: any }>();
</script>

<style scoped>
.backdrop-img {
  z-index: -1;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 70vh;
  overflow: hidden;
}

.backdrop-img div {
  position: relative;
  display: block;
  height: 100%;
}

.backdrop-img div::before {
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

.backdrop-img div img {
  opacity: 0.2;
  position: absolute;
  left: 50%;
  object-fit: cover;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}

@media (min-width: 768px) {
  .backdrop-img div img {
    width: 80%;
  }
  .backdrop-img div::after {
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
</style>
