<template>
  <div class="pagination">
    <router-link :to="nextPrev('prev')">Anterior</router-link>
    <router-link :to="nextPrev('next')">Próximo</router-link>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

let count = 0;

const pageNumber = Number(route.params.pageNumber);

const slug = (() => {
  if (route.params.genre) {
    return Number(route.params.genre);
  }
  if (route.path.includes("favorites")) {
    return "favorites";
  }
  if (route.path.includes("to-see")) {
    return "to-see";
  }
})();

function nextPrev(direction: string) {
  count = pageNumber;
  console.log(count);
  console.log(typeof count);
  if (direction === "prev") {
    if (count >= 1) {
      count -= 1;
    }
  } else if (direction === "next") {
    count += 1;
  }
  return `/${slug}/${count}`;
}
</script>

<style scoped>
.pagination {
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 20px;
}
</style>
