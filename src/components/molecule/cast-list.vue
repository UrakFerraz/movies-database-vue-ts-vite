<template>
  <ul class="cast-list">
    <CastPerson v-for="person in cast" :key="Number(person.id)" :cast="person" />
  </ul>
</template>

<script setup lang="ts">
import CastPerson from "./cast-person.vue";
import Cast from "../../interfaces/cast-person-interface";
const props = defineProps<{ cast: Cast[] }>();
</script>

<style lang="scss" scoped>
.cast-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
}
</style>
