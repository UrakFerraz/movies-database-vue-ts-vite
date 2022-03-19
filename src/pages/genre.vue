<template>
  <div class="listed-movies--content">
    <Pagination />
    <Suspense>
      <MoviesTable
        :movies="moviesByGenre"
        :page-name="'genre'"
        v-if="moviesByGenre"
      />
      <template #fallback> Loading... </template>
    </Suspense>
    <Pagination />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const props = defineProps<{ pageNumber: number | string; genre: string }>();

import MoviesTable from "../components/organism/movies-table.vue";
import Pagination from "../components/molecule/pagination.vue";
import { useRouter, onBeforeRouteLeave } from "vue-router";
import getStates from "../store/get-states";
import {
  moviesByGenre,
  getMoviesByGenreList,
} from "../modules/pages-helpers/genre-page-helper";
const router = useRouter();

onMounted(getStates);

onBeforeRouteLeave((to, from) => {
  console.log(to);
  console.log(from);
});

getMoviesByGenreList(props.pageNumber, props.genre);
</script>

<style scoped>
.listed-movies--content {
  padding: 20px;
}
</style>
