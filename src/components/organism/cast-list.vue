<template>
  <ul class="cast-list">
    <CastPerson v-for="cast in cast" :key="Number(cast.id)" :cast="cast" />
  </ul>
</template>

<script setup lang="ts">
import CastPerson from "../molecule/cast-person.vue";
const props = defineProps<{ cast: any }>();
console.log(props);
</script>

<style scoped>
.cast-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .cast-list {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}
</style>
