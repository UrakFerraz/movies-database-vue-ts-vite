<template>
  <div class="cast-person-details" v-if="castDetails">
    <CastImage :cast-details="castDetails" />
    <CastInfo :cast-details="castDetails" />
  </div>
</template>

<script setup lang="ts">
import CastDetails from "../../interfaces/cast-person-details-interface";
import CastImage from "../atoms/cast-image.vue";
import CastInfo from "./cast-infos.vue";
const props = defineProps<{ castDetails: CastDetails }>();
</script>

<style scoped>
.cast-person-details {
  display: flex;
  flex-flow: column;
  padding: 40px 20px;
}

.cast-links {
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
}

@media (min-width: 768px) {
  .cast-person-details {
    display: grid;
    grid-template-columns: auto 1fr;
    padding: 40px 20px;
    gap: 20px;
  }
}
</style>