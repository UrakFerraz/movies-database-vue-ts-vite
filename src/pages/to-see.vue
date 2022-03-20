<template>
  <div class="listed-movies--content">
    <Pagination />
    <Suspense>
      <MoviesTable
        :movies="moviesList"
        :page-name="'to-see'"
        v-if="moviesList"
      />
      <template #fallback> Loading... </template>
    </Suspense>
    <Pagination />
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onUnmounted } from "vue";
import MoviesTable from "../components/organism/movies-table.vue";
import getStates from "../store/get-states";
import Pagination from "../components/molecule/pagination.vue";
import {
  loadMovies,
  moviesList,
} from "../modules/pages-helpers/movies-lists-helper";

const props = defineProps<{ pageNumber: string }>();

onBeforeMount(async () => {
  getStates();
  loadMovies(props.pageNumber, "to-see");
});
</script>

<style scoped>
.listed-movies--content {
  padding: 20px;
}
</style>
