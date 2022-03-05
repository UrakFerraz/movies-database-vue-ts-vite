<template>
  <ul>
    <CastPerson v-for="cast in props.cast" :key="Number(cast.id)" :cast="cast" />
  </ul>
</template>

<script setup lang="ts">
import CastPerson from "../molecule/cast-person.vue";
const props = defineProps<{ cast: any }>();
console.log(props);
</script>

<style scoped></style>
