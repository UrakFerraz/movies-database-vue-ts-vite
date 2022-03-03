<template>
  <GenresList :genres="genres.value" v-if="genres" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import GenresList from "../molecule/genres-list.vue";

import defaultAPIInfos from "../modules/default-api-info";

const props = defineProps<{ genres: Object[] }>();

const genres = ref(null) as Object[];
</script>

<style scoped>
</style>