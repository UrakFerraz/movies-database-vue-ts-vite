<template>
  <svg
    v-if="!isLoaded"
    class="loading"
    width="38"
    height="38"
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
  >
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(1 1)" stroke-width="2">
        <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
  <img
    loading="lazy"
    :src="imgSrc"
    :alt="alt"
    :class="class"
    @load="isLoadedImg"
    :key="src"
  />
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";
const props = defineProps<{ src: string; alt: string; class: string }>();

const isLoaded = ref(false);

const imgSrc = toRefs(props).src;

function isLoadedImg() {
  isLoaded.value = true;
}
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.img-cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 350px;
}

.img-backdrop {
  opacity: 0.2;
  position: absolute;
  left: 50%;
  object-fit: cover;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    width: 80%;
  }
}
</style>