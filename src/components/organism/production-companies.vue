<template>
  <div class="production-companies average-rgb--border" v-if="companies.length > 0">
    <h2>Production companies</h2>
    <ProductionCompany :company="comp" v-for="comp in companies" :key="comp.name" />
  </div>
</template>

<script setup lang="ts">
import ProductionCompany from "../molecule/production-company.vue";
import ProductionCompanyInterface from "../../interfaces/production-company-interface";
const props = defineProps<{ companies: ProductionCompanyInterface[] }>();
</script>

<style lang="scss" scoped>
.production-companies {
  display: flex;
  flex-flow: row wrap;
  margin: 40px 20px;
  padding: 20px;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;
  border: 1px solid $principal;
  border-radius: 10px;
  h2 {
    flex-grow: 1;
    flex-basis: 1500px;
  }
}
</style>
