<template>
  <svg viewBox="0 0 561 538.1">
    <path
      :fill="isFavorite ? '#a1220c' : 'none'"
      stroke="#D43116"
      stroke-width="26"
      stroke-miterlimit="10"
      d="M251.8,30.8l-65.3,132.4L40.4,184.5c-26.2,3.8-36.7,36.1-17.7,54.6l105.7,103l-25,145.5c-4.5,26.3,23.2,46,46.4,33.7l130.7-68.7l130.7,68.7 c23.2,12.2,50.9-7.4,46.4-33.7l-25-145.5l105.7-103c19-18.5,8.5-50.8-17.7-54.6l-146.1-21.3L309.2,30.8 C297.5,7.2,263.6,6.9,251.8,30.8L251.8,30.8z"
    />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{ isFavorite: boolean }>();
</script>

<style lang="scss" scoped>
svg {
  width: 25px;
  height: 25px;
  pointer-events: none;
}
</style>
