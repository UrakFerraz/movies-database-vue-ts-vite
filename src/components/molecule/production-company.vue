<template>
  <div class="production-company">
    <Suspense>
      <Img
        v-if="company.logo_path"
        :src="'https://image.tmdb.org/t/p/w185' + company.logo_path"
        :alt="company.name"
      />
      <template #fallback> Loading... </template>
    </Suspense>
    <p>{{ props.company.name }}</p>
  </div>
</template>

<script setup lang="ts">
import Img from "../atoms/img.vue";
import ProductionCompanyInterface from "../../interfaces/production-company-interface";
const props = defineProps<{ company: ProductionCompanyInterface }>();
</script>

<style lang="scss" scoped>
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
