<template>
  <div class="cast-links">
    <a
      class="average-rgb--border"
      :href="'https://www.imdb.com/name/' + castDetails.imdb_id"
    >
      Ver no IMDB
    </a>
  </div>
</template>

<script setup lang="ts">
import CastDetails from "../../interfaces/cast-person-details-interface";
const props = defineProps<{ castDetails: CastDetails }>();
</script>

<style scoped>
</style>