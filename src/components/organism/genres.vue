<template>
  <GenresList :genres="genres" v-if="genres" />
</template>

<script setup lang="ts">
import GenresList from "../molecule/genres-list.vue";

const props = defineProps<{ genres: any }>();
</script>