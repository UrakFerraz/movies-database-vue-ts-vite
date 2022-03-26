<template>
  <ul class="cast-list">
    <Suspense>
      <CastPerson v-for="cast in cast" :key="Number(cast.id)" :cast="cast" />
      <template #fallback> Loading... </template>
    </Suspense>
  </ul>
</template>

<script setup lang="ts">
import CastPerson from "./cast-person.vue";
const props = defineProps<{ cast: any }>();
</script>

<style lang="scss" scoped>
.cast-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .cast-list {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
}
</style>
