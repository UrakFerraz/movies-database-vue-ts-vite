<template>
  <GenresList :genres="genres" v-if="genres" />
</template>

<script setup lang="ts">
import GenresInterface from "../../interfaces/genres-interface";
import GenresList from "../molecule/genres-list.vue";

const props = defineProps<{ genres: GenresInterface }>();
</script>
