<template>
  <div class="production-companies average-rgb--border">
    <h2>Production companies</h2>
    <ProductionCompany :company="comp" v-for="comp in props.companies" :key="comp.name" />
  </div>
</template>

<script setup lang="ts">
import ProductionCompany from "../molecule/production-company.vue";
import ProductionCompanyInterface from "../../interfaces/production-company-interface";
const props = defineProps<{ companies: ProductionCompanyInterface[] }>();
</script>

<style scoped>
.production-companies {
  display: flex;
  flex-flow: row wrap;
  margin: 40px 20px;
  padding: 20px;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;
  border: 1px solid var(--principal);
  border-radius: 10px;
}

.production-companies h2 {
  flex-grow: 1;
  flex-basis: 900px;
}
</style>
