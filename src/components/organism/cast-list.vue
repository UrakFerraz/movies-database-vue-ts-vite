<template>
  <ul>
    <CastPerson v-for="cast in props.cast" :key="cast.id" :cast="cast" />
  </ul>
</template>

<script setup lang="ts">
import CastPerson from "../molecule/cast-person.vue";
const props = defineProps<{ cast: any }>();
</script>

<style scoped>
.cast-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.cast-list-img {
  overflow: hidden;
  position: relative;
  display: block;
  border-radius: 10px;
}

.cast-list-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>