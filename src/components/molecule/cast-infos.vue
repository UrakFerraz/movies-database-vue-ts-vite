<template>
  <div class="cast-infos fade-in-animation">
    <h2>{{ castDetails.name }}</h2>
    <p v-if="castDetails.birthday !== null"><strong>Data de nascimento:</strong> {{ convertDateToLocale(castDetails.birthday) }}</p>
    <p v-if="castDetails.deathday !== null"><strong>Data de falecimento:</strong> {{ convertDateToLocale(castDetails.deathday) }}</p>
    <p v-if="castDetails.place_of_birth !== null"><strong>Cidade natal: </strong>{{ castDetails.place_of_birth }}</p>
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
function convertDateToLocale(dateProps: props): string | null {
  if(dateProps !== null) {
    return new Date(dateProps).toLocaleDateString()
  }
  return dateProps
}
</script>

<style lang="scss" scoped>
.cast-infos {
  display: flex;
  flex-flow: column;
  gap: 10px;
}
</style>