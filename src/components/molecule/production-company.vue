<template>
  <div class="production-company">
    <img
      v-if="props.company.logo_path"
      :src="'https://image.tmdb.org/t/p/w300' + props.company.logo_path"
      :alt="props.company.name"
    />
    <p v-if="props.company.logo_path">{{ props.company.name }}</p>
  </div>
</template>

<script setup lang="ts">
import ProductionCompanyInterface from "../../interfaces/production-company-interface";
const props = defineProps<{ company: ProductionCompanyInterface }>();
</script>

<style scoped>
.production-company {
  flex-flow: column;
  display: flex;
  align-items: center;
  padding: 20px;
}

img {
  max-width: 250px;
  max-height: 200px;
}
</style>
