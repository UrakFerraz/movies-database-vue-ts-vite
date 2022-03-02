<template>
  <div class="movies-list--wrapper" v-if="props.content">
    <p>{{ props.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MovieCard from "../template/movie-card.vue";
const props = defineProps<{ content: any }>();
</script>

<style scoped>
</style>