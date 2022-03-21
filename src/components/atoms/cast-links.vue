<template>
  <div class="cast-links">
    <Link
      :class="'average-rgb--border'"
      :href="'https://www.imdb.com/name/' + castDetails.imdb_id"
      :target="'_blank'"
      :title="'Ver no IMDB'"
    />
  </div>
</template>

<script setup lang="ts">
import Link from "../atoms/link.vue";
import CastDetails from "../../interfaces/cast-person-details-interface";
const props = defineProps<{ castDetails: CastDetails }>();
</script>

<style scoped>
</style>