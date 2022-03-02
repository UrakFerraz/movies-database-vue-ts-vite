<template>
  <div class="pagination">
    <button v-if="genrePageNum > 1" @click="prev">Anterior</button>
    <button @click="next">Próximo</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const count = ref(1);

const genreName = route.params.genre;
const genrePageNum = Number(route.params.pageNumber);

function next() {
  count.value++;
  return router.push(`/${genreName}/${count.value}`);
}
function prev() {
  count.value--;
  return router.push(`/${genreName}/${count.value}`);
}
</script>

<style scoped>
</style>