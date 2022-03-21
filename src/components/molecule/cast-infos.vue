<template>
  <div class="cast-infos fade-in-animation">
    <h2>{{ castDetails.name }}</h2>
    <p><strong>Data de nascimento:</strong> {{ birthday() }}</p>
    <p><strong>Cidade natal: </strong>{{ castDetails.place_of_birth }}</p>
    <p v-if="castDetails.biography">
      <strong>Biografia:</strong> {{ castDetails.biography }}
    </p>
    <CastLinks :castDetails="castDetails" />
  </div>
</template>

<script setup lang="ts">
import CastDetails from "../../interfaces/cast-person-details-interface";
import CastLinks from "../atoms/cast-links.vue";
const props = defineProps<{ castDetails: CastDetails }>();
function birthday(): string {
  const data = new Date(props.castDetails.birthday);
  return data.toLocaleDateString();
}
</script>

<style scoped>
.cast-infos {
  display: flex;
  flex-flow: column;
  gap: 10px;
}
</style>