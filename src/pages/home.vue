<template>
  <MoviesList />
</template>

<script setup lang="ts">
import MoviesList from "../components/organism/movies-list.vue";
const props = defineProps<{ movie: any }>();
</script>

<style scoped>
</style>